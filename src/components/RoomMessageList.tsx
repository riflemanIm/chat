import React, {
  ForwardedRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import {
  Box,
  CardContent,
  CircularProgress,
  List,
  Backdrop,
  Fab,
  Typography,
  ListItem,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import Message from './Message';

import { getChatId } from '../utils/common';
import { ChatMessage, ChatRoom, User, ContactGather } from '../types';
import { ChatContext } from '../context/ChatContext';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageListOuter: {
      flex: 1,
      overflowY: 'auto',
      margin: 0,
      padding: 0,
      height: '100%',
      scrollbarWidth: 'thin',
      scrollbarColor: `${theme.palette.primary.light} #fff`,
    },
    messageList: {},
    img: {
      cursor: 'pointer',
      borderRadius: theme.spacing(1.2),

      maxWidth: 'auto',
      maxHeight: '95%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'auto',
        maxHeight: '95%',
      },
    },

    arrowDown: {
      position: 'absolute',
      left: '94.5%',
      bottom: 105,
      [theme.breakpoints.down('md')]: {
        left: '91.5%',
        bottom: 95,
      },
      [theme.breakpoints.down('sm')]: {
        left: '84%',
        bottom: 95,
      },
    },
  }),
);

type InitialMenuState = {
  message: ChatMessage | null;
  mouseX: null | number;
  mouseY: null | number;
  canCopy: boolean;
  canDelete: boolean;
};

type RoomMessageListProps = {
  apiUrl: string;
  user: User;
  users: ContactGather;
  chat: ChatRoom | null;
  loading: boolean;
  pageSize: number;

  initialMenuState: InitialMenuState;

  onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
  onMeesageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
  setMenuState: React.Dispatch<
    React.SetStateAction<InitialMenuState>
  >;
};

const RoomMessageList: React.FC<RoomMessageListProps> = (
  props: RoomMessageListProps,
) => {
  const {
    apiUrl,
    user,
    users,
    chat,
    loading,
    pageSize,
    setMenuState,
    initialMenuState,
  } = props;
  const classes = useStyles();

  const [viewerData, setViewerData] = React.useState<{
    visible: boolean;
    src: string;
  }>({
    visible: false,
    src: '',
  });

  const { dispatch } = React.useContext(ChatContext);
  const [scrollDownButton, setScrollDownButton] = React.useState(
    false,
  );

  const hasNextPage =
    chat == null || chat?.noMoreData == null
      ? true
      : !chat.noMoreData;

  const messages = useMemo(
    () => (chat?.messages ? chat.messages : []),
    [chat?.messages],
  );
  const messageCount = messages?.length;

  const messageCountUnreaded = messages.filter(
    it => it?.status != null && it.status === 0,
  );

  const loadMore = () => {
    chat && props.onNeedMoreMessages(chat);
  };

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: false,
  });

  const scrollableRootRef = useRef<React.ElementRef<'div'> | null>(
    null,
  );
  const lastScrollDistanceToBottomRef = useRef<number>();

  // We keep the scroll position when new items are added etc.
  useLayoutEffect(() => {
    const scrollableRoot = scrollableRootRef.current;
    const lastScrollDistanceToBottom =
      lastScrollDistanceToBottomRef.current ?? 0;
    if (scrollableRoot) {
      scrollableRoot.scrollTop =
        scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
    }
  }, [getChatId(chat), messageCount, rootRef]);

  const handleRootScroll = useCallback(() => {
    const rootNode = scrollableRootRef.current;
    if (rootNode) {
      const scrollDistanceToBottom =
        rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;
      const gap =
        (rootNode.scrollHeight - scrollDistanceToBottom) * 1.2;

      setScrollDownButton(
        hasNextPage && scrollDistanceToBottom > 700,
      );
    }
  }, []);

  const scrollDown = () => {
    if (scrollableRootRef.current) {
      dispatch({
        type: 'MARK_PRIVATE_MESSAGES_READ',
        payload: user.userId,
      });
      scrollableRootRef.current.scrollTop =
        scrollableRootRef.current.scrollHeight;
    }
  };

  const rootRefSetter = useCallback(
    (node: HTMLDivElement) => {
      rootRef(node);
      scrollableRootRef.current = node;
    },
    [rootRef],
  );

  const handleMenuPopup = (
    message: ChatMessage,
    event: React.MouseEvent<HTMLElement>,
  ) => {
    const canCopy = message.messageType === 'text';
    const canDelete =
      user.userId === message.userId &&
      !!props.onMeesageDelete &&
      new Date().getTime() - new Date(message.cdate).getTime() <=
        1000 * 60 * 2;
    if (!canCopy && !canDelete) {
      setMenuState(initialMenuState);
      return;
    }
    event.preventDefault();
    setMenuState({
      message,
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      canCopy,
      canDelete,
    });
  };

  //console.log('messages', messages);
  return (
    <CardContent
      className={classes.messageListOuter}
      ref={rootRefSetter}
      onScroll={handleRootScroll}
    >
      <List className={classes.messageList}>
        {hasNextPage && (
          <ListItem
            ref={infiniteRef}
            sx={{
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </ListItem>
        )}
        {(messages as ChatMessage[]).map((message, inx) => {
          const refMes = React.createRef<HTMLLIElement>();
          messages[inx].ref = refMes;
          return (
            <Message
              ref={refMes}
              key={inx}
              apiUrl={apiUrl}
              user={user}
              message={message}
              owner={users[message.userId]}
              isGroupMessage={!!chat?.groupId}
              isUserFirst={
                inx === 0 ||
                messages[inx - 1].messageType === 'notify' ||
                messages[inx - 1].userId !== messages[inx].userId
              }
              isUserLast={
                inx === messages.length - 1 ||
                messages[inx + 1].messageType === 'notify' ||
                messages[inx + 1].userId !== messages[inx].userId
              }
              onContextMenu={event => handleMenuPopup(message, event)}
              //refOnMess={defineRefOnMess(inx)}
              setViewerData={setViewerData}
            />
          );
        })}
      </List>
      {scrollDownButton && (
        <Box className={classes.arrowDown} textAlign="center">
          <Fab
            color="info"
            aria-label="add"
            size="medium"
            onClick={() => scrollDown()}
          >
            <KeyboardArrowDown />
          </Fab>
          {messageCountUnreaded != null &&
            messageCountUnreaded.length > 0 && (
              <Fab
                color="warning"
                aria-label="add"
                size="small"
                sx={{
                  width: 24,
                  height: 24,
                  minHeight: 24,
                  position: 'relative',
                  top: -10,
                  pointerEvents: 'none',
                }}
              >
                <Typography
                  variant="body2"
                  sx={theme => ({
                    color: theme.palette.background.default,
                  })}
                >
                  {messageCountUnreaded.length}
                </Typography>
              </Fab>
            )}
        </Box>
      )}
      {viewerData.visible && (
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
          }}
          open={viewerData.visible}
          onClick={() => {
            setViewerData({ visible: false, src: '' });
          }}
        >
          <img src={viewerData.src} className={classes.img} alt="" />
        </Backdrop>
      )}
    </CardContent>
  );
};

export default RoomMessageList;

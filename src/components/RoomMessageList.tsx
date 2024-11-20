import React from 'react';
import {
  Box,
  CardContent,
  CircularProgress,
  List,
  Backdrop,
  Fab,
  Typography,
  ListItem,
  Fade,
  Alert,
  useMediaQuery,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import Message from './Message';

import { getChatId } from '../utils/common';
import { ChatMessage, ChatRoom, User, ContactGather } from '../types';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import dayjs from 'dayjs';
import useInterval from '../hooks/useInterval';

function isVisibleInViewport(
  element: HTMLLIElement,
  root: HTMLDivElement,
) {
  const rect = element.getBoundingClientRect();
  // console.log(
  //   'rect.top',
  //   rect.top,
  //   'rect.bottom',
  //   rect.bottom,
  //   root.clientHeight,
  // );
  return rect.top >= 150 && rect.bottom <= root.clientHeight;
}

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

  onEnterRoom?: (chat: ChatRoom) => void;
  hideRooms: boolean;
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

    onEnterRoom,
    hideRooms,
  } = props;

  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const DEF = 900;

  const chatId = getChatId(chat);

  const [viewerData, setViewerData] = React.useState<{
    visible: boolean;
    src: string;
  }>({
    visible: false,
    src: '',
  });

  const [scrollDownButton, setScrollDownButton] = React.useState(
    false,
  );

  const scrollableRootRef = React.useRef<React.ElementRef<
    'div'
  > | null>(null);
  const lastScrollDistanceToBottomRef = React.useRef<number>();
  const lastMessageCount = React.useRef<number>();

  const hasNextPage =
    chat == null || chat?.noMoreData == null
      ? true
      : !chat.noMoreData;

  const messages = React.useMemo(
    () =>
      chat?.messages
        ? chat.messages.map(it => ({
            ...it,
            ref: React.createRef<HTMLLIElement>(),
          }))
        : [],
    [chat?.messages],
  );

  const messageCount = messages?.length || 0;

  const lastMessage = messageCount && messages[messageCount - 1];

  const messageCountUnreaded = messages.filter(
    it => it?.status != null && it.status === 0,
  );

  const [isVisible, setIsVisible] = React.useState<string>(
    messages[messageCount - 1]?.cdate ?? '',
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

  React.useEffect(() => {
    if (chatId && scrollableRootRef.current && messageCount) {
      setIsVisible(messages[messageCount - 1]?.cdate ?? '');
      scrollDown();
    }
  }, [chatId]);

  useInterval(
    () => {
      setIsVisible('');
    },
    isVisible,
    4700,
  );

  // ------ keep the scroll position and lastMessageCount when messageCount changed ----------
  React.useEffect(() => {
    const scrollableRoot = scrollableRootRef.current;
    const lastScrollDistanceToBottom =
      lastScrollDistanceToBottomRef.current ?? 0;

    if (scrollableRoot && lastMessage && chat) {
      // -----  scroll to prev lastScrollDistanceToBottom -----------
      if (lastMessageCount.current === messageCount - pageSize) {
        scrollableRoot.scrollTop =
          scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
      } else if (
        // -----  scroll to bottom forced -----------
        lastMessage.userId !== chat.userId ||
        lastScrollDistanceToBottom <= DEF
      ) {
        scrollDown();
      }
    }
    lastMessageCount.current = messageCount;
  }, [messageCount]);

  const handleRootScroll = React.useCallback(() => {
    const rootNode = scrollableRootRef.current;

    if (rootNode) {
      const scrollDistanceToBottom =
        rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;

      const isShowScrollButton =
        hasNextPage && scrollDistanceToBottom > DEF;
      setScrollDownButton(isShowScrollButton);

      for (let i = 0; i < messageCount; i++) {
        const mess = messages[i];
        // console.log(
        //   '------------loop------------',
        //   //mess?.ref?.current,
        // );

        if (mess?.ref?.current) {
          const isVisibleMess = isVisibleInViewport(
            mess.ref.current,
            rootNode,
          );
          if (isVisibleMess) {
            // console.log(
            //   'visible',
            //   dayjs(mess.cdate).format('DD.MM.YYYY'),
            // );
            setIsVisible(mess.cdate);
            break;
          }
        } else {
          break;
        }
      }
    }
  }, [messages, chatId]);

  const scrollDown = React.useCallback(() => {
    if (scrollableRootRef.current) {
      scrollableRootRef.current.scrollTop =
        scrollableRootRef.current.scrollHeight;
      if (onEnterRoom && chat) {
        onEnterRoom(chat);
      }
    }
  }, [chat, onEnterRoom]);

  const rootRefSetter = React.useCallback(
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

  if (chatId == null) return;

  return (
    <>
      <Fade
        in={!!isVisible}
        style={
          isVisible
            ? {
                display: 'block',
                position: 'absolute',
                left: `calc(50% - 70px${
                  !hideRooms && !isMobile ? ' + 160px' : ''
                })`,
                width: 150,
              }
            : { display: 'none' }
        }
        timeout={2000}
      >
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            zIndex: 10,
            justifyContent: 'center',
            top: 106,
            left: '-50%',
          }}
        >
          <Alert
            severity="warning"
            icon={false}
            sx={theme => ({
              width: 150,
              mx: 'auto',
              justifyContent: 'center',
            })}
          >
            <Typography variant="h6" textAlign="center">
              {dayjs(isVisible).format('DD.MM.YYYY')}
            </Typography>
          </Alert>
        </Box>
      </Fade>

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
            return (
              <Message
                ref={message.ref}
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
                onContextMenu={event =>
                  handleMenuPopup(message, event)
                }
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
            <img
              src={viewerData.src}
              className={classes.img}
              alt=""
            />
          </Backdrop>
        )}
      </CardContent>
    </>
  );
};

export default RoomMessageList;

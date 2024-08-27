import React from 'react';
import {
  Box,
  CardContent,
  CircularProgress,
  List,
  Backdrop,
  Fab,
  Typography,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import Message from './Message';
import InfiniteScroll from 'react-infinite-scroller';
import { getChatId } from '../utils/common';
import { ChatMessage, ChatRoom, User, ContactGather } from '../types';
import { ChatContext } from '../context/ChatContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageListOuter: {
      flex: 1,
      overflowY: 'auto',
      margin: 0,
      padding: 0,
    },
    messageList: {
      height: '100%',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
      scrollbarColor: `${theme.palette.primary.light} #fff`,
    },
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

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <Box sx={{ width: '100%', mx: 'auto', textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    )
  );
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
  const { dispatch } = React.useContext(ChatContext);
  const [scrollDownButton, setScrollDownButton] = React.useState(
    false,
  );

  const messages = chat?.messages;
  const messageCount = messages?.length || 0;
  // const lastMessage =
  //   chat?.messages && chat.messages[messageCount - 1];

  const [gap, setGap] = React.useState(564);

  const messageCountUnreaded =
    messages &&
    messages.filter(it => it?.status != null && it.status === 0);

  // const refOnMess = React.useRef<HTMLDivElement>(null);
  // const refOnLastMess = React.useRef<HTMLDivElement>(null);
  const refList = React.useRef<HTMLUListElement>(null);

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

  const [viewerData, setViewerData] = React.useState<{
    visible: boolean;
    src: string;
  }>({
    visible: false,
    src: '',
  });

  React.useEffect(() => {
    const first = () => {
      setTimeout(() => {
        if (refList.current) {
          dispatch({
            type: 'MARK_PRIVATE_MESSAGES_READ',
            payload: user.userId,
          });
          refList.current.scrollTop = refList.current.scrollHeight;
        }
      }, 1000);
    };
    first();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    scrollDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getChatId(chat)]);

  const scrollDown = () => {
    if (refList.current) {
      dispatch({
        type: 'MARK_PRIVATE_MESSAGES_READ',
        payload: user.userId,
      });

      refList.current.scrollTop = refList.current.scrollHeight;
      const newGap =
        refList.current.scrollHeight - refList.current.scrollTop;

      setGap(newGap);
    }
  };

  return (
    <CardContent className={classes.messageListOuter}>
      <List className={classes.messageList} ref={refList}>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            if (
              messageCount >= pageSize &&
              !loading &&
              props.onNeedMoreMessages &&
              chat
            ) {
              props.onNeedMoreMessages(chat);
            }
          }}
          hasMore={chat && !chat.noMoreData ? true : false}
          loader={<Loading loading={loading} key={0} />}
          isReverse
          useCapture
          useWindow={false}
          getScrollParent={() => {
            if (refList.current) {
              const diff =
                refList.current.scrollHeight -
                refList.current.scrollTop;
              const isShowButton =
                refList.current.scrollTop <
                refList.current.scrollHeight - gap;

              setScrollDownButton(isShowButton);
              // console.log(
              //   'scrollTop',
              //   refList.current.scrollTop,
              //   'scrollHeight',

              //   refList.current.scrollHeight,
              //   'diff:',
              //   diff,
              // );
              if (diff > gap && diff < gap + 90) {
                scrollDown();
              }

              //
            }
            return refList.current;
          }}
        >
          {messages &&
            (messages as ChatMessage[]).map((message, inx) => (
              <Message
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
            ))}
        </InfiniteScroll>
      </List>
      {scrollDownButton && (
        <Box className={classes.arrowDown} textAlign="center">
          <Fab
            color="info"
            aria-label="add"
            size="medium"
            onClick={scrollDown}
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

import React, { useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  List,
  ListItemIcon,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  Tooltip,
  Backdrop,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Entry from './Entry';
import Message from './Message';
import RoomHeader from './RoomHeader';
import { useTranslation } from 'react-i18next';
import { getChatId, isEmpty } from '../utils/common';
import {
  ChatMessage,
  ChatRoom,
  SendMessage,
  SetTyping,
  User,
  Contact,
  ConferenceData,
  Group,
  ContactGather,
} from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minWidth: 360,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    inline: {
      display: 'inline',
    },
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
    roomHeader: {
      flex: 1,
    },
    roomProgress: {
      padding: theme.spacing(2),
    },
    flexAll: {
      flex: '1 1 auto',
    },
    flexEnd: {
      justifyContent: 'flex-end',
    },
    img: {
      cursor: 'pointer',
      borderRadius: theme.spacing(1.2),

      maxWidth: 'calc(100% - 240px)',
      maxHeight: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'calc(100% - 40px)',
        maxHeight: 'auto',
      },
    },
    aspect: {
      margin: 'auto',
      textAlign: 'center',
      maxWidth: 'calc(100% - 240px)',
      maxHeight: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'calc(100% - 40px)',
        maxHeight: 'auto',
      },
    },
  }),
);

const initialMenuState = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: false,
  canDelete: false,
};

type RoomProps = {
  apiUrl: string;
  user: User;
  users: ContactGather;
  chat: ChatRoom | null;
  typing: SetTyping | null;
  conference: ConferenceData | null;
  conferenceJoined: boolean;
  loading: boolean;
  pageSize: number;
  operators: Contact[];
  onExitRoom?: (chat: ChatRoom) => void;
  onEnterRoom?: (chat: ChatRoom) => void;
  onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
  onMeesageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
  onTyping?: (chat: ChatRoom) => void;
  onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
  onVideoCall?: (chat: ChatRoom) => void;
  onVideoEnd?: (chat: ConferenceData) => void;
  onConferencePause?: (conference: ConferenceData) => void;
  onOperatorAdd?: (chat: Group, operator: Contact) => void;
  onLeaveGroup?: (chat: Group) => void;
};
const initialScrollState = {
  autoScroll: true,
  height: 0,
};

const Room: React.FC<RoomProps> = (props: RoomProps) => {
  const {
    apiUrl,
    user,
    users,
    chat,
    typing,
    conference,
    conferenceJoined,
    loading,
    pageSize,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const [scrollState, setScrollState] = React.useState(
    initialScrollState,
  );

  const messages = chat?.messages;
  const messageCount = messages?.length || 0;

  const refOnMess = React.useRef<HTMLDivElement>(null);
  const refOnLastMess = React.useRef<HTMLDivElement>(null);
  //  const refList = React.useRef<HTMLUListElement>(null);

  const [menuState, setMenuState] = React.useState<{
    message: ChatMessage | null;
    mouseX: null | number;
    mouseY: null | number;
    canCopy: boolean;
    canDelete: boolean;
  }>(initialMenuState);

  React.useEffect(() => {
    console.log('change chat initialScrollState');
    if (props.onEnterRoom && chat) props.onEnterRoom(chat);
    setScrollState(initialScrollState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getChatId(chat)]);

  // React.useLayoutEffect(() => {
  //   if (scrollState.autoScroll && refOnLastMess.current) {
  //     setTimeout(
  //       () =>
  //         refOnLastMess.current &&
  //         refOnLastMess.current.scrollIntoView(),
  //       500,
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getChatId(chat)]);

  React.useLayoutEffect(() => {
    if (scrollState.autoScroll && refOnMess.current) {
      setTimeout(
        () => refOnMess.current && refOnMess.current.scrollIntoView(),
        500,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageCount, getChatId(chat)]);

  // React.useLayoutEffect(() => {
  //   if (!loading && refList.current && scrollState.height > 0) {
  //     refList.current.scrollTop =
  //       refList.current.scrollHeight - scrollState.height;
  //     setScrollState(initialScrollState);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getChatId(chat), loading, scrollState.height]);

  const onScroll = React.useCallback(
    async (event: React.UIEvent<HTMLUListElement>) => {
      const { currentTarget } = event;
      if (!currentTarget || !chat || !!chat.noMoreData) return;

      if (currentTarget.scrollTop === 0) {
        if (
          messageCount >= pageSize &&
          !loading &&
          props.onNeedMoreMessages
        ) {
          setScrollState({
            autoScroll: false,
            height: currentTarget.scrollHeight,
          });
          props.onNeedMoreMessages(chat);

          setTimeout(() => {
            if (refOnMess.current) {
              refOnMess.current.scrollIntoView();
            }
          }, 100);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chat, loading],
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

  const handleMenuClose = () => {
    setMenuState(initialMenuState);
  };

  const handleCopy = useCallback(() => {
    const { message } = menuState;
    setMenuState(initialMenuState);
    if (!message) return;
    navigator.clipboard.writeText(message.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);

  const handleDelete = useCallback(() => {
    const { message } = menuState;
    setMenuState(initialMenuState);
    if (props.onMeesageDelete && chat && message)
      props.onMeesageDelete(chat, message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);

  //  console.log("chat", chat);
  const [viewerData, setViewerData] = React.useState<{
    visible: boolean;
    src: string;
  }>({
    visible: false,
    src: '',
  });

  const defineRefOnMess = (inx: number) => {
    const perSize = 25;
    const count =
      messageCount >= perSize ? messageCount / perSize - 1 : 0;

    if (scrollState.autoScroll && inx === messageCount - 1) {
      return refOnMess;
    } else if (count === 0 && inx === messageCount - 1) {
      return refOnMess;
    } else if (count > 0 && inx === messageCount - perSize * count) {
      return refOnMess;
    }

    return null;
  };
  return (
    <Card elevation={1} className={classes.root}>
      <Box display="flex" flexDirection="row">
        {chat && isMobile && (
          <Tooltip title="Вернуться в конференцию">
            <IconButton
              aria-label="exit room"
              onClick={() =>
                props.onExitRoom && props.onExitRoom(chat)
              }
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        )}
        {/* {!isMobile && <CheckAudiVideoPerm />} */}

        <RoomHeader
          apiUrl={apiUrl}
          user={user}
          chat={chat}
          typing={typing}
          conference={conference}
          conferenceJoined={conferenceJoined}
          operators={props.operators}
          className={classes.roomHeader}
          onVideoCall={props.onVideoCall}
          onVideoEnd={props.onVideoEnd}
          onConferencePause={props.onConferencePause}
          onOperatorAdd={props.onOperatorAdd}
          onLeaveGroup={props.onLeaveGroup}
        />
        {loading && (
          <div className={classes.roomProgress}>
            <CircularProgress size={20} />
          </div>
        )}
      </Box>
      <Divider />
      <CardContent className={classes.messageListOuter}>
        {!isEmpty(messages) ? (
          <>
            <List className={classes.messageList} onScroll={onScroll}>
              {messages != null &&
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
                      messages[inx - 1].userId !==
                        messages[inx].userId
                    }
                    isUserLast={
                      inx === messages.length - 1 ||
                      messages[inx + 1].messageType === 'notify' ||
                      messages[inx + 1].userId !==
                        messages[inx].userId
                    }
                    onContextMenu={event =>
                      handleMenuPopup(message, event)
                    }
                    refOnMess={defineRefOnMess(inx)}
                    setViewerData={setViewerData}
                  />
                ))}
              <div ref={refOnLastMess} />
            </List>
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
          </>
        ) : null}
      </CardContent>
      <Divider />
      <CardContent>
        <Entry
          chat={chat}
          onTyping={props.onTyping}
          onSendMessage={props.onSendMessage}
        />
      </CardContent>
      <Menu
        keepMounted
        open={menuState.mouseY !== null}
        onClose={handleMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          menuState.mouseY !== null && menuState.mouseX !== null
            ? { top: menuState.mouseY, left: menuState.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleCopy} disabled={!menuState.canCopy}>
          <span className={classes.flexAll}>
            {t('CHAT.MESSAGE.MENU.COPY')}
          </span>
          <ListItemIcon className={classes.flexEnd}>
            <FileCopyIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem
          onClick={handleDelete}
          disabled={!menuState.canDelete}
        >
          <span className={classes.flexAll}>
            {t('CHAT.MESSAGE.MENU.DELETE')}
          </span>
          <ListItemIcon className={classes.flexEnd}>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Card>
  );
};

export default Room;

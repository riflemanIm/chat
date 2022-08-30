import * as React from 'react';
import {
  Container,
  Box,
  Grid,
  Snackbar,
  useMediaQuery,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Alert } from '@mui/lab';
import { Room, RoomList, Conference } from '../components';
import { ChatContext } from '../context/ChatContext';
import { RestContext } from '../context/RestContext';
import { SocketContext } from '../context/SocketContext';
import {
  ChatPa,
  Group,
  Contact,
  ChatMessage,
  ChatRoom,
  SendMessage,
  ConferenceData,
} from '../types';
import { getParam, isEmpty } from '../utils/common';
import ConferenceCall from '../components/ConferenceCall';

const getRingAudio = (): HTMLAudioElement => {
  const audio = new Audio(
    process.env.PUBLIC_URL + '/audio/ring-in.ogg',
  );
  audio.loop = true;
  return audio;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 640,
    minHeight: 470,
    height: '100%',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      height: `calc(100vh - ${theme.spacing(8)})`,
      minWidth: 'auto',
      minHeight: 'auto',
      overflow: 'hidden',
    },
  },
  innerBox: {
    height: '100%',
    width: '100%',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  innerGrid: {
    height: '100%',
    width: '100%',
  },
}));

export const ChatPage: React.FC<ChatPa> = ({
  activeGroupId,
  activeChatUserId,
}: ChatPa) => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const { state, dispatch } = React.useContext(ChatContext);
  const { socket } = React.useContext(SocketContext);

  const {
    apiUrl,
    pageSize,
    getPrivateMessages,
    getGroupMessages,
    getUserByMmk,
  } = React.useContext(RestContext);

  const [ringAudio] = React.useState(getRingAudio());

  const onExitActiveRoom = React.useCallback(() => {
    dispatch({
      type: 'SET_ACTIVE_ROOM',
      payload: { ifNotExists: false },
    });
  }, [dispatch]);

  const onNeedMoreMessages = React.useCallback(
    async (chat: ChatRoom) => {
      if ((chat as Group).groupId)
        await getGroupMessages(chat as Group);
      else await getPrivateMessages(chat as Contact);
    },
    [getPrivateMessages, getGroupMessages],
  );

  const onMessageDelete = React.useCallback(
    (chat: ChatRoom, message: ChatMessage) => {
      socket?.emit('revokeMessage', {
        groupId: (chat as Group).groupId, // Идентификатор группы
        contactId: chat.userId, // Идентификатор контакта
        _id: message._id, // Идентификатор удаленного сообщения
      });
    },
    [socket?.id],
  );

  const onTyping = React.useCallback(
    (chat: ChatRoom) => {
      socket?.emit('typing', {
        groupId: (chat as Group)?.groupId,
        contactId: chat?.userId,
      });
    },
    [socket?.id],
  );

  const onSendMessage = React.useCallback(
    (chat: ChatRoom, data: SendMessage) => {
      if ((chat as Group).groupId) {
        socket?.emit('groupMessage', {
          groupId: (chat as Group)?.groupId,
          content: data.message,
          width: data.width,
          height: data.height,
          fileName: data.fileName,
          messageType: data.messageType,
          size: data.size,
        });
      } else {
        socket?.emit('privateMessage', {
          contactId: chat?.userId,
          content: data.message,
          width: data.width,
          height: data.height,
          fileName: data.fileName,
          messageType: data.messageType,
          size: data.size,
        });
      }
    },
    [socket?.id],
  );

  const onChangeChat = React.useCallback(
    (chat: ChatRoom) => {
      dispatch({
        type: 'SET_ACTIVE_ROOM',
        payload: {
          groupId: (chat as Group)?.groupId,
          contactId: chat?.userId,
          ifNotExists: false,
        },
      });
    },
    [socket?.id, dispatch],
  );

  const onEnterRoom = React.useCallback(
    (chat: ChatRoom) => {
      if (!chat.messages || chat.messages.length === 0) return;
      if ((chat as Group).groupId) {
        socket?.emit('markAsRead', {
          groupId: (chat as Group).groupId,
          _id: chat.messages[chat.messages.length - 1]._id,
        });
      } else {
        socket?.emit('markAsRead', {
          contactId: chat.userId,
          _id: chat.messages[chat.messages.length - 1]._id,
        });
      }
    },
    [socket?.id],
  );

  const onVideoCall = React.useCallback(
    (chat: ChatRoom) => {
      socket?.emit('startConference', {
        groupId: (chat as Group).groupId,
        contactId: chat.userId,
      });
    },
    [socket?.id],
  );

  const onVideoEnd = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id != null)
        socket?.emit('stopConference', {
          id: conference?.id,
        });
    },
    [socket?.id],
  );

  const onConferencePause = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id != null)
        socket?.emit('pauseConference', {
          id: conference.id,
        });
    },
    [socket?.id],
  );

  const onConferenceCallAccept = React.useCallback(
    (conference: ConferenceData) => {
      // отправляем startConference чтобы возобновить запись
      if (conference?.id != null)
        socket?.emit('resumeConference', {
          id: conference.id,
        });
      dispatch({ type: 'JOIN_CONFERENCE', payload: conference });
    },
    [dispatch],
  );

  const onOperatorAdd = React.useCallback(
    (group: Group, operator: Contact) => {
      socket?.emit('addOperator', {
        groupId: group.groupId,
        operatorId: operator.userId,
      });
    },
    [socket?.id],
  );

  const onLeaveGroup = React.useCallback(
    (group: Group) => {
      socket?.emit('deleteGroup', {
        groupId: group.groupId,
      });
    },
    [socket?.id],
  );

  const handleError = React.useCallback(() => {
    dispatch({ type: 'SET_ERROR' });
  }, [dispatch]);

  React.useEffect(() => {
    if (activeChatUserId != null && !isEmpty(state.contactGather)) {
      const Chat = Object.values(state.contactGather).find(
        item => item.userId === activeChatUserId,
      );
      onChangeChat(Chat);
    }

    const mmkId = getParam('mmk');
    if (mmkId != null && !isEmpty(state.contactGather)) {
      const changeChatByMmkId = async () => {
        const userId = await getUserByMmk(mmkId);
        if (userId != null) {
          const Chat = Object.values(state.contactGather).find(
            item => item.userId === userId,
          );
          onChangeChat(Chat);
        }
      };
      changeChatByMmkId();
    }
  }, [state.contactGather]);

  React.useEffect(() => {
    if (activeGroupId != null && !isEmpty(state.groupGather)) {
      const onlyChat = Object.values(state.groupGather).find(
        item => item.groupId === activeGroupId,
      );

      if (!isEmpty(onlyChat)) {
        onChangeChat(onlyChat);
      }
    }
  }, [state.groupGather]);

  React.useEffect(() => {
    if (
      state.conference.data?.id &&
      state.conference.ringPlayed &&
      !state.conference.joined
    )
      ringAudio.play();
    else ringAudio.pause();
  }, [state.conference.data?.id, state.conference.ringPlayed]);

  //console.log('state', state);

  const renderRoom = state.activeRoom != null && (
    <Room
      apiUrl={apiUrl}
      user={state.user}
      users={state.userGather}
      operators={state.operators}
      chat={state.activeRoom}
      typing={state.typing}
      conference={state.conference.data}
      conferenceJoined={state.conference.joined}
      loading={state.loading}
      pageSize={pageSize}
      onExitRoom={onExitActiveRoom}
      onEnterRoom={onEnterRoom}
      onNeedMoreMessages={onNeedMoreMessages}
      onMeesageDelete={onMessageDelete}
      onTyping={onTyping}
      onSendMessage={onSendMessage}
      onVideoCall={onVideoCall}
      onVideoEnd={onVideoEnd}
      onConferencePause={onConferencePause}
      onOperatorAdd={onOperatorAdd}
      onLeaveGroup={onLeaveGroup}
    />
  );

  const GetRoomList = () => (
    <RoomList
      apiUrl={apiUrl}
      user={state.user}
      activeRoom={state.activeRoom}
      groups={Object.values(state.groupGather)}
      contacts={Object.values(state.contactGather)}
      typing={state.typing}
      onChangeChat={onChangeChat}
    />
  );

  const GetConferenceCall = () =>
    state.conference.data && (
      <ConferenceCall
        apiUrl={apiUrl}
        contact={
          state.contactGather[
            state.user.userId === state.conference.data.userId
              ? state.conference.data.contactId
              : state.conference.data.userId
          ]
        }
        conference={state.conference.data}
        onAccept={onConferenceCallAccept}
      />
    );

  const GetConference = () => (
    <Conference
      conference={state.conference.data}
      onClose={onConferencePause}
    />
  );

  const depsContats = state.conference.data?.id
    ? [
        state.conference.joined,
        state.conference.data?.id,
        state.conference.data?.contactId,
        state.activeRoom?.groupId,
        state.activeRoom?.userId,
      ]
    : [
        state.activeRoom?.groupId,
        state.activeRoom?.userId,
        state.activeRoom != null && state.activeRoom?.messages != null
          ? state.activeRoom?.messages.length
          : 0,
      ];

  const Contacts = React.useMemo(
    () =>
      state.conference.data?.id &&
      state.conference.data?.contactId ===
        state.activeRoom?.userId ? (
        state.conference.joined ? (
          <GetConference />
        ) : (
          <GetConferenceCall />
        )
      ) : (
        <GetRoomList />
      ),
    depsContats,
  );

  //console.log('chat state', state);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.innerBox}>
        {isMobile ? (
          <>
            {Contacts}
            {renderRoom}
          </>
        ) : (
          <Grid container spacing={1} className={classes.innerGrid}>
            <Grid item sm={4} className={classes.innerGrid}>
              {Contacts}
            </Grid>

            <Grid item sm={8} className={classes.innerGrid}>
              {renderRoom}
            </Grid>
          </Grid>
        )}
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!state.error}
        autoHideDuration={6000}
        onClose={handleError}
      >
        <Alert onClose={handleError} severity="error">
          {state.error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

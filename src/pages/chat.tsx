import * as React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Theme,
  Snackbar,
  useMediaQuery,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";
import { Room, RoomList, Conference } from "../components";
import { ChatContext } from "../context/ChatContext";
import { RestContext } from "../context/RestContext";
import { SocketContext } from "../context/SocketContext";
import {
  ChatPa,
  Group,
  Contact,
  ChatMessage,
  ChatRoom,
  SendMessage,
  ConferenceData,
} from "../types";
import { isEmpty } from "../utils/common";
import ConferenceCall from "../components/ConferenceCall";

const getRingAudio = (): HTMLAudioElement => {
  const audio = new Audio(process.env.PUBLIC_URL + "/audio/ring-in.ogg");
  audio.loop = true;
  return audio;
};

export const ChatPage: React.FC<ChatPa> = ({
  inModale,
  onlyChatUserId,
}: ChatPa) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      minWidth: 300,
      minHeight: 470,
      height: inModale ? "100%" : `calc(100vh - ${theme.spacing(8)}px)`,
      padding: 0,
      [theme.breakpoints.down("xs")]: {
        height: "100vh",
        minHeight: 200,
      },
    },
    innerBox: {
      height: "100%",
      width: "100%",
      margin: inModale ? 0 : `${theme.spacing(4)}px 0`,
      [theme.breakpoints.down("xs")]: {
        margin: 0,
      },
    },
    innerGrid: {
      height: "100%",
      width: "100%",
    },
  }));
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { state, dispatch } = React.useContext(ChatContext);
  const { socket } = React.useContext(SocketContext);

  const { apiUrl, pageSize, getPrivateMessages, getGroupMessages } =
    React.useContext(RestContext);

  const [ringAudio] = React.useState(getRingAudio());

  const onExitActiveRoom = React.useCallback(() => {
    dispatch({
      type: "SET_ACTIVE_ROOM",
      payload: { ifNotExists: false },
    });
  }, [dispatch]);

  const onNeedMoreMessages = React.useCallback(
    async (chat) => {
      if ((chat as Group).groupId) await getGroupMessages(chat as Group);
      else await getPrivateMessages(chat as Contact);
    },
    [getPrivateMessages, getGroupMessages]
  );

  const onMessageDelete = React.useCallback(
    (chat: ChatRoom, message: ChatMessage) => {
      socket?.emit("revokeMessage", {
        groupId: (chat as Group).groupId, // Идентификатор группы
        contactId: chat.userId, // Идентификатор контакта
        _id: message._id, // Идентификатор удаленного сообщения
      });
    },
    [socket?.id]
  );

  const onTyping = React.useCallback(
    (chat: ChatRoom) => {
      socket?.emit("typing", {
        groupId: (chat as Group)?.groupId,
        contactId: chat?.userId,
      });
    },
    [socket?.id]
  );

  const onSendMessage = React.useCallback(
    (chat: ChatRoom, data: SendMessage) => {
      if ((chat as Group).groupId) {
        socket?.emit("groupMessage", {
          groupId: (chat as Group)?.groupId,
          content: data.message,
          width: data.width,
          height: data.height,
          fileName: data.fileName,
          messageType: data.messageType,
          size: data.size,
        });
      } else {
        socket?.emit("privateMessage", {
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
    [socket?.id]
  );

  const onChangeChat = React.useCallback(
    (chat: ChatRoom) => {
      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: {
          groupId: (chat as Group)?.groupId,
          contactId: chat?.userId,
          ifNotExists: false,
        },
      });
    },
    [socket?.id, dispatch]
  );

  const onEnterRoom = React.useCallback(
    (chat: ChatRoom) => {
      if (!chat.messages || chat.messages.length === 0) return;
      if ((chat as Group).groupId) {
        socket?.emit("markAsRead", {
          groupId: (chat as Group).groupId,
          _id: chat.messages[chat.messages.length - 1]._id,
        });
      } else {
        socket?.emit("markAsRead", {
          contactId: chat.userId,
          _id: chat.messages[chat.messages.length - 1]._id,
        });
      }
    },
    [socket?.id]
  );

  const onVideoCall = React.useCallback(
    (chat: ChatRoom) => {
      socket?.emit("startConference", {
        groupId: (chat as Group).groupId,
        contactId: chat.userId,
      });
    },
    [socket?.id]
  );

  const onVideoEnd = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference)
        socket?.emit("stopConference", {
          id: conference.id,
        });
    },
    [socket?.id]
  );

  const onConferencePause = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference)
        socket?.emit("pauseConference", {
          id: conference.id,
        });
    },
    [socket?.id]
  );

  const onConferenceCallAccept = React.useCallback(
    (conference: ConferenceData) => {
      dispatch({ type: "JOIN_CONFERENCE", payload: conference });
    },
    [dispatch]
  );

  const handleError = React.useCallback(() => {
    dispatch({ type: "SET_ERROR" });
  }, [dispatch]);

  React.useEffect(() => {
    if (onlyChatUserId != null) {
      const onlyChat = Object.values(state.contactGather).find(
        (item) => item.userId === onlyChatUserId
      );

      if (!isEmpty(onlyChat)) {
        onChangeChat(onlyChat);
      }
    }
  }, [state.contactGather]);

  React.useEffect(() => {
    if (!!state.conference.data && !state.conference.ringPlayed)
      ringAudio.play();
    else ringAudio.pause();
  }, [state.conference]);

  const renderRoom = state.activeRoom != null && (
    <Room
      apiUrl={apiUrl}
      user={state.user}
      chat={state.activeRoom}
      typing={state.typing}
      conference={state.conference.data}
      loading={state.loading}
      pageSize={pageSize}
      onExitRoom={
        isMobile && onlyChatUserId == null ? onExitActiveRoom : undefined
      }
      onEnterRoom={onEnterRoom}
      onNeedMoreMessages={onNeedMoreMessages}
      onMeesageDelete={onMessageDelete}
      onTyping={onTyping}
      onSendMessage={onSendMessage}
      onVideoCall={onVideoCall}
      onVideoEnd={onVideoEnd}
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

  const Contacts = React.useMemo(
    () =>
      !isEmpty(state.conference.data) ? (
        state.conference.joined ? (
          <GetConference />
        ) : (
          <GetConferenceCall />
        )
      ) : (
        <GetRoomList />
      ),
    [
      state.conference,
      state.activeRoom?.groupId,
      state.activeRoom?.userId,
      state.activeRoom?.messages?.length,
      state.activeRoom?.unreadCount,
    ]
  );
  const isLeftPart = onlyChatUserId == null || !isEmpty(state.conference.data);
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.innerBox}>
        {isMobile ? (
          <>
            {isLeftPart && Contacts}
            {renderRoom}
          </>
        ) : (
          <Grid container spacing={1} className={classes.innerGrid}>
            {isLeftPart && (
              <Grid item sm={4} className={classes.innerGrid}>
                {Contacts}
              </Grid>
            )}
            <Grid item sm={isLeftPart ? 8 : 12} className={classes.innerGrid}>
              {renderRoom}
            </Grid>
          </Grid>
        )}
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
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

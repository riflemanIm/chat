import * as React from "react";
import {
  Container,
  Box,
  Grid,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Room, RoomList, Conference } from "../components";
import { ChatContext } from "../context/ChatContext";
import { RestContext } from "../context/RestContext";
import { SocketContext } from "../context/SocketContext";
import {
  ChatPageProps,
  Group,
  Contact,
  ChatMessage,
  ChatRoom,
  SendMessage,
  ConferenceData,
} from "../types";
import { getParam, isEmpty, allMessCount } from "../utils/common";
import ConferenceCall from "../components/ConferenceCall";
import ChatIcon from "@mui/icons-material/Chat";
import { useTranslation } from "react-i18next";
import CheckAudiVideoPerm from "../components/CheckAudiVideoPerm";
import ChatAlert from "../components/Alert";

// Отключили проигрыш звука
// const getRingAudio = (): HTMLAudioElement => {
//   const audio = new Audio(
//     process.env.PUBLIC_URL + '/audio/ring-in.ogg',
//   );
//   audio.loop = true;
//   return audio;
// };

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    padding: 0,
    width: "100%",
  },
  innerGrid: {
    height: "100%",
    width: "100%",
  },
  conAbsOnConf: {
    position: "relative",
    top: 106,
    left: 0,
    zIndex: 1000,
    margin: theme.spacing(3),
  },
  conAbsOnConfDoc: {
    position: "absolute",
    top: 52,
    left: 24,
    zIndex: 1000,
    margin: theme.spacing(3),
  },
}));

export const ChatPage: React.FC<ChatPageProps> = ({
  activeGroupId,
  activeChatUserId,
  inModale = false,
  inAdmin = false,
  hideRooms = false,
  fullWidth = false,
  ...props
}: ChatPageProps) => {
  const classes = useStyles();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const { t } = useTranslation();
  const { state, dispatch } = React.useContext(ChatContext);
  const { socket } = React.useContext(SocketContext);

  const {
    apiUrl,
    pageSize,
    getPrivateMessages,
    getGroupMessages,
    getUserByMmk,
  } = React.useContext(RestContext);

  // const [ringAudio] = React.useState(getRingAudio());

  const onExitActiveRoom = React.useCallback(() => {
    dispatch({
      type: "SET_ACTIVE_ROOM",
      payload: {},
    });
  }, [dispatch]);

  const onNeedMoreMessages = React.useCallback(
    async (chat: ChatRoom) => {
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
        },
      });
      onEnterRoom(chat);
    },
    [socket?.id, dispatch]
  );

  const onEnterRoom = React.useCallback(
    (chat: ChatRoom) => {
      if (!chat || !chat.messages || chat.messages.length === 0) return;
      if ((chat as Group).groupId) {
        socket?.emit("markAsRead", {
          groupId: (chat as Group).groupId,
          _id: chat.messages[chat.messages.length - 1]._id,
        });
      } else {
        dispatch({
          type: "MARK_PRIVATE_MESSAGES_READ",
          payload: chat.userId,
        });
        socket?.emit("markAsRead", {
          contactId: chat.userId,
          _id: chat.messages[chat.messages.length - 1]._id,
        });
      }
    },
    [socket?.id]
  );

  const onVideoCall = React.useCallback(
    (chat: ChatRoom, visitId?: number, recreate?: boolean) => {
      socket?.emit("startConference", {
        groupId: (chat as Group).groupId,
        contactId: chat.userId,
        visitId,
        recreate,
      });
    },
    [socket?.id]
  );

  const onVideoEnd = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id != null)
        socket?.emit("stopConference", {
          id: conference?.id,
        });
    },
    [socket?.id]
  );

  const onConferencePause = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id != null)
        socket?.emit("pauseConference", {
          id: conference.id,
        });
    },
    [socket?.id]
  );

  const onConferenceCallAccept = React.useCallback(
    (conference: ConferenceData) => {
      // отправляем resumeConference чтобы возобновить запись
      if (conference?.id != null)
        socket?.emit("resumeConference", {
          id: conference.id,
        });
      dispatch({ type: "JOIN_CONFERENCE", payload: conference });
    },
    [socket?.id, dispatch]
  );

  const onOperatorAdd = React.useCallback(
    (group: Group, operator: Contact) => {
      socket?.emit("addOperator", {
        groupId: group.groupId,
        operatorId: operator.userId,
      });
    },
    [socket?.id]
  );

  const onLeaveGroup = React.useCallback(
    (group: Group) => {
      socket?.emit("deleteGroup", {
        groupId: group.groupId,
      });
    },
    [socket?.id]
  );

  React.useEffect(() => {
    if (activeChatUserId != null && !isEmpty(state.contactGather)) {
      const Chat = Object.values(state.contactGather).find(
        (item) => item.userId === activeChatUserId
      );
      onChangeChat(Chat);
    }

    const mmkId = getParam("mmk");
    const guid = getParam("guid");
    if ((mmkId != null || guid != null) && !isEmpty(state.contactGather)) {
      //console.log("mmkId", mmkId);
      const changeChatByMmkId = async () => {
        const userId = await getUserByMmk(mmkId, guid);
        if (userId != null) {
          const Chat = Object.values(state.contactGather).find(
            (item) => item.userId === userId
          );
          onChangeChat(Chat);
        }
      };
      changeChatByMmkId();
    }
  }, [state.user.userId]);

  React.useEffect(() => {
    if (activeGroupId != null && !isEmpty(state.groupGather)) {
      const onlyChat = Object.values(state.groupGather).find(
        (item) => item.groupId === activeGroupId
      );

      if (!isEmpty(onlyChat)) {
        onChangeChat(onlyChat);
      }
    }
  }, [state.user.userId]);

  // Отключили проигрыш звука
  // React.useEffect(() => {
  //   if (
  //     state.conference.data?.id &&
  //     state.conference.ringPlayed &&
  //     !state.conference.joined
  //   )
  //     ringAudio.play();
  //   else ringAudio.pause();
  // }, [state.conference.data?.id, state.conference.ringPlayed]);

  // console.log('--state--', state);
  const renderRoom = state.activeRoom != null && (
    <Room
      apiUrl={apiUrl}
      user={state.user}
      users={state.userGather}
      operators={state.operators}
      chat={state.activeRoom}
      typing={state.typing}
      conference={state.conference.data}
      visitData={state.visitData}
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
      inModale={inModale}
      inAdmin={inAdmin}
      onContactClick={props.onContactInfoClick}
      hideRooms={hideRooms}
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
      langCode={state.user.langCode}
    />
  );

  const Gonf = () =>
    state.conference.joined ? (
      <>
        <GetConference />
        {(!state.activeRoom || !isMobile) && (
          <Box
            sx={(theme) => ({
              position: "absolute",
              overflow: "hidden",
              top: [3, 4].includes(state.user.role) ? 40 : 110,
              left: [3, 4].includes(state.user.role) ? 40 : 30,
              zIndex: 1000,
              [theme.breakpoints.down("sm")]: {
                top: 98,
                left: 26,
              },
            })}
          >
            <Box
              display="flex"
              flexDirection="row"
              columnGap={3}
              my={3}
              sx={{
                position: "relative",
              }}
            >
              <>
                <CheckAudiVideoPerm audio={true} video={false} />
                <CheckAudiVideoPerm audio={false} video={true} />
              </>

              {isMobile && (
                <Tooltip title={t("CHAT.CONFERENCE.BACK")}>
                  <IconButton
                    sx={{
                      color: "#fff",
                      background: "#000",
                      "&:hover": {
                        background: "#eee",
                        color: "#000",
                        boxShadow: "none",
                      },
                    }}
                    aria-label="check"
                    onClick={() =>
                      state.chatOld != null && onChangeChat(state.chatOld)
                    }
                    size="large"
                  >
                    <ChatIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
        )}
      </>
    ) : (
      <GetConferenceCall />
    );

  const contacts = React.useMemo(
    () => (state.conference.data?.id != null ? <Gonf /> : <GetRoomList />),
    state.conference.data?.id != null
      ? [state.conference, state.conference, state.activeRoom]
      : [
          state.activeRoom?.groupId,
          state.activeRoom?.userId,
          allMessCount(state.contactGather),
          allMessCount(state.groupGather),
        ]
  );

  return (
    <Container className={classes.root}>
      {isMobile ? (
        <React.Fragment>
          {contacts}
          {renderRoom}
        </React.Fragment>
      ) : (
        <Grid container spacing={1} className={classes.innerGrid}>
          {(state.conference.data?.id != null || !hideRooms) && (
            <Grid
              item
              sm={state.conference.data?.id != null ? 6 : 4}
              lg={state.conference.data?.id != null ? 6 : 4} // на малой ширине нужна пропорция 1/3
              xl={state.conference.data?.id != null ? 6 : 3} // на большой ширине нужна пропорция 1/4
              className={classes.innerGrid}
            >
              {contacts}
            </Grid>
          )}
          <Grid
            item
            sm={state.conference.data?.id != null ? 6 : hideRooms ? 12 : 8}
            lg={state.conference.data?.id != null ? 6 : hideRooms ? 12 : 8}
            xl={state.conference.data?.id != null ? 6 : hideRooms ? 12 : 9}
            className={classes.innerGrid}
          >
            {renderRoom}
          </Grid>
        </Grid>
      )}

      <ChatAlert />
    </Container>
  );
};

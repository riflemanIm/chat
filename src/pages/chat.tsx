import * as React from "react";
import { useMediaQuery } from "@mui/material";
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
import { useTranslation } from "react-i18next";
import ChatAlert from "../components/Alert";
import ChatContainer from "../components/ChatContainer";
import ChatLayout from "../components/ChatLayout";
import ConferenceSection from "../components/ConferenceSection";

// Отключили проигрыш звука
// const getRingAudio = (): HTMLAudioElement => {
//   const audio = new Audio(
//     process.env.PUBLIC_URL + '/audio/ring-in.ogg',
//   );
//   audio.loop = true;
//   return audio;
// };

export const ChatPage: React.FC<ChatPageProps> = ({
  activeGroupId,
  activeChatUserId,
  hideRooms = false,
  fullWidth = false,
  ...props
}: ChatPageProps) => {
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
      onMessageDelete={onMessageDelete}
      onTyping={onTyping}
      onSendMessage={onSendMessage}
      onVideoCall={onVideoCall}
      onVideoEnd={onVideoEnd}
      onConferencePause={onConferencePause}
      onOperatorAdd={onOperatorAdd}
      onLeaveGroup={onLeaveGroup}
      onContactClick={props.onContactInfoClick}
      isMobile={isMobile}
    />
  );

  return (
    <ChatContainer>
      <ChatLayout
        isMobile={isMobile}
        conferenceActive={!!state.conference.data?.id}
        hideRooms={hideRooms}
        contactsList={
          state.conference.data?.id != null ? (
            <ConferenceSection
              conference={state.conference}
              onClose={onConferencePause}
              onAccept={onConferenceCallAccept}
              isMobile={isMobile}
              user={state.user}
              chatOld={state.chatOld}
              onChangeChat={onChangeChat}
              apiUrl={apiUrl}
            />
          ) : (
            <RoomList
              user={state.user}
              activeRoom={state.activeRoom}
              groups={Object.values(state.groupGather)}
              contacts={Object.values(state.contactGather)}
              typing={state.typing}
              onChangeChat={onChangeChat}
              activeChatUserId={activeChatUserId}
              activeGroupId={activeGroupId}
            />
          )
        }
        chatRoom={renderRoom}
      />
      <ChatAlert />
    </ChatContainer>
  );
};

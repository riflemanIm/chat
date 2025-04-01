import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import * as React from "react";
import { Room, RoomList } from "../components";
import ChatAlert from "../components/Alert";
import ChatContainer from "../components/ChatContainer";
import ChatLayout from "../components/ChatLayout";
import ConferenceSection from "../components/ConferenceSection";
import { ChatContext } from "../context/ChatContext";
import { RestContext } from "../context/RestContext";
import { SocketContext } from "../context/SocketContext";
import {
  ChatMessage,
  ChatPageProps,
  ChatRoom,
  ConferenceData,
  Contact,
  Group,
  SendMessage,
} from "../types";
import { getParam, isEmpty, isGroup } from "../utils/common";

// Отключили проигрыш звука
// const getRingAudio = (): HTMLAudioElement => {
//   const audio = new Audio(
//     process.env.PUBLIC_URL + '/audio/ring-in.ogg',
//   );
//   audio.loop = true;
//   return audio;
// };

// Add at the top of the file after imports

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

  // Update context usage
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

  // Добавляем утилитарную функцию для безопасной отправки сообщений через сокет
  const emitSocketEvent = React.useCallback(
    (eventName: string, data: unknown) => {
      if (!socket) {
        console.warn(`Socket not connected, cannot emit ${eventName}`);
        return;
      }

      try {
        socket.emit(eventName, data);
      } catch (error) {
        console.error(`Error emitting ${eventName}:`, error);
        dispatch({
          type: "SET_ERROR",
          payload: `Failed to send ${eventName}`,
        });
      }
    },
    [socket, dispatch]
  );

  const onNeedMoreMessages = React.useCallback(
    async (chat: ChatRoom) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        if (isGroup(chat)) {
          await getGroupMessages(chat);
        } else {
          await getPrivateMessages(chat as Contact);
        }
      } catch (error) {
        console.error("Failed to load messages:", error);
        dispatch({ type: "SET_ERROR", payload: "Failed to load messages" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [getPrivateMessages, getGroupMessages, dispatch]
  );

  const onMessageDelete = React.useCallback(
    (chat: ChatRoom, message: ChatMessage) => {
      emitSocketEvent("revokeMessage", {
        groupId: isGroup(chat) ? chat.groupId : undefined,
        contactId: chat.userId,
        _id: message._id,
      });
    },
    [emitSocketEvent]
  );

  const onTyping = React.useCallback(
    (chat: ChatRoom) => {
      emitSocketEvent("typing", {
        groupId: isGroup(chat) ? chat.groupId : undefined,
        contactId: chat.userId,
      });
    },
    [emitSocketEvent]
  );

  const onSendMessage = React.useCallback(
    (chat: ChatRoom, data: SendMessage) => {
      const baseMessage = {
        content: data.message,
        width: data.width,
        height: data.height,
        fileName: data.fileName,
        messageType: data.messageType,
        size: data.size,
      };

      if (isGroup(chat)) {
        emitSocketEvent("groupMessage", {
          ...baseMessage,
          groupId: chat.groupId,
        });
      } else {
        emitSocketEvent("privateMessage", {
          ...baseMessage,
          contactId: chat.userId,
        });
      }
    },
    [emitSocketEvent]
  );

  // Обновляем onEnterRoom для безопасного доступа к данным
  const onEnterRoom = React.useCallback(
    (chat: ChatRoom) => {
      if (!chat?.messages?.length || !socket) return;

      try {
        const lastMessage = chat.messages[chat.messages.length - 1];
        if (!lastMessage?._id) return;

        if (isGroup(chat)) {
          socket.emit("markAsRead", {
            groupId: chat.groupId,
            _id: lastMessage._id,
          });
          //} else if (chat.userId === lastMessage.userId) {
        } else {
          dispatch({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: chat.userId,
          });
          socket.emit("markAsRead", {
            contactId: chat.userId,
            _id: lastMessage._id,
          });
        }
      } catch (error) {
        console.error("Error marking messages as read:", error);
        dispatch({
          type: "SET_ERROR",
          payload: "Failed to mark messages as read",
        });
      }
    },
    [socket, dispatch]
  );

  // Обновляем функцию onChangeChat
  const onChangeChat = React.useCallback(
    (chat: ChatRoom) => {
      if (!chat) return;

      try {
        // Устанавливаем активную комнату
        dispatch({
          type: "SET_ACTIVE_ROOM",
          payload: {
            groupId: isGroup(chat) ? chat.groupId : undefined,
            contactId: chat?.userId,
          },
        });

        // Помечаем сообщения как прочитанные
        onEnterRoom(chat);
      } catch (error) {
        console.error("Error changing chat:", error);
        dispatch({
          type: "SET_ERROR",
          payload: "Failed to change chat room",
        });
      }
    },
    [dispatch, onEnterRoom, socket] // Добавляем socket в зависимости
  );

  const onVideoCall = React.useCallback(
    (chat: ChatRoom, visitId?: number, recreate?: boolean) => {
      emitSocketEvent("startConference", {
        groupId: isGroup(chat) ? chat.groupId : undefined,
        contactId: chat.userId,
        visitId,
        recreate,
      });
    },
    [emitSocketEvent]
  );

  const onVideoEnd = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id) {
        emitSocketEvent("stopConference", {
          id: conference.id,
        });
      }
    },
    [emitSocketEvent]
  );

  const onConferencePause = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id) {
        emitSocketEvent("pauseConference", {
          id: conference.id,
        });
      }
    },
    [emitSocketEvent]
  );

  const onConferenceCallAccept = React.useCallback(
    (conference: ConferenceData) => {
      if (conference?.id) {
        emitSocketEvent("resumeConference", {
          id: conference.id,
        });
        dispatch({ type: "JOIN_CONFERENCE", payload: conference });
      }
    },
    [emitSocketEvent, dispatch]
  );

  const onOperatorAdd = React.useCallback(
    (group: Group, operator: Contact) => {
      emitSocketEvent("addOperator", {
        groupId: group.groupId,
        operatorId: operator.userId,
      });
    },
    [emitSocketEvent]
  );

  const onLeaveGroup = React.useCallback(
    (group: Group) => {
      emitSocketEvent("deleteGroup", {
        groupId: group.groupId,
      });
    },
    [emitSocketEvent]
  );

  // First useEffect for initialization
  React.useEffect(() => {
    let mounted = true;
    const initializeChat = async () => {
      if (activeGroupId != null && !isEmpty(state.groupGather)) {
        const onlyChat = Object.values(state.groupGather).find(
          (item) => item.groupId === activeGroupId
        );

        if (!isEmpty(onlyChat) && mounted) {
          onChangeChat(onlyChat);
          return;
        }
      }

      if (activeChatUserId != null && !isEmpty(state.contactGather)) {
        const chat = Object.values(state.contactGather).find(
          (item) => item.userId === activeChatUserId
        );
        if (chat && mounted) {
          onChangeChat(chat);
          return;
        }
      }

      const mmkId = getParam("mmk");
      const guid = getParam("guid");

      if ((mmkId != null || guid != null) && !isEmpty(state.contactGather)) {
        //console.log("mmkId", mmkId);
        try {
          const userId = await getUserByMmk(mmkId, guid);
          if (userId != null) {
            const chat = Object.values(state.contactGather).find(
              (item) => item.userId === userId
            );
            if (chat && mounted) {
              onChangeChat(chat);
              return;
            }
          }
        } catch (error) {
          console.error("Failed to get user by MMK:", error);
        }
      }
      return () => {
        mounted = false;
      };
    };

    initializeChat();

    return () => {
      mounted = false;
    };
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

  // console.log("--state--", state);
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
            />
          )
        }
        chatRoom={renderRoom}
      />
      <ChatAlert />
    </ChatContainer>
  );
};

import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import * as React from "react";
import { Room, RoomList } from "../components";
import ChatAlert from "../components/Alert";
import ChatContainer from "../components/ChatContainer";
import ChatLayout from "../components/ChatLayout";
import ConferenceSection from "../components/ConferenceSection";
import DeepLinkDialog from "../components/DeepLinkDialog";
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
import { getChatId, getParam, isEmpty, isGroup } from "../utils/common";
import { isConferenceFinished, isConferencePaused } from "../utils/conference";

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
  chatAutoCreateFormConf = false,
  ...props
}: ChatPageProps) => {
  console.log("activeChatUserId", activeChatUserId);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  // Update context usage
  const { state, dispatch } = React.useContext(ChatContext);
  const { socket } = React.useContext(SocketContext);
  const [deepLinkDialog, setDeepLinkDialog] = React.useState({
    open: false,
    url: "",
  });
  const isOperatorRole =
    state.user?.role != null && [3, 4].includes(state.user.role);

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
          const searchQuery = state.messageSearch?.trim();
          await getPrivateMessages(chat as Contact, {
            search: searchQuery ? searchQuery : undefined,
          });
        }
      } catch (error) {
        console.error("Failed to load messages:", error);
        dispatch({ type: "SET_ERROR", payload: "Failed to load messages" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [getPrivateMessages, getGroupMessages, dispatch, state.messageSearch]
  );

  const onMessageSearchChange = React.useCallback(
    (value: string) => {
      if (state.messageSearch === value) {
        return;
      }

      const activeRoom = state.activeRoom;
      const trimmed = value.trim();
      const hadSearch = Boolean(state.messageSearch.trim());
      const hasQuery = Boolean(trimmed);

      if (!activeRoom || (!hasQuery && !hadSearch)) {
        dispatch({ type: "SET_MESSAGE_SEARCH", payload: value });
        return;
      }

      const requestId = searchRequestRef.current + 1;
      searchRequestRef.current = requestId;

      const fetchAndApplySearch = async () => {
        try {
          if (isGroup(activeRoom)) {
            await getGroupMessages(activeRoom as Group, {
              reset: true,
              shouldIgnore: () => searchRequestRef.current !== requestId,
            });
          } else {
            await getPrivateMessages(activeRoom as Contact, {
              search: hasQuery ? trimmed : undefined,
              reset: true,
              shouldIgnore: () => searchRequestRef.current !== requestId,
            });
          }
        } catch (error) {
          console.error("Failed to search messages:", error);
          dispatch({
            type: "SET_ERROR",
            payload: "Failed to search messages",
          });
        } finally {
          if (searchRequestRef.current === requestId) {
            dispatch({ type: "SET_MESSAGE_SEARCH", payload: value });
          }
        }
      };

      void fetchAndApplySearch();
    },
    [
      dispatch,
      getGroupMessages,
      getPrivateMessages,
      state.activeRoom,
      state.messageSearch,
    ]
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
    [dispatch, onEnterRoom]
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
      if (
        chatAutoCreateFormConf &&
        isOperatorRole &&
        conference?.deepLinkDoctorApp &&
        !isEmpty(conference.deepLinkDoctorApp)
      ) {
        setDeepLinkDialog({
          open: true,
          url: conference.deepLinkDoctorApp,
        });
      }
    },
    [emitSocketEvent]
  );

  const onConferencePause = React.useCallback(
    (conference: ConferenceData | null) => {
      if (conference?.id) {
        if (state.conference.paused) {
          return;
        }
        dispatch({ type: "PAUSE_CONFERENCE", payload: conference });
        emitSocketEvent("pauseConference", {
          id: conference.id,
        });
      }
    },
    [emitSocketEvent, dispatch, state.conference.paused]
  );

  const onConferenceCallAccept = React.useCallback(
    (conference: ConferenceData) => {
      if (conference?.id) {
        const isFinished = isConferenceFinished(conference, state.visitData);
        if (isFinished) return;
        const paused =
          state.conference.paused ||
          isConferencePaused(conference, state.visitData);
        if (paused) {
          emitSocketEvent("resumeConference", {
            id: conference.id,
          });
        }
        dispatch({ type: "JOIN_CONFERENCE", payload: conference });
      }
    },
    [emitSocketEvent, dispatch, state.conference.paused, state.visitData]
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
  const groups = React.useMemo<Group[]>(
    () => Object.values(state.groupGather),
    [state.groupGather]
  );

  const contacts = React.useMemo<Contact[]>(
    () => Object.values(state.contactGather),
    [state.contactGather]
  );

  const requestedChatId = React.useMemo(() => {
    if (activeGroupId != null) {
      return `group:${activeGroupId}`;
    }
    if (activeChatUserId != null) {
      return `user:${activeChatUserId}`;
    }
    return null;
  }, [activeGroupId, activeChatUserId]);

  const searchRequestRef = React.useRef(0);

  const activeChatIdRef = React.useRef<string | null>(
    getChatId(state.activeRoom)
  );

  React.useEffect(() => {
    activeChatIdRef.current = getChatId(state.activeRoom);
  }, [state.activeRoom]);

  React.useEffect(() => {
    let cancelled = false;

    const selectChat = (chat: ChatRoom | undefined | null) => {
      if (!cancelled && chat) {
        const chatId = getChatId(chat);
        if (!chatId) {
          return;
        }
        if (chatId === activeChatIdRef.current && chatId === requestedChatId) {
          return;
        }
        onChangeChat(chat);
      }
    };

    if (activeGroupId != null && !isEmpty(groups)) {
      const targetGroup = groups.find((item) => item.groupId === activeGroupId);
      if (targetGroup) {
        selectChat(targetGroup);
        return () => {
          cancelled = true;
        };
      }
    }

    if (activeChatUserId != null && !isEmpty(contacts)) {
      const targetContact = contacts.find(
        (item) => item.userId === activeChatUserId
      );
      if (targetContact) {
        selectChat(targetContact);
        return () => {
          cancelled = true;
        };
      }
    }

    const mmkId = getParam("mmk");
    const guid = getParam("guid");

    if ((mmkId != null || guid != null) && !isEmpty(contacts)) {
      getUserByMmk(mmkId, guid)
        .then((userId) => {
          if (userId != null) {
            selectChat(contacts.find((item) => item.userId === userId));
          }
        })
        .catch((error) => {
          console.error("Failed to get user by MMK:", error);
        });
    }

    return () => {
      cancelled = true;
    };
  }, [
    activeGroupId,
    activeChatUserId,
    contacts,
    groups,
    onChangeChat,
    getUserByMmk,
    requestedChatId,
  ]);

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
  const renderRoom = state.activeRoom ? (
    <Room
      apiUrl={apiUrl}
      user={state.user}
      users={state.userGather}
      operators={state.operators}
      chat={state.activeRoom}
      typing={state.typing}
      conference={state.conference.data}
      visitData={state.visitData}
      loading={state.loading}
      pageSize={pageSize}
      onExitRoom={onExitActiveRoom}
      onEnterRoom={onEnterRoom}
      onNeedMoreMessages={onNeedMoreMessages}
      onMessageDelete={onMessageDelete}
      onTyping={onTyping}
      onSendMessage={onSendMessage}
      onVideoCall={onVideoCall}
      onOperatorAdd={onOperatorAdd}
      onLeaveGroup={onLeaveGroup}
      onContactClick={props.onContactInfoClick}
      messageSearch={state.messageSearch}
      onMessageSearchChange={onMessageSearchChange}
      isMobile={isMobile}
    />
  ) : null;
  console.log("state.conference", state.conference);
  return (
    <ChatContainer>
      <ChatLayout
        isMobile={isMobile}
        conferenceActive={!!state.conference.data?.id}
        hideRooms={hideRooms}
        contactsList={
          state.conference.data?.id != null && activeGroupId == null ? (
            <ConferenceSection
              conference={state.conference}
              onClose={onConferencePause}
              onAccept={onConferenceCallAccept}
              user={state.user}
              activeRoom={state.activeRoom}
              onChangeChat={onChangeChat}
              apiUrl={apiUrl}
              onVideoEnd={onVideoEnd}
              isMobile={isMobile}
            />
          ) : (
            <RoomList
              user={state.user}
              activeRoom={state.activeRoom}
              groups={groups}
              contacts={contacts}
              typing={state.typing}
              onChangeChat={onChangeChat}
            />
          )
        }
        chatRoom={renderRoom}
        activeRoom={state.activeRoom}
        user={state.user}
        onExitRoom={onExitActiveRoom}
        onChangeChat={onChangeChat}
        chatOld={state.chatOld}
      />
      <ChatAlert />
      {chatAutoCreateFormConf && isOperatorRole && (
        <DeepLinkDialog
          open={deepLinkDialog.open}
          url={deepLinkDialog.url}
          onClose={() => setDeepLinkDialog({ open: false, url: "" })}
        />
      )}
    </ChatContainer>
  );
};

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks/useSocket";
import {
  ChatData,
  ConferenceData,
  Contact,
  Group,
  GroupMap,
  GroupMessage,
  JoinGroup,
  MessageOperation,
  PrivateMessage,
  SetActiveRoom,
  SetTyping,
  User,
  VisitData,
} from "../types";
import { allGather } from "../utils/common";
import { ChatContext, ChatDispatch } from "./ChatContext";
import { getRefreshToken } from "./RestContext";

// Формат ответа сервера
interface ServerRes {
  code: number;
  msg: string;
  data: unknown;
}

export interface ISocketContext {
  socket: Socket | null;
  online: boolean;
}
const initialContext = {
  online: false,
} as ISocketContext;

export const SocketContext: React.Context<ISocketContext> =
  createContext(initialContext);

type SocketProviderProps = {
  wsUrl: string;
  wsPath: string;
  baseUrl: string;
  children: React.JSX.Element;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({
  wsUrl,
  wsPath,
  baseUrl,
  children,
}: SocketProviderProps) => {
  const { state, dispatch } = useContext(ChatContext);
  const { socket, online, disconnectSocket, connectSocket } = useSocket(
    wsUrl,
    wsPath,
    state.token
  );

  useEffect(() => {
    if (state.token) {
      connectSocket();
    }
    if (!state.token) disconnectSocket();
    return () => {
      disconnectSocket();
    };
  }, [state.token]);

  // Consider creating a reusable error handler
  const handleSocketError = (res: ServerRes, dispatch: ChatDispatch) => {
    if (res.code) {
      dispatch({ type: "SET_ERROR", payload: res.msg });
      return true;
    }
    return false;
  };

  useEffect(() => {
    // listen unauthorized event
    const listener = (msg: string) => {
      console.log("unauthorized msg", msg);
      getRefreshToken(state.token, state.refreshToken, baseUrl);
    };
    socket?.on("unauthorized", listener);

    // listen chatData event
    const listener1 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;

      const payload = res.data as ChatData;
      const groupArr = payload.groupData;
      const contactArr = payload.contactData;
      const userArr = payload.userData;
      dispatch({ type: "CLEAR_CHAT_DATA" });
      dispatch({ type: "SET_USER", payload: payload.user });
      if (groupArr.length) {
        for (const group of groupArr) {
          socket?.emit("joinGroupSocket", {
            groupId: group.groupId,
          });
          dispatch({ type: "SET_GROUP_GATHER", payload: group });
        }
      }
      if (contactArr.length) {
        for (const contact of contactArr) {
          socket?.emit("joinPrivateSocket", {
            contactId: contact.userId,
          });
          dispatch({ type: "SET_CONTACT_GATHER", payload: contact });
        }
      }
      dispatch({
        type: "SET_OPERATORS",
        payload: payload.operatorData,
      });
      if (userArr.length) {
        for (const user_ of userArr) {
          dispatch({ type: "SET_USER_GATHER", payload: user_ });
        }
      }
      dispatch({ type: "UPDATE_ACTIVE_ROOM" });
      dispatch({
        type: "SET_CONFERENCE",
        payload: payload.conferenceData,
      });
      dispatch({
        type: "SET_VISIT_DATA",
        payload: payload.visitData,
      });
    };
    socket?.on("chatData", listener1);

    // listen user online
    const listener2 = (res: ServerRes) => {
      dispatch({ type: "USER_ONLINE", payload: res.data as number });
    };
    socket?.on("userOnline", listener2);

    // listen user offline
    const listener3 = (res: ServerRes) => {
      dispatch({ type: "USER_OFFLINE", payload: res.data as number });
    };
    socket?.on("userOffline", listener3);

    // listen private socket join
    const listener4 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      console.log("Успешно вошел в приватный чат");
    };
    socket?.on("joinPrivateSocket", listener4);

    // typing
    let typingTimer: ReturnType<typeof setTimeout>;
    const listener5 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      if (typingTimer) clearTimeout(typingTimer);
      dispatch({
        type: "SET_TYPING",
        payload: res.data as SetTyping,
      });
      typingTimer = setTimeout(() => {
        dispatch({ type: "SET_TYPING", payload: null });
      }, 1000);
    };
    socket?.on("typing", listener5);

    // revoke
    const listener6 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as MessageOperation;
      dispatch({ type: "REVOKE_MESSAGE", payload: data });
      console.log("REVOKE_MESSAGE");
    };
    socket?.on("revokeMessage", listener6);

    // set group gather
    const listener7 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "SET_GROUP_GATHER",
        payload: res.data as Group,
      });
    };
    socket?.on("addGroup", listener7);

    // set contact gather, user gather
    const listener8 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as Contact;
      dispatch({ type: "SET_CONTACT_GATHER", payload: data });
      dispatch({ type: "SET_USER_GATHER", payload: data });
      socket?.emit("joinPrivateSocket", {
        contactId: data.userId,
      });
    };
    socket?.on("addContact", listener8);

    // delete contact
    const listener10 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as Contact;
      dispatch({ type: "DEL_CONTACT", payload: data });
    };
    socket?.on("deleteContact", listener10);

    // update GroupInfo
    const listener11 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as Group;
      dispatch({ type: "UPDATE_GROUP_INFO", payload: data });
    };
    socket?.on("updateGroupInfo", listener11);

    // update UserInfo
    const listener12 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as User;
      dispatch({ type: "UPDATE_USER_INFO", payload: data });
    };
    socket?.on("updateUserInfo", listener12);

    // start Conference
    const listener13 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "SET_CONFERENCE",
        payload: res.data as ConferenceData,
      });
    };
    socket?.on("startConference", listener13);

    // pause Conference
    const listener14 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "PAUSE_CONFERENCE",
        payload: res.data as ConferenceData,
      });
    };
    socket?.on("pauseConference", listener14);

    // stop Conference
    const listener15 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "STOP_CONFERENCE",
        payload: res.data as ConferenceData,
      });
    };
    socket?.on("stopConference", listener15);

    // add Operator
    const listener16 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
    };
    socket?.on("addOperator", listener16);

    // set ActiveRoom
    const listener17 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: res.data as SetActiveRoom,
      });
    };
    socket?.on("setActiveRoom", listener17);

    // visit Data
    const listener18 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const payload = res.data as { visitData: VisitData };
      dispatch({
        type: "SET_VISIT_DATA",
        payload: payload.visitData,
      });
    };
    socket?.on("visitData", listener18);

    return () => {
      // detach
      socket?.off("unauthorized", listener);

      socket?.off("chatData", listener1);

      socket?.off("userOnline", listener2);

      socket?.off("userOffline", listener3);

      socket?.off("joinPrivateSocket", listener4);

      if (typingTimer) clearTimeout(typingTimer);
      socket?.off("typing", listener5);

      socket?.off("revokeMessage", listener6);

      socket?.off("addGroup", listener7);

      socket?.off("addContact", listener8);

      socket?.off("deleteContact", listener10);

      socket?.off("updateGroupInfo", listener11);

      socket?.off("updateUserInfo", listener12);

      socket?.off("startConference", listener13);

      socket?.off("pauseConference", listener14);

      socket?.off("stopConference", listener15);

      socket?.off("addOperator", listener16);

      socket?.off("setActiveRoom", listener17);

      socket?.off("visitData", listener18);
    };
  }, [socket?.id]);

  // group Message
  useEffect(() => {
    const listener = async (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as GroupMessage;
      dispatch({ type: "ADD_GROUP_MESSAGE", payload: data });
      if (data.userId !== state.user.userId) {
        socket?.emit("markAsRead", {
          groupId: data.groupId,
          _id: data._id,
        });
      }
    };
    socket?.on("groupMessage", listener);

    // private Message
    const listener1 = async (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as PrivateMessage;
      if (
        data.contactId === state.user.userId ||
        data.userId === state.user.userId
      ) {
        dispatch({
          type: "ADD_PRIVATE_MESSAGE",
          payload: data,
        });

        // если есть активная комната и это приватная комната (!groupId && userId) с отправителем сообщения (userId)
        if (state.activeRoom && state.activeRoom?.userId === data.userId) {
          socket?.emit("markAsRead", {
            contactId: data.userId,
            _id: data._id,
          });
        }
      }
    };

    socket?.on("privateMessage", listener1);

    return () => {
      socket?.off("groupMessage", listener);
      socket?.off("privateMessage", listener1);
    };
  }, [socket?.id, state.activeRoom?.userId, state.activeRoom?.groupId]);

  useEffect(() => {
    // mark As Read
    const listener = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as MessageOperation;
      if (data.userId === state.user.userId) {
        if (data.groupId) {
          dispatch({
            type: "LOSE_GROUP_UNREAD_GATHER",
            payload: data.groupId,
          });
        } else {
          dispatch({
            type: "LOSE_CONTACT_UNREAD_GATHER",
            payload: data.contactId,
          });
        }
      } else {
        if (data.contactId)
          dispatch({
            type: "MARK_PRIVATE_MESSAGES_READ",
            payload: data.userId,
          });
      }
    };
    socket?.on("markAsRead", listener);

    // delete Group
    const listener1 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as GroupMap;
      if (data.userId === state.user.userId) {
        // если удаляем себя из группы
        dispatch({ type: "DEL_GROUP", payload: data.groupId });
      } else {
        dispatch({ type: "DEL_GROUP_MEMBER", payload: data });
      }
    };
    socket?.on("deleteGroup", listener1);

    const listener2 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const { group, user: newUser } = res.data as JoinGroup;

      if (!state.groupGather[group.groupId]) {
        console.log("joined to a new group");
        // Если группы еще у нас нет, то получаем информацию о пользователях в группе
        socket?.emit("chatData");
      } else if (newUser.userId !== state.user.userId) {
        // Новые пользователи присоединяются к группе
        dispatch({
          type: "ADD_GROUP_MEMBER",
          payload: {
            groupId: group.groupId,
            members: [newUser],
          },
        });
      }
    };
    socket?.on("joinGroup", listener2);

    // listen group socket join
    const listener4 = (res: ServerRes) => {
      if (handleSocketError(res, dispatch)) return;
      const data = res.data as JoinGroup;
      const newUser: Contact = data.user;
      newUser.online = 1;
      const { group } = data;
      const groupObj = state.groupGather[group.groupId];
      // Информация о присоединении к группе новых пользователей
      if (
        groupObj &&
        !groupObj.members?.find((member) => member.userId === newUser.userId)
      ) {
        newUser.isManager = 0;
        groupObj.members?.push(newUser);
        // Vue.prototype.$message.info(res.msg);
      }
      dispatch({ type: "SET_USER_GATHER", payload: newUser });
    };
    socket?.on("joinGroupSocket", listener4);

    return () => {
      socket?.off("markAsRead", listener);

      socket?.off("deleteGroup", listener1);

      socket?.off("joinGroup", listener2);

      socket?.off("joinGroupSocket", listener4);
    };
  }, [socket?.id, state.user.userId, allGather(state.groupGather)]);

  const value = useMemo(() => ({ socket, online }), [socket, online]);

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

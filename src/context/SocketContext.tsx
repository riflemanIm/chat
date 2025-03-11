import React, { createContext, useContext, useEffect, useMemo } from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks/useSocket";
import {
  ChatData,
  Contact,
  Group,
  GroupMessage,
  JoinGroup,
  MessageOperation,
  PrivateMessage,
  SetTyping,
  User,
  ConferenceData,
  SetActiveRoom,
  GroupMap,
  VisitData,
} from "../types";
import { ChatContext } from "./ChatContext";
import { getRefreshToken } from "./RestContext";
import { allMessCount } from "../utils/common";
import { createSocketHandlers } from "./socketHandlers";
import { useSocketEvent } from "../hooks/useSocketEvent";
import { SOCKET_EVENTS } from "../types/socketEvents";

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
  children: React.JSX.Element;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({
  wsUrl,
  wsPath,
  children,
}: SocketProviderProps) => {
  const { state, dispatch } = useContext(ChatContext);
  const { socket, online, disconnectSocket, connectSocket } = useSocket(
    wsUrl,
    wsPath,
    state.token
  );

  const handlers = useMemo(
    () => createSocketHandlers(dispatch, socket, state),
    [dispatch, socket, state]
  );

  // Connection management
  useEffect(() => {
    if (state.token) {
      connectSocket();
    } else {
      disconnectSocket();
    }
    return () => disconnectSocket();
  }, [state.token]);

  // Auth events
  useSocketEvent<string>(socket, SOCKET_EVENTS.UNAUTHORIZED, (msg) => {
    console.log("unauthorized msg", msg);
    getRefreshToken(state.token, state.refreshToken, dispatch);
  });

  // Chat data events
  useSocketEvent<ChatData>(socket, SOCKET_EVENTS.CHAT_DATA, (data) => {
    dispatch({ type: "CLEAR_CHAT_DATA" });
    dispatch({ type: "SET_USER", payload: data.user });

    data.groupData.forEach((group) => {
      socket?.emit(SOCKET_EVENTS.JOIN_GROUP_SOCKET, { groupId: group.groupId });
      dispatch({ type: "SET_GROUP_GATHER", payload: group });
    });

    data.contactData.forEach((contact) => {
      socket?.emit(SOCKET_EVENTS.JOIN_PRIVATE_SOCKET, {
        contactId: contact.userId,
      });
      dispatch({ type: "SET_CONTACT_GATHER", payload: contact });
    });

    dispatch({ type: "SET_OPERATORS", payload: data.operatorData });
    data.userData.forEach((user) =>
      dispatch({ type: "SET_USER_GATHER", payload: user })
    );

    dispatch({ type: "UPDATE_ACTIVE_ROOM" });
    dispatch({ type: "SET_CONFERENCE", payload: data.conferenceData });
    dispatch({ type: "SET_VISIT_DATA", payload: data.visitData });
  });

  // User status events
  useSocketEvent<number>(socket, SOCKET_EVENTS.USER_ONLINE, (userId) => {
    dispatch({ type: "USER_ONLINE", payload: userId });
  });

  useSocketEvent<number>(socket, SOCKET_EVENTS.USER_OFFLINE, (userId) => {
    dispatch({ type: "USER_OFFLINE", payload: userId });
  });

  // Private socket events
  useSocketEvent<void>(socket, SOCKET_EVENTS.JOIN_PRIVATE_SOCKET, () => {
    console.log("Успешно вошел в приватный чат");
  });

  // Typing events
  useSocketEvent<SetTyping>(socket, SOCKET_EVENTS.TYPING, (data) => {
    dispatch({ type: "SET_TYPING", payload: data });
    setTimeout(() => {
      dispatch({ type: "SET_TYPING", payload: null });
    }, 1000);
  });

  // Message events
  useSocketEvent<MessageOperation>(
    socket,
    SOCKET_EVENTS.REVOKE_MESSAGE,
    (data) => {
      dispatch({ type: "REVOKE_MESSAGE", payload: data });
    }
  );

  useSocketEvent<GroupMessage>(
    socket,
    SOCKET_EVENTS.GROUP_MESSAGE,
    (data) => {
      dispatch({ type: "ADD_GROUP_MESSAGE", payload: data });
      const { activeRoom } = state;
      if (
        activeRoom &&
        (activeRoom as Group).groupId === data.groupId &&
        data.userId !== state.user.userId
      ) {
        socket?.emit("markAsRead", { groupId: data.groupId, _id: data._id });
      }
    },
    [state.activeRoom, state.user.userId]
  );

  useSocketEvent<PrivateMessage>(
    socket,
    SOCKET_EVENTS.PRIVATE_MESSAGE,
    (data) => {
      if (
        data.contactId === state.user.userId ||
        data.userId === state.user.userId
      ) {
        dispatch({ type: "ADD_PRIVATE_MESSAGE", payload: data });
        if (
          state.activeRoom &&
          !(state.activeRoom as Group).groupId &&
          state.activeRoom?.userId === data.userId
        ) {
          socket?.emit("markAsRead", { contactId: data.userId, _id: data._id });
        }
      }
    },
    [state.activeRoom, state.user.userId]
  );

  // Group events
  useSocketEvent<Group>(socket, SOCKET_EVENTS.ADD_GROUP, (data) => {
    dispatch({ type: "SET_GROUP_GATHER", payload: data });
  });

  useSocketEvent<GroupMap>(
    socket,
    SOCKET_EVENTS.DELETE_GROUP,
    (data) => {
      if (data.userId === state.user.userId) {
        dispatch({ type: "DEL_GROUP", payload: data.groupId });
      } else {
        dispatch({ type: "DEL_GROUP_MEMBER", payload: data });
      }
    },
    [state.user.userId]
  );

  useSocketEvent<JoinGroup>(
    socket,
    SOCKET_EVENTS.JOIN_GROUP,
    (data) => {
      const { group, user: newUser } = data;
      if (!state.groupGather[group.groupId]) {
        socket?.emit("chatData");
      } else if (newUser.userId !== state.user.userId) {
        dispatch({
          type: "ADD_GROUP_MEMBER",
          payload: { groupId: group.groupId, members: [newUser] },
        });
      }
    },
    [state.groupGather, state.user.userId]
  );

  useSocketEvent<JoinGroup>(
    socket,
    SOCKET_EVENTS.JOIN_GROUP_SOCKET,
    (data) => {
      const newUser: Contact = { ...data.user, online: 1, isManager: 0 };
      const groupObj = state.groupGather[data.group.groupId];
      if (
        groupObj &&
        !groupObj.members?.find((member) => member.userId === newUser.userId)
      ) {
        groupObj.members?.push(newUser);
      }
      dispatch({ type: "SET_USER_GATHER", payload: newUser });
    },
    [state.groupGather]
  );

  // Contact events
  useSocketEvent<Contact>(socket, SOCKET_EVENTS.ADD_CONTACT, (data) => {
    dispatch({ type: "SET_CONTACT_GATHER", payload: data });
    dispatch({ type: "SET_USER_GATHER", payload: data });
    socket?.emit("joinPrivateSocket", { contactId: data.userId });
  });

  useSocketEvent<Contact>(socket, SOCKET_EVENTS.DELETE_CONTACT, (data) => {
    dispatch({ type: "DEL_CONTACT", payload: data });
  });

  // Info update events
  useSocketEvent<Group>(socket, SOCKET_EVENTS.UPDATE_GROUP_INFO, (data) => {
    dispatch({ type: "UPDATE_GROUP_INFO", payload: data });
  });

  // Add error handling
  useSocketEvent<User>(socket, SOCKET_EVENTS.UPDATE_USER_INFO, (data) => {
    try {
      dispatch({ type: "UPDATE_USER_INFO", payload: data });
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  });

  // Conference events
  useSocketEvent<ConferenceData>(
    socket,
    SOCKET_EVENTS.START_CONFERENCE,
    (data) => {
      dispatch({ type: "SET_CONFERENCE", payload: data });
    }
  );

  useSocketEvent<ConferenceData>(
    socket,
    SOCKET_EVENTS.PAUSE_CONFERENCE,
    (data) => {
      dispatch({ type: "PAUSE_CONFERENCE", payload: data });
    }
  );

  useSocketEvent<ConferenceData>(
    socket,
    SOCKET_EVENTS.STOP_CONFERENCE,
    (data) => {
      dispatch({ type: "STOP_CONFERENCE", payload: data });
    }
  );

  // Other events
  useSocketEvent<void>(socket, SOCKET_EVENTS.ADD_OPERATOR, () => {
    // Handle operator addition if needed
  });

  useSocketEvent<SetActiveRoom>(
    socket,
    SOCKET_EVENTS.SET_ACTIVE_ROOM,
    (data) => {
      dispatch({ type: "SET_ACTIVE_ROOM", payload: data });
    }
  );

  useSocketEvent<{ visitData: VisitData }>(
    socket,
    SOCKET_EVENTS.VISIT_DATA,
    (data) => {
      dispatch({ type: "SET_VISIT_DATA", payload: data.visitData });
    }
  );

  const value = useMemo(() => ({ socket, online }), [socket, online]);

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

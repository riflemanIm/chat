import React, { createContext, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';
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
} from '../types';
import { ChatContext } from './ChatContext';

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

export const SocketContext: React.Context<ISocketContext> = createContext(
  initialContext,
);

type SocketProviderProps = {
  wsUrl: string;
  wsPath: string;
  children: JSX.Element;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({
  wsUrl,
  wsPath,
  children,
}: SocketProviderProps) => {
  const { state, dispatch } = useContext(ChatContext);
  const {
    socket,
    online,
    disconnectSocket,
    connectSocket,
  } = useSocket(wsUrl, wsPath, state.token);

  useEffect(() => {
    if (state.token) {
      connectSocket();
    }
    return () => {
      disconnectSocket();
    };
  }, [state.token, connectSocket]);

  useEffect(() => {
    if (!state.token) disconnectSocket();
  }, [state.token, disconnectSocket]);

  // listen unauthorized event
  useEffect(() => {
    const listener = (msg: string) => {
      console.log('unauthorized msg', msg);
      dispatch({ type: 'CLEAR_USER' });
    };

    // attach
    socket?.on('unauthorized', listener);
    // detatch
    return () => {
      socket?.off('unauthorized', listener);
    };
  }, [socket?.id]);

  // listen chatData event
  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const payload = res.data as ChatData;
      const groupArr = payload.groupData;
      const contactArr = payload.contactData;
      const userArr = payload.userData;
      dispatch({ type: 'CLEAR_CHAT_DATA' });
      dispatch({ type: 'SET_USER', payload: payload.user });
      if (groupArr.length) {
        for (const group of groupArr) {
          socket?.emit('joinGroupSocket', {
            groupId: group.groupId,
          });
          dispatch({ type: 'SET_GROUP_GATHER', payload: group });
        }
      }
      if (contactArr.length) {
        for (const contact of contactArr) {
          socket?.emit('joinPrivateSocket', {
            contactId: contact.userId,
          });
          dispatch({ type: 'SET_CONTACT_GATHER', payload: contact });
        }
      }
      dispatch({
        type: 'SET_OPERATORS',
        payload: payload.operatorData,
      });
      if (userArr.length) {
        for (const user_ of userArr) {
          dispatch({ type: 'SET_USER_GATHER', payload: user_ });
        }
      }
      dispatch({ type: 'UPDATE_ACTIVE_ROOM' });
      dispatch({
        type: 'SET_CONFERENCE',
        payload: payload.conferenceData,
      });
    };
    socket?.on('chatData', listener);
    return () => {
      socket?.off('chatData', listener);
    };
  }, [socket?.id]);

  // listen user online
  useEffect(() => {
    const listener = (res: ServerRes) => {
      dispatch({ type: 'USER_ONLINE', payload: res.data as number });
    };
    socket?.on('userOnline', listener);
    return () => {
      socket?.off('userOnline', listener);
    };
  }, [socket?.id]);

  // listen user offline
  useEffect(() => {
    const listener = (res: ServerRes) => {
      dispatch({ type: 'USER_OFFLINE', payload: res.data as number });
    };
    socket?.on('userOffline', listener);
    return () => {
      socket?.off('userOffline', listener);
    };
  }, [socket?.id]);

  // listen private socket join
  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      console.log('Успешно вошел в приватный чат');
    };
    socket?.on('joinPrivateSocket', listener);
    return () => {
      socket?.off('joinPrivateSocket', listener);
    };
  }, [socket?.id]);

  // listen group socket join
  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as JoinGroup;
      const newUser: Contact = data.user;
      newUser.online = 1;
      const { group } = data;
      const groupObj = state.groupGather[group.groupId];
      // Информация о присоединении к группе новых пользователей
      if (
        groupObj &&
        !groupObj.members?.find(
          member => member.userId === newUser.userId,
        )
      ) {
        newUser.isManager = 0;
        groupObj.members?.push(newUser);
        // Vue.prototype.$message.info(res.msg);
      }
      dispatch({ type: 'SET_USER_GATHER', payload: newUser });
    };
    socket?.on('joinGroupSocket', listener);
    return () => {
      socket?.off('joinGroupSocket', listener);
    };
  }, [socket?.id, state.groupGather]);

  useEffect(() => {
    const listener = async (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as GroupMessage;
      dispatch({ type: 'ADD_GROUP_MESSAGE', payload: data });
      const { activeRoom } = state;
      if (
        activeRoom &&
        (activeRoom as Group).groupId === data.groupId &&
        data.userId !== state.user.userId
      ) {
        socket?.emit('markAsRead', {
          groupId: data.groupId,
          _id: data._id,
        });
      }
    };

    socket?.on('groupMessage', listener);
    return () => {
      socket?.off('groupMessage', listener);
    };
  }, [socket?.id, state.activeRoom]);

  useEffect(() => {
    const listener = async (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as PrivateMessage;
      if (
        data.contactId === state.user.userId ||
        data.userId === state.user.userId
      ) {
        dispatch({
          type: 'ADD_PRIVATE_MESSAGE',
          payload: data,
        });

        // если есть активная комната и это приватная комната (!groupId && userId) с отправителем сообщения (userId)
        if (
          state.activeRoom &&
          !(state.activeRoom as Group).groupId &&
          state.activeRoom?.userId === data.userId
        ) {
          socket?.emit('markAsRead', {
            contactId: data.userId,
            _id: data._id,
          });
        }
      }
    };

    socket?.on('privateMessage', listener);
    return () => {
      socket?.off('privateMessage', listener);
    };
  }, [socket?.id, state.activeRoom]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      if (timer) clearTimeout(timer);
      dispatch({
        type: 'SET_TYPING',
        payload: res.data as SetTyping,
      });
      timer = setTimeout(() => {
        dispatch({ type: 'SET_TYPING', payload: null });
      }, 1000);
    };
    socket?.on('typing', listener);
    return () => {
      if (timer) clearTimeout(timer);
      socket?.off('typing', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as MessageOperation;
      if (data.userId === state.user.userId) {
        if (data.groupId) {
          dispatch({
            type: 'LOSE_GROUP_UNREAD_GATHER',
            payload: data.groupId,
          });
        } else {
          dispatch({
            type: 'LOSE_CONTACT_UNREAD_GATHER',
            payload: data.contactId,
          });
        }
      } else {
        if (data.contactId)
          dispatch({
            type: 'MARK_PRIVATE_MESSAGES_READ',
            payload: data.userId,
          });
      }
    };
    socket?.on('markAsRead', listener);
    return () => {
      socket?.off('markAsRead', listener);
    };
  }, [socket?.id, state.user.userId]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as MessageOperation;
      dispatch({ type: 'REVOKE_MESSAGE', payload: data });
    };
    socket?.on('revokeMessage', listener);
    return () => {
      socket?.off('revokeMessage', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      dispatch({
        type: 'SET_GROUP_GATHER',
        payload: res.data as Group,
      });
    };
    socket?.on('addGroup', listener);
    return () => {
      socket?.off('addGroup', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as Contact;
      dispatch({ type: 'SET_CONTACT_GATHER', payload: data });
      dispatch({ type: 'SET_USER_GATHER', payload: data });
      socket?.emit('joinPrivateSocket', {
        contactId: data.userId,
      });
    };
    socket?.on('addContact', listener);
    return () => {
      socket?.off('addContact', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as GroupMap;
      if (data.userId === state.user.userId) {
        // если удаляем себя из группы
        dispatch({ type: 'DEL_GROUP', payload: data.groupId });
      } else {
        dispatch({ type: 'DEL_GROUP_MEMBER', payload: data });
      }
    };
    socket?.on('deleteGroup', listener);
    return () => {
      socket?.off('deleteGroup', listener);
    };
  }, [socket?.id, state.user]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as Contact;
      dispatch({ type: 'DEL_CONTACT', payload: data });
    };
    socket?.on('deleteContact', listener);
    return () => {
      socket?.off('deleteContact', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as Group;
      dispatch({ type: 'UPDATE_GROUP_INFO', payload: data });
    };
    socket?.on('updateGroupInfo', listener);
    return () => {
      socket?.off('updateGroupInfo', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const data = res.data as User;
      dispatch({ type: 'UPDATE_USER_INFO', payload: data });
    };
    socket?.on('updateUserInfo', listener);
    return () => {
      socket?.off('updateUserInfo', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      const { group, user: newUser } = res.data as JoinGroup;

      if (!state.groupGather[group.groupId]) {
        console.log('joined to a new group');
        // Если группы еще у нас нет, то получаем информацию о пользователях в группе
        socket?.emit('chatData');
      } else if (newUser.userId !== state.user.userId) {
        // Новые пользователи присоединяются к группе
        dispatch({
          type: 'ADD_GROUP_MEMBER',
          payload: {
            groupId: group.groupId,
            members: [newUser],
          },
        });
      }
    };
    socket?.on('joinGroup', listener);
    return () => {
      socket?.off('joinGroup', listener);
    };
  }, [socket?.id, state.user, state.groupGather]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      dispatch({
        type: 'SET_CONFERENCE',
        payload: res.data as ConferenceData,
      });
    };
    socket?.on('startConference', listener);
    return () => {
      socket?.off('startConference', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      dispatch({
        type: 'PAUSE_CONFERENCE',
        payload: res.data as ConferenceData,
      });
    };
    socket?.on('pauseConference', listener);
    return () => {
      socket?.off('pauseConference', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      dispatch({
        type: 'STOP_CONFERENCE',
        payload: res.data as ConferenceData,
      });
    };
    socket?.on('stopConference', listener);
    return () => {
      socket?.off('stopConference', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
    };
    socket?.on('addOperator', listener);
    return () => {
      socket?.off('addOperator', listener);
    };
  }, [socket?.id]);

  useEffect(() => {
    const listener = (res: ServerRes) => {
      if (res.code) {
        dispatch({ type: 'SET_ERROR', payload: res.msg });
        return;
      }
      dispatch({
        type: 'SET_ACTIVE_ROOM',
        payload: res.data as SetActiveRoom,
      });
    };
    socket?.on('setActiveRoom', listener);
    return () => {
      socket?.off('setActiveRoom', listener);
    };
  }, [socket?.id]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

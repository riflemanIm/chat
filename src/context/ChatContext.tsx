import React, { useMemo } from "react";
import {
  AddGroupMessages,
  AddPrivateMessages,
  ChatRoom,
  ConferenceData,
  Contact,
  ContactGather,
  Group,
  GroupGather,
  GroupMap,
  GroupMember,
  GroupMessage,
  MessageOperation,
  PrivateMessage,
  SetActiveRoom,
  //SetUser,
  SetTyping,
  User,
  VisitData,
} from "../types";
import { chatRoomComparer } from "../utils/common";

export interface ChatState {
  user: User;
  token: string;
  refreshToken: string;
  activeRoom: ChatRoom | null;
  chatOld: ChatRoom | null;
  messageSearch: string;

  groupGather: GroupGather;
  userGather: ContactGather;
  contactGather: ContactGather;
  operators: Contact[];
  initialContactId: number | null;
  conference: {
    data: ConferenceData | null;
    joined: boolean;
    ringPlayed: boolean;
    paused: boolean;
  };
  typing: SetTyping | null;
  loading: boolean;
  error?: string;
  success?: string;
  visitData: VisitData[];
}

const emptyUser: User = {
  userId: 0,
  username: "",
  password: "",
  avatar: "",
  langCode: "",
};

const emptyChatState: ChatState = {
  user: emptyUser, // пользователь
  token: "", // токен
  refreshToken: "",
  activeRoom: null, // активная комната
  chatOld: null, // активная комната
  messageSearch: "",

  groupGather: {}, // список групп
  userGather: {}, // список онлайн
  contactGather: {}, // контакты
  operators: [], // операторы
  initialContactId: null, // начальный контакт
  conference: {
    data: null, // данные конференции
    joined: false,
    ringPlayed: false,
    paused: false,
  },
  typing: null, // кто печатает текст
  loading: false, // загрузка данных
  error: undefined, // ошибка
  success: undefined, // НЕ ошибка
  visitData: [],
};

type ChatActionType =
  | "ADD_GROUP_MEMBER"
  | "ADD_GROUP_MESSAGE"
  | "ADD_GROUP_MESSAGES"
  | "SET_GROUP_MESSAGES"
  | "ADD_PRIVATE_MESSAGE"
  | "ADD_PRIVATE_MESSAGES"
  | "SET_PRIVATE_MESSAGES"
  | "SET_ACTIVE_ROOM"
  | "UPDATE_ACTIVE_ROOM"
  | "SET_GROUP_GATHER"
  | "SET_CONTACT_GATHER"
  | "SET_USER_GATHER"
  | "DEL_GROUP"
  | "DEL_GROUP_MEMBER"
  | "DEL_CONTACT"
  | "ADD_CONTACT_UNREAD_GATHER"
  | "LOSE_CONTACT_UNREAD_GATHER"
  | "ADD_GROUP_UNREAD_GATHER"
  | "LOSE_GROUP_UNREAD_GATHER"
  | "REVOKE_MESSAGE"
  | "USER_ONLINE"
  | "USER_OFFLINE"
  | "UPDATE_USER_INFO"
  | "SET_INITIAL_CONTACT_ID"
  | "SET_CONFERENCE"
  | "JOIN_CONFERENCE"
  | "PAUSE_CONFERENCE"
  | "RESUME_CONFERENCE"
  | "STOP_CONFERENCE"
  | "SET_TYPING"
  | "MARK_AS_READ"
  | "UPDATE_GROUP_INFO"
  | "MARK_PRIVATE_MESSAGES_READ"
  | "SET_LOADING"
  | "SET_ERROR"
  | "SET_SUCCES"
  | "SET_MESSAGE_SEARCH"
  | "SET_USER"
  | "SET_TOKEN"
  | "CLEAR_USER"
  | "CLEAR_CHAT_DATA"
  | "SET_OPERATORS"
  | "SET_VISIT_DATA";

type Action = {
  type: ChatActionType;
  payload?:
    | null
    | boolean
    | number
    | string
    | Group
    | Contact
    | User
    | PrivateMessage
    | GroupMessage
    | SetTyping
    | MessageOperation
    | GroupMember
    | AddPrivateMessages
    | AddGroupMessages
    | SetActiveRoom
    | ConferenceData
    | Contact[]
    | GroupMap
    | VisitData[];
};

const getFreshActiveRoom = (state: ChatState) => {
  if (state.activeRoom)
    return (
      state.groupGather[(state.activeRoom as Group).groupId] ||
      state.contactGather[state.activeRoom.userId]
    );
  return null;
};

const getActiveRoom = (state: ChatState) => {
  const { activeRoom, initialContactId, contactGather } = state;
  let newActiveRoom: ChatRoom | null = null;
  if (initialContactId) {
    newActiveRoom = contactGather[initialContactId];
  } else if (activeRoom) {
    newActiveRoom = getFreshActiveRoom(state);
  } else {
    // ищем комнату с самым свежим сообщением
    const rooms = [
      ...Object.values(state.contactGather),
      ...Object.values(state.groupGather),
    ].sort(chatRoomComparer);
    if (rooms.length > 0) newActiveRoom = rooms[0];
  }
  return newActiveRoom;
};

const isConferencePaused = (
  conference: ConferenceData | null | undefined,
  visitData: VisitData[]
) => {
  if (!conference) return false;
  const rawStatus =
    typeof (conference as any)?.status !== "undefined"
      ? (conference as any).status
      : (conference as any)?.conferenceStatus;

  if (typeof rawStatus !== "undefined" && rawStatus !== null) {
    const normalized =
      typeof rawStatus === "string"
        ? rawStatus.toLowerCase()
        : Number(rawStatus);
    if (normalized === 2 || normalized === "paused") {
      return true;
    }
    return false;
  }

  if (Array.isArray(visitData) && conference.contactId != null) {
    return visitData.some(
      (visit) =>
        visit.contactId === conference.contactId &&
        visit.conferenceStatus === "paused"
    );
  }

  return false;
};

const setUserOnline = (
  state: ChatState,
  userId: number,
  online: 0 | 1
): ChatState => {
  const newState = { ...state };
  // Обновить статусы приватных чатов
  if (state.contactGather[userId])
    newState.contactGather[userId] = {
      ...newState.contactGather[userId],
      online,
    };

  // Обновить статус участника в группах
  for (const group of Object.values(state.groupGather) as Group[]) {
    if (!group.members) continue;
    const member = group.members.find((m) => m.userId === userId);
    if (member) {
      const index = group.members.indexOf(member);
      group.members[index] = { ...member, online };
    }
  }
  // Обновить статус операторов
  const idx = newState.operators.findIndex((it) => it.userId === userId);
  if (idx !== -1)
    newState.operators[idx] = { ...newState.operators[idx], online };
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

const addGroupMessage = (state: ChatState, payload: GroupMessage) => {
  const newState = { ...state };
  const { groupId } = payload;
  if (newState.groupGather[groupId]) {
    if (newState.groupGather[groupId].messages) {
      newState.groupGather[groupId].messages = [
        ...(newState.groupGather[groupId].messages as GroupMessage[]),
        payload,
      ];
    } else {
      newState.groupGather[groupId] = {
        ...state.groupGather[groupId],
        messages: [payload],
      };
    }
  }

  // увеличиваем счетчик новых сообщений, если это не активная комната и сообщение не от нас
  const { activeRoom } = newState;
  if (
    activeRoom &&
    (activeRoom as Group).groupId !== groupId &&
    payload.userId !== state.user.userId
  ) {
    return groupUnreadGather(newState, groupId, (x?: number) => (x || 0) + 1);
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

const addPrivateMessage = (state: ChatState, payload: PrivateMessage) => {
  const newState = { ...state };
  const contactId =
    payload.contactId === state.user.userId
      ? payload.userId
      : payload.contactId;

  // 1 добавляем сообщение
  if (newState.contactGather[contactId].messages) {
    newState.contactGather[contactId].messages = [
      ...(newState.contactGather[contactId].messages as PrivateMessage[]),
      payload,
    ];
  } else {
    newState.contactGather[contactId] = {
      ...newState.contactGather[contactId],
      messages: [payload],
    };
  }

  // 2 если это сообщение в неактивной комнате и источник не мы (в соседней вкладке), то увеличиваем счетчик непрочитанных
  if (
    newState.activeRoom?.userId !== contactId &&
    payload.userId !== state.user.userId
  ) {
    return contactUnreadGather(
      newState,
      contactId,
      (x?: number) => (x || 0) + 1
    );
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

const contactUnreadGather = (
  state: ChatState,
  userId: number,
  predicate: (x?: number) => number
) => {
  const contact = state.contactGather[userId];
  if (!contact) {
    return state;
  }

  const nextUnread = predicate(contact.unreadCount);
  const currentUnread = contact.unreadCount ?? 0;

  if (nextUnread === currentUnread) {
    return state;
  }

  const contactGather = {
    ...state.contactGather,
    [userId]: {
      ...contact,
      unreadCount: nextUnread,
    },
  };

  const newState: ChatState = {
    ...state,
    contactGather,
  };

  newState.activeRoom = getFreshActiveRoom(newState);

  return newState;
};

const groupUnreadGather = (
  state: ChatState,
  groupId: number,
  predicate: (x?: number) => number
) => {
  const group = state.groupGather[groupId];
  if (!group) {
    return state;
  }

  const nextUnread = predicate(group.unreadCount);
  const currentUnread = group.unreadCount ?? 0;

  if (nextUnread === currentUnread) {
    return state;
  }

  const groupGather = {
    ...state.groupGather,
    [groupId]: {
      ...group,
      unreadCount: nextUnread,
    },
  };

  const newState: ChatState = {
    ...state,
    groupGather,
  };

  newState.activeRoom = getFreshActiveRoom(newState);

  return newState;
};

const revokeMessage = (state: ChatState, payload: MessageOperation) => {
  const { userId } = state.user;
  const newState = { ...state };
  const userName =
    payload.username || newState.userGather[payload.userId as number].username;
  if (payload.groupId) {
    const { messages } = newState.groupGather[payload.groupId];
    // задаем isRevoke
    if (messages) {
      const msg = messages.find((message) => message._id === payload._id);
      if (msg) {
        const index = messages.indexOf(msg);
        messages[index] = {
          ...msg,
          isRevoke: true,
          revokeUserName: userName,
        };
      }
    }
  } else {
    const { messages } =
      newState.contactGather[
        payload.contactId === userId
          ? (payload.userId as number)
          : (payload.contactId as number)
      ];
    // задаем isRevoke
    if (messages) {
      const msg = messages.find((message) => message._id === payload._id);
      if (msg) {
        const index = messages.indexOf(msg);
        messages[index] = {
          ...msg,
          isRevoke: true,
          revokeUserName: userName,
        };
      }
    }
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

const delContact = (state: ChatState, userId: number) => {
  const newState = { ...state };
  const updateActiveRoom =
    newState.activeRoom === newState.contactGather[userId];
  delete newState.contactGather[userId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);

  return newState;
};

const delGroup = (state: ChatState, groupId: number) => {
  const newState = { ...state };
  const updateActiveRoom =
    newState.activeRoom === newState.groupGather[groupId];
  delete newState.groupGather[groupId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);

  return newState;
};

const delGroupMember = (state: ChatState, data: GroupMap) => {
  const newState = { ...state };

  const group = newState.groupGather[data.groupId];
  if (group) {
    group.members = group.members?.filter((it) => it.userId !== data.userId);
  }

  return newState;
};

const updateGroupInfo = (state: ChatState, group: Group) => {
  const newState = { ...state };

  const { groupId, name, notice } = group;
  const info = newState.groupGather[groupId];
  if (info) {
    newState.groupGather[groupId] = { ...info, name, notice };
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);

  return newState;
};

const updateUserInfo = (state: ChatState, user: User) => {
  const newState = { ...state };

  const { userId, username, avatar } = user;

  if (newState.userGather[userId]) {
    newState.userGather[userId] = {
      ...newState.userGather[userId],
      username,
      avatar,
    };
  }

  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = {
      ...newState.contactGather[userId],
      username,
      avatar,
    };
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);

  return newState;
};

const addGroupMember = (state: ChatState, payload: GroupMember) => {
  const members: Contact[] = payload.members.map((member) => ({
    ...member,
    isManager: 0,
  }));

  const newState = { ...state };

  if (newState.groupGather[payload.groupId].members && members) {
    newState.groupGather[payload.groupId].members = [
      ...(state.groupGather[payload.groupId].members as Contact[]),
      ...members,
    ];
  } else {
    newState.groupGather[payload.groupId] = {
      ...newState.groupGather[payload.groupId],
      members,
    };
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};

const markPrivateMessagesRead = (state: ChatState, userId: number) => {
  const contact = state.contactGather[userId];
  if (!contact) {
    return state;
  }

  const hasUnread =
    (contact.unreadCount ?? 0) > 0 ||
    (contact.messages?.some((message) => message.status !== 1) ?? false);

  if (!hasUnread) {
    return state;
  }

  const normalizedMessages = contact.messages
    ? contact.messages.map((message) =>
        message.status === 1 ? message : { ...message, status: 1 }
      )
    : contact.messages;

  const updatedContact: Contact = {
    ...contact,
    unreadCount: 0,
    messages: normalizedMessages,
  };

  const contactGather = {
    ...state.contactGather,
    [userId]: updatedContact,
  };

  const newState: ChatState = {
    ...state,
    contactGather,
  };

  const isActiveContact =
    state.activeRoom != null &&
    !(state.activeRoom as Group).groupId &&
    state.activeRoom.userId === userId;

  if (isActiveContact) {
    newState.activeRoom = {
      ...updatedContact,
      messages: normalizedMessages,
    };
  } else {
    newState.activeRoom = getFreshActiveRoom(newState);
  }

  return newState;
};

const addPrivateMessages = (state: ChatState, data: AddPrivateMessages) => {
  const newState = { ...state };

  const { messages, contactId, reset } = data;
  const contact = newState.contactGather[contactId];

  if (contact) {
    const existingMessages = contact.messages || [];
    const nextMessages = reset
      ? [...(messages || [])]
      : [...(messages || []), ...existingMessages];

    newState.contactGather[contactId] = {
      ...contact,
      messages: nextMessages,
      noMoreData: messages?.length ? messages.length < data.pageSize : true,
    };
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);

  return newState;
};

const addGroupMessages = (state: ChatState, data: AddGroupMessages) => {
  const newState = { ...state };

  const { groupId, messages, userArr: users, reset } = data;
  const group = newState.groupGather[groupId];
  if (group) {
    const existingMessages = group.messages || [];
    const nextMessages = reset
      ? [...(messages || [])]
      : [...(messages || []), ...existingMessages];

    newState.groupGather[groupId] = {
      ...group,
      messages: nextMessages,
      noMoreData: messages?.length ? messages.length < data.pageSize : true,
    };
  }

  newState.userGather = { ...newState.userGather };
  for (const user of users) {
    if (!newState.userGather[user.userId]) {
      newState.userGather[user.userId] = user;
    }
  }

  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);

  return newState;
};

const setActiveRoom = (state: ChatState, data: SetActiveRoom) => {
  const nextActiveRoom = data.groupId
    ? state.groupGather[data.groupId]
    : data.contactId
      ? state.contactGather[data.contactId]
      : null;

  return {
    ...state,
    chatOld: state.activeRoom != null ? { ...state.activeRoom } : null,
    activeRoom: nextActiveRoom ?? null,
    messageSearch: "",
  };
};

const setToken = (state: ChatState, token: string): ChatState => {
  return {
    ...state,
    token,
  };
};

const clearUser = (state: ChatState): ChatState => {
  return {
    ...state,
    token: "",
    user: emptyUser,
  };
};

const setConference = (
  state: ChatState,
  conference: ConferenceData | null
): ChatState => {
  if (!conference) {
    return {
      ...state,
      conference: {
        data: null,
        joined: false,
        ringPlayed: false,
        paused: false,
      },
    };
  }

  return {
    ...state,
    conference: {
      data: { ...conference },
      joined: conference.userId === state.user.userId,
      ringPlayed: conference.userId !== state.user.userId,
      paused: isConferencePaused(conference, state.visitData),
    },
  };
};

const pauseConference = (
  state: ChatState,
  conference: ConferenceData | null
): ChatState => {
  if (state.conference.data?.id !== conference?.id) return state;

  return {
    ...state,
    conference: {
      ...state.conference,
      paused: true,
    },
  };
};

const stopConference = (
  state: ChatState,
  conference: ConferenceData
): ChatState => {
  if (state.conference.data?.id !== conference?.id) return state;
  return {
    ...state,
    conference: {
      data: null,
      joined: false,
      ringPlayed: false,
      paused: false,
    },
  };
};

const resumeConference = (
  state: ChatState,
  conference?: ConferenceData | null
): ChatState => {
  if (state.conference.data?.id !== conference?.id) return state;

  return {
    ...state,
    conference: {
      ...state.conference,
      paused: false,
    },
  };
};

function chatReducer(state: ChatState, action: Action): ChatState {
  switch (action.type) {
    case "SET_GROUP_GATHER":
      return {
        ...state,
        groupGather: {
          ...state.groupGather,
          [(action.payload as Group).groupId]: action.payload as Group,
        },
      };
    case "SET_CONTACT_GATHER":
      return {
        ...state,
        contactGather: {
          ...state.contactGather,
          [(action.payload as Contact).userId]: action.payload as Contact,
        },
      };
    case "DEL_GROUP":
      return delGroup(state, action.payload as number);
    case "DEL_GROUP_MEMBER":
      return delGroupMember(state, action.payload as GroupMap);
    case "DEL_CONTACT":
      return delContact(state, (action.payload as Contact).userId);
    case "SET_USER_GATHER":
      return {
        ...state,
        userGather: {
          ...state.userGather,
          [(action.payload as User).userId]: action.payload as User,
        },
      };
    case "UPDATE_ACTIVE_ROOM":
      return { ...state, activeRoom: getActiveRoom(state) };
    case "SET_ACTIVE_ROOM":
      return setActiveRoom(state, action.payload as SetActiveRoom);
    case "USER_ONLINE":
      return setUserOnline(state, action.payload as number, 1);
    case "USER_OFFLINE":
      return setUserOnline(state, action.payload as number, 0);
    case "ADD_GROUP_MESSAGE":
      return addGroupMessage(state, action.payload as GroupMessage);
    case "ADD_PRIVATE_MESSAGE":
      return addPrivateMessage(state, action.payload as PrivateMessage);
    case "ADD_GROUP_UNREAD_GATHER":
      return groupUnreadGather(
        state,
        action.payload as number,
        (x?: number) => (x || 0) + 1
      );
    case "ADD_CONTACT_UNREAD_GATHER":
      return contactUnreadGather(
        state,
        action.payload as number,
        (x?: number) => (x || 0) + 1
      );
    case "SET_TYPING":
      return { ...state, typing: action.payload as SetTyping };
    case "LOSE_GROUP_UNREAD_GATHER":
      return groupUnreadGather(state, action.payload as number, () => 0);
    case "LOSE_CONTACT_UNREAD_GATHER":
      return contactUnreadGather(state, action.payload as number, () => 0);
    case "REVOKE_MESSAGE":
      return revokeMessage(state, action.payload as MessageOperation);
    case "UPDATE_GROUP_INFO":
      return updateGroupInfo(state, action.payload as Group);
    case "UPDATE_USER_INFO":
      return updateUserInfo(state, action.payload as User);
    case "ADD_GROUP_MEMBER":
      return addGroupMember(state, action.payload as GroupMember);
    case "SET_CONFERENCE":
      return setConference(state, action.payload as ConferenceData);
    case "JOIN_CONFERENCE":
      return {
        ...state,
        conference: {
          data: { ...(action.payload as ConferenceData) },
          joined: true,
          ringPlayed: false,
          paused: false,
        },
      };
    case "PAUSE_CONFERENCE":
      return pauseConference(state, action.payload as ConferenceData);
    case "RESUME_CONFERENCE":
      return resumeConference(state, action.payload as ConferenceData);
    case "STOP_CONFERENCE":
      return stopConference(state, action.payload as ConferenceData);
    case "MARK_PRIVATE_MESSAGES_READ":
      return markPrivateMessagesRead(state, action.payload as number);
    case "ADD_PRIVATE_MESSAGES":
      return addPrivateMessages(state, action.payload as AddPrivateMessages);
    case "ADD_GROUP_MESSAGES":
      return addGroupMessages(state, action.payload as AddGroupMessages);
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload as boolean,
        error: "",
      };
    case "SET_MESSAGE_SEARCH":
      return {
        ...state,
        messageSearch: (action.payload as string) ?? "",
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload as string,
        success: undefined,
      };
    case "SET_SUCCES":
      return {
        ...state,
        success: action.payload as string,
        error: undefined,
      };
    case "SET_TOKEN":
      return setToken(state, action.payload as string);
    case "SET_USER":
      return {
        ...state,
        user: action.payload as User,
      };
    case "CLEAR_USER":
      return clearUser(state);
    case "CLEAR_CHAT_DATA":
      return {
        ...state,
        activeRoom: null,
        groupGather: {},
        userGather: {},
        contactGather: {},
        conference: {
          data: null,
          joined: false,
          ringPlayed: false,
          paused: false,
        },
        typing: null,
        messageSearch: "",
      };
    case "SET_OPERATORS":
      return {
        ...state,
        operators: action.payload as Contact[],
      };
    case "SET_VISIT_DATA": {
      const visitData = action.payload as VisitData[];
      return {
        ...state,
        visitData,
        conference: {
          ...state.conference,
          paused: isConferencePaused(state.conference.data, visitData),
        },
      };
    }
  }

  return state;
}

export type ChatDispatch = React.Dispatch<Action>;
const emptyDispatch: ChatDispatch = () => null;

type ChatProviderProps = {
  defLang: string | undefined;
  token: string;
  refreshToken: string;
  children: React.JSX.Element | React.JSX.Element[];
};

export const ChatContext = React.createContext({
  state: emptyChatState,
  dispatch: emptyDispatch,
});

export const ChatProvider: React.FC<ChatProviderProps> = (
  props: ChatProviderProps
) => {
  emptyUser.langCode = props.defLang;

  const token = props.token;
  const refreshToken = props.refreshToken;
  const chatState: ChatState = {
    ...emptyChatState,
    token,
    refreshToken,
  };

  const [state, dispatch] = React.useReducer(chatReducer, chatState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>
  );
};

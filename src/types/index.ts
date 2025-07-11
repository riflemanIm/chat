// Этот интерфейс используется для типизации всех ответов от сервера. Когда сервер отправляет данные через сокет, они приходят в таком формате:

export interface ServerRes {
  code: number; // Код ответа (0 - успех, другие значения - ошибки)
  msg: string; // Сообщение (обычно сообщение об ошибке)
  data: unknown; // Данные ответа (могут быть разных типов)
}
export interface ChatPageProps {
  activeGroupId?: number;
  activeChatUserId?: number;
  hideRooms?: boolean;
  fullWidth?: boolean;
  onContactInfoClick?: (contact: Contact) => void;
}

export interface ChatProps extends ChatPageProps {
  lang: "ru" | "en" | "fr";
  chatBaseURLApi: string;
  baseUrl: string;
  chatWsUrl: string;
  chatWsPath: string;
  token: string;
  refreshToken: string;
}

// Тип сообщения
export type MessageType =
  | "text"
  | "image"
  | "file"
  | "video"
  | "notify"
  | "video_conference";

export enum MessageStatus {
  sent = 0,
  read = 1,
}

export enum Role {
  Unknown = 0,
  Client = 1,
  Agent = 2,
  Specialist = 3,
  Operator = 4,
}

export interface User {
  userId: number;
  username: string;
  password: string;
  avatar: string;
  role?: Role;
  online?: 1 | 0; // В сети
  langCode?: string;
}

// Приватные сообщения
export interface PrivateMessage {
  _id?: number;
  userId: number;
  contactId: number;
  content: string;
  messageType: MessageType;
  status: MessageStatus;
  cdate: string;
  type?: string;
  isRevoke?: boolean;
  revokeUserName?: string;
  ref?: React.RefObject<HTMLLIElement>;
}

// Контакт
export interface Contact {
  userId: number;
  groupId?: number;
  username: string;
  avatar?: string;
  role?: Role;
  messages?: PrivateMessage[];
  unreadCount?: number;
  isTop?: boolean;
  online?: 1 | 0;
  isManager?: 1 | 0;
  noMoreData?: boolean;
}
export interface VisitData {
  chatFrom: Date;
  conferenceStatus: "started" | "finished" | "none";
  contactId: number;
  duration: number;
  plExamName: string;
  planningId: number;
  visitDate: Date;
  visitId: number;
}

// Информация о друзьях
export interface ContactGather {
  [userId: number]: Contact;
}

// Групповое сообщение
export interface GroupMessage {
  _id?: number;
  userId: number;
  groupId: number;
  content: string;
  messageType: MessageType;
  cdate: string;
  isRevoke?: boolean;
  revokeUserName?: string;
  status?: MessageStatus;
  ref?: React.RefObject<HTMLLIElement>;
}

// Группа
export interface Group {
  groupId: number;
  userId: number; // владелец
  name: string;
  notice: string;
  messages?: GroupMessage[];
  unreadCount?: number;
  cdate: string;
  isTop?: boolean;
  members?: Contact[];
  noMoreData?: boolean;
}

// Группы
export interface GroupGather {
  [groupId: number]: Group;
}

// Ассоциации групп и пользователей
export interface GroupMap {
  groupId: number;
  userId: number;
}

// Ассоциации пользователей и друзей
export interface ContactMap {
  contactId: number;
  userId: number;
}

export interface SendMessage {
  message: string | File;
  width?: number;
  height?: number;
  fileName?: string;
  messageType: MessageType[0] | MessageType[1];
  size?: number;
}

// Размер изображения
export interface ImageSize {
  width: number;
  height: number;
}

// Непрочитанные сообщения
export interface UnReadGather {
  [key: string]: number;
}

// Получить сообщения постранично
export interface PagingParams {
  groupId?: number;
  userId?: number;
  contactId?: number;
  current: number;
  pageSize: number;
}

// Постраничный ответ для групповых сообщений
export interface PagingResponse {
  // messageArr: GroupMessage[]; - fix on messages
  messages: GroupMessage[];
  userArr: User[];
}

export interface ContactUserMap {
  contactId: number;
  contactUserName: string;
}

// информация о том, что контакт печатает текст
export interface SetTyping {
  userId?: number;
  groupId?: number;
  contactId?: number;
}

// Операция с сообщением
export interface MessageOperation {
  userId?: number;
  username: string;
  groupId?: number;
  contactId?: number;
  _id: number;
}

// Данные конференции
export interface ConferenceData {
  userId: number;
  contactId: number;
  id: string;
  url?: string;
  serverAddress?: string;
  user?: string;
  password?: string;
  currentDate?: Date;
  finishDate?: Date;
}

// Данные чата
export interface ChatData {
  user: User;
  groupData: Group[];
  contactData: Contact[];
  userData: User[];
  operatorData: Contact[];
  conferenceData: ConferenceData;
  visitData: VisitData[];
}

export interface GroupMember {
  groupId: number;
  members: Contact[];
}

export interface AddPrivateMessages {
  pageSize: number;
  contactId: number;
  messages: PrivateMessage[];
}

export interface AddGroupMessages extends PagingResponse {
  pageSize: number;
  groupId: number;
}

export interface SetActiveRoom {
  groupId?: number;
  contactId?: number;
}

export interface JoinGroup {
  group: Group;
  user: Contact;
}

export interface SetUser {
  user: User;
  token: string;
}

export type ChatRoom = Group | Contact;
export type ChatMessage = GroupMessage | PrivateMessage;

// Операции контекстного меню
export enum ContextMenuType {
  COPY = "COPY", // Скопировать
  REVOKE = "REVOKE", // Удалить сообщение
  TOP_REVERT = "TOP_REVERT", // Открепить
  TOP = "TOP", // Закрепить
  READ = "READ", // Прочесть всё
  DELETE = "DELETE", // Удалить
}

export const CHAT_ACTIONS = {
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  REVOKE_MESSAGE: "REVOKE_MESSAGE",
  MARK_PRIVATE_MESSAGES_READ: "MARK_PRIVATE_MESSAGES_READ",
} as const;

export type ChatActionType = keyof typeof CHAT_ACTIONS;

export interface ChatAction {
  type: ChatActionType;
  payload?: unknown;
}

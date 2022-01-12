// Тип сообщения
type MessageType = "text" | "image" | "file" | "video" | "notify";

declare enum MessageStatus {
  sent = 0,
  read = 1,
}

declare enum Role {
  Unknown = 0,
  Client = 1,
  Agent = 2,
  Specialist = 3,
  Operator = 4,
}

interface User {
  userId: number;
  username: string;
  password: string;
  avatar: string;
  role?: Role;
  online?: 1 | 0; // В сети
  langCode?: string;
}

// Приватные сообщения
interface PrivateMessage {
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
}

// Контакт
interface ContactDto {
  userId: number;
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

// Информация о друзьях
interface ContactGather {
  [userId: number]: ContactDto;
}

// Групповое сообщение
interface GroupMessage {
  _id?: number;
  userId: number;
  groupId: number;
  content: string;
  messageType: MessageType;
  cdate: string;
  isRevoke?: boolean;
  revokeUserName?: string;
}

// Группа
interface Group {
  groupId: number;
  userId: number; // владелец
  name: string;
  notice: string;
  messages?: GroupMessage[];
  unreadCount?: number;
  createTime: number;
  isTop?: boolean;
  members?: ContactDto[];
  noMoreData?: boolean;
}

// Группы
interface GroupGather {
  [groupId: number]: Group;
}

// Ассоциации групп и пользователей
interface GroupMap {
  groupId: number;
  userId: number;
}

// Ассоциации пользователей и друзей
interface ContactMap {
  contactId: number;
  userId: number;
}

interface SendMessage {
  message: string | File;
  width?: number;
  height?: number;
  fileName?: string;
  messageType: MessageType[0] | MessageType[1];
  size?: number;
}

// Размер изображения
interface ImageSize {
  width: number;
  height: number;
}

// Непрочитанные сообщения
interface UnReadGather {
  [key: string]: number;
}

// Получить сообщения постранично
interface PagingParams {
  groupId?: number;
  userId?: number;
  contactId?: number;
  current: number;
  pageSize: number;
}

// Постраничный ответ для групповых сообщений
interface PagingResponse {
  messageArr: GroupMessage[];
  userArr: User[];
}

interface ContactUserMap {
  contactId: number;
  contactUserName: string;
}

// информация о том, что контакт печатает текст
interface Typing {
  userId?: number;
  groupId?: number;
  contactId?: number;
}

// Операция с сообщением
interface MessageOperation {
  userId?: number;
  username: string;
  groupId?: number;
  contactId?: number;
  _id: number;
}

// Данные чата
interface ChatData {
  groupData: Group[];
  contactData: ContactDto[];
  userData: User[];
}

interface GroupMember {
  groupId: number;
  members: ContactDto[];
}

interface AddPrivateMessages {
  pageSize: number;
  contactId: number;
  messages: PrivateMessage[];
}

interface AddGroupMessages extends PagingResponse {
  pageSize: number;
  groupId: number;
}

interface SetActiveRoom {
  groupId?: number;
  contactId?: number;
  ifNotExists: boolean;
}

interface JoinGroup {
  group: Group;
  user: User;
}

interface SetUser {
  user: User;
  token: string;
}

type ChatRoom = Group | ContactDto;
type ChatMessage = GroupMessage | PrivateMessage;

// Операции контекстного меню
declare enum ContextMenuType {
  COPY = "COPY", // Скопировать
  REVOKE = "REVOKE", // Удалить сообщение
  TOP_REVERT = "TOP_REVERT", // Открепить
  TOP = "TOP", // Закрепить
  READ = "READ", // Прочесть всё
  DELETE = "DELETE", // Удалить
}
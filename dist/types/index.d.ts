export interface ServerRes {
    code: number;
    msg: string;
    data: unknown;
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
export declare type MessageType = "text" | "image" | "file" | "video" | "notify" | "video_conference";
export declare enum MessageStatus {
    sent = 0,
    read = 1
}
export declare enum Role {
    Unknown = 0,
    Client = 1,
    Agent = 2,
    Specialist = 3,
    Operator = 4
}
export interface User {
    userId: number;
    username: string;
    password: string;
    avatar: string;
    role?: Role;
    online?: 1 | 0;
    langCode?: string;
}
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
export interface ContactGather {
    [userId: number]: Contact;
}
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
export interface Group {
    groupId: number;
    userId: number;
    name: string;
    notice: string;
    messages?: GroupMessage[];
    unreadCount?: number;
    cdate: string;
    isTop?: boolean;
    members?: Contact[];
    noMoreData?: boolean;
}
export interface GroupGather {
    [groupId: number]: Group;
}
export interface GroupMap {
    groupId: number;
    userId: number;
}
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
export interface ImageSize {
    width: number;
    height: number;
}
export interface UnReadGather {
    [key: string]: number;
}
export interface PagingParams {
    groupId?: number;
    userId?: number;
    contactId?: number;
    current: number;
    pageSize: number;
}
export interface PagingResponse {
    messages: GroupMessage[];
    userArr: User[];
}
export interface ContactUserMap {
    contactId: number;
    contactUserName: string;
}
export interface SetTyping {
    userId?: number;
    groupId?: number;
    contactId?: number;
}
export interface MessageOperation {
    userId?: number;
    username: string;
    groupId?: number;
    contactId?: number;
    _id: number;
}
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
export declare type ChatRoom = Group | Contact;
export declare type ChatMessage = GroupMessage | PrivateMessage;
export declare enum ContextMenuType {
    COPY = "COPY",
    REVOKE = "REVOKE",
    TOP_REVERT = "TOP_REVERT",
    TOP = "TOP",
    READ = "READ",
    DELETE = "DELETE"
}
export declare const CHAT_ACTIONS: {
    readonly SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM";
    readonly SET_LOADING: "SET_LOADING";
    readonly SET_ERROR: "SET_ERROR";
    readonly REVOKE_MESSAGE: "REVOKE_MESSAGE";
    readonly MARK_PRIVATE_MESSAGES_READ: "MARK_PRIVATE_MESSAGES_READ";
};
export declare type ChatActionType = keyof typeof CHAT_ACTIONS;
export interface ChatAction {
    type: ChatActionType;
    payload?: unknown;
}

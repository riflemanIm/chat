import { default as React } from 'react';
import { AddGroupMessages, AddPrivateMessages, ChatRoom, ConferenceData, Contact, ContactGather, Group, GroupGather, GroupMap, GroupMember, GroupMessage, MessageOperation, PrivateMessage, SetActiveRoom, SetTyping, User, VisitData } from '../types';
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
    };
    typing: SetTyping | null;
    loading: boolean;
    error?: string;
    success?: string;
    visitData: VisitData[];
}
type ChatActionType = "ADD_GROUP_MEMBER" | "ADD_GROUP_MESSAGE" | "ADD_GROUP_MESSAGES" | "SET_GROUP_MESSAGES" | "ADD_PRIVATE_MESSAGE" | "ADD_PRIVATE_MESSAGES" | "SET_PRIVATE_MESSAGES" | "SET_ACTIVE_ROOM" | "UPDATE_ACTIVE_ROOM" | "SET_GROUP_GATHER" | "SET_CONTACT_GATHER" | "SET_USER_GATHER" | "DEL_GROUP" | "DEL_GROUP_MEMBER" | "DEL_CONTACT" | "ADD_CONTACT_UNREAD_GATHER" | "LOSE_CONTACT_UNREAD_GATHER" | "ADD_GROUP_UNREAD_GATHER" | "LOSE_GROUP_UNREAD_GATHER" | "REVOKE_MESSAGE" | "USER_ONLINE" | "USER_OFFLINE" | "UPDATE_USER_INFO" | "SET_INITIAL_CONTACT_ID" | "SET_CONFERENCE" | "JOIN_CONFERENCE" | "PAUSE_CONFERENCE" | "STOP_CONFERENCE" | "SET_TYPING" | "MARK_AS_READ" | "UPDATE_GROUP_INFO" | "MARK_PRIVATE_MESSAGES_READ" | "SET_LOADING" | "SET_ERROR" | "SET_SUCCES" | "SET_MESSAGE_SEARCH" | "SET_USER" | "SET_TOKEN" | "CLEAR_USER" | "CLEAR_CHAT_DATA" | "SET_OPERATORS" | "SET_VISIT_DATA";
type Action = {
    type: ChatActionType;
    payload?: null | boolean | number | string | Group | Contact | User | PrivateMessage | GroupMessage | SetTyping | MessageOperation | GroupMember | AddPrivateMessages | AddGroupMessages | SetActiveRoom | ConferenceData | Contact[] | GroupMap | VisitData[];
};
export type ChatDispatch = React.Dispatch<Action>;
type ChatProviderProps = {
    defLang: string | undefined;
    token: string;
    refreshToken: string;
    children: React.JSX.Element | React.JSX.Element[];
};
export declare const ChatContext: React.Context<{
    state: ChatState;
    dispatch: ChatDispatch;
}>;
export declare const ChatProvider: React.FC<ChatProviderProps>;
export {};
//# sourceMappingURL=ChatContext.d.ts.map
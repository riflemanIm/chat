import React from 'react';
import { AddGroupMessages, AddPrivateMessages, ChatRoom, Contact, ContactGather, Group, GroupGather, GroupMember, GroupMessage, MessageOperation, PrivateMessage, SetActiveRoom, SetTyping, User, ConferenceData, GroupMap, VisitData } from '../types';
export interface ChatState {
    user: User;
    token: string;
    refreshToken: string;
    activeRoom: ChatRoom | null;
    chatOld: ChatRoom | null;
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
declare type ChatActionType = 'ADD_GROUP_MEMBER' | 'ADD_GROUP_MESSAGE' | 'ADD_GROUP_MESSAGES' | 'SET_GROUP_MESSAGES' | 'ADD_PRIVATE_MESSAGE' | 'ADD_PRIVATE_MESSAGES' | 'SET_PRIVATE_MESSAGES' | 'SET_ACTIVE_ROOM' | 'UPDATE_ACTIVE_ROOM' | 'SET_GROUP_GATHER' | 'SET_CONTACT_GATHER' | 'SET_USER_GATHER' | 'DEL_GROUP' | 'DEL_GROUP_MEMBER' | 'DEL_CONTACT' | 'ADD_CONTACT_UNREAD_GATHER' | 'LOSE_CONTACT_UNREAD_GATHER' | 'ADD_GROUP_UNREAD_GATHER' | 'LOSE_GROUP_UNREAD_GATHER' | 'REVOKE_MESSAGE' | 'USER_ONLINE' | 'USER_OFFLINE' | 'UPDATE_USER_INFO' | 'SET_INITIAL_CONTACT_ID' | 'SET_CONFERENCE' | 'JOIN_CONFERENCE' | 'PAUSE_CONFERENCE' | 'STOP_CONFERENCE' | 'SET_TYPING' | 'MARK_AS_READ' | 'UPDATE_GROUP_INFO' | 'MARK_PRIVATE_MESSAGES_READ' | 'SET_LOADING' | 'SET_ERROR' | 'SET_SUCCES' | 'SET_USER' | 'SET_TOKEN' | 'CLEAR_USER' | 'CLEAR_CHAT_DATA' | 'SET_OPERATORS' | 'SET_VISIT_DATA';
declare type Action = {
    type: ChatActionType;
    payload?: null | boolean | number | string | Group | Contact | User | PrivateMessage | GroupMessage | SetTyping | MessageOperation | GroupMember | AddPrivateMessages | AddGroupMessages | SetActiveRoom | ConferenceData | Contact[] | GroupMap | VisitData[];
};
export declare type ChatDispatch = React.Dispatch<Action>;
declare type ChatProviderProps = {
    defLang: string | undefined;
    token: string;
    refreshToken: string;
    children: JSX.Element | JSX.Element[];
};
export declare const ChatContext: React.Context<{
    state: ChatState;
    dispatch: React.Dispatch<Action>;
}>;
export declare const ChatProvider: React.FC<ChatProviderProps>;
export {};

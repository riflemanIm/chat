import React from 'react';
import { ChatMessage, ChatRoom, User, ContactGather } from '../types';
declare type InitialMenuState = {
    message: ChatMessage | null;
    mouseX: null | number;
    mouseY: null | number;
    canCopy: boolean;
    canDelete: boolean;
};
declare type RoomMessageListProps = {
    apiUrl: string;
    user: User;
    users: ContactGather;
    chat: ChatRoom | null;
    loading: boolean;
    pageSize: number;
    initialMenuState: InitialMenuState;
    onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
    onMeesageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
    setMenuState: React.Dispatch<React.SetStateAction<InitialMenuState>>;
    inModale?: boolean;
    isConference: boolean;
    onEnterRoom?: (chat: ChatRoom) => void;
};
declare const RoomMessageList: React.FC<RoomMessageListProps>;
export default RoomMessageList;

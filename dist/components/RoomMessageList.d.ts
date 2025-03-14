import React from "react";
import { ChatMessage, ChatRoom, ContactGather, User } from "../types";
interface InitialMenuState {
    message: ChatMessage | null;
    mouseX: null | number;
    mouseY: null | number;
    canCopy: boolean;
    canDelete: boolean;
}
interface RoomMessageListProps {
    apiUrl: string;
    user: User;
    users: ContactGather;
    chat: ChatRoom | null;
    loading: boolean;
    pageSize: number;
    initialMenuState: InitialMenuState;
    onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
    onMessageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
    setMenuState: React.Dispatch<React.SetStateAction<InitialMenuState>>;
    onEnterRoom?: (chat: ChatRoom) => void;
}
declare const RoomMessageList: React.FC<RoomMessageListProps>;
export default RoomMessageList;

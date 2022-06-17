import React from "react";
import { ChatMessage, ChatRoom, SendMessage, SetTyping, User, Contact, ConferenceData, Group, ContactGather } from "../types";
declare type RoomProps = {
    apiUrl: string;
    user: User;
    users: ContactGather;
    chat: ChatRoom | null;
    typing: SetTyping | null;
    conference: ConferenceData | null;
    loading: boolean;
    pageSize: number;
    operators: Contact[];
    onExitRoom?: (chat: ChatRoom) => void;
    onEnterRoom?: (chat: ChatRoom) => void;
    onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
    onMeesageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
    onTyping?: (chat: ChatRoom) => void;
    onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
    onVideoCall?: (chat: ChatRoom) => void;
    onVideoEnd?: (chat: ConferenceData) => void;
    onConferencePause?: (conference: ConferenceData) => void;
    onOperatorAdd?: (chat: Group, operator: Contact) => void;
    onLeaveGroup?: (chat: Group) => void;
};
declare const Room: React.FC<RoomProps>;
export default Room;

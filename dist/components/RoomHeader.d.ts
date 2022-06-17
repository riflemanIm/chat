import React from "react";
import { ChatRoom, Contact, Group, SetTyping, User, ConferenceData } from "../types";
declare type RoomHeaderProps = {
    apiUrl: string;
    user: User;
    chat: ChatRoom | null;
    typing: SetTyping | null;
    conference: ConferenceData | null;
    className: string;
    operators: Contact[];
    onVideoCall?: (chat: ChatRoom) => void;
    onVideoEnd?: (conference: ConferenceData) => void;
    onConferencePause?: (conference: ConferenceData) => void;
    onOperatorAdd?: (chat: Group, operator: Contact) => void;
    onLeaveGroup?: (chat: Group) => void;
};
declare const RoomHeader: React.FC<RoomHeaderProps>;
export default RoomHeader;

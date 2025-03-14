import React from "react";
import { ChatRoom, SendMessage } from "../types";
interface EntryProps {
    chat: ChatRoom | null;
    onTyping?: (chat: ChatRoom) => void;
    onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
    maxMessageLength?: number;
}
declare const Entry: React.FC<EntryProps>;
export default Entry;

import React from "react";
import { ChatRoom, SendMessage } from "../types";
declare type EntryProps = {
    chat: ChatRoom | null;
    onTyping?: (chat: ChatRoom) => void;
    onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
};
declare const Entry: React.FC<EntryProps>;
export default Entry;

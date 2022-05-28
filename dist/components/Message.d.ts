import * as React from "react";
import { ChatMessage, Contact, User } from "../types";
declare type MessageProps = {
    apiUrl: string;
    user: User;
    message: ChatMessage;
    owner: Contact;
    isGroupMessage: boolean;
    isUserFirst: boolean;
    isUserLast: boolean;
    refOnLastMess: React.RefObject<HTMLDivElement> | null;
    onContextMenu: (event: React.MouseEvent<HTMLElement>) => void;
};
declare const Message: React.FC<MessageProps>;
export default Message;

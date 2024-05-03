import * as React from 'react';
import { ChatMessage, Contact, User } from '../types';
declare type MessageProps = {
    apiUrl: string;
    user: User;
    message: ChatMessage;
    owner: Contact;
    isGroupMessage: boolean;
    isUserFirst: boolean;
    isUserLast: boolean;
    onContextMenu: (event: React.MouseEvent<HTMLElement>) => void;
    setViewerData: (value: {
        visible: boolean;
        src: string;
    }) => void;
};
declare const Message: React.FC<MessageProps>;
export default Message;

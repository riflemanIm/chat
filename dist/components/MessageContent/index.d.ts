import React from 'react';
import { ChatMessage } from '../../types';
declare type MessageProps = {
    apiUrl: string;
    message: ChatMessage;
    setViewerData: (value: {
        visible: boolean;
        src: string;
    }) => void;
};
declare const MessageContent: React.FC<MessageProps>;
export default MessageContent;

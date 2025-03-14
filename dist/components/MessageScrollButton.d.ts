import React from "react";
interface ScrollButtonProps {
    visible: boolean;
    unreadCount: number;
    onScrollDown: () => void;
}
export declare const MessageScrollButton: React.FC<ScrollButtonProps>;
export {};

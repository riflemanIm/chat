/// <reference types="react" />
import { ChatMessage, ChatRoom } from "../types";
interface UseMessageScrollProps {
    chatId: string | null;
    messages: ChatMessage[];
    scrollableRootRef: React.RefObject<HTMLDivElement>;
    pageSize: number;
    hasNextPage: boolean;
    chat: ChatRoom | null;
    onEnterRoom?: (chat: ChatRoom) => void;
    setIsVisible: React.Dispatch<React.SetStateAction<string>>;
}
export declare const useMessageScroll: ({ chatId, messages, scrollableRootRef, pageSize, hasNextPage, chat, onEnterRoom, setIsVisible, }: UseMessageScrollProps) => {
    scrollDown: () => void;
    handleRootScroll: () => void;
    scrollDownButton: boolean;
    setScrollDownButton: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    unreadCount: number;
};
export {};

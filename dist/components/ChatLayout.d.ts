import React from "react";
interface ChatLayoutProps {
    isMobile: boolean;
    conferenceActive: boolean;
    hideRooms: boolean;
    contactsList: React.ReactNode;
    chatRoom: React.ReactNode;
}
declare const ChatLayout: React.FC<ChatLayoutProps>;
export default ChatLayout;

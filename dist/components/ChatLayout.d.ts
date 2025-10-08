import { default as React } from 'react';
import { ChatRoom, User } from '../types';
interface ChatLayoutProps {
    isMobile: boolean;
    conferenceActive: boolean;
    hideRooms: boolean;
    contactsList: React.ReactNode;
    chatRoom: React.ReactNode;
    activeRoom: ChatRoom | null;
    chatOld: ChatRoom | null;
    user: User;
    onExitRoom?: (chat: ChatRoom) => void;
    onChangeChat: (chat: ChatRoom) => void;
}
declare const ChatLayout: React.FC<ChatLayoutProps>;
export default ChatLayout;
//# sourceMappingURL=ChatLayout.d.ts.map
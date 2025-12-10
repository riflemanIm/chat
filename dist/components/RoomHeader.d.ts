import { default as React } from 'react';
import { ChatRoom, ConferenceData, Contact, Group, SetTyping, User, VisitData } from '../types';
type RoomHeaderProps = {
    apiUrl: string;
    user: User;
    chat: ChatRoom | null;
    typing: SetTyping | null;
    conference: ConferenceData | null;
    className: string;
    operators: Contact[];
    visitData: VisitData[];
    messageSearch: string;
    onVideoCall?: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
    onOperatorAdd?: (chat: Group, operator: Contact) => void;
    onLeaveGroup?: (chat: Group) => void;
    onContactClick?: (contact: Contact) => void;
    onMessageSearchChange?: (value: string) => void;
};
declare const RoomHeader: React.FC<RoomHeaderProps>;
export default RoomHeader;
//# sourceMappingURL=RoomHeader.d.ts.map
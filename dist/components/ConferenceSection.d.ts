import { ChatRoom, ConferenceData, User } from '../types';
import * as React from "react";
interface ConferenceSectionProps {
    conference: {
        data: ConferenceData | null;
        joined: boolean;
        paused?: boolean;
    };
    onClose: (conference: ConferenceData | null) => void;
    onAccept: (conference: ConferenceData) => void;
    isMobile: boolean;
    user: User;
    activeRoom: ChatRoom | null;
    onChangeChat: (chat: ChatRoom) => void;
    apiUrl: string;
    onVideoEnd?: (conference: ConferenceData) => void;
}
export declare const ConferenceSection: React.FC<ConferenceSectionProps>;
export default ConferenceSection;
//# sourceMappingURL=ConferenceSection.d.ts.map
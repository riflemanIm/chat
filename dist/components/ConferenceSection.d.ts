import { ChatRoom } from '../types';
import * as React from "react";
interface ConferenceSectionProps {
    conference: {
        data: any;
        joined: boolean;
    };
    onClose: (conference: any) => void;
    onAccept: (conference: any) => void;
    isMobile: boolean;
    user: any;
    activeRoom: ChatRoom | null;
    onChangeChat: (chat: ChatRoom) => void;
    apiUrl: string;
}
export declare const ConferenceSection: React.FC<ConferenceSectionProps>;
export default ConferenceSection;
//# sourceMappingURL=ConferenceSection.d.ts.map
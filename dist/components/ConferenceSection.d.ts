import * as React from "react";
import { ChatRoom } from "../types";
interface ConferenceSectionProps {
    conference: {
        data: any;
        joined: boolean;
    };
    onClose: (conference: any) => void;
    onAccept: (conference: any) => void;
    isMobile: boolean;
    user: any;
    chatOld: ChatRoom | null;
    onChangeChat: (chat: ChatRoom) => void;
    apiUrl: string;
}
export declare const ConferenceSection: React.FC<ConferenceSectionProps>;
export default ConferenceSection;

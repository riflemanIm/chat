import { default as React } from 'react';
import { ConferenceData, User } from '../types';
type ConferenceProps = {
    conference: ConferenceData | null;
    onClose: (conference: ConferenceData | null) => void;
    langCode?: string | null;
    user: User;
    conferenceJoined: boolean;
    conferencePaused: boolean;
    onVideoEnd?: (conference: ConferenceData) => void;
    onConferencePause?: (conference: ConferenceData) => void;
};
declare const Conference: React.FC<ConferenceProps>;
export default Conference;
//# sourceMappingURL=Conference.d.ts.map
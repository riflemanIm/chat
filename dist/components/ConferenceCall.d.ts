import { default as React } from 'react';
import { ConferenceData, Contact } from '../types';
type ConferenceCallProps = {
    conference: ConferenceData;
    contact?: Contact | number | null;
    apiUrl: string;
    onAccept: (conference: ConferenceData) => void;
    canResume?: boolean;
    isPaused?: boolean;
};
declare const ConferenceCall: React.FC<ConferenceCallProps>;
export default ConferenceCall;
//# sourceMappingURL=ConferenceCall.d.ts.map
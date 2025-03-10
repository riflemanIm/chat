import * as React from "react";
interface ConferenceControlsProps {
    isMobile: boolean;
    user: any;
    onBackToChat: () => void;
}
declare const ConferenceControls: React.FC<ConferenceControlsProps>;
export default ConferenceControls;

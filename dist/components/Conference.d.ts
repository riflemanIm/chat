import React from "react";
import { ConferenceData } from "../types";
declare type ConferenceProps = {
    conference: ConferenceData | null;
    onClose: (conference: ConferenceData | null) => void;
    langCode?: string | null;
};
declare const Conference: React.FC<ConferenceProps>;
export default Conference;

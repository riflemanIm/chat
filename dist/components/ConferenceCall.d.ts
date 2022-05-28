import React from "react";
import { ConferenceData, Contact } from "../types";
declare type ConferenceCallProps = {
    conference: ConferenceData;
    contact: Contact;
    apiUrl: string;
    onAccept: (conference: ConferenceData) => void;
};
declare const ConferenceCall: React.FC<ConferenceCallProps>;
export default ConferenceCall;

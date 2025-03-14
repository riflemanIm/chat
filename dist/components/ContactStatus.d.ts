import React from "react";
import { Contact } from "../types";
declare type ContactStatusProps = {
    contact: Contact;
    isTyping: boolean;
};
declare const ContactStatus: React.FC<ContactStatusProps>;
export default ContactStatus;

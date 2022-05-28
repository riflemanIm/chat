import React from "react";
import { Contact } from "../types";
declare type ContactListProps = {
    apiUrl: string;
    contacts: Contact[];
    owner?: number;
    onClick?: (contact: Contact) => void;
};
declare const ContactList: React.FC<ContactListProps>;
export default ContactList;

import React from 'react';
import { ListProps } from '@mui/material';
import { Contact } from '../types';
declare type ContactListProps = {
    apiUrl: string;
    contacts: Contact[];
    owner?: number;
    onContactClick?: (contact: Contact) => void;
};
declare const ContactList: React.FC<ListProps & ContactListProps>;
export default ContactList;

import { ListProps } from '@mui/material';
import { default as React } from 'react';
import { Contact } from '../types';
type ContactListProps = {
    apiUrl: string;
    contacts: Contact[];
    owner?: number;
    onContactClick?: (contact: Contact) => void;
};
declare const ContactList: React.FC<ListProps & ContactListProps>;
export default ContactList;
//# sourceMappingURL=ContactList.d.ts.map
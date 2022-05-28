import React from "react";
import { Contact } from "../types";
interface AddContactProps {
    open: boolean;
    apiUrl: string;
    contacts: Contact[];
    onClose: (value?: Contact) => void;
}
declare const AddContact: React.FC<AddContactProps>;
export default AddContact;

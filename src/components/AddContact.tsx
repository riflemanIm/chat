import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Contact } from "../types";
import ContactList from "./ContactList";

interface AddContactProps {
  open: boolean;
  apiUrl: string;
  contacts: Contact[];
  onClose: (value?: Contact) => void;
}

const AddContact: React.FC<AddContactProps> = (
  props: AddContactProps
) => {
  const { onClose, open, apiUrl, contacts } = props;
  const { t } = useTranslation();

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (contact: Contact) => {
    onClose(contact);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="add-contact-title"
      open={open}
    >
      <DialogTitle id="switch-operator-title">
        {t("CHAT.ADD_CONTACT")}
      </DialogTitle>
      <ContactList
        apiUrl={apiUrl}
        contacts={contacts}
        onContactClick={handleListItemClick}
      />
    </Dialog>
  );
};

export default AddContact;
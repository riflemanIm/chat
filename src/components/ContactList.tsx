import StarIcon from "@mui/icons-material/Star";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListProps,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Contact } from "../types";
import { combineURLs } from "../utils/common";
import ContactStatus from "./ContactStatus";

const useStyles = makeStyles(() => ({
  star: {
    fontSize: "0.85rem",
    verticalAlign: "middle",
  },
}));

type ContactListProps = {
  apiUrl: string;
  contacts: Contact[];
  owner?: number;
  onContactClick?: (contact: Contact) => void;
};

const ContactList: React.FC<ListProps & ContactListProps> = (
  props: ListProps & ContactListProps
) => {
  const classes = useStyles();
  const { apiUrl, contacts, owner, onContactClick, ...listProps } = props;

  return (
    <List {...listProps} aria-label="contacts">
      {contacts.map((contact) => (
        <ListItemButton
          key={contact.userId}
          onClick={() => onContactClick && onContactClick(contact)}
        >
          <ListItemAvatar>
            <Avatar
              alt={contact.username}
              src={contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span>
                {contact.username}{" "}
                {owner === contact.userId && (
                  <StarIcon className={classes.star} color="primary" />
                )}
              </span>
            }
            secondary={<ContactStatus contact={contact} isTyping={false} />}
          />
        </ListItemButton>
      ))}
    </List>
  );
};
export default ContactList;

import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ContactStatus from "./ContactStatus";
import { makeStyles } from "@material-ui/styles";
import { Contact } from "../types";

const useStyles = makeStyles(() => ({
  star: {
    fontSize: "0.85rem",
    verticalAlign: "middle",
  },
}));

type ContactListProps = {
  apiUrl: string;
  owner: number;
  contacts: Contact[];
};

export default function ContactList(props: ContactListProps) {
  const classes = useStyles();
  const { apiUrl, contacts, owner } = props;

  return (
    <List aria-label="contacts">
      {contacts.map((contact) => (
        <ListItem key={contact.userId}>
          <ListItemAvatar>
            <Avatar
              alt={contact.username}
              src={`${apiUrl}${contact.avatar}`}
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
        </ListItem>
      ))}
    </List>
  );
}

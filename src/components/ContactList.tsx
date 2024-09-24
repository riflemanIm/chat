import React from 'react';
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListProps,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ContactStatus from './ContactStatus';
import { makeStyles } from '@mui/styles';
import { Contact } from '../types';
import { combineURLs } from '../utils/common';

const useStyles = makeStyles(() => ({
  star: {
    fontSize: '0.85rem',
    verticalAlign: 'middle',
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
  const { apiUrl, contacts, owner } = props;

  return (
    <List {...props} aria-label="contacts">
      {contacts.map(contact => (
        <ListItemButton
          key={contact.userId}
          onClick={() => props.onContactClick && props.onContactClick(contact)}
        >
          <ListItemAvatar>
            <Avatar
              alt={contact.username}
              src={
                contact.avatar
                  ? combineURLs(apiUrl, contact.avatar)
                  : ''
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span>
                {contact.username}{' '}
                {owner === contact.userId && (
                  <StarIcon
                    className={classes.star}
                    color="primary"
                  />
                )}
              </span>
            }
            secondary={
              <ContactStatus contact={contact} isTyping={false} />
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};
export default ContactList;

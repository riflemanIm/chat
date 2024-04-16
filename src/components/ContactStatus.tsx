import React from 'react';
import { Typography } from '@mui/material';
import Typing from './Typing';
import { useTranslation } from 'react-i18next';
import { Contact } from '../types';

type ContactStatusProps = {
  contact: Contact;
  isTyping: boolean;
};

const ContactStatus: React.FC<ContactStatusProps> = (
  props: ContactStatusProps,
) => {
  const { t } = useTranslation();

  if (props.isTyping)
    return <Typing message={t('CHAT.STATUS.TYPING')} />;
  if (props.contact.online === 1)
    return (
      <Typography variant="body2" color="primary" component="span">
        {t('CHAT.STATUS.ONLINE')}
      </Typography>
    );
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      component="span"
    >
      {t('CHAT.STATUS.OFFLINE')}
    </Typography>
  );
};

export default ContactStatus;

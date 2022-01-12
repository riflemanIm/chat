import React from "react";
import { Typography } from "@material-ui/core";
import Typing from "./Typing";
import { useTranslation } from "react-i18next";

type ContactStatusProps = {
  contact: ContactDto;
  isTyping: boolean;
};

const ContactStatus = (props: ContactStatusProps) => {
  const { t } = useTranslation();

  if (props.isTyping) return <Typing message={t("CHAT.STATUS.TYPING")} />;
  if (props.contact.online === 1)
    return (
      <Typography variant="body2" color="primary">
        {t("CHAT.STATUS.ONLINE")}
      </Typography>
    );
  return (
    <Typography variant="body2" color="textSecondary">
      {t("CHAT.STATUS.OFFLINE")}
    </Typography>
  );
};

export default ContactStatus;

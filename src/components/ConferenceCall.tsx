import React from "react";
import { Avatar, Button, makeStyles, Paper } from "@material-ui/core";
import { ConferenceData, Contact } from "../types";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pulse: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      border: "1px solid green",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      borderRadius: "50%",
      animation: "$pulse 1s linear infinite",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      border: "1px solid green",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      borderRadius: "50%",
      animation: "$pulse 1s linear infinite",
      animationDelay: "0.3s",
    },
  },
  avatar: {
    width: "80%",
    height: "80%",
  },
  footer: {
    width: "100%",
    alignSelf: "flex-end",
    paddingTop: "64px",
    display: "flex",
    justifyContent: "center",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.5)",
      opacity: 0,
    },
    "50%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.3)",
      opacity: 0,
    },
  },
}));

type ConferenceCallProps = {
  conference: ConferenceData;
  contact: Contact;
  apiUrl: string;
  onAccept: (conference: ConferenceData) => void;
};

const ConferenceCall: React.FC<ConferenceCallProps> = ({
  conference,
  contact,
  apiUrl,
  onAccept,
}: ConferenceCallProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={classes.root}>
      <div className={classes.pulse}>
        {contact ? (
          <Avatar
            className={classes.avatar}
            alt={contact.username}
            src={`${apiUrl}${contact.avatar}`}
          />
        ) : (
          <Avatar className={classes.avatar} />
        )}
      </div>
      <div className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAccept(conference)}
        >
          {t("CHAT.CONFERENCE.JOIN")}
        </Button>
      </div>
    </Paper>
  );
};

export default ConferenceCall;

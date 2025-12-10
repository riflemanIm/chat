import { Avatar, Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { ConferenceData, Contact } from "../types";
import { combineURLs } from "../utils/common";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pulse: {
    height: 100,
    width: 100,
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
    paddingTop: 64,
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
  canResume?: boolean;
  isPaused?: boolean;
};

const ConferenceCall: React.FC<ConferenceCallProps> = ({
  conference,
  contact,
  apiUrl,
  onAccept,
  canResume = true,
  isPaused = false,
}: ConferenceCallProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const showPausedNotice = !canResume && isPaused;

  return (
    <Paper className={classes.root}>
      <div className={classes.pulse}>
        {contact ? (
          <Avatar
            className={classes.avatar}
            alt={contact.username}
            src={contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""}
          />
        ) : (
          <Avatar className={classes.avatar} />
        )}
      </div>
      <div className={classes.footer}>
        {showPausedNotice ? (
          <Typography variant="body2">{t("CHAT.CONFERENCE.PAUSED")}</Typography>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAccept(conference)}
          >
            {t("CHAT.CONFERENCE.RESUME")}
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default ConferenceCall;

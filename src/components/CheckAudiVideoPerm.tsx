import React from "react";
import { Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

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
}));

// type CheckAudiVideoPermProps = {
//   conference: ConferenceData;
//   contact: Contact;
//   apiUrl: string;
//   onAccept: (conference: ConferenceData) => void;
// };

const CheckAudiVideoPerm: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={classes.root}>
      <div className={classes.footer}>
        <Button variant="contained" color="primary" onClick={() => null}>
          {t("CHAT.CONFERENCE.CHECK_MICPREM")}
        </Button>
      </div>
    </Paper>
  );
};

export default CheckAudiVideoPerm;

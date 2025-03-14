import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Button, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { ChatContext } from "../context/ChatContext";

type CheckAudiVideoPermProps = {
  audio: boolean;
  video: boolean;
};

const CheckAudiVideoPerm: React.FC<CheckAudiVideoPermProps> = ({
  audio,
  video,
}: CheckAudiVideoPermProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const { dispatch } = React.useContext(ChatContext);
  const checkPermissions = () => {
    const permissions = navigator.mediaDevices.getUserMedia({
      audio,
      video,
    });
    permissions
      .then((data) => {
        console.log("permissions", data);
        dispatch({
          type: "SET_SUCCES",
          payload: t("CHAT.CONFERENCE.ALLOK"),
        });
      })
      .catch((err) => {
        let payload = t("CHAT.CONFERENCE.ErrorAny");
        if (err.name === "NotFoundError") {
          payload = t("CHAT.CONFERENCE.NotFoundError");
        }
        if (err.name === "NotAllowedError") {
          payload = t("CHAT.CONFERENCE.NotAllowedError");
        }

        dispatch({
          type: "SET_ERROR",
          payload,
        });
        //setHavePermissions(false);
        console.log("err", `${err.name} : ${err.message}`);
      });
  };

  const title =
    audio && video
      ? t("CHAT.CONFERENCE.CheckCamMic")
      : audio
        ? t("CHAT.CONFERENCE.CheckMic")
        : t("CHAT.CONFERENCE.CheckCam");

  return !isMobile ? (
    <Button
      aria-label="cancel call"
      variant="contained"
      sx={{
        color: "#fff",
        background: "#000",
        "&:hover": {
          background: "#eee",
          color: "#000",
          boxShadow: "none",
        },
      }}
      size="small"
      startIcon={
        audio && video ? (
          <SettingsSuggestIcon />
        ) : audio ? (
          <SettingsVoiceIcon />
        ) : (
          <VideocamIcon />
        )
      }
      onClick={() => checkPermissions()}
    >
      {title}
    </Button>
  ) : (
    <Tooltip title={title}>
      <IconButton
        sx={{
          color: "#fff",
          background: "#000",
          "&:hover": {
            background: "#eee",
            color: "#000",
            boxShadow: "none",
          },
        }}
        aria-label="check"
        onClick={() => checkPermissions()}
        size="large"
      >
        {audio && video ? (
          <SettingsSuggestIcon />
        ) : audio ? (
          <SettingsVoiceIcon />
        ) : (
          <VideocamIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default CheckAudiVideoPerm;

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import { ChatContext } from "../context/ChatContext";
type CheckAudiVideoPermProps = {
  audio: boolean;
  video: boolean;
};

const CheckAudiVideoPerm: React.FC<CheckAudiVideoPermProps> = ({
  audio,
  video
}: CheckAudiVideoPermProps) => {
  // const { t } = useTranslation();
  //const [havePermissions, setHavePermissions] = useState(false);
  const { dispatch } = React.useContext(ChatContext);
  const checkPermissions = () => {
    const permissions = navigator.mediaDevices.getUserMedia({
      audio,
      video
    });
    permissions
      .then(data => {
        console.log("permissions", data);
        dispatch({
          type: "SET_SUCCES",
          payload: "Все ок"
        });
      })
      .catch(err => {
        dispatch({
          type: "SET_ERROR",
          payload: `${err.name} : ${err.message}`
        });
        //setHavePermissions(false);
        console.log("err", err);
      });
  };

  const title =
    audio && video
      ? "Проверить доступ к микрофону и камере"
      : audio
      ? "Проверить доступ к микрофону "
      : "Проверить доступ к камере";
  return (
    <Tooltip title={title}>
      <IconButton
        aria-label="check"
        onClick={() => checkPermissions()}
        size="large"
      >
        {audio && video ? (
          <SettingsSuggestIcon />
        ) : audio ? (
          <SettingsVoiceIcon />
        ) : (
          <VideoSettingsIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default CheckAudiVideoPerm;

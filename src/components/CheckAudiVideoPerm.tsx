import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import { ChatContext } from '../context/ChatContext';
import { useTranslation } from 'react-i18next';
type CheckAudiVideoPermProps = {
  audio: boolean;
  video: boolean;
};

const CheckAudiVideoPerm: React.FC<CheckAudiVideoPermProps> = ({
  audio,
  video,
}: CheckAudiVideoPermProps) => {
  const { t } = useTranslation();
  //const [havePermissions, setHavePermissions] = useState(false);
  const { dispatch } = React.useContext(ChatContext);
  const checkPermissions = () => {
    const permissions = navigator.mediaDevices.getUserMedia({
      audio,
      video,
    });
    permissions
      .then(data => {
        console.log('permissions', data);
        dispatch({
          type: 'SET_SUCCES',
          payload: t('CHAT.CONFERENCE.ALLOK'),
        });
      })
      .catch(err => {
        let payload = t('CHAT.CONFERENCE.ErrorAny');
        if (err.name === 'NotFoundError') {
          payload = t('CHAT.CONFERENCE.NotFoundError');
        }
        if (err.name === 'NotAllowedError') {
          payload = t('CHAT.CONFERENCE.NotAllowedError');
        }

        dispatch({
          type: 'SET_ERROR',
          payload,
        });
        //setHavePermissions(false);
        console.log('err', `${err.name} : ${err.message}`);
      });
  };

  const title =
    audio && video
      ? t('CHAT.CONFERENCE.CheckCamMic')
      : audio
      ? t('CHAT.CONFERENCE.CheckMic')
      : t('CHAT.CONFERENCE.CheckCam');
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

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { ChatMessage } from '../../types';
import { combineURLs } from '../../utils/common';

const useStyles = makeStyles((theme: Theme) => ({
  mediaContent: {
    maxWidth: 284,
    maxHeight: 190,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1.2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
      maxHeight: 210,
    },
  },
}));

type VideoProps = {
  apiUrl: string;
  message: ChatMessage;
  isConference: boolean;
};

const Video: React.FC<VideoProps> = ({
  apiUrl,
  message,
  isConference,
}: VideoProps) => {
  const classes = useStyles();
  let src = '';
  if (isConference) {
    const meta = JSON.parse(message.content);
    src = combineURLs(
      apiUrl,
      `/static/conf/${meta.visitId}/${meta.name}`,
    );
  } else src = combineURLs(apiUrl, `/static/file/${message.content}`);
  return (
    <video
      src={src}
      className={classes.mediaContent}
      controls
      muted
      preload="none"
    >
      Ваш браузер не поддерживает тег video.
    </video>
  );
};

export default Video;

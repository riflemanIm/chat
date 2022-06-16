import React from "react";
import { makeStyles } from '@mui/styles';
import { ChatMessage } from "../../types";

const useStyles = makeStyles(() => ({
  mediaContent: {
    maxWidth: 350,
    maxHeight: 350,
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
  let src = "";
  if (isConference) {
    const meta = JSON.parse(message.content);
    src = `${apiUrl}/static/conf/${meta.visitId}/${meta.name}`;
  } else src = `${apiUrl}/static/file/${message.content}`;
  return (
    <video src={src} className={classes.mediaContent} controls muted>
      Ваш браузер не поддерживает тег video.
    </video>
  );
};

export default Video;

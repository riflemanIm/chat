import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mediaContent: {
    maxWidth: "350px",
    maxHeight: "350px",
  },
}));

const Video = ({
  apiUrl,
  message,
}: {
  apiUrl: string;
  message: ChatMessage;
}) => {
  const classes = useStyles();
  return (
    <video
      src={`${apiUrl}/static/file/${message.content}`}
      className={classes.mediaContent}
      controls
      muted
    >
      Ваш браузер не поддерживает тег video.
    </video>
  );
};

export default Video;

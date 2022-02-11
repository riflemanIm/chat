import React from "react";
import { makeStyles } from "@material-ui/core";
import { ChatMessage } from "../../types";
import { getConferenceVideoMeta } from "../../utils/common";

const useStyles = makeStyles(() => ({
  mediaContent: {
    maxWidth: "350px",
    maxHeight: "350px"
  }
}));

const Video = ({
  apiUrl,
  message,
  isConference
}: {
  apiUrl: string;
  message: ChatMessage;
  isConference: boolean;
}) => {
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

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ChatMessage } from "../../types";
import { combineURLs } from "../../utils/common";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  mediaContent: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1.2),
    maxWidth: 284,
    height: 190,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 250,
      height: 170,
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
  const src = React.useMemo(() => {
    if (!isConference) {
      return combineURLs(apiUrl, `/static/file/${message.content}`);
    }

    try {
      const meta = JSON.parse(message.content) as {
        visitId: number;
        name: string;
      };

      if (meta && meta.visitId && meta.name) {
        return combineURLs(apiUrl, `/static/conf/${meta.visitId}/${meta.name}`);
      }
    } catch (error) {
      console.warn("Failed to parse conference video", error);
    }

    return "";
  }, [apiUrl, isConference, message.content]);

  if (!src) {
    return (
      <Typography variant="caption" component="span" color="text.secondary">
        Видео недоступно
      </Typography>
    );
  }

  return (
    <video
      src={src}
      className={classes.mediaContent}
      controls
      muted
      preload="none"
      playsInline
    >
      Ваш браузер не поддерживает тег video.
    </video>
  );
};

export default Video;

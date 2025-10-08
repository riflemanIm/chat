import React from "react";

import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { AspectRatio } from "react-aspect-ratio";
import { ChatMessage } from "../../types";
import { combineURLs } from "../../utils/common";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      cursor: "pointer",
      borderRadius: theme.spacing(1.2),
      maxWidth: 284,
      maxHeight: 190,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 250,
        maxHeight: 170,
      },
    },
    aspect: {
      maxWidth: 284,
      height: 190,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 250,
        height: 170,
      },
    },
  })
);
type ImageProps = {
  apiUrl: string;
  message: ChatMessage;
  setViewerData: (value: { visible: boolean; src: string }) => void;
};

const Image: React.FC<ImageProps> = ({
  apiUrl,
  message,
  setViewerData,
}: ImageProps) => {
  const classes = useStyles();
  const imageSrc = React.useMemo(
    () => combineURLs(apiUrl, `/static/image/${message.content}`),
    [apiUrl, message.content]
  );
  const handleOpen = React.useCallback(() => {
    setViewerData({
      visible: true,
      src: imageSrc,
    });
  }, [imageSrc, setViewerData]);

  return (
    <AspectRatio ratio="3/4" className={classes.aspect}>
      <img
        src={imageSrc}
        loading="lazy"
        onClick={handleOpen}
        className={classes.img}
        alt={message.cdate}
      />
    </AspectRatio>
  );
};

export default Image;

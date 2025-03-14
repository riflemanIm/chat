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
type ImageProrps = {
  apiUrl: string;
  message: ChatMessage;
  setViewerData: (value: { visible: boolean; src: string }) => void;
};

const Image: React.FC<ImageProrps> = ({
  apiUrl,
  message,
  setViewerData,
}: ImageProrps) => {
  const classes = useStyles();
  //const meta = getImageMeta(message.content);

  return (
    <AspectRatio ratio="3/4" className={classes.aspect}>
      <img
        src={combineURLs(apiUrl, `/static/image/${message.content}`)}
        onClick={() => {
          setViewerData({
            visible: true,

            src: combineURLs(apiUrl, `/static/image/${message.content}`),
          });
        }}
        className={classes.img}
        alt={message.cdate}
      />
    </AspectRatio>
  );
};

export default Image;

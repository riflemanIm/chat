import React from "react";
import Viewer from "react-viewer";
import { Theme } from "@mui/material/styles";
//import { getImageMeta } from "../../utils/common";
import { ChatMessage } from "../../types";
import { makeStyles, createStyles } from "@mui/styles";
import { AspectRatio } from "react-aspect-ratio";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediaContent: {
      cursor: "pointer",
      borderRadius: theme.spacing(1.2),
      maxWidth: 284,
      //maxHeight: 190,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 250,
        // maxHeight: 170,
      },
    },
    aspect: {
      maxWidth: 284,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 250,
      },
    },
  })
);
type ImageProrps = {
  apiUrl: string;
  message: ChatMessage;
};

const Image: React.FC<ImageProrps> = ({ apiUrl, message }: ImageProrps) => {
  const classes = useStyles();
  //const meta = getImageMeta(message.content);

  const [viewerVisible, setViewerVisible] = React.useState(false);

  return (
    <React.Fragment>
      <Viewer
        zIndex={2000}
        visible={viewerVisible}
        changeable={false}
        onClose={() => {
          setViewerVisible(false);
        }}
        images={[
          {
            src: `${apiUrl}/static/image/${message.content}`,
          },
        ]}
      />
      <AspectRatio ratio="3/4" className={classes.aspect}>
        <img
          src={`${apiUrl}/static/image/${message.content}`}
          onClick={() => {
            setViewerVisible(true);
          }}
          className={classes.mediaContent}
          alt={message.cdate}
        />
      </AspectRatio>
    </React.Fragment>
  );
};

export default Image;

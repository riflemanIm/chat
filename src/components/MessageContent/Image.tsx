import React from "react";
import Viewer from "react-viewer";
import { Theme } from '@mui/material/styles';
import { getImageMeta } from "../../utils/common";
import { ChatMessage } from "../../types";
import { makeStyles, createStyles } from '@mui/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediaContent: {
      maxWidth: 350,
      maxHeight: 350,
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        maxWidth: 250,
        maxHeight: 250,
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
  const [viewerVisible, setViewerVisible] = React.useState(false);
  const meta = getImageMeta(message.content);
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
      <img
        src={`${apiUrl}/static/image/${message.content}`}
        width={meta.width}
        height={meta.height}
        className={classes.mediaContent}
        onClick={() => {
          setViewerVisible(true);
        }}
      />
    </React.Fragment>
  );
};

export default Image;

import React from "react";
import Viewer from "react-viewer";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { getImageMeta } from "../../utils/common";
import { ChatMessage } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediaContent: {
      maxWidth: "350px",
      maxHeight: "350px",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "250px",
        maxHeight: "250px",
      },
    },
  })
);

const Image = ({
  apiUrl,
  message,
}: {
  apiUrl: string;
  message: ChatMessage;
}) => {
  const classes = useStyles();
  const [viewerVisible, setViewerVisible] = React.useState(false);
  const meta = getImageMeta(message.content);
  return (
    <React.Fragment>
      <Viewer
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

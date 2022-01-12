import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
}));

type ConferenceProps = {
  url?: string | undefined;
  onClose: () => void;
};

export default function Conference({ url, onClose }: ConferenceProps) {
  const classes = useStyles();
  const ref = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const listener = ({ source, data }: MessageEvent) => {
      if (source === ref.current?.contentWindow) {
        const { type } = data;
        if (
          [
            "notSupported",
            "connectionFail",
            // "loginFail",
            "callFail",
            "hangUp",
            "remoteHangUp",
            // "onParticipantLeft"
          ].includes(type)
        )
          onClose();
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  return (
    <iframe
      className={classes.root}
      src={url}
      allowFullScreen
      allow="microphone; camera; autoplay; display-capture"
      ref={ref}
    />
  );
}

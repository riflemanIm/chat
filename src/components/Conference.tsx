import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ConferenceData } from "../types";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: "8px"
  }
}));

type ConferenceProps = {
  conference: ConferenceData | null;
  onClose: (conference: ConferenceData | null) => void;
};

export default function Conference({ conference, onClose }: ConferenceProps) {
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
            "remoteHangUp"
            // "onParticipantLeft"
          ].includes(type)
        )
          onClose(conference);
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
      src={conference?.url}
      allowFullScreen
      allow="microphone; camera; autoplay; display-capture"
      ref={ref}
    />
  );
}

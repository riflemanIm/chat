import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { ConferenceData } from "../types";
function updateUrlParameter(url: string, param: string, value: string) {
  const regex = new RegExp("(" + param + "=)[^&]+");
  return url.replace(regex, "$1" + value);
}
const transLang = (lang: string) =>
  lang === "ru" ? "rus" : lang === "fr" ? "fra" : lang === "en" ? "eng" : "";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
}));

type ConferenceProps = {
  conference: ConferenceData | null;
  onClose: (conference: ConferenceData | null) => void;
  langCode?: string | null;
};

const Conference: React.FC<ConferenceProps> = ({
  conference,
  onClose,
  langCode = "rus",
}: ConferenceProps) => {
  const classes = useStyles();
  const ref = React.useRef<HTMLIFrameElement>(null);
  // const confUrl =
  //   conference?.url && langCode
  //     ? updateUrlParameter(conference?.url, "lang", transLang(langCode))
  //     : "";
  const confUrl = conference?.url;
  console.log("confUrl", confUrl);
  const TERMINATION_EVENTS = [
    "connectionFail",
    "loginFail",
    "callFail",
    "hangUp",
    "remoteHangUp",
    "logout",
    "connectionClosed",
  ];
  useEffect(() => {
    const listener = ({ source, data }: MessageEvent) => {
      if (source === ref.current?.contentWindow) {
        const { type } = data;

        if (TERMINATION_EVENTS.includes(type)) onClose(conference);
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conference?.id, langCode]);

  return (
    <iframe
      title="conference"
      className={classes.root}
      src={confUrl}
      allowFullScreen
      allow="microphone; camera; autoplay; display-capture"
      ref={ref}
    />
  );
};
export default Conference;

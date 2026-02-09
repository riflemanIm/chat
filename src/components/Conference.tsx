import CallEndIcon from "@mui/icons-material/CallEnd";
import PauseIcon from "@mui/icons-material/Pause";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ConferenceData, User } from "../types";
import { isEmpty } from "../utils/common";
import ConferenceTime from "./ConferenceTime";
import ConfirmDialogSlide from "./ConfirmDialogSlide";
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
    border: 0,
  },
}));

type ConferenceProps = {
  conference: ConferenceData | null;
  onClose: (conference: ConferenceData | null) => void;
  langCode?: string | null;
  user: User;
  conferenceJoined: boolean;
  conferencePaused: boolean;
  onVideoEnd?: (conference: ConferenceData) => void;
  onConferencePause?: (conference: ConferenceData) => void;
};

const Conference: React.FC<ConferenceProps> = ({
  conference,
  onClose,
  langCode = "rus",
  user,
  conferenceJoined,
  conferencePaused,
  onVideoEnd,
  onConferencePause,
}: ConferenceProps) => {
  const classes = useStyles();
  const ref = React.useRef<HTMLIFrameElement>(null);
  const { t } = useTranslation();
  const [confirmFinishConf, setConfirmFinishConf] = React.useState(false);
  let confUrl = "";
  if (conference && conference.url) {
    confUrl = langCode
      ? updateUrlParameter(conference.url, "lang", transLang(langCode))
      : conference.url;
  }
  const TERMINATION_EVENTS = [
    "connectionFail",
    "loginFail",
    "callFail",
    "hangUp",
    "remoteHangUp",
    "logout",
    "connectionClosed",
  ];
  const conferenceId = conference ? conference.id : undefined;
  const isOperatorRole = user.role != null && [3, 4].includes(user.role);
  const isConferenceActive = conference != null && !isEmpty(conference);
  const canPauseConference =
    isConferenceActive &&
    conferenceJoined &&
    isOperatorRole &&
    !conferencePaused &&
    typeof onConferencePause === "function";
  const canFinishConference =
    isConferenceActive && isOperatorRole && typeof onVideoEnd === "function";
  const autoStopTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const autoStopFiredRef = React.useRef<string | null>(null);
  const EARLY_FINISH_GRACE_MS = 60 * 1000;

  const getRemainingMs = React.useCallback(() => {
    if (!conference) return null;
    if (
      typeof conference.remainingDuration === "number" &&
      Number.isFinite(conference.remainingDuration)
    ) {
      return conference.remainingDuration;
    }
    if (conference.finishDate) {
      const finishMs =
        typeof conference.finishDate === "string"
          ? new Date(conference.finishDate).getTime()
          : conference.finishDate.getTime();
      return Number.isFinite(finishMs) ? finishMs - Date.now() : null;
    }
    return null;
  }, [conference]);

  const getAutoStopDelayMs = React.useCallback(() => {
    return getRemainingMs();
  }, [getRemainingMs]);

  const isConferenceTimeElapsed = React.useCallback(() => {
    const remainingMs = getRemainingMs();
    if (remainingMs == null) return false;
    return remainingMs <= 0;
  }, [getRemainingMs]);

  useEffect(() => {
    if (autoStopTimeoutRef.current) {
      clearTimeout(autoStopTimeoutRef.current);
      autoStopTimeoutRef.current = null;
    }
    if (
      !conference ||
      !isOperatorRole ||
      conferencePaused ||
      typeof onVideoEnd !== "function"
    ) {
      return;
    }
    const delayMs = getAutoStopDelayMs();
    if (delayMs == null) return;
    if (delayMs <= 0) {
      if (autoStopFiredRef.current !== conference.id) {
        autoStopFiredRef.current = conference.id;
        onVideoEnd(conference);
      }
      return;
    }
    autoStopTimeoutRef.current = setTimeout(() => {
      if (autoStopFiredRef.current !== conference.id) {
        autoStopFiredRef.current = conference.id;
        onVideoEnd(conference);
      }
    }, delayMs);
    return () => {
      if (autoStopTimeoutRef.current) {
        clearTimeout(autoStopTimeoutRef.current);
        autoStopTimeoutRef.current = null;
      }
    };
  }, [
    conference,
    conferencePaused,
    getAutoStopDelayMs,
    isOperatorRole,
    onVideoEnd,
  ]);

  useEffect(() => {
    const listener = ({ source, data }: MessageEvent) => {
      const contentWindow = ref.current ? ref.current.contentWindow : null;
      if (contentWindow && source === contentWindow) {
        const { type } = data;

        if (TERMINATION_EVENTS.includes(type)) {
          const remainingMs = getRemainingMs();
          const shouldStop =
            isConferenceTimeElapsed() ||
            (remainingMs != null && remainingMs <= EARLY_FINISH_GRACE_MS);
          if (shouldStop) {
            if (onVideoEnd && conference) {
              autoStopFiredRef.current = conference.id;
              onVideoEnd(conference);
            }
          } else {
            onClose(conference);
          }
        }
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    conferenceId,
    langCode,
    onClose,
    onVideoEnd,
    conference,
    isConferenceTimeElapsed,
    getRemainingMs,
  ]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      gap={1}
    >
      <Box flex={1} minHeight={0} sx={{ borderRadius: 1, overflow: "hidden" }}>
        <iframe
          title="conference"
          className={classes.root}
          src={confUrl}
          allowFullScreen
          allow="microphone; camera; autoplay; display-capture"
          ref={ref}
        />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={1}
        alignItems="center"
        flexShrink={0}
        sx={{ "& > *": { flexShrink: 0 } }}
      >
        {canPauseConference && conference && (
          <Button
            aria-label="pause call"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<PauseIcon color="inherit" />}
            onClick={() => {
              if (onConferencePause) {
                onConferencePause(conference);
              }
            }}
          >
            {t("CHAT.CONFERENCE.PAUSE")}
          </Button>
        )}

        {canFinishConference && conference && (
          <>
            <Button
              aria-label="finish call"
              variant="contained"
              color="warning"
              size="small"
              startIcon={<CallEndIcon color="inherit" />}
              onClick={() => setConfirmFinishConf(true)}
            >
              {t("CHAT.CONFERENCE.FINISH")}
            </Button>
            <ConfirmDialogSlide
              open={confirmFinishConf}
              setOpen={setConfirmFinishConf}
              contentText={t("CHAT.CONFERENCE.CONFIRM_FINISH_CONF")}
              callback={() => {
                if (onVideoEnd && conference) {
                  onVideoEnd(conference);
                }
              }}
            />
          </>
        )}

        {conference && isConferenceActive && (
          <>
            {!isOperatorRole && (
              <Box mx="auto">
                <ConferenceTime
                  finishDate={conference.finishDate}
                  currentDate={conference.currentDate}
                  remainingDuration={conference.remainingDuration}
                  paused={conferencePaused}
                />
              </Box>
            )}

            {isOperatorRole && conference.finishDate != null && (
              <Box display="flex" alignItems="center" gap={1}>
                {conferencePaused && (
                  <Typography variant="body2" color="textSecondary">
                    {t("CHAT.CONFERENCE.PAUSED")}
                  </Typography>
                )}
                <ConferenceTime
                  finishDate={conference.finishDate}
                  currentDate={conference.currentDate}
                  remainingDuration={conference.remainingDuration}
                  paused={conferencePaused}
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};
export default Conference;

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AlertDialog from "./AlertDialog";

function formatHHMMSSFromMs(totalMs: number) {
  const totalSeconds = Math.max(0, Math.ceil(totalMs / 1000));
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

type ConferenceTimeProps = {
  conferenceTimer?: number | null;
  conferenceTimerDeadlineMs?: number | null;
  paused?: boolean;
};

export default function ConferenceTime({
  conferenceTimer,
  conferenceTimerDeadlineMs,
  paused = false,
}: ConferenceTimeProps) {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [tick, setTick] = useState(0);
  const warningShownRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const remainingDurationMs =
    typeof conferenceTimer === "number" && Number.isFinite(conferenceTimer)
      ? Math.max(0, conferenceTimer)
      : null;
  const deadlineMs =
    typeof conferenceTimerDeadlineMs === "number" &&
    Number.isFinite(conferenceTimerDeadlineMs)
      ? conferenceTimerDeadlineMs
      : null;

  useEffect(() => {
    const shouldRun = !paused && (deadlineMs != null || remainingDurationMs != null);
    if (!shouldRun) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTick((x) => x + 1);
    }, 200);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, deadlineMs, remainingDurationMs]);

  const displayRemainingMs = useMemo(() => {
    if (paused) return remainingDurationMs;
    if (deadlineMs != null) return Math.max(0, deadlineMs - Date.now());
    return remainingDurationMs;
  }, [paused, remainingDurationMs, deadlineMs, tick]);

  const secondsLeft = useMemo(() => {
    if (displayRemainingMs == null) return null;
    return Math.max(0, Math.ceil(displayRemainingMs / 1000));
  }, [displayRemainingMs]);
  const strTime = useMemo(
    () => formatHHMMSSFromMs(displayRemainingMs ?? 0),
    [displayRemainingMs],
  );

  // Показываем модалку за 3 минуты (180 сек) до конца
  useEffect(() => {
    if (secondsLeft == null) return;
    if (secondsLeft > 180) {
      warningShownRef.current = false;
      return;
    }
    if (secondsLeft > 0 && !warningShownRef.current) {
      warningShownRef.current = true;
      setShowAlert(true);
    }
  }, [secondsLeft]);

  if (displayRemainingMs == null || displayRemainingMs <= 0) {
    return null;
  }

  return (
    <Box textAlign="right">
      <Typography variant="body2" component="span">
        {t("CHAT.CONFERENCE.LEFT_TIME")}:{" "}
      </Typography>
      <Typography variant="button" component="span">
        {strTime}
      </Typography>
      <AlertDialog open={showAlert} setOpen={setShowAlert} severity="info">
        <Typography variant="body1" textAlign="center">
          {t("CHAT.CONFERENCE.UntillTheEnd")}:
        </Typography>
        <Typography variant="h6" textAlign="center">
          {strTime}
        </Typography>
      </AlertDialog>
    </Box>
  );
}

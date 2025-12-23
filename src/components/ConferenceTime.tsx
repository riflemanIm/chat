import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AlertDialog from "./AlertDialog";

function formatHHMMSS(totalSeconds: number) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

type ConferenceTimeProps = {
  finishDate: Date | string | null | undefined;
  currentDate?: Date | string | null;
  remainingDuration?: number | null;
  paused?: boolean;
};

const toMs = (value: Date | string | null | undefined) => {
  if (!value) return null;
  return typeof value === "string" ? new Date(value).getTime() : value.getTime();
};

const getInitialSeconds = (
  finishDate: Date | string | null | undefined,
  currentDate: Date | string | null | undefined,
  remainingDuration?: number | null
) => {
  if (
    typeof remainingDuration === "number" &&
    Number.isFinite(remainingDuration)
  ) {
    return Math.max(0, Math.round(remainingDuration / 1000));
  }

  const finishTimeMs = toMs(finishDate);
  if (!finishTimeMs) return null;
  const serverNowMs = toMs(currentDate) ?? Date.now();
  return Math.max(0, Math.round((finishTimeMs - serverNowMs) / 1000));
};

export default function ConferenceTime({
  finishDate,
  currentDate,
  remainingDuration,
  paused = false,
}: ConferenceTimeProps) {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [counter, setCounter] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const finishTimeMs = toMs(finishDate);
  const currentMs = toMs(currentDate);
  const remainingDurationMs =
    typeof remainingDuration === "number" && Number.isFinite(remainingDuration)
      ? remainingDuration
      : null;

  useEffect(() => {
    if (finishTimeMs == null && remainingDurationMs == null) {
      setCounter(null);
      return;
    }
    if (remainingDurationMs != null) {
      setCounter(Math.max(0, Math.round(remainingDurationMs / 1000)));
      setIsFinished(remainingDurationMs <= 0);
      return;
    }
    const initialSec = getInitialSeconds(finishDate, currentDate, null);
    if (initialSec == null) {
      setCounter(null);
      return;
    }
    setCounter(initialSec);
    setIsFinished(initialSec <= 0);
  }, [finishTimeMs, currentMs, remainingDurationMs, finishDate, currentDate]);

  useEffect(() => {
    if (paused || counter == null || isFinished) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev == null) {
          return prev;
        }
        const next = Math.max(0, prev - 1);
        if (next <= 0) {
          setIsFinished(true);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
        return next;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, counter, isFinished]);

  useEffect(() => {
    if (counter != null && counter <= 0) {
      setIsFinished(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [counter]);

  const { strTime } = useMemo(() => {
    const str = formatHHMMSS(counter ?? 0);
    return { strTime: str };
  }, [counter]);

  // Показываем модалку за 3 минуты (180 сек) до конца
  useEffect(() => {
    if (counter === 180) {
      setShowAlert(true);
    }
  }, [counter]);

  if (isFinished || counter == null) {
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

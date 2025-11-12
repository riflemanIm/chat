import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useCounter from "../hooks/useCounter";
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
};

export default function ConferenceTime({ finishDate }: ConferenceTimeProps) {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);

  // Преобразуем finishDate в timestamp, если он передан как строка
  const now = Date.now();
  if (finishDate == null) {
    return null;
  }
  const finishTimeMs =
    typeof finishDate === "string"
      ? new Date(finishDate).getTime()
      : finishDate.getTime();

  const initialSec = Math.max(0, Math.round((finishTimeMs - now) / 1000));
  const { counter, isFinished } = useCounter(initialSec);

  const { strTime } = useMemo(() => {
    const str = formatHHMMSS(counter);
    return { strTime: str };
  }, [counter]);

  // Показываем модалку за 3 минуты (180 сек) до конца
  useEffect(() => {
    if (counter === 180) {
      setShowAlert(true);
    }
  }, [counter]);

  if (isFinished) {
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

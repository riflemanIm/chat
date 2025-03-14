import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import useCounter from "../hooks/useCounter";
import AlertDialog from "./AlertDialog";
//import { useTranslation } from "react-i18next";

const hhMmSs = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const strHours = hours < 10 ? `0${hours}` : hours;
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = totalSeconds % 60;
  const strSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const strTime = `${strHours}:${strMinutes}:${strSeconds}`;
  return { hours, minutes, seconds, strTime };
};
type AlertModaleProps = {
  modaleInfo: boolean;
  setModaleInfo: (vars: boolean) => void;
  strTime: string;
};
const AlertModale: React.FC<AlertModaleProps> = ({
  modaleInfo,
  setModaleInfo,
  strTime,
}) => {
  const { t } = useTranslation();
  return useMemo(
    () => (
      <AlertDialog open={modaleInfo} setOpen={setModaleInfo} severity="info">
        <Typography variant="body1" textAlign="center">
          {t("CHAT.CONFERENCE.UntillTheEnd")}:
        </Typography>
        <Typography variant="h6" textAlign="center">
          {strTime}
        </Typography>
      </AlertDialog>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modaleInfo]
  );
};

type ConferenceTimeProps = {
  finishDate: Date;
};
const ConferenceTime: React.FC<ConferenceTimeProps> = ({
  finishDate,
}: ConferenceTimeProps) => {
  const { t } = useTranslation();
  const [modaleInfo, setModaleInfo] = useState(false);
  const currTime = Date.now();
  // console.log("currentDate server", currentDate);
  // console.log("currTime client", currTime);
  const finTime = new Date(finishDate).getTime();

  //const diffTimeMin = Math.round((finTime - currTime) / (1000 * 60));
  const diffTimeSec = Math.round((finTime - currTime) / 1000);

  const { counter } = useCounter(diffTimeSec);
  const { minutes, seconds, strTime } = hhMmSs(diffTimeSec);

  useEffect(() => {
    if (minutes && minutes === 3 && seconds != null && seconds === 0) {
      setModaleInfo(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  if (diffTimeSec < 1) return null;

  return (
    <Box textAlign="center">
      <Typography variant="body2" component="span">
        {t("CHAT.CONFERENCE.LEFT_TIME")}:{" "}
      </Typography>
      <Typography variant="button" component="span">
        {strTime}
      </Typography>
      <AlertModale
        modaleInfo={modaleInfo}
        setModaleInfo={setModaleInfo}
        strTime={strTime}
      />
    </Box>
  );
};

export default ConferenceTime;

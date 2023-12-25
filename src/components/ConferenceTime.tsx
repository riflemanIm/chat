import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import useCounter from "../hooks/useCounter";
import AlertDialog from "./AlertDialog";
//import { useTranslation } from "react-i18next";

type ConferenceTimeProps = {
  currentDate: Date;
  finishDate: Date;
};

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

const ConferenceTime: React.FC<ConferenceTimeProps> = ({
  currentDate,
  finishDate
}: ConferenceTimeProps) => {
  //const { t } = useTranslation();
  const [modaleInfo, setModaleInfo] = useState(false);
  const currTime = Date.now();
  console.log("currentDate server", currentDate);
  console.log("currTime client", currTime);
  const finTime = new Date(finishDate).getTime();

  //const diffTimeMin = Math.round((finTime - currTime) / (1000 * 60));
  const diffTimeSec = Math.round((finTime - currTime) / 1000);

  const { counter } = useCounter(diffTimeSec);
  useEffect(() => {
    if (minutes === 3 && seconds === 0) {
      setModaleInfo(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  if (diffTimeSec < 1) return null;

  const { minutes, seconds, strTime } = hhMmSs(counter);

  return (
    <Box textAlign="center">
      <Typography variant="body2" component="span">
        осталось:{" "}
      </Typography>
      <Typography variant="button" component="span">
        {strTime}
      </Typography>
      <AlertDialog open={modaleInfo} setOpen={setModaleInfo} severity="info">
        <Typography variant="body1" textAlign="center">
          До окончания конференции осталось:
        </Typography>
        <Typography variant="h6" textAlign="center">
          {strTime}
        </Typography>
      </AlertDialog>
    </Box>
  );
};

export default ConferenceTime;

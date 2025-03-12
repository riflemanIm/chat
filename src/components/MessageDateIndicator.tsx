import React from "react";
import { Alert, Fade, Box, Typography } from "@mui/material";
import dayjs from "dayjs";

interface DateIndicatorProps {
  date: string;
}

export const MessageDateIndicator: React.FC<DateIndicatorProps> = ({
  date,
}) => {
  return (
    <Box sx={{ position: "relative", margin: "0 auto" }}>
      <Fade
        in={!!date}
        style={
          date
            ? {
                top: "50%",
                left: "50%",
                transform: "translate(calc(-50% + 75px), -50%)",
                width: 160,
              }
            : { display: "none" }
        }
        timeout={2000}
      >
        <Alert
          severity="warning"
          icon={false}
          sx={(theme) => ({
            width: 150,
            mx: "auto",
            justifyContent: "center",
          })}
        >
          <Typography variant="h6" textAlign="center">
            {dayjs(date).format("DD.MM.YYYY")}
          </Typography>
        </Alert>
      </Fade>
    </Box>
  );
};

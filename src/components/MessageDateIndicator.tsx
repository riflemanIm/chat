import { Alert, Box, Fade, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

interface DateIndicatorProps {
  date: string;
}

export const MessageDateIndicator: React.FC<DateIndicatorProps> = ({
  date,
}) => {
  return (
    <Box sx={{ position: "relative", height: 0, margin: "8px 0" }}>
      <Fade in={!!date} timeout={2000}>
        <Alert
          severity="warning"
          icon={false}
          sx={() => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 150,
            mx: "auto",
            justifyContent: "center",
            zIndex: 1000,
          })}
        >
          <Typography variant="h6" textAlign="center">
            {date && dayjs(date).format("DD.MM.YYYY")}
          </Typography>
        </Alert>
      </Fade>
    </Box>
  );
};

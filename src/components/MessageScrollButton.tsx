import React from "react";
import { Box, Fab, Typography } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  arrowDown: {
    position: "absolute",
    left: "94.5%",
    bottom: 105,
    [theme.breakpoints.down("md")]: {
      left: "91.5%",
      bottom: 95,
    },
    [theme.breakpoints.down("sm")]: {
      left: "84%",
      bottom: 95,
    },
  },
}));

interface ScrollButtonProps {
  visible: boolean;
  unreadCount: number;
  onScrollDown: () => void;
}

export const MessageScrollButton: React.FC<ScrollButtonProps> = ({
  visible,
  unreadCount,
  onScrollDown,
}) => {
  const classes = useStyles();

  if (!visible) return null;

  return (
    <Box className={classes.arrowDown} textAlign="center">
      <Fab
        color="info"
        aria-label="scroll-down"
        size="medium"
        onClick={onScrollDown}
      >
        <KeyboardArrowDown />
      </Fab>
      {unreadCount > 0 && (
        <Fab
          color="warning"
          size="small"
          sx={{
            width: 24,
            height: 24,
            minHeight: 24,
            position: "relative",
            top: -10,
            pointerEvents: "none",
          }}
        >
          <Typography
            variant="body2"
            sx={(theme) => ({ color: theme.palette.background.default })}
          >
            {unreadCount}
          </Typography>
        </Fab>
      )}
    </Box>
  );
};

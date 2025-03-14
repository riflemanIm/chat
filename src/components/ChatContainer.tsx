import { Container } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    padding: 0,
    [theme.breakpoints.up("lg")]: {
      minWidth: 1200,
    },
  },
}));

const ChatContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      {children}
    </Container>
  );
};

export default ChatContainer;

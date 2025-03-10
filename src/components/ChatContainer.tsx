import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

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

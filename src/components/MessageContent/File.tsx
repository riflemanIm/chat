import React from "react";
import {
  Avatar,
  Box,
} from "@mui/material";
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import { getFileMeta, splitFileName } from "../../utils/common";
import { ChatMessage } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fileIcon: {
      fontSize: "0.75rem",
    },
    fileBody: {
      paddingLeft: theme.spacing(1),
    },
  })
);
type FileProps = {
  message: ChatMessage;
};

const File: React.FC<FileProps> = ({ message }: FileProps) => {
  const classes = useStyles();
  const meta = getFileMeta(message.content);
  const { name, ext } = splitFileName(meta.name);
  return (
    <Box display="flex" flexDirection="row">
      <Avatar className={classes.fileIcon}>{ext.toUpperCase()}</Avatar>
      <Box display="flex" flexDirection="column" className={classes.fileBody}>
        {name}
        <span>{`${ext} ${meta.size}`}</span>
      </Box>
    </Box>
  );
};

export default File;

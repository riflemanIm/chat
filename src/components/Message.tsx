import { Box, Link, ListItem, Typography } from "@mui/material";
import type { AlertColor } from "@mui/material";
import React, { forwardRef, memo, useMemo } from "react";

import { Done, DoneAll } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ChatMessage, Contact, PrivateMessage, User } from "../types";
import { combineURLs, formatTime } from "../utils/common";
import MessageContent from "./MessageContent";

/* styles */
import useStyles from "./styles";

type MessageProps = {
  apiUrl: string;
  user: User;
  message: ChatMessage;
  owner: Contact;
  isGroupMessage: boolean; // сообщение в группу
  isUserFirst: boolean; // начинает группу сообщений от одного пользователя
  isUserLast: boolean; // завершает группу сообщений от одного пользователя
  onContextMenu: (event: React.MouseEvent<HTMLElement>) => void;
  setViewerData: (value: { visible: boolean; src: string }) => void;
  //refOnMess: React.RefObject<HTMLDivElement> | null;
};

const wrapMessage = (
  apiUrl: string,
  message: ChatMessage,
  classes: ReturnType<typeof useStyles>,
  isUserFirst: boolean,
  isUserLast: boolean,
  onContextMenu: ((event: React.MouseEvent<HTMLElement>) => void) | undefined,
  child: React.JSX.Element
) => {
  const { messageType } = message;

  const className = [
    classes.message,
    isUserFirst ? classes.firstMessage : "",
    isUserLast ? classes.lastMessage : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (messageType === "file") {
    const fileUrl = combineURLs(apiUrl, `/static/file/${message.content}`);
    return (
      <Link
        className={`${className} ${classes.file}`}
        underline="none"
        href={fileUrl}
        target="_blank"
        download
        onContextMenu={onContextMenu}
      >
        {child}
      </Link>
    );
  }
  const isMedia =
    messageType === "image" ||
    messageType === "video" ||
    messageType === "video_conference";
  return (
    <Box
      display="flex"
      flexDirection={isMedia ? "column" : "row"}
      flexWrap="wrap"
      className={className}
      onContextMenu={onContextMenu}
    >
      {child}
    </Box>
  );
};

const Message = memo(
  forwardRef<HTMLLIElement, MessageProps>((props, ref) => {
    const classes = useStyles();
    const { t } = useTranslation();

    const {
      apiUrl,
      message,
      owner,
      user,
      isGroupMessage,
      isUserFirst,
      isUserLast,
      setViewerData,
      //refOnMess,
    } = props;

    type NotifyPayload = {
      severity?: AlertColor;
      message: string;
    };

    const notifyContent = useMemo(() => {
      if (!message.content?.trim().startsWith("{")) return message.content;
      try {
        return JSON.parse(message.content) as NotifyPayload;
      } catch (error) {
        console.warn("Failed to parse notify content", error);
        return message.content;
      }
    }, [message.content]);

    if (message.messageType === "notify") {
      const severity: AlertColor =
        typeof notifyContent === "string"
          ? "info"
          : notifyContent.severity ?? "info";
      const notifyText =
        typeof notifyContent === "string"
          ? notifyContent
          : notifyContent.message;

      return (
        <ListItem className={classes.rootNotify} ref={ref}>
          <Alert
            //ref={refOnMess}
            severity={severity}
          >
            {notifyText}
          </Alert>
        </ListItem>
      );
    }

    if (message.isRevoke) {
      // Удаленное сообщение
      return (
        <ListItem className={classes.rootNotify} ref={ref}>
          <Typography
            variant="body2"
            align="center"
            //ref={refOnMess}
          >
            {message.userId === user.userId
              ? t("CHAT.MESSAGE.REVOKED.YOU")
              : `${message.revokeUserName} ${t(
                  "CHAT.MESSAGE.REVOKED.CONTACT"
                )}`}
          </Typography>
        </ListItem>
      );
    }

    const isMine = user.userId === message.userId;

    return (
      <ListItem
        ref={ref}
        className={
          message.messageType === "video_conference"
            ? classes.rootNotify
            : isMine
              ? classes.rootUser
              : classes.rootContact
        }
      >
        {wrapMessage(
          apiUrl,
          message,
          classes,
          isUserFirst,
          isUserLast,
          props.onContextMenu,
          <React.Fragment>
            {!isMine && isGroupMessage && owner && isUserFirst && (
              <div className={classes.header}>{owner.username}</div>
            )}
            <div
              className={classes.body}
              //ref={refOnMess}
            >
              <MessageContent
                message={message}
                apiUrl={apiUrl}
                setViewerData={setViewerData}
              />
            </div>
            <div className={classes.status}>
              <span>
                {isMine
                  ? (message as PrivateMessage).status === 0 ? (
                      <Done className={classes.statusImage} />
                    ) : (
                      <DoneAll className={classes.statusImage} />
                    )
                  : null}
                {formatTime(message.cdate) ?? ""}
              </span>
            </div>
          </React.Fragment>
        )}
      </ListItem>
    );
  })
);
Message.displayName = "Message";
export default Message;

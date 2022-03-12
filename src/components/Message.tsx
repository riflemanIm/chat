import * as React from "react";
import {
  Box,
  createStyles,
  Link,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { DoneAll, Done } from "@material-ui/icons";
import { formatTime } from "../utils/common";
import MessageContent from "./MessageContent";
import { Alert } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import { ChatMessage, Contact, PrivateMessage, User } from "../types";

type MessageProps = {
  apiUrl: string;
  user: User;
  message: ChatMessage;
  owner: Contact;
  isGroupMessage: boolean; // сообщение в группу
  isUserFirst: boolean; // начинает группу сообщений от одного пользователя
  isUserLast: boolean; // завершает группу сообщений от одного пользователя
  refOnLastMess: React.RefObject<HTMLDivElement> | null;
  onContextMenu: (event: React.MouseEvent<HTMLElement>) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootContact: {
      "& span": {
        float: "right",
        color: "#B2B6C2",
      },
      "& $message": {
        backgroundColor: "#F1F4FC",
        color: "black",
      },
      "& $lastMessage": {
        borderBottomLeftRadius: 0,
      },
    },
    rootUser: {
      justifyContent: "flex-end",
      "& span": {
        float: "right",
        color: "#D9DEEC",
      },
      "& $message": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      "& $lastMessage": {
        borderBottomRightRadius: 0,
      },
    },
    rootNotify: {
      justifyContent: "center",
      "& > *": {
        padding: `0px ${theme.spacing(1)}px`,
        borderRadius: "16px",
        fontWeight: "bold",
      },
    },
    message: {
      maxWidth: "85%",
      borderRadius: "16px",
      padding: theme.spacing(1),
    },
    lastMessage: {},
    file: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      cursor: "pointer",
    },
    header: {
      flex: "0 0 100%",
      overflow: "hidden",
      fontWeight: "bold",
    },
    body: {
      flex: "1 1 auto",
      wordBreak: "break-word",
      overflow: "hidden",
    },
    status: {
      paddingLeft: theme.spacing(1),
      flex: "1 1 auto",
      alignSelf: "flex-end",
    },
    statusImage: {
      fontSize: "1rem",
      marginRight: theme.spacing(0.5),
      verticalAlign: "middle",
    },
  })
);

const wrapMessage = (
  apiUrl: string,
  message: ChatMessage,
  classes: ReturnType<typeof useStyles>,
  isUserLast: boolean,
  onContextMenu: ((event: React.MouseEvent<HTMLElement>) => void) | undefined,
  child: JSX.Element
) => {
  const { messageType } = message;

  const className = isUserLast
    ? `${classes.message} ${classes.lastMessage}`
    : classes.message;

  if (messageType === "file") {
    return (
      <Link
        className={`${className} ${classes.file}`}
        underline="none"
        href={`${apiUrl}/static/file/${message.content}`}
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

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    apiUrl,
    message,
    owner,
    refOnLastMess,
    user,
    isGroupMessage,
    isUserFirst,
    isUserLast,
  } = props;

  if (message.messageType === "notify") {
    // Уведомление - особый случай
    const content =
      message.content[0] === "{"
        ? JSON.parse(message.content)
        : message.content;
    return (
      <ListItem className={classes.rootNotify}>
        <Alert
          severity={typeof content === "string" ? "info" : content.severity}
          ref={refOnLastMess}
        >
          {typeof content === "string" ? content : content.message}
        </Alert>
      </ListItem>
    );
  }

  if (message.isRevoke) {
    // Удаленное сообщение
    return (
      <ListItem className={classes.rootNotify}>
        <Typography variant="body2" ref={refOnLastMess} align="center">
          {message.userId === user.userId
            ? t("CHAT.MESSAGE.REVOKED.YOU")
            : `${message.revokeUserName} ${t("CHAT.MESSAGE.REVOKED.CONTACT")}`}
        </Typography>
      </ListItem>
    );
  }

  const isMine = user.userId === message.userId;

  return (
    <ListItem className={isMine ? classes.rootUser : classes.rootContact}>
      {wrapMessage(
        apiUrl,
        message,
        classes,
        isUserLast,
        props.onContextMenu,
        <React.Fragment>
          {!isMine && isGroupMessage && owner && isUserFirst && (
            <div className={classes.header}>{owner.username}</div>
          )}
          <div className={classes.body}>
            <MessageContent message={message} apiUrl={apiUrl} />
          </div>
          <div className={classes.status} ref={refOnLastMess}>
            <span>
              {isMine ? (
                (message as PrivateMessage).status === 0 ? (
                  <Done className={classes.statusImage} />
                ) : (
                  <DoneAll className={classes.statusImage} />
                )
              ) : null}
              {formatTime(message.cdate)}
            </span>
          </div>
        </React.Fragment>
      )}
    </ListItem>
  );
};
export default Message;

import * as React from 'react';
import { Box, Link, ListItem, Typography } from '@mui/material';

import { DoneAll, Done } from '@mui/icons-material';
import { combineURLs, formatTime } from '../utils/common';
import MessageContent from './MessageContent';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ChatMessage, Contact, PrivateMessage, User } from '../types';

/* styles */
import useStyles from './styles';

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
  refOnMess: React.RefObject<HTMLDivElement> | null;
};

const wrapMessage = (
  apiUrl: string,
  message: ChatMessage,
  classes: ReturnType<typeof useStyles>,
  isUserFirst: boolean,
  isUserLast: boolean,
  onContextMenu:
    | ((event: React.MouseEvent<HTMLElement>) => void)
    | undefined,
  child: JSX.Element,
) => {
  const { messageType } = message;

  const className =
    isUserFirst && isUserLast
      ? `${classes.message} ${classes.firstMessage} ${classes.lastMessage}`
      : isUserFirst
      ? `${classes.message} ${classes.firstMessage}`
      : isUserLast
      ? `${classes.message} ${classes.lastMessage}`
      : classes.message;

  if (messageType === 'file') {
    return (
      <Link
        className={`${className} ${classes.file}`}
        underline="none"
        href={combineURLs(apiUrl, `/static/file/${message.content}`)}
        target="_blank"
        download
        onContextMenu={onContextMenu}
      >
        {child}
      </Link>
    );
  }
  const isMedia =
    messageType === 'image' ||
    messageType === 'video' ||
    messageType === 'video_conference';
  return (
    <Box
      display="flex"
      flexDirection={isMedia ? 'column' : 'row'}
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

    user,
    isGroupMessage,
    isUserFirst,
    isUserLast,
    setViewerData,
    refOnMess,
  } = props;
  //console.log('message', message);

  if (message.messageType === 'notify') {
    // Уведомление - особый случай
    const content =
      message.content[0] === '{'
        ? JSON.parse(message.content)
        : message.content;
    return (
      <ListItem className={classes.rootNotify}>
        <Alert
          ref={refOnMess}
          severity={
            typeof content === 'string' ? 'info' : content.severity
          }
        >
          {typeof content === 'string' ? content : content.message}
        </Alert>
      </ListItem>
    );
  }

  if (message.isRevoke) {
    // Удаленное сообщение
    return (
      <ListItem className={classes.rootNotify}>
        <Typography variant="body2" align="center" ref={refOnMess}>
          {message.userId === user.userId
            ? t('CHAT.MESSAGE.REVOKED.YOU')
            : `${message.revokeUserName} ${t(
                'CHAT.MESSAGE.REVOKED.CONTACT',
              )}`}
        </Typography>
      </ListItem>
    );
  }

  const isMine = user.userId === message.userId;

  return (
    <ListItem
      className={
        message.messageType === 'video_conference'
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
          <div className={classes.body} ref={refOnMess}>
            <MessageContent
              message={message}
              apiUrl={apiUrl}
              setViewerData={setViewerData}
            />
          </div>
          <div className={classes.status}>
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
        </React.Fragment>,
      )}
    </ListItem>
  );
};
export default Message;

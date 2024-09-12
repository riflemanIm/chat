import React, { useMemo } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles, withStyles } from '@mui/styles';

import GroupIcon from '@mui/icons-material/Group';
import {
  combineURLs,
  formatTime,
  getChatName,
} from '../utils/common';
import { useTranslation } from 'react-i18next';
import {
  ChatMessage,
  ChatRoom,
  Contact,
  Group,
  SetTyping,
} from '../types';

type RoomListItemProps = {
  apiUrl: string;
  chat: ChatRoom;
  active: boolean;
  typing: SetTyping | null;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flex: '1 1 auto',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    time: {
      paddingLeft: theme.spacing(1),
      justifyContent: 'flex-end',
      whiteSpace: 'nowrap',
    },
    unread: {
      justifyContent: 'flex-end',
      maxHeight: 20,
    },
    avatarGroup: {
      backgroundColor: '#28B7C6',
      color: '#fff',
    },
  }),
);

const getMessageText = (
  message: ChatMessage | null,
  t: (key: string) => string,
) => {
  if (!message) return null;
  switch (message.messageType) {
    case 'text':
      return message.content;
    case 'image':
      return `[${t('CHAT.MESSAGE.TYPE.IMAGE')}]`;
    case 'video':
      return `[${t('CHAT.MESSAGE.TYPE.VIDEO')}]`;
    case 'file':
      return `[${t('CHAT.MESSAGE.TYPE.FILE')}]`;
    case 'notify':
      return `[${t('CHAT.MESSAGE.TYPE.NOTIFY')}]`;
    default:
      return null;
  }
};

const TypingBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const OnlineBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }),
)(Badge);

const contactAvatar = (
  apiUrl: string,
  contact: Contact,
  typing: SetTyping | null,
): React.JSX.Element => {
  const avatar = (
    <Avatar
      alt={contact.username}
      src={contact.avatar ? combineURLs(apiUrl, contact.avatar) : ''}
    />
  );

  const isTyping =
    !!typing?.contactId && typing?.userId === contact.userId;
  if (isTyping)
    return (
      <TypingBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        {avatar}
      </TypingBadge>
    );

  if (contact?.online)
    return (
      <OnlineBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        {avatar}
      </OnlineBadge>
    );

  return avatar;
};

const RoomListItem: React.FC<RoomListItemProps> = (
  props: RoomListItemProps,
) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { apiUrl, chat, typing } = props;
  const roomName = getChatName(chat);

  const avatar = (chat as Group).groupId ? (
    <Avatar alt={roomName} className={classes.avatarGroup}>
      <GroupIcon />{' '}
    </Avatar>
  ) : (
    contactAvatar(apiUrl, chat as Contact, typing)
  );

  const lastMessage =
    chat.messages && chat.messages.length > 0
      ? chat.messages[chat.messages.length - 1]
      : null;

  const roomText = getMessageText(lastMessage, t);
  const roomTime = lastMessage?.cdate;

  const listItem = useMemo(
    () => (
      <ListItem
        button
        selected={props.active}
        onClick={props.onClick}
      >
        <ListItemAvatar>{avatar}</ListItemAvatar>
        <ListItemText
          secondaryTypographyProps={{ component: 'span' }}
          primary={
            <Box display="flex" flexDirection="row">
              <span className={classes.main}>{roomName}</span>
              <span className={classes.time}>
                {formatTime(roomTime)}
              </span>
            </Box>
          }
          secondary={
            <Box display="flex" flexDirection="row">
              <span className={classes.main}>{roomText}</span>
              {chat.unreadCount ? (
                <Chip
                  className={classes.unread}
                  component="span"
                  size="small"
                  color="primary"
                  label={chat.unreadCount}
                />
              ) : null}
            </Box>
          }
        />
      </ListItem>
    ),
    [chat.messages?.length],
  );
  return listItem;
};
export default RoomListItem;

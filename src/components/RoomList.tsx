import React from 'react';
import List from '@mui/material/List';
import { Theme } from '@mui/material/styles';

import { Card, CardHeader, Divider, TextField } from '@mui/material';
import RoomListItem from './RoomListItem';
import {
  chatRoomComparer,
  getChatId,
  getChatName,
  isEmpty,
} from '../utils/common';
import { useTranslation } from 'react-i18next';
import { ChatRoom, Contact, Group, SetTyping, User } from '../types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  searchField: {
    width: '100%',
  },
  listStyle: {
    height: '89.5%',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.primary.light} #fff`,
  },
}));

type RoomListProps = {
  apiUrl: string;
  user: User;
  activeRoom: ChatRoom | null;
  groups: Group[];
  contacts: Contact[];
  typing: SetTyping | null;
  onChangeChat?: (chat: ChatRoom) => void;
};

const filterChats = (
  chats: ChatRoom[],
  filter: string | null,
): ChatRoom[] => {
  if (!filter) return chats;
  const lowerFilter = filter.toLowerCase();
  return chats.filter(
    chat => getChatName(chat).toLowerCase().includes(lowerFilter),
  );
};

const sortChats = (
  userId: number,
  groups: ChatRoom[],
  contacts: ChatRoom[],
) => {
  let roomArr = [...groups, ...contacts];
  //console.log('groups', groups, 'contacts', contacts);

  // Сортировать окно чата (по времени последних сообщений)
  roomArr = roomArr.sort(chatRoomComparer);

  // Проверяем, есть ли список, который нужно закрепить
  const topChatId = localStorage.getItem(
    `${userId}-topChatId`,
  ) as string;
  if (topChatId) {
    const chat = roomArr.find(c => getChatId(c) === topChatId);
    if (chat) {
      // На первое место
      roomArr = roomArr.filter(k => getChatId(k) !== topChatId);
      chat.isTop = true;
      roomArr.unshift(chat);
    }
  }

  return roomArr;
};

const RoomList: React.FC<RoomListProps> = (props: RoomListProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [chats, setChats] = React.useState<ChatRoom[]>(
    sortChats(
      props.user.userId,
      filterChats(props.groups, null),
      filterChats(props.contacts, null),
    ),
  );

  const onSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    //console.log("e.target.value", e.target.value);

    setChats(
      sortChats(
        props.user.userId,
        filterChats(props.groups, e.target.value),
        filterChats(props.contacts, e.target.value),
      ),
    );
  };
  //const activeItem = (id: number) => id === props.activeRoom?.userId;

  //console.log("chats", chats);
  const roomList = React.useMemo(
    () =>
      chats.map(chat => (
        <RoomListItem
          key={getChatId(chat)}
          apiUrl={props.apiUrl}
          chat={chat}
          active={chat === props.activeRoom}
          typing={props.typing}
          onClick={() =>
            props.onChangeChat != null && props.onChangeChat(chat)
          }
        />
      )),
    [props.activeRoom?.userId, props.typing, chats],
  );
  return (
    <Card elevation={1} className={classes.root}>
      <CardHeader
        title={
          <TextField
            className={classes.searchField}
            label={t('CHAT.INPUT_SEARCH_CONTACT')}
            variant="outlined"
            size="small"
            fullWidth
            onChange={onSearchChange}
          />
        }
      />
      <Divider />
      <List aria-label="rooms" className={classes.listStyle}>
        {roomList}
      </List>
    </Card>
  );
};
export default RoomList;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Card, CardHeader, Divider, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import RoomListItem from "./RoomListItem";
import { chatRoomComparer, getChatId, getChatName } from "../utils/common";
import { useTranslation } from "react-i18next";
import { ChatRoom, Contact, Group, SetTyping, User } from "../types";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  searchField: {
    width: "100%",
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

const filterChats = (chats: ChatRoom[], filter: string | null): ChatRoom[] => {
  if (filter === null) return chats;
  const lowerFilter = filter.toLowerCase();
  return chats.filter((chat) =>
    getChatName(chat).toLowerCase().startsWith(lowerFilter)
  );
};

const sortChats = (
  userId: number,
  groups: ChatRoom[],
  contacts: ChatRoom[]
) => {
  let roomArr = [...groups, ...contacts];

  // Сортировать окно чата (по времени последних сообщений)
  roomArr = roomArr.sort(chatRoomComparer);

  // Проверяем, есть ли список, который нужно закрепить
  const topChatId = localStorage.getItem(`${userId}-topChatId`) as string;
  if (topChatId) {
    const chat = roomArr.find((c) => getChatId(c) === topChatId);
    if (chat) {
      // На первое место
      roomArr = roomArr.filter((k) => getChatId(k) !== topChatId);
      chat.isTop = true;
      roomArr.unshift(chat);
    }
  }

  return roomArr;
};

export default function RoomList(props: RoomListProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState<string | null>(null);

  const chats = sortChats(
    props.user.userId,
    filterChats(props.groups, filter),
    filterChats(props.contacts, filter)
  );

  const onSearchChange = (event: object, value: string | null) => {
    setFilter(value);
  };

  return (
    <Card elevation={1} className={classes.root}>
      <CardHeader
        title={
          <Autocomplete
            freeSolo
            options={chats.map((chat) => getChatName(chat))}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.searchField}
                label={t("CHAT.INPUT_SEARCH_CONTACT")}
                variant="outlined"
                size="small"
                fullWidth
              />
            )}
            onChange={onSearchChange}
          />
        }
      />
      <Divider />
      <List component="nav" aria-label="rooms">
        {chats.map((chat) => (
          <RoomListItem
            key={getChatId(chat)}
            apiUrl={props.apiUrl}
            chat={chat}
            active={chat === props.activeRoom}
            typing={props.typing}
            onClick={() => props.onChangeChat && props.onChangeChat(chat)}
          />
        ))}
      </List>
    </Card>
  );
}

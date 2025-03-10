import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import { Theme } from "@mui/material/styles";

import { Card, CardHeader, Divider, TextField } from "@mui/material";
import RoomListItem from "./RoomListItem";
import {
  chatRoomComparer,
  getChatId,
  getChatName,
  getParam,
  isEmpty,
} from "../utils/common";
import { useTranslation } from "react-i18next";
import { ChatRoom, Contact, Group, SetTyping, User } from "../types";
import { makeStyles } from "@mui/styles";
import { RestContext } from "../context/RestContext";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  searchField: {
    width: "100%",
  },
  listStyle: {
    height: "89.5%",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.primary.light} #fff`,
  },
}));

type RoomListProps = {
  user: User;
  activeRoom: ChatRoom | null;
  groups: Group[];
  contacts: Contact[];
  typing: SetTyping | null;
  onChangeChat: (chat: ChatRoom) => void;
  activeChatUserId?: number | null;
  activeGroupId?: number | null;
};

const filterChats = (chats: ChatRoom[], filter: string | null): ChatRoom[] => {
  if (!filter) return chats;
  const lowerFilter = filter.toLowerCase();
  return chats.filter((chat) =>
    getChatName(chat).toLowerCase().includes(lowerFilter)
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

const RoomList: FC<RoomListProps> = ({
  user,
  activeRoom,
  groups,
  contacts,
  typing,
  onChangeChat,
  activeChatUserId,
  activeGroupId,
}: RoomListProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { apiUrl, getUserByMmk } = useContext(RestContext);
  const allContacts = sortChats(
    user.userId,
    filterChats(groups, null),
    filterChats(contacts, null)
  );
  const [chats, setChats] = useState<ChatRoom[]>(allContacts);

  useEffect(() => {
    if (!isEmpty(allContacts)) setChats(allContacts);
  }, [allContacts]);

  useEffect(() => {
    if (activeChatUserId != null && !isEmpty(contacts)) {
      const Chat = Object.values(contacts).find(
        (item) => item.userId === activeChatUserId
      );
      if (Chat != null) onChangeChat(Chat);
    }

    const mmkId = getParam("mmk");
    const guid = getParam("guid");

    if ((mmkId != null || guid != null) && !isEmpty(contacts)) {
      //console.log("mmkId", mmkId);
      const changeChatByMmkId = async () => {
        const userId = await getUserByMmk(mmkId, guid);
        if (userId != null) {
          const Chat = Object.values(contacts).find(
            (item) => item.userId === userId
          );
          if (Chat != null) onChangeChat(Chat);
        }
      };
      changeChatByMmkId();
    }
    if (activeGroupId != null && !isEmpty(groups)) {
      const onlyChat = Object.values(groups).find(
        (item) => item.groupId === activeGroupId
      );

      if (onlyChat != null) {
        onChangeChat(onlyChat);
      }
    }
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //console.log("e.target.value", e.target.value);

    setChats(
      sortChats(
        user.userId,
        filterChats(groups, e.target.value),
        filterChats(contacts, e.target.value)
      )
    );
  };
  //const activeItem = (id: number) => id === activeRoom?.userId;

  return (
    <Card elevation={1} className={classes.root}>
      <CardHeader
        title={
          <TextField
            className={classes.searchField}
            label={t("CHAT.INPUT_SEARCH_CONTACT")}
            variant="outlined"
            size="small"
            fullWidth
            onChange={onSearchChange}
          />
        }
      />
      <Divider />
      <List aria-label="rooms" className={classes.listStyle}>
        {chats.map((chat: ChatRoom) => (
          <RoomListItem
            key={getChatId(chat)}
            apiUrl={apiUrl}
            chat={chat}
            active={chat === activeRoom}
            typing={typing}
            onClick={() => onChangeChat != null && onChangeChat(chat)}
          />
        ))}
      </List>
    </Card>
  );
};
export default RoomList;

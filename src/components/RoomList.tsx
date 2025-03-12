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

const getRoomList = (
  userId: number,
  groups: ChatRoom[],
  contacts: ChatRoom[],
  filter: string | null
) => {
  return sortChats(
    userId,
    filterChats(groups, filter),
    filterChats(contacts, filter)
  );
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
  console.log(" -- RoomList -- ");
  const classes = useStyles();
  const { t } = useTranslation();
  const { apiUrl, getUserByMmk } = useContext(RestContext);

  // Add search state
  const [searchFilter, setSearchFilter] = useState<string>("");

  // Memoize the chat list
  const allContacts = React.useMemo(
    () => getRoomList(user.userId, groups, contacts, searchFilter),
    [user.userId, groups, contacts, searchFilter]
  );

  // First useEffect for initialization
  useEffect(() => {
    let mounted = true;

    const initializeChat = async () => {
      if (activeChatUserId != null && !isEmpty(contacts)) {
        const chat = contacts.find((item) => item.userId === activeChatUserId);
        if (chat && mounted) {
          onChangeChat(chat);
          return;
        }
      }

      const mmkId = getParam("mmk");
      const guid = getParam("guid");

      if ((mmkId != null || guid != null) && !isEmpty(contacts)) {
        try {
          const userId = await getUserByMmk(mmkId, guid);
          if (userId != null && mounted) {
            const chat = contacts.find((item) => item.userId === userId);
            if (chat) onChangeChat(chat);
          }
        } catch (error) {
          console.error("Failed to get user by MMK:", error);
        }
      }

      if (activeGroupId != null && !isEmpty(groups)) {
        const group = groups.find((item) => item.groupId === activeGroupId);
        if (group && mounted) onChangeChat(group);
      }
    };

    initializeChat();

    return () => {
      mounted = false;
    };
  }, [activeChatUserId, activeGroupId, getUserByMmk, onChangeChat]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchFilter(e.target.value);
  };

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
            value={searchFilter}
          />
        }
      />
      <Divider />
      <List aria-label="rooms" className={classes.listStyle}>
        {allContacts.map((chat: ChatRoom) => (
          <RoomListItem
            key={getChatId(chat)}
            apiUrl={apiUrl}
            chat={chat}
            active={chat === activeRoom}
            typing={typing}
            onClick={() => onChangeChat(chat)}
          />
        ))}
      </List>
    </Card>
  );
};
export default RoomList;

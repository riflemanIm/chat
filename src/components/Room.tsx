import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import {
  Box,
  Card,
  CardContent,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  ChatMessage,
  ChatRoom,
  ConferenceData,
  Contact,
  ContactGather,
  Group,
  SendMessage,
  SetTyping,
  User,
  VisitData,
} from "../types";
import Entry from "./Entry";
import RoomHeader from "./RoomHeader";
import RoomMessageList from "./RoomMessageList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      minWidth: 360,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },

    roomHeader: {
      flex: 1,
    },

    flexAll: {
      flex: "1 1 auto",
    },
    flexEnd: {
      justifyContent: "flex-end",
    },
  })
);

type MenuState = {
  message: ChatMessage | null;
  mouseX: number | null;
  mouseY: number | null;
  canCopy: boolean;
  canDelete: boolean;
};

const initialMenuState: MenuState = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: false,
  canDelete: false,
};

type RoomProps = {
  apiUrl: string;
  user: User;
  users: ContactGather;
  chat: ChatRoom | null;
  typing: SetTyping | null;
  conference: ConferenceData | null;
  visitData: VisitData[];
  loading: boolean;
  pageSize: number;
  operators: Contact[];
  messageSearch: string;

  onExitRoom?: (chat: ChatRoom) => void;
  onEnterRoom?: (chat: ChatRoom) => void;
  onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
  onMessageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
  onTyping?: (chat: ChatRoom) => void;
  onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
  onVideoCall?: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
  onOperatorAdd?: (chat: Group, operator: Contact) => void;
  onLeaveGroup?: (chat: Group) => void;
  onContactClick?: (contact: Contact) => void;
  onMessageSearchChange?: (value: string) => void;
  isMobile: boolean;
};

const Room: React.FC<RoomProps> = (props: RoomProps) => {
  const {
    apiUrl,
    user,
    users,
    chat,
    typing,
    conference,
    visitData,
    loading,
    pageSize,
    onEnterRoom,
    operators,
    messageSearch,
    onVideoCall,
    onOperatorAdd,
    onLeaveGroup,
    onContactClick,
    onNeedMoreMessages,
    onMessageDelete,
    onTyping,
    onSendMessage,
    onMessageSearchChange,
  } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  const [menuState, setMenuState] = React.useState<MenuState>(initialMenuState);

  const resetMenuState = React.useCallback(() => {
    setMenuState(initialMenuState);
  }, []);

  const handleMenuClose = React.useCallback(() => {
    resetMenuState();
  }, [resetMenuState]);

  const handleCopy = useCallback(() => {
    const { message } = menuState;
    resetMenuState();
    if (!message?.content) return;

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message.content).catch(() => {
        console.warn("Copy failed");
      });
    }
  }, [menuState.message, resetMenuState]);

  const handleDelete = useCallback(() => {
    const { message } = menuState;
    resetMenuState();
    if (chat && message && onMessageDelete) {
      onMessageDelete(chat, message);
    }
  }, [menuState.message, resetMenuState, chat, onMessageDelete]);

  return (
    <Card elevation={1} className={classes.root}>
      <Box display="flex" flexDirection="row">
        <RoomHeader
          apiUrl={apiUrl}
          user={user}
          chat={chat}
          typing={typing}
          conference={conference}
          visitData={visitData}
          operators={operators}
          className={classes.roomHeader}
          onVideoCall={onVideoCall}
          onOperatorAdd={onOperatorAdd}
          onLeaveGroup={onLeaveGroup}
          onContactClick={onContactClick}
          messageSearch={messageSearch}
          onMessageSearchChange={onMessageSearchChange}
        />
      </Box>
      <Divider />
      <RoomMessageList
        apiUrl={apiUrl}
        user={user}
        users={users}
        chat={chat}
        loading={loading}
        pageSize={pageSize}
        initialMenuState={initialMenuState}
        onNeedMoreMessages={onNeedMoreMessages}
        onMessageDelete={onMessageDelete}
        setMenuState={setMenuState}
        onEnterRoom={onEnterRoom}
        messageSearch={messageSearch}
      />
      <Divider />
      <CardContent>
        <Entry
          chat={chat}
          onTyping={onTyping}
          onSendMessage={onSendMessage}
        />
      </CardContent>
      <Menu
        keepMounted
        open={menuState.mouseY !== null}
        onClose={handleMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          menuState.mouseY !== null && menuState.mouseX !== null
            ? { top: menuState.mouseY, left: menuState.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleCopy} disabled={!menuState.canCopy}>
          <span className={classes.flexAll}>{t("CHAT.MESSAGE.MENU.COPY")}</span>
          <ListItemIcon className={classes.flexEnd}>
            <FileCopyIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleDelete} disabled={!menuState.canDelete}>
          <span className={classes.flexAll}>
            {t("CHAT.MESSAGE.MENU.DELETE")}
          </span>
          <ListItemIcon className={classes.flexEnd}>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Card>
  );
};

export default Room;

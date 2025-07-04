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

const initialMenuState = {
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
  conferenceJoined: boolean;
  loading: boolean;
  pageSize: number;
  operators: Contact[];

  onExitRoom?: (chat: ChatRoom) => void;
  onEnterRoom?: (chat: ChatRoom) => void;
  onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
  onMessageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
  onTyping?: (chat: ChatRoom) => void;
  onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
  onVideoCall?: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
  onVideoEnd?: (chat: ConferenceData) => void;
  onConferencePause?: (conference: ConferenceData) => void;
  onOperatorAdd?: (chat: Group, operator: Contact) => void;
  onLeaveGroup?: (chat: Group) => void;
  onContactClick?: (contact: Contact) => void;
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
    conferenceJoined,
    loading,
    pageSize,
    isMobile,
    onEnterRoom,
  } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  const [menuState, setMenuState] = React.useState<{
    message: ChatMessage | null;
    mouseX: null | number;
    mouseY: null | number;
    canCopy: boolean;
    canDelete: boolean;
  }>(initialMenuState);

  const handleMenuClose = () => {
    setMenuState(initialMenuState);
  };

  const handleCopy = useCallback(() => {
    const { message } = menuState;
    setMenuState(initialMenuState);
    if (!message) return;
    navigator.clipboard.writeText(message.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);

  const handleDelete = useCallback(() => {
    const { message } = menuState;
    setMenuState(initialMenuState);
    if (props.onMessageDelete && chat && message)
      props.onMessageDelete(chat, message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);

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
          conferenceJoined={conferenceJoined}
          operators={props.operators}
          className={classes.roomHeader}
          onVideoCall={props.onVideoCall}
          onVideoEnd={props.onVideoEnd}
          onConferencePause={props.onConferencePause}
          onOperatorAdd={props.onOperatorAdd}
          onLeaveGroup={props.onLeaveGroup}
          onContactClick={props.onContactClick}
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
        onNeedMoreMessages={props.onNeedMoreMessages}
        onMessageDelete={props.onMessageDelete}
        setMenuState={setMenuState}
        onEnterRoom={onEnterRoom}
      />
      <Divider />
      <CardContent>
        <Entry
          chat={chat}
          onTyping={props.onTyping}
          onSendMessage={props.onSendMessage}
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

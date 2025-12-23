import DeleteIcon from "@mui/icons-material/Delete";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Avatar,
  Box,
  CardHeader,
  IconButton,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChatRoom,
  ConferenceData,
  Contact,
  Group,
  SetTyping,
  User,
  VisitData,
} from "../types";
import { combineURLs, isEmpty } from "../utils/common";
import AddContact from "./AddContact";
import ConferenceButton from "./ConferenceButton";
import ContactList from "./ContactList";
import ContactStatus from "./ContactStatus";
import RoomMessageSearch from "./RoomMessageSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff",
    },
  })
);

type RoomHeaderProps = {
  apiUrl: string;
  user: User;
  chat: ChatRoom | null;
  typing: SetTyping | null;
  conference: ConferenceData | null;
  className: string;
  operators: Contact[];
  visitData: VisitData[];
  messageSearch: string;
  onVideoCall?: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
  onOperatorAdd?: (chat: Group, operator: Contact) => void;
  onLeaveGroup?: (chat: Group) => void;
  onContactClick?: (contact: Contact) => void;
  onMessageSearchChange?: (value: string) => void;
};

const getGroupStatus = (group: Group, t: (key: string) => string) => {
  const memberCount = Array.isArray(group.members) ? group.members.length : 0;
  const status = [`${memberCount} ${t("CHAT.MEMBERS")}`];
  const onlineCount = (group.members || []).reduce(
    (sum: number, contact) => (contact.online ? sum + 1 : sum),
    0
  );
  if (onlineCount) status.push(`${onlineCount} ${t("CHAT.STATUS.ONLINE")}`);
  return status.join(", ");
};

const RoomHeader: React.FC<RoomHeaderProps> = ({
  apiUrl,
  user,
  chat,
  typing,
  conference,
  className,
  operators,
  visitData,
  messageSearch,
  onVideoCall,
  onOperatorAdd,
  onLeaveGroup,
  onContactClick,
  onMessageSearchChange,
}: RoomHeaderProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [addOperatorOpen, setAddOperatorOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const contact = chat as Contact;
  const isTyping = Boolean(
    typing && typing.contactId && typing.userId === contact.userId
  );
  const isConferenceActive = conference != null && !isEmpty(conference);
  const inMobileOrConferenceActive = isMobile || isConferenceActive;
  const isOperatorRole = user.role != null && [3, 4].includes(user.role);
  const canStartConference =
    !isConferenceActive && isOperatorRole && typeof onVideoCall === "function";

  if (!chat)
    return (
      <CardHeader
        avatar={<Avatar />}
        title=""
        subheader=""
        className={className}
      />
    );

  const handlePopoverClose = useCallback(() => {
    setAnchorEl(null);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handlePopoverIn = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setAnchorEl((prev) => (prev != null ? prev : event.currentTarget));
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    },
    []
  );

  const handlePopoverOut = useCallback(() => {
    if (!closeTimer.current) {
      closeTimer.current = setTimeout(() => {
        handlePopoverClose();
      }, 1000);
    }
  }, [handlePopoverClose]);

  const handleAddOperatorOpen = useCallback(() => {
    setAddOperatorOpen(true);
  }, []);

  const handleAddOperatorClose = useCallback(
    (operator?: Contact) => {
      setAddOperatorOpen(false);
      if (onOperatorAdd && operator && chat) {
        onOperatorAdd(chat as Group, operator);
      }
    },
    [chat, onOperatorAdd]
  );

  const group = chat as Group;
  if (group.groupId) {
    // группа
    return (
      <>
        <CardHeader
          avatar={
            <Avatar alt={group.name} className={classes.avatarGroup}>
              <GroupIcon />
            </Avatar>
          }
          title={group.name}
          subheader={
            <React.Fragment>
              <span
                id="mouse-over-span"
                aria-owns={anchorEl ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverIn}
                onMouseLeave={handlePopoverOut}
              >
                {getGroupStatus(group, t)}
              </span>
              <Popover
                id="mouse-over-popover"
                classes={{
                  paper: classes.paper,
                }}
                sx={{ pointerEvents: "none" }}
                open={!!anchorEl}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <ContactList
                  apiUrl={apiUrl}
                  contacts={group.members as Contact[]}
                  onContactClick={onContactClick}
                  owner={group.userId}
                  onMouseEnter={handlePopoverIn}
                  onMouseLeave={handlePopoverOut}
                  sx={{ pointerEvents: "all" }}
                />
              </Popover>
            </React.Fragment>
          }
          className={className}
          action={
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              sx={{ "& > *": { flexShrink: 0 } }}
            >
              <RoomMessageSearch
                value={messageSearch}
                onChange={onMessageSearchChange}
                inMobileOrConferenceActive={inMobileOrConferenceActive}
              />
              {user.role === 4 && (
                <React.Fragment>
                  <IconButton
                    aria-label="add user"
                    onClick={handleAddOperatorOpen}
                  >
                    <PersonAddIcon />
                  </IconButton>
                  <AddContact
                    apiUrl={apiUrl}
                    open={addOperatorOpen}
                    contacts={operators}
                    onClose={handleAddOperatorClose}
                  />
                </React.Fragment>
              )}
              {user.role === 4 &&
                Array.isArray(group.members) &&
                group.members.some(
                  (it) => it.userId !== user.userId && it.role === 4
                ) &&
                onLeaveGroup && (
                  <IconButton
                    aria-label="leave group"
                    onClick={() => onLeaveGroup(group)}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
            </Box>
          }
        />
      </>
    );
  }

  return (
    <>
      <CardHeader
        sx={{
          minWidth: 0,
          "& .MuiCardHeader-content": {
            minWidth: 0,
            flex: "1 1 auto",
            overflow: "hidden",
          },
          "& .MuiCardHeader-action": { flex: "0 0 auto", marginLeft: 0 },
        }}
        avatar={
          <Avatar
            alt={contact.username}
            src={contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""}
          />
        }
        title={
          <Typography
            variant="h6"
            sx={(theme) => ({
              minWidth: 0,
              flexShrink: 1,
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "0.9rem",
              width: "100%",
              [theme.breakpoints.down("md")]: {
                fontSize: "0.8rem",
              },

              [theme.breakpoints.down("sm")]: {
                whiteSpace: "normal",
                fontSize: "0.7rem",
              },
            })}
          >
            {contact.username}
          </Typography>
        }
        subheader={<ContactStatus contact={contact} isTyping={isTyping} />}
        className={className}
        action={
          <>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              sx={{ "& > *": { flexShrink: 0 } }}
            >
              <RoomMessageSearch
                value={messageSearch}
                onChange={onMessageSearchChange}
                inMobileOrConferenceActive={inMobileOrConferenceActive}
              />
              {canStartConference && onVideoCall && (
                <ConferenceButton
                  visitData={visitData}
                  chat={contact}
                  onVideoCall={onVideoCall}
                />
              )}
            </Box>
          </>
        }
      />
    </>
  );
};

export default RoomHeader;

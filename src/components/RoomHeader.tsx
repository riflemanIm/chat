import React from "react";
import {
  Avatar,
  CardHeader,
  Button,
  Popover,
  Theme,
  IconButton,
} from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import { useTranslation } from "react-i18next";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CallEndIcon from "@material-ui/icons/CallEnd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import { createStyles, makeStyles } from "@material-ui/styles";
import ContactStatus from "./ContactStatus";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import {
  ChatRoom,
  Contact,
  Group,
  SetTyping,
  User,
  ConferenceData,
} from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none",
    },
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
  onVideoCall?: (chat: ChatRoom) => void;
  onVideoEnd?: (conference: ConferenceData) => void;
  onOperatorAdd?: (chat: Group, operator: Contact) => void;
  onLeaveGroup?: (chat: Group) => void;
};

const getGroupStatus = (group: Group, t: (key: string) => string) => {
  const status = [`${group.members?.length} ${t("CHAT.MEMBERS")}`];
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
  onVideoCall,
  onVideoEnd,
  onOperatorAdd,
  onLeaveGroup,
}: RoomHeaderProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [addOperatorOpen, setAddOperatorOpen] = React.useState(false);

  if (!chat)
    return (
      <CardHeader
        avatar={<Avatar />}
        title=""
        subheader=""
        className={className}
      />
    );

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleAddOperatorOpen = () => {
    setAddOperatorOpen(true);
  };

  const handleAddOperatorClose = (operator?: Contact) => {
    setAddOperatorOpen(false);
    if (onOperatorAdd && operator && chat)
      onOperatorAdd(chat as Group, operator);
  };

  const group = chat as Group;
  if (group.groupId) {
    // группа
    return (
      <CardHeader
        avatar={
          <Avatar alt={group.name} className={classes.avatarGroup}>
            <GroupIcon />{" "}
          </Avatar>
        }
        title={group.name}
        subheader={
          <React.Fragment>
            <span
              aria-owns={anchorEl ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              {getGroupStatus(group, t)}
            </span>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
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
                owner={group.userId}
              />
            </Popover>
          </React.Fragment>
        }
        className={className}
        action={
          <React.Fragment>
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
              group.members?.find(
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
          </React.Fragment>
        }
      />
    );
  }
  const contact = chat as Contact;
  const isTyping = !!typing?.contactId && typing?.userId === contact.userId;

  //console.log("conference", conference, "user", user, "contact", contact)

  return (
    <CardHeader
      avatar={
        <Avatar alt={contact.username} src={`${apiUrl}${contact.avatar}`} />
      }
      title={contact.username}
      subheader={<ContactStatus contact={contact} isTyping={isTyping} />}
      className={className}
      action={
        <React.Fragment>
          {conference != null && onVideoEnd != null && (
            <Button
              aria-label="cancel call"
              variant="contained"
              color="primary"
              size="small"
              disabled={!contact.online}
              startIcon={<CallEndIcon color="error" />}
              onClick={() => onVideoEnd(conference)}
            >
              {t("CHAT.CONFERENCE.FINISH")}
            </Button>
          )}
          {conference == null && onVideoCall != null && user.role === 3 && (
            <Button
              aria-label="video call"
              variant="contained"
              color="primary"
              size="small"
              disabled={!contact.online}
              startIcon={<VideoCallIcon />}
              onClick={() => onVideoCall(contact)}
            >
              {t("CHAT.CONFERENCE.START")}
            </Button>
          )}
        </React.Fragment>
      }
    />
  );
};

export default RoomHeader;

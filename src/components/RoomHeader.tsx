import React, { useState } from 'react';
import {
  Avatar,
  CardHeader,
  Button,
  Popover,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import { useTranslation } from 'react-i18next';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallEndIcon from '@mui/icons-material/CallEnd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactStatus from './ContactStatus';
import ContactList from './ContactList';
import AddContact from './AddContact';
import {
  ChatRoom,
  Contact,
  Group,
  SetTyping,
  User,
  ConferenceData,
  VisitData,
} from '../types';
import { makeStyles, createStyles } from '@mui/styles';
import { combineURLs, formatTime, isEmpty } from '../utils/common';
import ConferenceTime from './ConferenceTime';
import ConfirmDialogSlide from './ConfirmDialogSlide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
    avatarGroup: {
      backgroundColor: '#28B7C6',
      color: '#fff',
    },
  }),
);

type RoomHeaderProps = {
  apiUrl: string;
  user: User;
  chat: ChatRoom | null;
  typing: SetTyping | null;
  conference: ConferenceData | null;
  conferenceJoined: boolean;
  className: string;
  operators: Contact[];
  visitData: VisitData[];
  onVideoCall?: (chat: ChatRoom, visitId: number | null) => void;
  onVideoEnd?: (conference: ConferenceData) => void;
  onConferencePause?: (conference: ConferenceData) => void;
  onOperatorAdd?: (chat: Group, operator: Contact) => void;
  onLeaveGroup?: (chat: Group) => void;
};

const getGroupStatus = (group: Group, t: (key: string) => string) => {
  const status = [`${group.members?.length} ${t('CHAT.MEMBERS')}`];
  const onlineCount = (group.members || []).reduce(
    (sum: number, contact) => (contact.online ? sum + 1 : sum),
    0,
  );
  if (onlineCount)
    status.push(`${onlineCount} ${t('CHAT.STATUS.ONLINE')}`);
  return status.join(', ');
};

const RoomHeader: React.FC<RoomHeaderProps> = ({
  apiUrl,
  user,
  chat,
  typing,
  conference,
  visitData,
  conferenceJoined,
  className,
  operators,
  onVideoCall,
  onVideoEnd,
  onConferencePause,
  onOperatorAdd,
  onLeaveGroup,
}: RoomHeaderProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [addOperatorOpen, setAddOperatorOpen] = useState(false);

  const startVisitId = () => {
    if (isEmpty(visitData)) return null;
    const visit = visitData.find(
      it => it.conferenceStatus === 'finished',
    );
    if (!isEmpty(visit)) return visit?.visitId;
    return visitData[0].visitId;
  };

  const [visitId, setVisitId] = useState(`${startVisitId()}`);
  console.log('visitId', visitId);

  const handleChangeVisitData = (e: SelectChangeEvent) => {
    setVisitId(`${e.target.value}`);
  };

  const [confirmReCreateVisit, setConfirmReCreateVisit] = useState(
    false,
  );

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
    event: React.MouseEvent<HTMLElement, MouseEvent>,
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
            <GroupIcon />
          </Avatar>
        }
        title={group.name}
        subheader={
          <React.Fragment>
            <span
              aria-owns={anchorEl ? 'mouse-over-popover' : undefined}
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
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
                it => it.userId !== user.userId && it.role === 4,
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
  const isTyping =
    !!typing?.contactId && typing?.userId === contact.userId;

  return (
    <CardHeader
      avatar={
        <Avatar
          alt={contact.username}
          src={
            contact.avatar ? combineURLs(apiUrl, contact.avatar) : ''
          }
        />
      }
      title={contact.username}
      subheader={
        <ContactStatus contact={contact} isTyping={isTyping} />
      }
      className={className}
      action={
        <React.Fragment>
          {user.role !== 1 &&
            conferenceJoined &&
            conference &&
            !isEmpty(conference) &&
            onConferencePause != null && (
              <Button
                aria-label="cancel call"
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<CallEndIcon color="error" />}
                onClick={() => onConferencePause(conference)}
              >
                {t('CHAT.CONFERENCE.PAUSE')}
              </Button>
            )}

          {conference &&
            !isEmpty(conference) &&
            onVideoEnd != null &&
            user.role != null &&
            [3, 4].includes(user.role) && (
              <Button
                aria-label="cancel call"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<CallEndIcon color="error" />}
                onClick={() => onVideoEnd(conference)}
                style={{ marginLeft: 8 }}
              >
                {t('CHAT.CONFERENCE.FINISH')}
              </Button>
            )}

          {isEmpty(conference) &&
            onVideoCall != null &&
            user.role &&
            [3, 4].includes(user.role) && (
              <>
                {!isEmpty(visitData) && (
                  <>
                    <FormControl
                      fullWidth
                      variant="standard"
                      margin="dense"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Визиты
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={`${visitId}`}
                        label="Визиты"
                        onChange={handleChangeVisitData}
                        fullWidth
                        size="small"
                      >
                        {visitData.map(item => {
                          return (
                            <MenuItem
                              key={item.visitId}
                              value={item.visitId}
                            >
                              <Typography
                                variant="body1"
                                sx={{ fontSize: 14 }}
                              >
                                {item.plExamName}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontSize: 13 }}
                              >
                                {formatTime(item.chatFrom, 'HH:mm')} -{' '}
                                {formatTime(item.visitDate, 'HH:mm')}{' '}
                                {item.conferenceStatus}
                              </Typography>
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>

                    <ConfirmDialogSlide
                      open={confirmReCreateVisit}
                      setOpen={setConfirmReCreateVisit}
                      contentText={t(
                        'CHAT.CONFERENCE.CONFIRM_RECREATE_CONF',
                      )}
                      callback={() =>
                        onVideoCall(contact, parseInt(visitId, 10))
                      }
                    />
                  </>
                )}

                <Button
                  aria-label="video call"
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<VideoCallIcon />}
                  onClick={() =>
                    visitId
                      ? setConfirmReCreateVisit(true)
                      : onVideoCall(contact, null)
                  }
                  fullWidth
                >
                  {t(
                    !isEmpty(visitData) &&
                      visitData.find(
                        it => `${it.visitId}` === visitId,
                      )?.conferenceStatus === 'finished'
                      ? 'CHAT.CONFERENCE.RESTART'
                      : 'CHAT.CONFERENCE.START',
                  )}
                </Button>
              </>
            )}

          {conference?.finishDate != null && (
            <ConferenceTime finishDate={conference.finishDate} />
          )}
        </React.Fragment>
      }
    />
  );
};

export default RoomHeader;

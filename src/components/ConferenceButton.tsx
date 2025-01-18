import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ChatRoom, VisitData } from "../types";
import { formatTime } from "../utils/common";
import { useTranslation } from "react-i18next";
import ConfirmDialogSlide from "./ConfirmDialogSlide";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

type ConferenceButtonProps = {
  visitData: VisitData[];
  chat: ChatRoom;
  onVideoCall: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
};

const getVisitMessage = (visit: VisitData) => {
  const visitDate = new Date(visit.visitDate);

  return `${visit.plExamName} (${formatTime(visitDate, "HH:mm")} - ${formatTime(
    new Date(visitDate.getTime() + visit.duration * 60_000),
    "HH:mm"
  )})`;
};

export default function ConferenceButton(props: ConferenceButtonProps) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [visitId, setVisitId] = React.useState<number | null>(null);
  const [confirmReCreateVisit, setConfirmReCreateVisit] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStart = (item: VisitData) => {
    setAnchorEl(null);
    setVisitId(item.visitId);
    if (item.conferenceStatus === "finished") {
      setConfirmReCreateVisit(true);
    } else {
      props.onVideoCall(props.chat, item.visitId);
    }
  };

  const visitData = React.useMemo(() => {
    return props.visitData.filter((it) => it.contactId === props.chat.userId);
  }, [props.visitData, props.chat]);

  /**
   * <Button
                  aria-label="video call"
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<VideoCallIcon />}
                  onClick={() =>
                    visitId &&
                    !isEmpty(
                      visitData.find(
                        (it) =>
                          it.conferenceStatus === 'finished' &&
                          it.visitId === Number(visitId),
                      ),
                    )
                      ? setConfirmReCreateVisit(true)
                      : onVideoCall(contact, null)
                  }
                  fullWidth
                >
                  {t(
                    visitId
                      ? 'CHAT.CONFERENCE.RESTART'
                      : 'CHAT.CONFERENCE.START',
                  )}
                </Button>              
   */

  return (
    <div>
      <Button
        id="conference-button"
        aria-controls={open ? "conference-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="primary"
        size="small"
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<VideoCallIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        disabled={visitData.length === 0}
      >
        {t("CHAT.CONFERENCE.START")}
      </Button>
      <ConfirmDialogSlide
        open={confirmReCreateVisit}
        setOpen={setConfirmReCreateVisit}
        contentText={t("CHAT.CONFERENCE.CONFIRM_RECREATE_CONF")}
        callback={() => {
          if (visitId && confirmReCreateVisit) {
            props.onVideoCall(props.chat, visitId, true);
          }
        }}
      />
      <StyledMenu
        id="conference-menu"
        MenuListProps={{
          "aria-labelledby": "conference-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {visitData.map((item) => {
          return (
            <MenuItem
              onClick={() => handleStart(item)}
              key={item.visitId}
              value={item.visitId}
              disableRipple
            >
              {item.conferenceStatus === "finished" ? (
                <RestartAltIcon />
              ) : (
                <PlayArrowIcon />
              )}
              {getVisitMessage(item)}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}

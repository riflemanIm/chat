import RecentActorsIcon from "@mui/icons-material/RecentActors";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Box, Grid2 as Grid, IconButton } from "@mui/material";
import React from "react";
import { ChatRoom, User } from "../types";

interface ChatLayoutProps {
  isMobile: boolean;
  conferenceActive: boolean;
  hideRooms: boolean;
  contactsList: React.ReactNode;
  chatRoom: React.ReactNode;
  activeRoom: ChatRoom | null;
  chatOld: ChatRoom | null;
  user: User;
  onExitRoom?: (chat: ChatRoom) => void;
  onChangeChat: (chat: ChatRoom) => void;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  isMobile,
  conferenceActive,
  hideRooms,
  contactsList,
  chatRoom,
  activeRoom,
  user,
  onExitRoom,
  onChangeChat,
  chatOld,
}) => {
  if (isMobile) {
    return (
      <>
        {conferenceActive && (
          <Box
            sx={{
              position: "absolute",
              overflow: "hidden",
              zIndex: 1400,
              top: user?.role && [3, 4].includes(user.role) ? -56 : -12,
              left: user?.role && [3, 4].includes(user.role) ? 32 : 218,
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              columnGap={3}
              my={3}
              sx={{
                position: "relative",
              }}
            >
              <IconButton
                aria-label="exit room"
                sx={{
                  color: "#fff",
                  background: "#000",
                  "&:hover": {
                    background: "#eee",
                    color: "#000",
                    boxShadow: "none",
                  },
                }}
                onClick={() => {
                  if (activeRoom && onExitRoom) onExitRoom(activeRoom);
                  else if (chatOld && onChangeChat) {
                    console.log("onChangeChat");
                    onChangeChat(chatOld);
                  }
                }}
              >
                {activeRoom ? <VideocamIcon /> : <RecentActorsIcon />}
              </IconButton>
            </Box>
          </Box>
        )}
        {contactsList}
        {chatRoom}
      </>
    );
  }

  return (
    <>
      <Grid container spacing={1} sx={{ height: "100%" }}>
        {(conferenceActive || !hideRooms) && (
          <Grid
            size={
              activeRoom
                ? {
                    sm: conferenceActive ? 6 : 4,
                    lg: conferenceActive ? 6 : 4,
                    xl: conferenceActive ? 6 : 3,
                  }
                : 12
            }
            sx={{ height: "100%" }}
          >
            {contactsList}
          </Grid>
        )}
        {activeRoom && (
          <Grid
            size={{
              sm: conferenceActive ? 6 : hideRooms ? 12 : 8,
              lg: conferenceActive ? 6 : hideRooms ? 12 : 8,
              xl: conferenceActive ? 6 : hideRooms ? 12 : 9,
            }}
            sx={{ height: "100%" }}
          >
            {chatRoom}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ChatLayout;

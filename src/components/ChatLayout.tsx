import React from "react";
import { Grid } from "@mui/material";

interface ChatLayoutProps {
  isMobile: boolean;
  conferenceActive: boolean;
  hideRooms: boolean;
  contactsList: React.ReactNode;
  chatRoom: React.ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  isMobile,
  conferenceActive,
  hideRooms,
  contactsList,
  chatRoom,
}) => {
  if (isMobile) {
    return (
      <>
        {contactsList}
        {chatRoom}
      </>
    );
  }

  return (
    <Grid container spacing={1} sx={{ height: "100%" }}>
      {(conferenceActive || !hideRooms) && (
        <Grid
          item
          sm={conferenceActive ? 6 : 4}
          lg={conferenceActive ? 6 : 4}
          xl={conferenceActive ? 6 : 3}
          sx={{ height: "100%" }}
        >
          {contactsList}
        </Grid>
      )}
      <Grid
        item
        sm={conferenceActive ? 6 : hideRooms ? 12 : 8}
        lg={conferenceActive ? 6 : hideRooms ? 12 : 8}
        xl={conferenceActive ? 6 : hideRooms ? 12 : 9}
        sx={{ height: "100%" }}
      >
        {chatRoom}
      </Grid>
    </Grid>
  );
};

export default ChatLayout;

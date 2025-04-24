import { Box } from "@mui/material";
import * as React from "react";
import CheckAudiVideoPerm from "./CheckAudiVideoPerm";
import { User } from "../types";

interface ConferenceControlsProps {
  user: User;
}

const ConferenceControls: React.FC<ConferenceControlsProps> = ({ user }) => {
  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        overflow: "hidden",
        top: user?.role && [3, 4].includes(user.role) ? 50 : 110,
        left: user?.role && [3, 4].includes(user.role) ? 50 : 30,
        zIndex: 1000,
        [theme.breakpoints.down("sm")]: {
          top: 98,
          left: 26,
        },
      })}
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
        <CheckAudiVideoPerm audio={true} video={false} />
        <CheckAudiVideoPerm audio={false} video={true} />
      </Box>
    </Box>
  );
};

export default ConferenceControls;

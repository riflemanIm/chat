import * as React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CheckAudiVideoPerm from "./CheckAudiVideoPerm";
import { useTranslation } from "react-i18next";

interface ConferenceControlsProps {
  isMobile: boolean;
  user: any;
  onBackToChat: () => void;
}

const ConferenceControls: React.FC<ConferenceControlsProps> = ({
  isMobile,
  user,
  onBackToChat,
}) => {
  const { t } = useTranslation();

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
        {isMobile && (
          <Tooltip title={t("CHAT.CONFERENCE.BACK")}>
            <IconButton
              sx={{
                color: "#fff",
                background: "#000",
                "&:hover": {
                  background: "#eee",
                  color: "#000",
                  boxShadow: "none",
                },
              }}
              onClick={onBackToChat}
              size="large"
            >
              <ChatIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default ConferenceControls;

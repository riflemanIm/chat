import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type ButtonMessageSearchIconProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
};

const ButtonMessageSearchIcon: React.FC<ButtonMessageSearchIconProps> = ({
  onClick,
  active = false,
}) => {
  const { t } = useTranslation();
  if (active) {
    return (
      <Button
        size="medium"
        color="inherit"
        startIcon={<CloseIcon fontSize="small" />}
        onClick={onClick}
        sx={{
          minWidth: "auto",
          px: 1.25,
          py: 0.75,
          borderRadius: 2,
          textTransform: "none",
          whiteSpace: "nowrap",
        }}
      >
        {t("CHAT.BUT_CLOSE")}
      </Button>
    );
  }

  return (
    <Tooltip title="Поиск по сообщениям">
      <IconButton
        size="medium"
        color="default"
        onClick={onClick}
        sx={{ width: 40, height: 40 }}
      >
        <TextFieldsIcon fontSize="small" />
        <SearchIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonMessageSearchIcon;

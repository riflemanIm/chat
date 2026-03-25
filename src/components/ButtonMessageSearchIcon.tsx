import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields";
type ButtonMessageSearchIconProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
};

const ButtonMessageSearchIcon: React.FC<ButtonMessageSearchIconProps> = ({
  onClick,
  active = false,
}) => {
  return (
    <Tooltip title="Поиск по сообщениям">
      <IconButton
        size="medium"
        color={active ? "primary" : "default"}
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

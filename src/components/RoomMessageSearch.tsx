import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import { useTranslation } from "react-i18next";

type RoomMessageSearchProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  value: string;
  onClose: () => void;
  onChange: (value: string) => void;
};

const RoomMessageSearch: React.FC<RoomMessageSearchProps> = ({
  anchorEl,
  open,
  value,
  onClose,
  onChange,
}) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [draft, setDraft] = React.useState(value);

  React.useEffect(() => {
    if (!isMobile || !open) {
      setDraft(value);
    }
  }, [value, open, isMobile]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setDraft(nextValue);
    onChange(nextValue);
  };

  const handleClear = () => {
    setDraft("");
    onChange("");
    if (isMobile) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (isMobile) {
        onClose();
      }
    }
  };

  const searchField = (
    <TextField
      autoFocus={isMobile ? open : false}
      fullWidth
      size="small"
      variant="outlined"
      label={t("CHAT.MESSAGE.SEARCH", "Поиск сообщений")}
      value={draft}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          endAdornment: draft ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClear}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  );

  if (!isMobile) {
    return <Box sx={{ maxWidth: 280 }}>{searchField}</Box>;
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableAutoFocus
      disableEnforceFocus
      keepMounted
    >
      <Box sx={{ px: 2, py: 1.5, maxWidth: 280 }}>{searchField}</Box>
    </Menu>
  );
};

export default RoomMessageSearch;

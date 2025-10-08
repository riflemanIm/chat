import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
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

const FIELD_WIDTH = 280;

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

  const handleSubmit = React.useCallback(() => {
    onChange(draft);
    if (isMobile) {
      onClose();
    }
  }, [draft, isMobile, onChange, onClose]);

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
      event.preventDefault();
      handleSubmit();
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
      sx={{ width: FIELD_WIDTH }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {draft ? (
                <IconButton
                  size="small"
                  onClick={handleClear}
                  aria-label={t("CHAT.MESSAGE.CLEAR_SEARCH", "Очистить поиск")}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              ) : null}
              <IconButton
                size="small"
                onClick={handleSubmit}
                aria-label={t("CHAT.MESSAGE.SEARCH_SUBMIT", "Найти сообщения")}
              >
                <SearchIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );

  if (!isMobile) {
    return <Box sx={{ width: FIELD_WIDTH }}>{searchField}</Box>;
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
      <Box sx={{ px: 2, py: 1.5, width: FIELD_WIDTH }}>{searchField}</Box>
    </Menu>
  );
};

export default RoomMessageSearch;

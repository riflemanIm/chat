import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  TextField,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ButtonMessageSearchIcon from "./ButtonMessageSearchIcon";

type RoomMessageSearchProps = {
  value: string;
  onChange?: (value: string) => void;
  inMobileOrConferenceActive: boolean;
};

const FIELD_WIDTH = 280;

const RoomMessageSearch: React.FC<RoomMessageSearchProps> = ({
  value,
  onChange,
  inMobileOrConferenceActive,
}) => {
  const { t } = useTranslation();

  const [draft, setDraft] = React.useState(value);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const menuOpen = Boolean(anchorEl);

  const handleSubmit = React.useCallback(() => {
    onChange?.(draft);
    if (inMobileOrConferenceActive) {
      setAnchorEl(null);
    }
  }, [draft, inMobileOrConferenceActive, onChange]);

  const handleSearchOpen = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleSearchClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  React.useEffect(() => {
    if (!inMobileOrConferenceActive || !menuOpen) {
      setDraft(value);
    }
  }, [value, menuOpen, inMobileOrConferenceActive]);

  React.useEffect(() => {
    if (!inMobileOrConferenceActive) {
      setAnchorEl(null);
    }
  }, [inMobileOrConferenceActive]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setDraft(nextValue);
    onChange?.(nextValue);
  };

  const handleClear = () => {
    setDraft("");
    onChange?.("");
    if (inMobileOrConferenceActive) {
      setAnchorEl(null);
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
      autoFocus={inMobileOrConferenceActive ? menuOpen : false}
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

  if (!inMobileOrConferenceActive) {
    return <Box sx={{ width: FIELD_WIDTH }}>{searchField}</Box>;
  }

  return (
    <React.Fragment>
      <ButtonMessageSearchIcon
        onClick={handleSearchOpen}
        active={Boolean(value)}
      />
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleSearchClose}
        disableAutoFocus
        disableEnforceFocus
        keepMounted
      >
        <Box sx={{ px: 2, py: 1.5, width: FIELD_WIDTH }}>{searchField}</Box>
      </Menu>
    </React.Fragment>
  );
};

export default RoomMessageSearch;

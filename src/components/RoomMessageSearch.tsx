import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ButtonMessageSearchIcon from "./ButtonMessageSearchIcon";

type RoomMessageSearchProps = {
  value: string;
  onChange?: (value: string) => void;
  inlineOpen: boolean;
  onInlineOpenChange: (open: boolean) => void;
};

const FIELD_WIDTH = 280;

const RoomMessageSearch: React.FC<RoomMessageSearchProps> = ({
  value,
  onChange,
  inlineOpen,
  onInlineOpenChange,
}) => {
  const { t } = useTranslation();

  const [draft, setDraft] = React.useState(value);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = React.useCallback(() => {
    onChange?.(draft);
  }, [draft, onChange]);

  const handleSearchOpen = React.useCallback(() => {
    onInlineOpenChange(!inlineOpen);
  }, [inlineOpen, onInlineOpenChange]);

  const handleSearchClose = React.useCallback(() => {
    onInlineOpenChange(false);
  }, [onInlineOpenChange]);

  React.useEffect(() => {
    setDraft(value);
    if (value && !inlineOpen) {
      onInlineOpenChange(true);
    }
  }, [inlineOpen, onInlineOpenChange, value]);

  React.useEffect(() => {
    if (inlineOpen) {
      inputRef.current?.focus();
    }
  }, [inlineOpen]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setDraft(nextValue);
    onChange?.(nextValue);
  };

  const handleClear = () => {
    setDraft("");
    onChange?.("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      handleSearchClose();
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        minWidth: 0,
        flex: inlineOpen ? "1 1 auto" : "0 0 auto",
        py: 0.5,
      }}
    >
      <Box
        sx={(theme) => ({
          width: inlineOpen ? "100%" : 0,
          maxWidth: inlineOpen ? "none" : 0,
          opacity: inlineOpen ? 1 : 0,
          mr: inlineOpen ? 1.5 : 0,
          minWidth: 0,
          py: 1,
          overflow: "hidden",
          pointerEvents: inlineOpen ? "auto" : "none",
          transition: theme.transitions.create(["width", "opacity", "margin"], {
            duration: theme.transitions.duration.shorter,
          }),
        })}
      >
        <TextField
          inputRef={inputRef}
          fullWidth
          size="small"
          variant="outlined"
          label={t("CHAT.MESSAGE.SEARCH", "Поиск сообщений")}
          value={draft}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          sx={{
            width: inlineOpen ? "100%" : FIELD_WIDTH,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "background.paper",
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  {draft ? (
                    <IconButton
                      size="small"
                      onClick={handleClear}
                      aria-label={t(
                        "CHAT.MESSAGE.CLEAR_SEARCH",
                        "Очистить поиск",
                      )}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  ) : null}
                  <IconButton
                    size="small"
                    onClick={handleSubmit}
                    aria-label={t(
                      "CHAT.MESSAGE.SEARCH_SUBMIT",
                      "Найти сообщения",
                    )}
                  >
                    <SearchIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <ButtonMessageSearchIcon
        onClick={handleSearchOpen}
        active={Boolean(value) || inlineOpen}
      />
    </Box>
  );
};

export default RoomMessageSearch;

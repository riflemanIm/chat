import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
  useRef,
} from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Popover,
  SvgIcon,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send, InsertEmoticon } from "@mui/icons-material";
import Emoji from "./Emoji";
import { useTranslation } from "react-i18next";
import { ChatRoom, ImageSize, SendMessage } from "../types";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp"],
  video: ["video/mp4", "video/webm"],
  document: ["application/pdf"],
};

const MAX_IMAGE_DIMENSION = 335;

const useStyles = makeStyles(() => ({
  input: {
    flex: "auto",
  },
  inputUpload: {
    display: "none",
  },
  attachmentIcon: {
    fill: "none",
    stroke: "currentColor",
  },
  error: {
    color: "red",
    fontSize: "0.75rem",
    marginTop: "4px",
  },
}));

interface EntryProps {
  chat: ChatRoom | null;
  onTyping?: (chat: ChatRoom) => void;
  onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
  maxMessageLength?: number;
}

const getImageSize = (data: ImageSize): ImageSize => {
  let { width, height } = data;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = MAX_IMAGE_DIMENSION * (height / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = MAX_IMAGE_DIMENSION * (width / height);
      height = MAX_IMAGE_DIMENSION;
    }
  }

  return { width, height };
};

const Entry: React.FC<EntryProps> = ({
  chat,
  onTyping,
  onSendMessage,
  maxMessageLength = 1000,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [emojiAnchorEl, setEmojiAnchorEl] = useState<HTMLButtonElement | null>(
    null
  );

  const textRef = useRef<HTMLInputElement>(null);
  const textValueRef = useRef("");

  const [error, setError] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [lastTyping, setLastTyping] = useState({
    chat,
    time: 0,
  });

  const handleEmojiClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEmojiAnchorEl(event.currentTarget);
  };

  const handleEmojiClose = () => {
    setEmojiAnchorEl(null);
  };

  const emojiSelect = useCallback((emoji: string) => {
    if (textRef.current) {
      const newValue = textValueRef.current + emoji;
      textValueRef.current = newValue;
      textRef.current.value = newValue;
    }
    handleEmojiClose();
  }, []);

  const handleTyping = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      textValueRef.current = newText;

      if (
        chat &&
        onTyping &&
        (lastTyping.chat !== chat || Date.now() - lastTyping.time >= 500)
      ) {
        setLastTyping({
          chat,
          time: Date.now(),
        });
        onTyping(chat);
      }
    },
    [chat, onTyping, lastTyping.chat]
  );

  const sendMessage = useCallback(
    (data: SendMessage) => {
      if (!chat || !onSendMessage) return;
      onSendMessage(chat, data);
    },
    [chat, onSendMessage]
  );

  const validateMessage = (message: string): boolean => {
    if (message.trim().length === 0) {
      setError(t("CHAT.ERROR.EMPTY_MESSAGE"));
      return false;
    }
    if (message.length > maxMessageLength) {
      setError(t("CHAT.ERROR.MESSAGE_TOO_LONG"));
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = useCallback(() => {
    const currentText = textValueRef.current;
    if (!validateMessage(currentText)) return;

    sendMessage({ message: currentText, messageType: "text" });

    if (textRef.current) {
      textRef.current.value = "";
      textValueRef.current = "";
    }
    setError("");
  }, [sendMessage]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setError(t("CHAT.ERROR.FILE_TOO_LARGE"));
      return;
    }

    try {
      setIsUploading(true);
      setError("");

      const messageType =
        Object.entries(ALLOWED_FILE_TYPES).find(([, types]) =>
          types.includes(file.type)
        )?.[0] || "file";

      if (messageType === "image") {
        const imageSize = await new Promise<ImageSize>((resolve) => {
          const image = new Image();
          const url = URL.createObjectURL(file);
          image.onload = () => {
            URL.revokeObjectURL(url);
            resolve(
              getImageSize({
                width: image.width,
                height: image.height,
              })
            );
          };
          image.src = url;
        });

        sendMessage({
          message: file,
          width: imageSize.width,
          height: imageSize.height,
          messageType,
        });
      } else {
        sendMessage({
          message: file,
          messageType,
          fileName: file.name,
          size: file.size,
        });
      }
    } catch (err) {
      setError(t("CHAT.ERROR.UPLOAD_FAILED"));
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        className={classes.input}
        placeholder={t("CHAT.INPUT_MESSAGE") || ""}
        autoFocus
        variant="standard"
        error={!!error}
        disabled={isUploading}
        inputRef={textRef}
        slotProps={{
          input: {
            autoComplete: "off",
            inputProps: {
              maxLength: maxMessageLength,
            },

            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <input
                  ref={fileInputRef}
                  accept={Object.values(ALLOWED_FILE_TYPES).flat().join(",")}
                  className={classes.inputUpload}
                  id="icon-button-file"
                  type="file"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload"
                    component="span"
                    size="small"
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <CircularProgress size={24} />
                    ) : (
                      <SvgIcon className={classes.attachmentIcon}>
                        <path
                          d="M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </SvgIcon>
                    )}
                  </IconButton>
                </label>
                <IconButton
                  aria-describedby={
                    Boolean(emojiAnchorEl) ? "emoji-popover" : undefined
                  }
                  onClick={handleEmojiClick}
                  color="primary"
                  size="small"
                  disabled={isUploading}
                >
                  <InsertEmoticon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                edge="end"
                color="inherit"
                size="small"
                onClick={handleSubmit}
                disabled={isUploading || !textValueRef.current.trim()}
              >
                <Send />
              </IconButton>
            ),
            onKeyDown,
          },
        }}
        onChange={handleTyping}
      />
      {error && <div className={classes.error}>{error}</div>}
      <Popover
        id="emoji-popover"
        open={Boolean(emojiAnchorEl)}
        anchorEl={emojiAnchorEl}
        onClose={handleEmojiClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Emoji onSelect={emojiSelect} />
      </Popover>
    </Box>
  );
};

export default Entry;

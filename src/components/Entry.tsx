import React, { ChangeEvent, KeyboardEvent } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Popover,
  SvgIcon
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Send, InsertEmoticon } from "@mui/icons-material";
import Emoji from "./Emoji";
import { useTranslation } from "react-i18next";
import { ChatRoom, ImageSize, SendMessage } from "../types";

const useStyles = makeStyles(() => ({
  input: {
    flex: "auto"
  },
  inputUpload: {
    display: "none"
  },
  attachmentIcon: {
    fill: "none",
    stroke: "currentColor"
  }
}));

type EntryProps = {
  chat: ChatRoom | null;
  onTyping?: (chat: ChatRoom) => void;
  onSendMessage?: (chat: ChatRoom, data: SendMessage) => void;
};

/**
 * Рассчитать пропорции изображения
 */
const getImageSize = (data: ImageSize) => {
  let { width, height } = data;
  if (width > 335 || height > 335) {
    if (width > height) {
      height = 335 * (height / width);
      width = 335;
    } else {
      width = 335 * (width / height);
      height = 335;
    }
  }
  return {
    width,
    height
  };
};

const Entry: React.FC<EntryProps> = (props: EntryProps) => {
  const classes = useStyles();
  const { chat } = props;

  const { t } = useTranslation();

  const [empjiEl, setEmojiEl] = React.useState<HTMLButtonElement | null>(null);
  const [text, setText] = React.useState("");
  const [lastTyping, setLastTyping] = React.useState({
    chat,
    time: 0
  });

  const handleEmojiClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEmojiEl(event.currentTarget);
  };

  const handleEmojiClose = () => {
    setEmojiEl(null);
  };

  const emojiSelect = (emoji: string) => {
    setText(`${text}${emoji}`);
    handleEmojiClose();
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
    if (
      chat &&
      props.onTyping &&
      (lastTyping.chat !== chat || Date.now() - lastTyping.time >= 500)
    ) {
      setLastTyping({
        chat,
        time: Date.now()
      });
      props.onTyping(chat);
    }
  };

  const sendMessage = (data: SendMessage) => {
    if (chat && props.onSendMessage) props.onSendMessage(chat, data);
  };

  const submit = () => {
    if (text.trim().length === 0) {
      return;
    }

    sendMessage({ message: text, messageType: "text" });
    setText("");
  };

  const onSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submit();
  };

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  };

  const onSubmitFile = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;
    const file = event.currentTarget.files[0];
    let messageType: string;
    if (file.type.includes("image")) {
      messageType = "image";
    } else if (file.type.includes("video")) {
      messageType = "video";
    } else {
      messageType = "file";
    }
    if (messageType === "image") {
      const image = new Image();
      const url = window.URL || window.webkitURL;
      image.src = url.createObjectURL(file);
      image.onload = () => {
        const imageSize: ImageSize = getImageSize({
          width: image.width,
          height: image.height
        });
        sendMessage({
          message: file,
          width: imageSize.width,
          height: imageSize.height,
          messageType
        });
      };
    } else {
      sendMessage({
        message: file,
        messageType,
        fileName: file.name,
        size: file.size
      });
    }
  };

  const emojiOpen = Boolean(empjiEl);
  const enojiId = emojiOpen ? "simple-popover" : undefined;
  return (
    <Box display="flex" flexDirection="row">
      <TextField
        className={classes.input}
        placeholder={t("CHAT.INPUT_MESSAGE") || ""}
        autoFocus={true}
        variant="standard"
        slotProps={{          
          input: {
            autoComplete: "off",
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position={"start"}>
              <input
                accept=".pdf,.jpg,.jpeg,.bmp,.gif,.png,application/pdf,image/jpeg,image/bmp,image/gif,image/png"
                className={classes.inputUpload}
                id="icon-button-file"
                type="file"
                onChange={onSubmitFile}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload"
                  component="span"
                  size="small"
                >
                  <SvgIcon fill="none" className={classes.attachmentIcon}>
                    <path
                      d="M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </SvgIcon>
                </IconButton>
              </label>{" "}
              <IconButton
                aria-describedby={enojiId}
                onClick={handleEmojiClick}
                color="primary"
                size="small"
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
              onClick={onSubmitClick}
            >
              <Send />
            </IconButton>
          )
        }
        }}
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Popover
        id={enojiId}
        open={emojiOpen}
        anchorEl={empjiEl}
        onClose={handleEmojiClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Emoji onSelect={emojiSelect} />
      </Popover>
    </Box>
  );
};
export default Entry;

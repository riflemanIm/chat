'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var material = require('@mui/material');
var styles = require('@mui/styles');
var FileCopyIcon = _interopDefault(require('@mui/icons-material/FileCopy'));
var DeleteIcon = _interopDefault(require('@mui/icons-material/Delete'));
var ArrowBackIcon = _interopDefault(require('@mui/icons-material/ArrowBack'));
var iconsMaterial = require('@mui/icons-material');
var reactI18next = require('react-i18next');
var Select = _interopDefault(require('@mui/material/Select'));
var GroupIcon = _interopDefault(require('@mui/icons-material/Group'));
var VideoCallIcon = _interopDefault(require('@mui/icons-material/VideoCall'));
var CallEndIcon = _interopDefault(require('@mui/icons-material/CallEnd'));
var PersonAddIcon = _interopDefault(require('@mui/icons-material/PersonAdd'));
var StarIcon = _interopDefault(require('@mui/icons-material/Star'));
var dayjs = _interopDefault(require('dayjs'));
var Button = _interopDefault(require('@mui/material/Button'));
var Dialog = _interopDefault(require('@mui/material/Dialog'));
var DialogActions = _interopDefault(require('@mui/material/DialogActions'));
var DialogContent = _interopDefault(require('@mui/material/DialogContent'));
var Slide = _interopDefault(require('@mui/material/Slide'));
var KeyboardArrowDown = _interopDefault(require('@mui/icons-material/KeyboardArrowDown'));
var reactAspectRatio = require('react-aspect-ratio');
var InfiniteScroll = _interopDefault(require('react-infinite-scroller'));
var List = _interopDefault(require('@mui/material/List'));
var axios = _interopDefault(require('axios'));
var io = _interopDefault(require('socket.io-client'));
var SettingsSuggestIcon = _interopDefault(require('@mui/icons-material/SettingsSuggest'));
var SettingsVoiceIcon = _interopDefault(require('@mui/icons-material/SettingsVoice'));
var VideoSettingsIcon = _interopDefault(require('@mui/icons-material/VideoSettings'));
var i18n = _interopDefault(require('i18next'));
var LanguageDetector = _interopDefault(require('i18next-browser-languagedetector'));

(function (MessageStatus) {
  MessageStatus[MessageStatus["sent"] = 0] = "sent";
  MessageStatus[MessageStatus["read"] = 1] = "read";
})(exports.MessageStatus || (exports.MessageStatus = {}));
(function (Role) {
  Role[Role["Unknown"] = 0] = "Unknown";
  Role[Role["Client"] = 1] = "Client";
  Role[Role["Agent"] = 2] = "Agent";
  Role[Role["Specialist"] = 3] = "Specialist";
  Role[Role["Operator"] = 4] = "Operator";
})(exports.Role || (exports.Role = {}));
(function (ContextMenuType) {
  ContextMenuType["COPY"] = "COPY";
  ContextMenuType["REVOKE"] = "REVOKE";
  ContextMenuType["TOP_REVERT"] = "TOP_REVERT";
  ContextMenuType["TOP"] = "TOP";
  ContextMenuType["READ"] = "READ";
  ContextMenuType["DELETE"] = "DELETE";
})(exports.ContextMenuType || (exports.ContextMenuType = {}));

const useStyles = /*#__PURE__*/styles.makeStyles(() => styles.createStyles({
  item: {
    cursor: "pointer"
  }
}));
const Emoji = props => {
  const classes = useStyles();
  const emojiClick = e => {
    if (props.onSelect) {
      props.onSelect(e.target.innerText);
    }
  };
  const Item = itemProps => {
    return /*#__PURE__*/React.createElement(material.Box, {
      m: 0.5,
      component: "span",
      onClick: emojiClick,
      className: classes.item
    }, itemProps.emoji);
  };
  return /*#__PURE__*/React.createElement(material.Box, null, /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE03"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE01"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE02"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE04"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE05"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE06"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE07"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE08"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE09"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0B"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0D"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0E"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE0F"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE10"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE12"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE13"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\u2753"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE15"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE16"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE17"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE18"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE19"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1D"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1E"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE1F"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE20"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE21"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE22"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE23"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE24"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE25"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE26"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE28"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE29"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2B"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2D"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2E"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE2F"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE30"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE32"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE33"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE34"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE35"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDDD0"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE37"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE41"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE42"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83D\uDE43"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD10"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD11"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD12"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD13"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD14"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD15"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD20"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD21"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD22"
  })), /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD24"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD25"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD27"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD28"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD29"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2A"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2B"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2C"
  }), /*#__PURE__*/React.createElement(Item, {
    emoji: "\uD83E\uDD2D"
  })));
};

const useStyles$1 = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  typingText: {
    paddingLeft: theme.spacing(0.5)
  },
  typingDot: {
    display: "inline-block",
    verticalAlign: "middle",
    width: 4,
    height: 4,
    margin: "0px 2px",
    background: theme.palette.primary.main,
    borderRadius: "50%",
    opacity: "0",
    animation: "$loadingFade 1s infinite",
    "&:nth-child(1)": {
      animationDelay: "0s"
    },
    "&:nth-child(2)": {
      animationDelay: "0.2s"
    },
    "&:nth-child(3)": {
      animationDelay: "0.4s"
    }
  },
  "@keyframes loadingFade": {
    "0%": {
      opacity: 0
    },
    "50%": {
      opacity: 0.8
    },
    "100%": {
      opacity: 0
    }
  }
}));
const Typing = props => {
  const classes = useStyles$1();
  return /*#__PURE__*/React__default.createElement(material.Typography, {
    color: "primary",
    variant: "body2",
    component: "span"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingDot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingDot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingDot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: classes.typingText
  }, props.message));
};

const useStyles$2 = /*#__PURE__*/styles.makeStyles(() => ({
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
/**
 * Рассчитать пропорции изображения
 */
const getImageSize = data => {
  let {
    width,
    height
  } = data;
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
const Entry = props => {
  const classes = useStyles$2();
  const {
    chat
  } = props;
  const {
    t
  } = reactI18next.useTranslation();
  const [empjiEl, setEmojiEl] = React__default.useState(null);
  const [text, setText] = React__default.useState("");
  const [lastTyping, setLastTyping] = React__default.useState({
    chat,
    time: 0
  });
  const handleEmojiClick = event => {
    setEmojiEl(event.currentTarget);
  };
  const handleEmojiClose = () => {
    setEmojiEl(null);
  };
  const emojiSelect = emoji => {
    setText("" + text + emoji);
    handleEmojiClose();
  };
  const onChange = _ref => {
    let {
      target
    } = _ref;
    setText(target.value);
    if (chat && props.onTyping && (lastTyping.chat !== chat || Date.now() - lastTyping.time >= 500)) {
      setLastTyping({
        chat,
        time: Date.now()
      });
      props.onTyping(chat);
    }
  };
  const sendMessage = data => {
    if (chat && props.onSendMessage) props.onSendMessage(chat, data);
  };
  const submit = () => {
    if (text.trim().length === 0) {
      return;
    }
    sendMessage({
      message: text,
      messageType: "text"
    });
    setText("");
  };
  const onSubmitClick = event => {
    event.preventDefault();
    submit();
  };
  const onKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  };
  const onSubmitFile = event => {
    if (!event.currentTarget.files) return;
    const file = event.currentTarget.files[0];
    let messageType;
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
        const imageSize = getImageSize({
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
  return /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React__default.createElement(material.TextField, {
    className: classes.input,
    placeholder: t("CHAT.INPUT_MESSAGE") || "",
    autoFocus: true,
    variant: "standard",
    InputProps: {
      disableUnderline: true,
      startAdornment: /*#__PURE__*/React__default.createElement(material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React__default.createElement("input", {
        accept: ".pdf,.jpg,.jpeg,.bmp,.gif,.png,application/pdf,image/jpeg,image/bmp,image/gif,image/png",
        className: classes.inputUpload,
        id: "icon-button-file",
        type: "file",
        onChange: onSubmitFile
      }), /*#__PURE__*/React__default.createElement("label", {
        htmlFor: "icon-button-file"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, {
        color: "primary",
        "aria-label": "upload",
        component: "span",
        size: "small"
      }, /*#__PURE__*/React__default.createElement(material.SvgIcon, {
        fill: "none",
        className: classes.attachmentIcon
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })))), " ", /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-describedby": enojiId,
        onClick: handleEmojiClick,
        color: "primary",
        size: "small"
      }, /*#__PURE__*/React__default.createElement(iconsMaterial.InsertEmoticon, null))),
      endAdornment: /*#__PURE__*/React__default.createElement(material.IconButton, {
        edge: "end",
        color: "inherit",
        size: "small",
        onClick: onSubmitClick
      }, /*#__PURE__*/React__default.createElement(iconsMaterial.Send, null))
    },
    value: text,
    onChange: onChange,
    onKeyPress: onKeyPress
  }), /*#__PURE__*/React__default.createElement(material.Popover, {
    id: enojiId,
    open: emojiOpen,
    anchorEl: empjiEl,
    onClose: handleEmojiClose,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "left"
    }
  }, /*#__PURE__*/React__default.createElement(Emoji, {
    onSelect: emojiSelect
  })));
};

const ContactStatus = props => {
  const {
    t
  } = reactI18next.useTranslation();
  if (props.isTyping) return /*#__PURE__*/React__default.createElement(Typing, {
    message: t('CHAT.STATUS.TYPING')
  });
  if (props.contact.online === 1) return /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    color: "primary",
    component: "span"
  }, t('CHAT.STATUS.ONLINE'));
  return /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, t('CHAT.STATUS.OFFLINE'));
};

function isEmpty(value) {
  return value == null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
}
/**
 * Формитирование времени сообщения
 * @param time
 */
function formatTime(time, format) {
  if (format === void 0) {
    format = 'DD.MM.YYYY HH:mm';
  }
  if (typeof time === 'undefined') return null;
  if (typeof time === 'string') time = new Date(time);
  // больше чем вчера
  if (dayjs().add(-1, 'days').startOf('day').isAfter(time)) {
    return dayjs(time).format(format);
  }
  // вчера
  if (dayjs().startOf('day').isAfter(time)) {
    return "\u0412\u0447\u0435\u0440\u0430 \u0432 " + dayjs(time).format('HH:mm');
  }
  return dayjs(time).format('HH:mm');
}
/**
 * Раскрыть содержимое
 * @param content - данные в строке
 */
function getFileMeta(content) {
  // Формат  [date]$[userId]$[size]$[fileName]
  // Например fileName = 1606980397047$1a01e20f-3780-4227-84b5-5c69ca766ee5$15.41KB$123.docx
  const meta = content.split('$');
  const [date, userId, size, name] = meta;
  return {
    date,
    userId,
    size,
    name
  };
}
function splitFileName(name) {
  const idx = name.lastIndexOf('.');
  if (idx === -1) return {
    name,
    ext: ''
  };
  return {
    name: name.slice(0, idx),
    ext: name.slice(idx + 1)
  };
}
const getChatId = chat => {
  if (!chat) return null;
  return chat.groupId ? "group:" + chat.groupId : "user:" + chat.userId;
};
const getChatName = chat => {
  return chat.groupId ? chat.name : chat.username;
};
const allMessCount = chats => {
  return Object.values(chats).map(it => (it == null ? void 0 : it.messages) != null ? it == null ? void 0 : it.messages.length : 0).reduce((a, b) => a + b, 0);
};
const chatRoomComparer = (a, b) => {
  const hasMessagesA = Array.isArray(a.messages) && a.messages.length > 0;
  const hasMessagesB = Array.isArray(b.messages) && b.messages.length > 0;
  if (hasMessagesA && hasMessagesB && b.messages != null && a.messages != null) {
    // !!! if cdate === undefined !!!
    const bb = b.messages[b.messages.length - 1].cdate != null ? new Date(b.messages[b.messages.length - 1].cdate).getTime() : new Date().getTime();
    const aa = a.messages[a.messages.length - 1].cdate != null ? new Date(a.messages[a.messages.length - 1].cdate).getTime() : new Date().getTime() - 1;
    const res = bb - aa;
    //console.log('res', res);
    return res;
  }
  if (hasMessagesA) {
    return -1;
  }
  return 1;
};
const getParam = param => {
  const QueryString = window.location.search;
  const urlParams = new URLSearchParams(QueryString);
  return urlParams.get(param);
};
const combineURLs = (baseURL, relativeURL, queryParams) => {
  const url = relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  if (!queryParams) return url;
  return url + (url.includes('?') ? '&' : '?') + new URLSearchParams(queryParams).toString();
};

const useStyles$3 = /*#__PURE__*/styles.makeStyles(() => ({
  star: {
    fontSize: "0.85rem",
    verticalAlign: "middle"
  }
}));
const ContactList = props => {
  const classes = useStyles$3();
  const {
    apiUrl,
    contacts,
    owner
  } = props;
  return /*#__PURE__*/React__default.createElement(material.List, {
    "aria-label": "contacts"
  }, contacts.map(contact => /*#__PURE__*/React__default.createElement(material.ListItem, {
    button: true,
    key: contact.userId,
    onClick: () => props.onClick && props.onClick(contact)
  }, /*#__PURE__*/React__default.createElement(material.ListItemAvatar, null, /*#__PURE__*/React__default.createElement(material.Avatar, {
    alt: contact.username,
    src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
  })), /*#__PURE__*/React__default.createElement(material.ListItemText, {
    primary: /*#__PURE__*/React__default.createElement("span", null, contact.username, " ", owner === contact.userId && /*#__PURE__*/React__default.createElement(StarIcon, {
      className: classes.star,
      color: "primary"
    })),
    secondary: /*#__PURE__*/React__default.createElement(ContactStatus, {
      contact: contact,
      isTyping: false
    })
  }))));
};

const AddContact = props => {
  const {
    onClose,
    open,
    apiUrl,
    contacts
  } = props;
  const {
    t
  } = reactI18next.useTranslation();
  const handleClose = () => {
    onClose();
  };
  const handleListItemClick = contact => {
    onClose(contact);
  };
  return /*#__PURE__*/React__default.createElement(material.Dialog, {
    onClose: handleClose,
    "aria-labelledby": "add-contact-title",
    open: open
  }, /*#__PURE__*/React__default.createElement(material.DialogTitle, {
    id: "switch-operator-title"
  }, t("CHAT.ADD_CONTACT")), /*#__PURE__*/React__default.createElement(ContactList, {
    apiUrl: apiUrl,
    contacts: contacts,
    onClick: handleListItemClick
  }));
};

function useCounter(max) {
  if (max === void 0) {
    max = 30000;
  }
  const [counter, setCounter] = React.useState(max);
  const counterRef = React.useRef(null);
  const handlerRefresh = () => {
    setCounter(max);
  };
  // Counter
  React.useEffect(() => {
    if (counter > 0) counterRef.current = setInterval(() => setCounter(prev => prev - 1), 1000);
    return () => {
      if (counterRef.current) clearInterval(counterRef.current);
    };
  }, [counter]);
  return {
    counter,
    handlerRefresh
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const Transition = /*#__PURE__*/React__default.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/React__default.createElement(material.Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
});
function AlertDialog(_ref) {
  let {
    children,
    open,
    setOpen,
    severity = 'warning'
  } = _ref;
  const {
    t
  } = reactI18next.useTranslation();
  const handleClose = () => {
    setOpen(false);
  };
  return /*#__PURE__*/React__default.createElement(material.Dialog, {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(material.DialogContent, null, /*#__PURE__*/React__default.createElement(material.Alert, {
    severity: severity
  }, typeof children === 'string' ? /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2"
  }, children) : children)), /*#__PURE__*/React__default.createElement(material.DialogActions, null, /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: handleClose,
    variant: "text"
  }, t('CHAT.BUT_CLOSE'))));
}

//import { useTranslation } from "react-i18next";
const hhMmSs = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600);
  const strHours = hours < 10 ? "0" + hours : hours;
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  const seconds = totalSeconds % 60;
  const strSeconds = seconds < 10 ? "0" + seconds : seconds;
  const strTime = strHours + ":" + strMinutes + ":" + strSeconds;
  return {
    hours,
    minutes,
    seconds,
    strTime
  };
};
const AlertModale = _ref => {
  let {
    modaleInfo,
    setModaleInfo,
    strTime
  } = _ref;
  const {
    t
  } = reactI18next.useTranslation();
  return React.useMemo(() => /*#__PURE__*/React__default.createElement(AlertDialog, {
    open: modaleInfo,
    setOpen: setModaleInfo,
    severity: "info"
  }, /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body1",
    textAlign: "center"
  }, t("CHAT.CONFERENCE.UntillTheEnd"), ":"), /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "h6",
    textAlign: "center"
  }, strTime)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [modaleInfo]);
};
const ConferenceTime = _ref2 => {
  let {
    finishDate
  } = _ref2;
  const {
    t
  } = reactI18next.useTranslation();
  const [modaleInfo, setModaleInfo] = React.useState(false);
  const currTime = Date.now();
  // console.log("currentDate server", currentDate);
  // console.log("currTime client", currTime);
  const finTime = new Date(finishDate).getTime();
  //const diffTimeMin = Math.round((finTime - currTime) / (1000 * 60));
  const diffTimeSec = Math.round((finTime - currTime) / 1000);
  const {
    counter
  } = useCounter(diffTimeSec);
  React.useEffect(() => {
    if (minutes != null && minutes === 3 && seconds != null && seconds === 0) {
      setModaleInfo(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  if (diffTimeSec < 1) return null;
  const {
    minutes,
    seconds,
    strTime
  } = hhMmSs(diffTimeSec);
  return /*#__PURE__*/React__default.createElement(material.Box, {
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    component: "span"
  }, t("CHAT.CONFERENCE.LEFT_TIME"), ":", " "), /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "button",
    component: "span"
  }, strTime), /*#__PURE__*/React__default.createElement(AlertModale, {
    modaleInfo: modaleInfo,
    setModaleInfo: setModaleInfo,
    strTime: strTime
  }));
};

const Transition$1 = /*#__PURE__*/React.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
});
function ConfirmDialogSlide(_ref) {
  let {
    open,
    setOpen,
    contentText,
    callback
  } = _ref;
  const {
    t
  } = reactI18next.useTranslation();
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseOk = () => {
    setOpen(false);
    callback();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    TransitionComponent: Transition$1,
    keepMounted: true,
    onClose: handleClose,
    "aria-describedby": "alert-dialog-slide-description"
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(material.Typography, {
    variant: "h6"
  }, contentText)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClose,
    color: "primary"
  }, t('CHAT.BUT_CLOSE')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleCloseOk,
    color: "warning"
  }, t('CHAT.BUT_CONFIRM')))));
}

const useStyles$4 = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1)
  },
  avatarGroup: {
    backgroundColor: '#28B7C6',
    color: '#fff'
  }
}));
const getGroupStatus = (group, t) => {
  var _group$members;
  const status = [((_group$members = group.members) == null ? void 0 : _group$members.length) + " " + t('CHAT.MEMBERS')];
  const onlineCount = (group.members || []).reduce((sum, contact) => contact.online ? sum + 1 : sum, 0);
  if (onlineCount) status.push(onlineCount + " " + t('CHAT.STATUS.ONLINE'));
  return status.join(', ');
};
const RoomHeader = _ref => {
  let {
    apiUrl,
    user,
    chat,
    typing,
    conference,
    visitData,
    conferenceJoined,
    className,
    operators,
    onVideoCall,
    onVideoEnd,
    onConferencePause,
    onOperatorAdd,
    onLeaveGroup
  } = _ref;
  const classes = useStyles$4();
  const {
    t
  } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addOperatorOpen, setAddOperatorOpen] = React.useState(false);
  const startVisitId = () => {
    if (isEmpty(visitData)) return null;
    const visit = visitData.find(it => it.conferenceStatus === 'finished');
    if (!isEmpty(visit)) return "" + (visit == null ? void 0 : visit.visitId);
    return null;
  };
  const [visitId, setVisitId] = React.useState(startVisitId());
  const handleChangeVisitData = e => {
    setVisitId(e.target.value);
  };
  const [confirmReCreateVisit, setConfirmReCreateVisit] = React.useState(false);
  if (!chat) return /*#__PURE__*/React__default.createElement(material.CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(material.Avatar, null),
    title: "",
    subheader: "",
    className: className
  });
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleAddOperatorOpen = () => {
    setAddOperatorOpen(true);
  };
  const handleAddOperatorClose = operator => {
    setAddOperatorOpen(false);
    if (onOperatorAdd && operator && chat) onOperatorAdd(chat, operator);
  };
  const group = chat;
  if (group.groupId) {
    var _group$members2;
    // группа
    return /*#__PURE__*/React__default.createElement(material.CardHeader, {
      avatar: /*#__PURE__*/React__default.createElement(material.Avatar, {
        alt: group.name,
        className: classes.avatarGroup
      }, /*#__PURE__*/React__default.createElement(GroupIcon, null)),
      title: group.name,
      subheader: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
        "aria-owns": anchorEl ? 'mouse-over-popover' : undefined,
        "aria-haspopup": "true",
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose
      }, getGroupStatus(group, t)), /*#__PURE__*/React__default.createElement(material.Popover, {
        id: "mouse-over-popover",
        className: classes.popover,
        classes: {
          paper: classes.paper
        },
        open: !!anchorEl,
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        onClose: handlePopoverClose,
        disableRestoreFocus: true
      }, /*#__PURE__*/React__default.createElement(ContactList, {
        apiUrl: apiUrl,
        contacts: group.members,
        owner: group.userId
      }))),
      className: className,
      action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role === 4 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "add user",
        onClick: handleAddOperatorOpen
      }, /*#__PURE__*/React__default.createElement(PersonAddIcon, null)), /*#__PURE__*/React__default.createElement(AddContact, {
        apiUrl: apiUrl,
        open: addOperatorOpen,
        contacts: operators,
        onClose: handleAddOperatorClose
      })), user.role === 4 && ((_group$members2 = group.members) == null ? void 0 : _group$members2.find(it => it.userId !== user.userId && it.role === 4)) && onLeaveGroup && /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "leave group",
        onClick: () => onLeaveGroup(group)
      }, /*#__PURE__*/React__default.createElement(DeleteIcon, null)))
    });
  }
  const contact = chat;
  const isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId;
  return /*#__PURE__*/React__default.createElement(material.CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(material.Avatar, {
      alt: contact.username,
      src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ''
    }),
    title: contact.username,
    subheader: /*#__PURE__*/React__default.createElement(ContactStatus, {
      contact: contact,
      isTyping: isTyping
    }),
    className: className,
    action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role !== 1 && conferenceJoined && conference && !isEmpty(conference) && onConferencePause != null && /*#__PURE__*/React__default.createElement(material.Button, {
      "aria-label": "cancel call",
      variant: "contained",
      color: "secondary",
      size: "small",
      startIcon: /*#__PURE__*/React__default.createElement(CallEndIcon, {
        color: "error"
      }),
      onClick: () => onConferencePause(conference)
    }, t('CHAT.CONFERENCE.PAUSE')), conference && !isEmpty(conference) && onVideoEnd != null && user.role != null && [3, 4].includes(user.role) && /*#__PURE__*/React__default.createElement(material.Button, {
      "aria-label": "cancel call",
      variant: "contained",
      color: "primary",
      size: "small",
      startIcon: /*#__PURE__*/React__default.createElement(CallEndIcon, {
        color: "error"
      }),
      onClick: () => onVideoEnd(conference),
      style: {
        marginLeft: 8
      }
    }, t('CHAT.CONFERENCE.FINISH')), isEmpty(conference) && onVideoCall != null && user.role && [3, 4].includes(user.role) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !isEmpty(visitData) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(material.FormControl, {
      fullWidth: true,
      variant: "standard",
      margin: "dense"
    }, /*#__PURE__*/React__default.createElement(material.InputLabel, {
      id: "demo-simple-select-label"
    }, "\u0412\u0438\u0437\u0438\u0442\u044B"), /*#__PURE__*/React__default.createElement(Select, {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: "" + visitId,
      label: "\u0412\u0438\u0437\u0438\u0442\u044B",
      onChange: handleChangeVisitData,
      fullWidth: true,
      size: "small"
    }, visitData.map(item => {
      return /*#__PURE__*/React__default.createElement(material.MenuItem, {
        key: item.visitId,
        value: item.visitId
      }, /*#__PURE__*/React__default.createElement(material.Typography, {
        variant: "body1",
        sx: {
          fontSize: 14
        }
      }, item.plExamName), /*#__PURE__*/React__default.createElement(material.Typography, {
        variant: "body2",
        sx: {
          fontSize: 13
        }
      }, formatTime(item.chatFrom, 'HH:mm'), " -", ' ', formatTime(item.visitDate, 'HH:mm'), ' ', item.conferenceStatus));
    }))), /*#__PURE__*/React__default.createElement(ConfirmDialogSlide, {
      open: confirmReCreateVisit,
      setOpen: setConfirmReCreateVisit,
      contentText: t('CHAT.CONFERENCE.CONFIRM_RECREATE_CONF'),
      callback: () => onVideoCall(contact, visitId ? parseInt(visitId, 10) : null)
    })), /*#__PURE__*/React__default.createElement(material.Button, {
      "aria-label": "video call",
      variant: "contained",
      color: "primary",
      size: "small",
      startIcon: /*#__PURE__*/React__default.createElement(VideoCallIcon, null),
      onClick: () => visitId && !isEmpty(visitData.find(it => it.conferenceStatus === 'finished' && it.visitId === parseInt(visitId, 10))) ? setConfirmReCreateVisit(true) : onVideoCall(contact, null),
      fullWidth: true
    }, t(visitId ? 'CHAT.CONFERENCE.RESTART' : 'CHAT.CONFERENCE.START'))), (conference == null ? void 0 : conference.finishDate) != null && /*#__PURE__*/React__default.createElement(ConferenceTime, {
      finishDate: conference.finishDate
    }))
  });
};

const useStyles$5 = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  fileIcon: {
    fontSize: "0.75rem"
  },
  fileBody: {
    paddingLeft: theme.spacing(1.2)
  }
}));
const File = _ref => {
  let {
    message
  } = _ref;
  const classes = useStyles$5();
  const meta = getFileMeta(message.content);
  const {
    name,
    ext
  } = splitFileName(meta.name);
  return /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React__default.createElement(material.Avatar, {
    className: classes.fileIcon
  }, ext.toUpperCase()), /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "column",
    className: classes.fileBody
  }, name, /*#__PURE__*/React__default.createElement("span", null, ext + " " + meta.size)));
};

const useStyles$6 = /*#__PURE__*/styles.makeStyles(theme => ({
  mediaContent: {
    maxWidth: 284,
    maxHeight: 190,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1.2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
      maxHeight: 210
    }
  }
}));
const Video = _ref => {
  let {
    apiUrl,
    message,
    isConference
  } = _ref;
  const classes = useStyles$6();
  let src = '';
  if (isConference) {
    const meta = JSON.parse(message.content);
    src = combineURLs(apiUrl, "/static/conf/" + meta.visitId + "/" + meta.name);
  } else src = combineURLs(apiUrl, "/static/file/" + message.content);
  return /*#__PURE__*/React__default.createElement("video", {
    src: src,
    className: classes.mediaContent,
    controls: true,
    muted: true,
    preload: "none"
  }, "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0435\u0433 video.");
};

const useStyles$7 = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  img: {
    cursor: 'pointer',
    borderRadius: theme.spacing(1.2),
    maxWidth: 284,
    maxHeight: 190,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
      maxHeight: 170
    }
  },
  aspect: {
    maxWidth: 284,
    maxHeight: 190,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
      maxHeight: 170
    }
  }
}));
const Image$1 = _ref => {
  let {
    apiUrl,
    message,
    setViewerData
  } = _ref;
  const classes = useStyles$7();
  //const meta = getImageMeta(message.content);
  return /*#__PURE__*/React__default.createElement(reactAspectRatio.AspectRatio, {
    ratio: "3/4",
    className: classes.aspect
  }, /*#__PURE__*/React__default.createElement("img", {
    src: combineURLs(apiUrl, "/static/image/" + message.content),
    onClick: () => {
      setViewerData({
        visible: true,
        src: combineURLs(apiUrl, "/static/image/" + message.content)
      });
    },
    className: classes.img,
    alt: message.cdate
  }));
};

const MessageContent = _ref => {
  let {
    apiUrl,
    message,
    setViewerData
  } = _ref;
  switch (message.messageType) {
    case 'text':
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, message.content);
    case 'video':
    case 'video_conference':
      return /*#__PURE__*/React__default.createElement(Video, {
        message: message,
        apiUrl: apiUrl,
        isConference: message.messageType === 'video_conference'
      });
    case 'image':
      return /*#__PURE__*/React__default.createElement(Image$1, {
        message: message,
        apiUrl: apiUrl,
        setViewerData: setViewerData
      });
    case 'file':
      return /*#__PURE__*/React__default.createElement(File, {
        message: message
      });
  }
  return null;
};

var useStyles$8 = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  rootContact: {
    padding: 1,
    paddingLeft: theme.spacing(2),
    "& span": {
      float: "right",
      color: theme.palette.text.secondary,
      fontSize: "0.8rem"
    },
    "& $message": {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.text.primary,
      borderTopRightRadius: theme.spacing(3),
      borderBottomRightRadius: theme.spacing(3)
    },
    "& $firstMessage": {
      borderTopLeftRadius: theme.spacing(3),
      marginTop: 10
    },
    "& $lastMessage": {
      borderTopRightRadius: theme.spacing(3),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: theme.spacing(3),
      marginBottom: 10
    }
  },
  rootUser: {
    padding: 1,
    paddingRight: theme.spacing(2),
    justifyContent: "flex-end",
    "& span": {
      float: "right",
      color: "#D9DEEC",
      fontSize: "0.8rem"
    },
    "& $message": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderTopLeftRadius: theme.spacing(3),
      borderBottomLeftRadius: theme.spacing(3)
    },
    "& $firstMessage": {
      borderTopRightRadius: theme.spacing(3),
      marginTop: 10
    },
    "& $lastMessage": {
      borderTopLeftRadius: theme.spacing(3),
      borderBottomRightRadius: 0,
      marginBottom: 10
    }
  },
  rootNotify: {
    justifyContent: "center",
    "& span": {
      float: "right",
      color: theme.palette.text.secondary,
      fontSize: "0.8rem"
    },
    "& > *": {
      //padding: `0px ${theme.spacing(1)}`,
      borderRadius: theme.spacing(3),
      fontWeight: 500
    }
  },
  message: {
    //maxWidth: "55%",
    //minWidth: "50%",
    maxWidth: "65%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "95%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "85%"
    },
    borderRadius: theme.spacing(0.6),
    padding: theme.spacing(0.9),
    paddingLeft: theme.spacing(1.8),
    paddingRight: theme.spacing(1.8)
  },
  firstMessage: {},
  lastMessage: {},
  file: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    cursor: "pointer"
  },
  header: {
    flex: "0 0 100%",
    overflow: "hidden",
    fontWeight: "bold"
  },
  body: {
    flex: "1 1 auto",
    wordBreak: "break-word",
    overflow: "hidden"
  },
  status: {
    paddingLeft: theme.spacing(1),
    flex: "1 1 auto",
    alignSelf: "flex-end"
  },
  statusImage: {
    fontSize: "1rem",
    marginRight: theme.spacing(0.5),
    verticalAlign: "middle"
  }
}));

const wrapMessage = (apiUrl, message, classes, isUserFirst, isUserLast, onContextMenu, child) => {
  const {
    messageType
  } = message;
  const className = isUserFirst && isUserLast ? classes.message + " " + classes.firstMessage + " " + classes.lastMessage : isUserFirst ? classes.message + " " + classes.firstMessage : isUserLast ? classes.message + " " + classes.lastMessage : classes.message;
  if (messageType === 'file') {
    return /*#__PURE__*/React.createElement(material.Link, {
      className: className + " " + classes.file,
      underline: "none",
      href: combineURLs(apiUrl, "/static/file/" + message.content),
      target: "_blank",
      download: true,
      onContextMenu: onContextMenu
    }, child);
  }
  const isMedia = messageType === 'image' || messageType === 'video' || messageType === 'video_conference';
  return /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: isMedia ? 'column' : 'row',
    flexWrap: "wrap",
    className: className,
    onContextMenu: onContextMenu
  }, child);
};
const Message = props => {
  const classes = useStyles$8();
  const {
    t
  } = reactI18next.useTranslation();
  const {
    apiUrl,
    message,
    owner,
    user,
    isGroupMessage,
    isUserFirst,
    isUserLast,
    setViewerData
  } = props;
  //console.log('message', message);
  if (message.messageType === 'notify') {
    // Уведомление - особый случай
    const content = message.content[0] === '{' ? JSON.parse(message.content) : message.content;
    return /*#__PURE__*/React.createElement(material.ListItem, {
      className: classes.rootNotify
    }, /*#__PURE__*/React.createElement(material.Alert
    //ref={refOnMess}
    , {
      severity: typeof content === 'string' ? 'info' : content.severity
    }, typeof content === 'string' ? content : content.message));
  }
  if (message.isRevoke) {
    // Удаленное сообщение
    return /*#__PURE__*/React.createElement(material.ListItem, {
      className: classes.rootNotify
    }, /*#__PURE__*/React.createElement(material.Typography, {
      variant: "body2",
      align: "center"
    }, message.userId === user.userId ? t('CHAT.MESSAGE.REVOKED.YOU') : message.revokeUserName + " " + t('CHAT.MESSAGE.REVOKED.CONTACT')));
  }
  const isMine = user.userId === message.userId;
  return /*#__PURE__*/React.createElement(material.ListItem, {
    className: message.messageType === 'video_conference' ? classes.rootNotify : isMine ? classes.rootUser : classes.rootContact
  }, wrapMessage(apiUrl, message, classes, isUserFirst, isUserLast, props.onContextMenu, /*#__PURE__*/React.createElement(React.Fragment, null, !isMine && isGroupMessage && owner && isUserFirst && /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, owner.username), /*#__PURE__*/React.createElement("div", {
    className: classes.body
  }, /*#__PURE__*/React.createElement(MessageContent, {
    message: message,
    apiUrl: apiUrl,
    setViewerData: setViewerData
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.status
  }, /*#__PURE__*/React.createElement("span", null, isMine ? message.status === 0 ? /*#__PURE__*/React.createElement(iconsMaterial.Done, {
    className: classes.statusImage
  }) : /*#__PURE__*/React.createElement(iconsMaterial.DoneAll, {
    className: classes.statusImage
  }) : null, formatTime(message.cdate))))));
};

const useStyles$9 = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  messageListOuter: {
    flex: 1,
    overflowY: 'auto',
    margin: 0,
    padding: 0
  },
  messageList: {
    height: '100%',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: theme.palette.primary.light + " #fff"
  },
  img: {
    cursor: 'pointer',
    borderRadius: theme.spacing(1.2),
    maxWidth: 'auto',
    maxHeight: '95%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'auto',
      maxHeight: '95%'
    }
  },
  arrowDown: {
    position: 'absolute',
    left: '94.5%',
    bottom: 105,
    [theme.breakpoints.down('md')]: {
      left: '91.5%',
      bottom: 95
    },
    [theme.breakpoints.down('sm')]: {
      left: '84%',
      bottom: 95
    }
  }
}));
const Loading = _ref => {
  let {
    loading
  } = _ref;
  return loading && /*#__PURE__*/React__default.createElement(material.Box, {
    sx: {
      width: '100%',
      mx: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(material.CircularProgress, null));
};
const RoomMessageList = props => {
  const {
    apiUrl,
    user,
    users,
    chat,
    loading,
    pageSize,
    setMenuState,
    initialMenuState
  } = props;
  const classes = useStyles$9();
  const [scrollDownButton, setScrollDownButton] = React__default.useState(false);
  const [scrollDo, setScrollDo] = React__default.useState(true);
  const messages = chat == null ? void 0 : chat.messages;
  const messageCount = (messages == null ? void 0 : messages.length) || 0;
  const lastMessage = (chat == null ? void 0 : chat.messages) && chat.messages[messageCount - 1];
  // const refOnMess = React.useRef<HTMLDivElement>(null);
  // const refOnLastMess = React.useRef<HTMLDivElement>(null);
  const refList = React__default.useRef(null);
  const handleMenuPopup = (message, event) => {
    const canCopy = message.messageType === 'text';
    const canDelete = user.userId === message.userId && !!props.onMeesageDelete && new Date().getTime() - new Date(message.cdate).getTime() <= 1000 * 60 * 2;
    if (!canCopy && !canDelete) {
      setMenuState(initialMenuState);
      return;
    }
    event.preventDefault();
    setMenuState({
      message,
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      canCopy,
      canDelete
    });
  };
  const [viewerData, setViewerData] = React__default.useState({
    visible: false,
    src: ''
  });
  React__default.useEffect(() => {
    setTimeout(() => {
      setScrollDo(true);
      scrollDown();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React__default.useEffect(() => {
    setScrollDo(true);
    scrollDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getChatId(chat)]);
  React__default.useEffect(() => {
    if (lastMessage && user.userId === lastMessage.userId) {
      scrollDown();
      setScrollDo(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageCount]);
  const scrollDown = () => {
    if (refList.current && scrollDo) {
      refList.current.scrollTop = refList.current.scrollHeight;
    }
  };
  //sconsole.log('--user', user, 'lastMessage', lastMessage);
  const handlerScrollDown = () => {
    scrollDown();
  };
  return /*#__PURE__*/React__default.createElement(material.CardContent, {
    className: classes.messageListOuter
  }, /*#__PURE__*/React__default.createElement(material.List, {
    className: classes.messageList,
    ref: refList
  }, /*#__PURE__*/React__default.createElement(InfiniteScroll, {
    pageStart: 0,
    loadMore: () => {
      if (messageCount >= pageSize && !loading && props.onNeedMoreMessages && chat) {
        setScrollDo(false);
        props.onNeedMoreMessages(chat);
      }
    },
    hasMore: chat && !chat.noMoreData ? true : false,
    loader: /*#__PURE__*/React__default.createElement(Loading, {
      loading: loading,
      key: 0
    }),
    isReverse: true,
    useCapture: true,
    useWindow: false,
    getScrollParent: () => {
      if (refList.current) {
        const gap = 1540;
        const isShowButton = refList.current.scrollTop < refList.current.scrollHeight - gap;
        setScrollDownButton(isShowButton);
        //
      }
      return refList.current;
    }
  }, messages && messages.map((message, inx) => /*#__PURE__*/React__default.createElement(Message, {
    key: inx,
    apiUrl: apiUrl,
    user: user,
    message: message,
    owner: users[message.userId],
    isGroupMessage: !!(chat != null && chat.groupId),
    isUserFirst: inx === 0 || messages[inx - 1].messageType === 'notify' || messages[inx - 1].userId !== messages[inx].userId,
    isUserLast: inx === messages.length - 1 || messages[inx + 1].messageType === 'notify' || messages[inx + 1].userId !== messages[inx].userId,
    onContextMenu: event => handleMenuPopup(message, event)
    //refOnMess={defineRefOnMess(inx)}
    ,
    setViewerData: setViewerData
  })))), scrollDownButton && /*#__PURE__*/React__default.createElement(material.Box, {
    className: classes.arrowDown
  }, /*#__PURE__*/React__default.createElement(material.Fab, {
    color: "info",
    "aria-label": "add",
    size: "medium",
    onClick: handlerScrollDown
  }, /*#__PURE__*/React__default.createElement(KeyboardArrowDown, null))), viewerData.visible && /*#__PURE__*/React__default.createElement(material.Backdrop, {
    sx: {
      color: '#fff',
      zIndex: theme => theme.zIndex.drawer + 1
    },
    open: viewerData.visible,
    onClick: () => {
      setViewerData({
        visible: false,
        src: ''
      });
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: viewerData.src,
    className: classes.img,
    alt: ""
  })));
};

const useStyles$a = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  root: {
    width: '100%',
    minWidth: 360,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  roomHeader: {
    flex: 1
  },
  flexAll: {
    flex: '1 1 auto'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  }
}));
const initialMenuState = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: false,
  canDelete: false
};
const Room = props => {
  const {
    apiUrl,
    user,
    users,
    chat,
    typing,
    conference,
    visitData,
    conferenceJoined,
    loading,
    pageSize
  } = props;
  const classes = useStyles$a();
  const {
    t
  } = reactI18next.useTranslation();
  const isMobile = material.useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [menuState, setMenuState] = React__default.useState(initialMenuState);
  const handleMenuClose = () => {
    setMenuState(initialMenuState);
  };
  const handleCopy = React.useCallback(() => {
    const {
      message
    } = menuState;
    setMenuState(initialMenuState);
    if (!message) return;
    navigator.clipboard.writeText(message.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);
  const handleDelete = React.useCallback(() => {
    const {
      message
    } = menuState;
    setMenuState(initialMenuState);
    if (props.onMeesageDelete && chat && message) props.onMeesageDelete(chat, message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);
  return /*#__PURE__*/React__default.createElement(material.Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "row"
  }, chat && isMobile && /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044E"
  }, /*#__PURE__*/React__default.createElement(material.IconButton, {
    "aria-label": "exit room",
    onClick: () => props.onExitRoom && props.onExitRoom(chat)
  }, /*#__PURE__*/React__default.createElement(ArrowBackIcon, null))), /*#__PURE__*/React__default.createElement(RoomHeader, {
    apiUrl: apiUrl,
    user: user,
    chat: chat,
    typing: typing,
    conference: conference,
    visitData: visitData,
    conferenceJoined: conferenceJoined,
    operators: props.operators,
    className: classes.roomHeader,
    onVideoCall: props.onVideoCall,
    onVideoEnd: props.onVideoEnd,
    onConferencePause: props.onConferencePause,
    onOperatorAdd: props.onOperatorAdd,
    onLeaveGroup: props.onLeaveGroup
  })), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(RoomMessageList, {
    apiUrl: apiUrl,
    user: user,
    users: users,
    chat: chat,
    loading: loading,
    pageSize: pageSize,
    initialMenuState: initialMenuState,
    onNeedMoreMessages: props.onNeedMoreMessages,
    onMeesageDelete: props.onMeesageDelete,
    setMenuState: setMenuState
  }), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(material.CardContent, null, /*#__PURE__*/React__default.createElement(Entry, {
    chat: chat,
    onTyping: props.onTyping,
    onSendMessage: props.onSendMessage
  })), /*#__PURE__*/React__default.createElement(material.Menu, {
    keepMounted: true,
    open: menuState.mouseY !== null,
    onClose: handleMenuClose,
    anchorReference: "anchorPosition",
    anchorPosition: menuState.mouseY !== null && menuState.mouseX !== null ? {
      top: menuState.mouseY,
      left: menuState.mouseX
    } : undefined
  }, /*#__PURE__*/React__default.createElement(material.MenuItem, {
    onClick: handleCopy,
    disabled: !menuState.canCopy
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t('CHAT.MESSAGE.MENU.COPY')), /*#__PURE__*/React__default.createElement(material.ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(FileCopyIcon, {
    fontSize: "small"
  }))), /*#__PURE__*/React__default.createElement(material.MenuItem, {
    onClick: handleDelete,
    disabled: !menuState.canDelete
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t('CHAT.MESSAGE.MENU.DELETE')), /*#__PURE__*/React__default.createElement(material.ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(DeleteIcon, {
    fontSize: "small"
  })))));
};

const useStyles$b = /*#__PURE__*/styles.makeStyles(theme => styles.createStyles({
  main: {
    flex: "1 1 auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  time: {
    paddingLeft: theme.spacing(1),
    justifyContent: "flex-end",
    whiteSpace: "nowrap"
  },
  unread: {
    justifyContent: "flex-end",
    maxHeight: 20
  },
  avatarGroup: {
    backgroundColor: "#28B7C6",
    color: "#fff"
  }
}));
const getMessageText = (message, t) => {
  if (!message) return null;
  switch (message.messageType) {
    case "text":
      return message.content;
    case "image":
      return "[" + t("CHAT.MESSAGE.TYPE.IMAGE") + "]";
    case "video":
      return "[" + t("CHAT.MESSAGE.TYPE.VIDEO") + "]";
    case "file":
      return "[" + t("CHAT.MESSAGE.TYPE.FILE") + "]";
    case "notify":
      return "[" + t("CHAT.MESSAGE.TYPE.NOTIFY") + "]";
    default:
      return null;
  }
};
const TypingBadge = /*#__PURE__*/styles.withStyles(theme => styles.createStyles({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: "0 0 0 2px " + theme.palette.background.paper,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(material.Badge);
const OnlineBadge = /*#__PURE__*/styles.withStyles(theme => styles.createStyles({
  badge: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 0 0 2px " + theme.palette.background.paper
  }
}))(material.Badge);
const contactAvatar = (apiUrl, contact, typing) => {
  const avatar = /*#__PURE__*/React__default.createElement(material.Avatar, {
    alt: contact.username,
    src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
  });
  const isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId;
  if (isTyping) return /*#__PURE__*/React__default.createElement(TypingBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    variant: "dot"
  }, avatar);
  if (contact != null && contact.online) return /*#__PURE__*/React__default.createElement(OnlineBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    variant: "dot"
  }, avatar);
  return avatar;
};
const RoomListItem = props => {
  const classes = useStyles$b();
  const {
    t
  } = reactI18next.useTranslation();
  const {
    apiUrl,
    chat,
    typing
  } = props;
  const roomName = getChatName(chat);
  const avatar = chat.groupId ? /*#__PURE__*/React__default.createElement(material.Avatar, {
    alt: roomName,
    className: classes.avatarGroup
  }, /*#__PURE__*/React__default.createElement(GroupIcon, null), " ") : contactAvatar(apiUrl, chat, typing);
  const lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
  const roomText = getMessageText(lastMessage, t);
  const roomTime = lastMessage == null ? void 0 : lastMessage.cdate;
  return /*#__PURE__*/React__default.createElement(material.ListItem, {
    button: true,
    selected: props.active,
    onClick: props.onClick
  }, /*#__PURE__*/React__default.createElement(material.ListItemAvatar, null, avatar), /*#__PURE__*/React__default.createElement(material.ListItemText, {
    secondaryTypographyProps: {
      component: "span"
    },
    primary: /*#__PURE__*/React__default.createElement(material.Box, {
      display: "flex",
      flexDirection: "row"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.main
    }, roomName), /*#__PURE__*/React__default.createElement("span", {
      className: classes.time
    }, formatTime(roomTime))),
    secondary: /*#__PURE__*/React__default.createElement(material.Box, {
      display: "flex",
      flexDirection: "row"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.main
    }, roomText), chat.unreadCount ? /*#__PURE__*/React__default.createElement(material.Chip, {
      className: classes.unread,
      component: "span",
      size: "small",
      color: "primary",
      label: chat.unreadCount
    }) : null)
  }));
};

const useStyles$c = /*#__PURE__*/styles.makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  searchField: {
    width: "100%"
  },
  listStyle: {
    height: "89.5%",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: theme.palette.primary.light + " #fff"
  }
}));
const filterChats = (chats, filter) => {
  if (filter === null) return chats;
  const lowerFilter = filter.toLowerCase();
  return chats.filter(chat => getChatName(chat).toLowerCase().indexOf(lowerFilter.toLowerCase()) !== -1);
};
const sortChats = (userId, groups, contacts) => {
  let roomArr = [...groups, ...contacts];
  //console.log('groups', groups, 'contacts', contacts);
  // Сортировать окно чата (по времени последних сообщений)
  roomArr = roomArr.sort(chatRoomComparer);
  // Проверяем, есть ли список, который нужно закрепить
  const topChatId = localStorage.getItem(userId + "-topChatId");
  if (topChatId) {
    const chat = roomArr.find(c => getChatId(c) === topChatId);
    if (chat) {
      // На первое место
      roomArr = roomArr.filter(k => getChatId(k) !== topChatId);
      chat.isTop = true;
      roomArr.unshift(chat);
    }
  }
  return roomArr;
};
const RoomList = props => {
  const classes = useStyles$c();
  const {
    t
  } = reactI18next.useTranslation();
  const [chats, setChats] = React__default.useState(sortChats(props.user.userId, filterChats(props.groups, null), filterChats(props.contacts, null)));
  const onSearchChange = e => {
    //console.log("e.target.value", e.target.value);
    setChats(sortChats(props.user.userId, filterChats(props.groups, e.target.value), filterChats(props.contacts, e.target.value)));
  };
  //const activeItem = (id: number) => id === props.activeRoom?.userId;
  //console.log("chats", chats);
  return /*#__PURE__*/React__default.createElement(material.Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(material.CardHeader, {
    title: /*#__PURE__*/React__default.createElement(material.TextField, {
      className: classes.searchField,
      label: t("CHAT.INPUT_SEARCH_CONTACT"),
      variant: "outlined",
      size: "small",
      fullWidth: true,
      onChange: onSearchChange
    })
  }), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(List, {
    "aria-label": "rooms",
    className: classes.listStyle
  }, !isEmpty(chats) && chats.map(chat => !isEmpty(chat) && /*#__PURE__*/React__default.createElement(RoomListItem, {
    key: getChatId(chat),
    apiUrl: props.apiUrl,
    chat: chat,
    active: chat === props.activeRoom,
    typing: props.typing,
    onClick: () => props.onChangeChat != null && props.onChangeChat(chat)
  }))));
};

function updateUrlParameter(url, param, value) {
  const regex = new RegExp("(" + param + "=)[^&]+");
  return url.replace(regex, "$1" + value);
}
const transLang = lang => lang === "ru" ? "rus" : lang === "fr" ? "fra" : lang === "en" ? "eng" : "";
const useStyles$d = /*#__PURE__*/styles.makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  }
}));
const Conference = _ref => {
  let {
    conference,
    onClose,
    langCode = "en"
  } = _ref;
  const classes = useStyles$d();
  const ref = React__default.useRef(null);
  const confUrl = conference != null && conference.url && langCode ? updateUrlParameter(conference == null ? void 0 : conference.url, "lang", transLang(langCode)) : "";
  React.useEffect(() => {
    const listener = _ref2 => {
      var _ref$current;
      let {
        source,
        data
      } = _ref2;
      if (source === ((_ref$current = ref.current) == null ? void 0 : _ref$current.contentWindow)) {
        const {
          type
        } = data;
        if (["notSupported", "connectionFail",
        // "loginFail",
        "callFail", "hangUp", "remoteHangUp"
        // "onParticipantLeft"
        ].includes(type)) onClose(conference);
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conference == null ? void 0 : conference.id, langCode]);
  return /*#__PURE__*/React__default.createElement("iframe", {
    title: "conference",
    className: classes.root,
    src: confUrl,
    allowFullScreen: true,
    allow: "microphone; camera; autoplay; display-capture",
    ref: ref
  });
};

const useStyles$e = /*#__PURE__*/styles.makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  pulse: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      border: "1px solid green",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      borderRadius: "50%",
      animation: "$pulse 1s linear infinite"
    },
    "&::after": {
      content: "''",
      position: "absolute",
      border: "1px solid green",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      borderRadius: "50%",
      animation: "$pulse 1s linear infinite",
      animationDelay: "0.3s"
    }
  },
  avatar: {
    width: "80%",
    height: "80%"
  },
  footer: {
    width: "100%",
    alignSelf: "flex-end",
    paddingTop: 64,
    display: "flex",
    justifyContent: "center"
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.5)",
      opacity: 0
    },
    "50%": {
      transform: "scale(1)",
      opacity: 1
    },
    "100%": {
      transform: "scale(1.3)",
      opacity: 0
    }
  }
}));
const ConferenceCall = _ref => {
  let {
    conference,
    contact,
    apiUrl,
    onAccept
  } = _ref;
  const classes = useStyles$e();
  const {
    t
  } = reactI18next.useTranslation();
  return /*#__PURE__*/React__default.createElement(material.Paper, {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.pulse
  }, contact ? /*#__PURE__*/React__default.createElement(material.Avatar, {
    className: classes.avatar,
    alt: contact.username,
    src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
  }) : /*#__PURE__*/React__default.createElement(material.Avatar, {
    className: classes.avatar
  })), /*#__PURE__*/React__default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React__default.createElement(material.Button, {
    variant: "contained",
    color: "primary",
    onClick: () => onAccept(conference)
  }, t("CHAT.CONFERENCE.JOIN"))));
};

const emptyUser = {
  userId: 0,
  username: '',
  password: '',
  avatar: '',
  langCode: ''
};
const emptyChatState = {
  user: emptyUser,
  token: '',
  refreshToken: '',
  activeRoom: null,
  chatOld: null,
  groupGather: {},
  userGather: {},
  contactGather: {},
  operators: [],
  initialContactId: null,
  conference: {
    data: null,
    joined: false,
    ringPlayed: false
  },
  typing: null,
  loading: false,
  error: undefined,
  success: undefined,
  visitData: []
};
const getFreshActiveRoom = state => {
  if (state.activeRoom) return state.groupGather[state.activeRoom.groupId] || state.contactGather[state.activeRoom.userId];
  return null;
};
const getActiveRoom = state => {
  const {
    activeRoom,
    initialContactId,
    contactGather
  } = state;
  let newActiveRoom = null;
  if (initialContactId) {
    newActiveRoom = contactGather[initialContactId];
  } else if (activeRoom) {
    newActiveRoom = getFreshActiveRoom(state);
  } else {
    // ищем комнату с самым свежим сообщением
    const rooms = [...Object.values(state.contactGather), ...Object.values(state.groupGather)].sort(chatRoomComparer);
    if (rooms.length > 0) newActiveRoom = rooms[0];
  }
  return newActiveRoom;
};
const setUserOnline = (state, userId, online) => {
  const newState = {
    ...state
  };
  // Обновить статусы приватных чатов
  if (state.contactGather[userId]) newState.contactGather[userId] = {
    ...newState.contactGather[userId],
    online
  };
  // Обновить статус участника в группах
  for (const group of Object.values(state.groupGather)) {
    if (!group.members) continue;
    const member = group.members.find(m => m.userId === userId);
    if (member) {
      const index = group.members.indexOf(member);
      group.members[index] = {
        ...member,
        online
      };
    }
  }
  // Обновить статус операторов
  const idx = newState.operators.findIndex(it => it.userId === userId);
  if (idx !== -1) newState.operators[idx] = {
    ...newState.operators[idx],
    online
  };
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const addGroupMessage = (state, payload) => {
  const newState = {
    ...state
  };
  const {
    groupId
  } = payload;
  if (newState.groupGather[groupId]) {
    if (newState.groupGather[groupId].messages) {
      newState.groupGather[groupId].messages = [...newState.groupGather[groupId].messages, payload];
    } else {
      newState.groupGather[groupId] = {
        ...state.groupGather[groupId],
        messages: [payload]
      };
    }
  }
  // увеличиваем счетчик новых сообщений, если это не активная комната и сообщение не от нас
  const {
    activeRoom
  } = newState;
  if (activeRoom && activeRoom.groupId !== groupId && payload.userId !== state.user.userId) {
    return groupUnreadGather(newState, groupId, x => (x || 0) + 1);
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const addPrivateMessage = (state, payload) => {
  var _newState$activeRoom;
  const newState = {
    ...state
  };
  const contactId = payload.contactId === state.user.userId ? payload.userId : payload.contactId;
  // 1 добавляем сообщение
  if (newState.contactGather[contactId].messages) {
    newState.contactGather[contactId].messages = [...newState.contactGather[contactId].messages, payload];
  } else {
    newState.contactGather[contactId] = {
      ...newState.contactGather[contactId],
      messages: [payload]
    };
  }
  // 2 если это сообщение в неактивной комнате и источник не мы (в соседней вкладке), то увеличиваем счетчик непрочитанных
  if (((_newState$activeRoom = newState.activeRoom) == null ? void 0 : _newState$activeRoom.userId) !== contactId && payload.userId !== state.user.userId) {
    return contactUnreadGather(newState, contactId, x => (x || 0) + 1);
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const contactUnreadGather = (state, userId, predicate) => {
  const newState = {
    ...state
  };
  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = {
      ...newState.contactGather[userId],
      unreadCount: predicate(newState.contactGather[userId].unreadCount)
    };
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const groupUnreadGather = (state, groupId, predicate) => {
  const newState = {
    ...state
  };
  if (newState.groupGather[groupId]) {
    newState.groupGather[groupId] = {
      ...newState.groupGather[groupId],
      unreadCount: predicate(newState.groupGather[groupId].unreadCount)
    };
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const revokeMessage = (state, payload) => {
  const {
    userId
  } = state.user;
  const newState = {
    ...state
  };
  const userName = payload.username || newState.userGather[payload.userId].username;
  if (payload.groupId) {
    const {
      messages
    } = newState.groupGather[payload.groupId];
    // задаем isRevoke
    if (messages) {
      const msg = messages.find(message => message._id === payload._id);
      if (msg) {
        const index = messages.indexOf(msg);
        messages[index] = {
          ...msg,
          isRevoke: true,
          revokeUserName: userName
        };
      }
    }
  } else {
    const {
      messages
    } = newState.contactGather[payload.contactId === userId ? payload.userId : payload.contactId];
    // задаем isRevoke
    if (messages) {
      const msg = messages.find(message => message._id === payload._id);
      if (msg) {
        const index = messages.indexOf(msg);
        messages[index] = {
          ...msg,
          isRevoke: true,
          revokeUserName: userName
        };
      }
    }
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const delContact = (state, userId) => {
  const newState = {
    ...state
  };
  const updateActiveRoom = newState.activeRoom === newState.contactGather[userId];
  delete newState.contactGather[userId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);
  return newState;
};
const delGroup = (state, groupId) => {
  const newState = {
    ...state
  };
  const updateActiveRoom = newState.activeRoom === newState.groupGather[groupId];
  delete newState.groupGather[groupId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);
  return newState;
};
const delGroupMember = (state, data) => {
  const newState = {
    ...state
  };
  const group = newState.groupGather[data.groupId];
  if (group) {
    var _group$members;
    group.members = (_group$members = group.members) == null ? void 0 : _group$members.filter(it => it.userId !== data.userId);
  }
  return newState;
};
const updateGroupInfo = (state, group) => {
  const newState = {
    ...state
  };
  const {
    groupId,
    name,
    notice
  } = group;
  const info = newState.groupGather[groupId];
  if (info) {
    newState.groupGather[groupId] = {
      ...info,
      name,
      notice
    };
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const updateUserInfo = (state, user) => {
  const newState = {
    ...state
  };
  const {
    userId,
    username,
    avatar
  } = user;
  if (newState.userGather[userId]) {
    newState.userGather[userId] = {
      ...newState.userGather[userId],
      username,
      avatar
    };
  }
  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = {
      ...newState.contactGather[userId],
      username,
      avatar
    };
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const addGroupMember = (state, payload) => {
  const members = payload.members.map(member => ({
    ...member,
    isManager: 0
  }));
  const newState = {
    ...state
  };
  if (newState.groupGather[payload.groupId].members && members) {
    newState.groupGather[payload.groupId].members = [...state.groupGather[payload.groupId].members, ...members];
  } else {
    newState.groupGather[payload.groupId] = {
      ...newState.groupGather[payload.groupId],
      members
    };
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const markPrivateMessagesRead = (state, userId) => {
  const newState = {
    ...state
  };
  if (newState.contactGather[userId]) {
    const updatedValue = {
      ...newState.contactGather[userId]
    };
    if (updatedValue.messages) {
      for (let i = 0; i < updatedValue.messages.length; i++) updatedValue.messages[i] = {
        ...updatedValue.messages[i],
        status: 1
      };
    }
    newState.contactGather[userId] = updatedValue;
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const addPrivateMessages = (state, data) => {
  const newState = {
    ...state
  };
  const {
    messages,
    contactId
  } = data;
  if (newState.contactGather[contactId]) {
    newState.contactGather[contactId] = {
      ...newState.contactGather[contactId],
      messages: [...(messages || []), ...(newState.contactGather[contactId].messages || [])],
      noMoreData: messages != null && messages.length ? (messages == null ? void 0 : messages.length) < data.pageSize : false
    };
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const addGroupMessages = (state, data) => {
  const newState = {
    ...state
  };
  const {
    groupId,
    messages,
    userArr: users
  } = data;
  if (newState.groupGather[groupId]) {
    newState.groupGather[groupId] = {
      ...newState.groupGather[groupId],
      messages: [...(messages || []), ...(newState.groupGather[groupId].messages || [])],
      noMoreData: messages != null && messages.length ? (messages == null ? void 0 : messages.length) < data.pageSize : false
    };
  }
  newState.userGather = {
    ...newState.userGather
  };
  for (const user of users) {
    if (!newState.userGather[user.userId]) {
      newState.userGather[user.userId] = user;
    }
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
const setActiveRoom = (state, data) => {
  //if (state.activeRoom && data.ifNotExists) return state;
  return {
    ...state,
    chatOld: state.activeRoom != null ? {
      ...state.activeRoom
    } : null,
    activeRoom: data.groupId ? state.groupGather[data.groupId] : data.contactId ? state.contactGather[data.contactId] : null
  };
};
const setToken = (state, token) => {
  return {
    ...state,
    token
  };
};
const clearUser = state => {
  return {
    ...state,
    token: '',
    user: emptyUser
  };
};
const setConference = (state, conference) => {
  return {
    ...state,
    conference: {
      data: {
        ...conference
      },
      joined: (conference == null ? void 0 : conference.userId) === state.user.userId,
      ringPlayed: (conference == null ? void 0 : conference.userId) !== state.user.userId
    }
  };
};
const pauseConference = (state, conference) => {
  var _state$conference$dat;
  if (((_state$conference$dat = state.conference.data) == null ? void 0 : _state$conference$dat.id) !== (conference == null ? void 0 : conference.id)) return state;
  return {
    ...state,
    conference: {
      data: {
        ...state.conference.data
      },
      joined: false,
      ringPlayed: false
    }
  };
};
const stopConference = (state, conference) => {
  var _state$conference$dat2;
  if (((_state$conference$dat2 = state.conference.data) == null ? void 0 : _state$conference$dat2.id) !== (conference == null ? void 0 : conference.id)) return state;
  return {
    ...state,
    conference: {
      data: null,
      joined: false,
      ringPlayed: false
    }
  };
};
function chatReducer(state, action) {
  switch (action.type) {
    case 'SET_GROUP_GATHER':
      return {
        ...state,
        groupGather: {
          ...state.groupGather,
          [action.payload.groupId]: action.payload
        }
      };
    case 'SET_CONTACT_GATHER':
      return {
        ...state,
        contactGather: {
          ...state.contactGather,
          [action.payload.userId]: action.payload
        }
      };
    case 'DEL_GROUP':
      return delGroup(state, action.payload);
    case 'DEL_GROUP_MEMBER':
      return delGroupMember(state, action.payload);
    case 'DEL_CONTACT':
      return delContact(state, action.payload.userId);
    case 'SET_USER_GATHER':
      return {
        ...state,
        userGather: {
          ...state.userGather,
          [action.payload.userId]: action.payload
        }
      };
    case 'UPDATE_ACTIVE_ROOM':
      return {
        ...state,
        activeRoom: getActiveRoom(state)
      };
    case 'SET_ACTIVE_ROOM':
      return setActiveRoom(state, action.payload);
    case 'USER_ONLINE':
      return setUserOnline(state, action.payload, 1);
    case 'USER_OFFLINE':
      return setUserOnline(state, action.payload, 0);
    case 'ADD_GROUP_MESSAGE':
      return addGroupMessage(state, action.payload);
    case 'ADD_PRIVATE_MESSAGE':
      return addPrivateMessage(state, action.payload);
    case 'ADD_GROUP_UNREAD_GATHER':
      return groupUnreadGather(state, action.payload, x => (x || 0) + 1);
    case 'ADD_CONTACT_UNREAD_GATHER':
      return contactUnreadGather(state, action.payload, x => (x || 0) + 1);
    case 'SET_TYPING':
      return {
        ...state,
        typing: action.payload
      };
    case 'LOSE_GROUP_UNREAD_GATHER':
      return groupUnreadGather(state, action.payload, () => 0);
    case 'LOSE_CONTACT_UNREAD_GATHER':
      return contactUnreadGather(state, action.payload, () => 0);
    case 'REVOKE_MESSAGE':
      return revokeMessage(state, action.payload);
    case 'UPDATE_GROUP_INFO':
      return updateGroupInfo(state, action.payload);
    case 'UPDATE_USER_INFO':
      return updateUserInfo(state, action.payload);
    case 'ADD_GROUP_MEMBER':
      return addGroupMember(state, action.payload);
    case 'SET_CONFERENCE':
      return setConference(state, action.payload);
    case 'JOIN_CONFERENCE':
      return {
        ...state,
        conference: {
          data: {
            ...action.payload
          },
          joined: true,
          ringPlayed: false
        }
      };
    case 'PAUSE_CONFERENCE':
      return pauseConference(state, action.payload);
    case 'STOP_CONFERENCE':
      return stopConference(state, action.payload);
    case 'MARK_PRIVATE_MESSAGES_READ':
      return markPrivateMessagesRead(state, action.payload);
    case 'ADD_PRIVATE_MESSAGES':
      return addPrivateMessages(state, action.payload);
    case 'ADD_GROUP_MESSAGES':
      return addGroupMessages(state, action.payload);
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
        error: ''
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        success: undefined
      };
    case 'SET_SUCCES':
      return {
        ...state,
        success: action.payload,
        error: undefined
      };
    case 'SET_TOKEN':
      return setToken(state, action.payload);
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'CLEAR_USER':
      return clearUser(state);
    case 'CLEAR_CHAT_DATA':
      return {
        ...state,
        activeRoom: null,
        groupGather: {},
        userGather: {},
        contactGather: {},
        conference: {
          data: null,
          joined: false,
          ringPlayed: false
        },
        typing: null
      };
    case 'SET_OPERATORS':
      return {
        ...state,
        operators: action.payload
      };
    case 'SET_VISIT_DATA':
      return {
        ...state,
        visitData: action.payload
      };
  }
  return state;
}
const emptyDispatch = () => null;
const ChatContext = /*#__PURE__*/React__default.createContext({
  state: emptyChatState,
  dispatch: emptyDispatch
});
const ChatProvider = props => {
  emptyUser.langCode = props.defLang;
  const token = props.token;
  const refreshToken = props.token;
  const chatState = {
    ...emptyChatState,
    token,
    refreshToken
  };
  const [state, dispatch] = React__default.useReducer(chatReducer, chatState);
  return /*#__PURE__*/React__default.createElement(ChatContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, props.children);
};

const initialContext = {};
const RestContext = /*#__PURE__*/React.createContext(initialContext);
function clearLocalStorage() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  localStorage.removeItem('doctor');
  localStorage.removeItem('chatUser');
}
const signOut = async () => {
  try {
    await axios.post('auth/logout');
  } catch (error) {
    console.log('ERROR Logout', error);
  }
  clearLocalStorage();
  window.location.href = '/';
};
const getRefreshToken = async (authToken, refreshToken, dispatch) => {
  try {
    const {
      data
    } = await axios.post('auth/refreshToken', {
      authToken,
      refreshToken
    });
    localStorage.setItem('authToken', data == null ? void 0 : data.authToken);
    localStorage.setItem('refreshToken', data == null ? void 0 : data.refreshToken);
    window.location.href = '/';
  } catch (error) {
    console.log('ERROR RefreshToken', error);
    dispatch({
      type: 'CLEAR_USER'
    });
    signOut();
  }
};
const RestProvider = _ref => {
  let {
    baseURLApi,
    pageSize,
    children
  } = _ref;
  const {
    state,
    dispatch
  } = React.useContext(ChatContext);
  const errorInterceptor = error => {
    if (error.response != null && error.response.status === 401) {
      getRefreshToken(state.token, state.refreshToken, dispatch);
    }
  };
  const fetch = axios.create({
    timeout: 60000,
    baseURL: baseURLApi,
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Authorization: "Bearer " + state.token
    },
    withCredentials: false
  });
  fetch.interceptors.response.use(response => {
    return response;
  }, error => {
    console.log('ERROR AxiosError');
    errorInterceptor(error);
    return Promise.reject(error);
  });
  const getPrivateMessages = React.useCallback(async (chat, callback) => {
    var _chat$messages;
    const contactId = chat.userId;
    const current = (_chat$messages = chat.messages) == null ? void 0 : _chat$messages.length;
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true
      });
      const {
        data
      } = await fetch.get('/contact/messages', {
        params: {
          contactId,
          current,
          pageSize
        }
      });
      if (data) {
        dispatch({
          type: 'ADD_PRIVATE_MESSAGES',
          payload: {
            pageSize,
            contactId,
            messages: data
          }
        });
        if (callback) {
          callback();
        }
      }
    } catch (error) {
      const err = error;
      dispatch({
        type: 'SET_ERROR',
        payload: err.message
      });
    } finally {
      dispatch({
        type: 'SET_LOADING',
        payload: false
      });
    }
  }, [dispatch]);
  const getGroupMessages = React.useCallback(async chat => {
    var _chat$messages2;
    const {
      groupId
    } = chat;
    const current = (_chat$messages2 = chat.messages) == null ? void 0 : _chat$messages2.length;
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true
      });
      const {
        data
      } = await fetch.get('/group/messages', {
        params: {
          groupId,
          current,
          pageSize
        }
      });
      if (data) {
        dispatch({
          type: 'ADD_GROUP_MESSAGES',
          payload: {
            pageSize,
            groupId,
            ...data
          }
        });
      }
    } catch (error) {
      const err = error;
      dispatch({
        type: 'SET_ERROR',
        payload: err.message
      });
    } finally {
      dispatch({
        type: 'SET_LOADING',
        payload: false
      });
    }
  }, [dispatch]);
  const getUserByMmk = async (mmkId, guid) => {
    try {
      const {
        data
      } = await fetch.get('/contact/find', {
        params: {
          mmkId,
          guid
        }
      });
      if (data != null) {
        return data;
      }
    } catch (error) {
      console.log('err getUserByMmk', error);
    }
  };
  return /*#__PURE__*/React__default.createElement(RestContext.Provider, {
    value: {
      apiUrl: baseURLApi,
      pageSize,
      fetch,
      getPrivateMessages,
      getGroupMessages,
      getUserByMmk
    }
  }, children);
};

const useSocket = (url, path, accessToken) => {
  const [socket, setSocket] = React.useState(null);
  const connectSocket = React.useCallback(() => {
    // console.log("do connect");
    const socketTemp = io(url, {
      path,
      reconnection: true,
      extraHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });
    setSocket(socketTemp);
  }, [url, path, accessToken]);
  const disconnectSocket = React.useCallback(() => {
    // console.log("do disconnect");
    socket == null || socket.disconnect();
    setSocket(null);
  }, [socket]);
  const [online, setOnline] = React.useState(false);
  React.useEffect(() => {
    setOnline(socket != null && socket.connected ? true : false);
  }, [socket]);
  React.useEffect(() => {
    socket == null || socket.on("connect", () => {
      // console.log("connected");
      setOnline(true);
      socket.emit("chatData");
    });
  }, [socket]);
  React.useEffect(() => {
    socket == null || socket.on("disconnect", () => {
      // console.log("disconnected");
      setOnline(false);
    });
  }, [socket]);
  return {
    socket,
    online,
    disconnectSocket,
    connectSocket
  };
};

const initialContext$1 = {
  online: false
};
const SocketContext = /*#__PURE__*/React.createContext(initialContext$1);
const SocketProvider = _ref => {
  let {
    wsUrl,
    wsPath,
    children
  } = _ref;
  const {
    state,
    dispatch
  } = React.useContext(ChatContext);
  const {
    socket,
    online,
    disconnectSocket,
    connectSocket
  } = useSocket(wsUrl, wsPath, state.token);
  React.useEffect(() => {
    if (state.token) {
      connectSocket();
    }
    return () => {
      disconnectSocket();
    };
  }, [state.token, connectSocket]);
  React.useEffect(() => {
    if (!state.token) disconnectSocket();
  }, [state.token, disconnectSocket]);
  // listen unauthorized event
  React.useEffect(() => {
    const listener = msg => {
      console.log('unauthorized msg', msg);
      getRefreshToken(state.token, state.refreshToken, dispatch);
    };
    // attach
    socket == null || socket.on('unauthorized', listener);
    // detatch
    return () => {
      socket == null || socket.off('unauthorized', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  // listen chatData event
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      console.log('res.data', res.data);
      const payload = res.data;
      const groupArr = payload.groupData;
      const contactArr = payload.contactData;
      const userArr = payload.userData;
      dispatch({
        type: 'CLEAR_CHAT_DATA'
      });
      dispatch({
        type: 'SET_USER',
        payload: payload.user
      });
      if (groupArr.length) {
        for (const group of groupArr) {
          socket == null || socket.emit('joinGroupSocket', {
            groupId: group.groupId
          });
          dispatch({
            type: 'SET_GROUP_GATHER',
            payload: group
          });
        }
      }
      if (contactArr.length) {
        for (const contact of contactArr) {
          socket == null || socket.emit('joinPrivateSocket', {
            contactId: contact.userId
          });
          dispatch({
            type: 'SET_CONTACT_GATHER',
            payload: contact
          });
        }
      }
      dispatch({
        type: 'SET_OPERATORS',
        payload: payload.operatorData
      });
      if (userArr.length) {
        for (const user_ of userArr) {
          dispatch({
            type: 'SET_USER_GATHER',
            payload: user_
          });
        }
      }
      dispatch({
        type: 'UPDATE_ACTIVE_ROOM'
      });
      dispatch({
        type: 'SET_CONFERENCE',
        payload: payload.conferenceData
      });
      dispatch({
        type: 'SET_VISIT_DATA',
        payload: payload.visitData
      });
    };
    socket == null || socket.on('chatData', listener);
    return () => {
      socket == null || socket.off('chatData', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  // listen user online
  React.useEffect(() => {
    const listener = res => {
      dispatch({
        type: 'USER_ONLINE',
        payload: res.data
      });
    };
    socket == null || socket.on('userOnline', listener);
    return () => {
      socket == null || socket.off('userOnline', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  // listen user offline
  React.useEffect(() => {
    const listener = res => {
      dispatch({
        type: 'USER_OFFLINE',
        payload: res.data
      });
    };
    socket == null || socket.on('userOffline', listener);
    return () => {
      socket == null || socket.off('userOffline', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  // listen private socket join
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      console.log('Успешно вошел в приватный чат');
    };
    socket == null || socket.on('joinPrivateSocket', listener);
    return () => {
      socket == null || socket.off('joinPrivateSocket', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  // listen group socket join
  React.useEffect(() => {
    const listener = res => {
      var _groupObj$members;
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      const newUser = data.user;
      newUser.online = 1;
      const {
        group
      } = data;
      const groupObj = state.groupGather[group.groupId];
      // Информация о присоединении к группе новых пользователей
      if (groupObj && !((_groupObj$members = groupObj.members) != null && _groupObj$members.find(member => member.userId === newUser.userId))) {
        var _groupObj$members2;
        newUser.isManager = 0;
        (_groupObj$members2 = groupObj.members) == null || _groupObj$members2.push(newUser);
        // Vue.prototype.$message.info(res.msg);
      }
      dispatch({
        type: 'SET_USER_GATHER',
        payload: newUser
      });
    };
    socket == null || socket.on('joinGroupSocket', listener);
    return () => {
      socket == null || socket.off('joinGroupSocket', listener);
    };
  }, [socket == null ? void 0 : socket.id, state.groupGather]);
  React.useEffect(() => {
    const listener = async res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      dispatch({
        type: 'ADD_GROUP_MESSAGE',
        payload: data
      });
      const {
        activeRoom
      } = state;
      if (activeRoom && activeRoom.groupId === data.groupId && data.userId !== state.user.userId) {
        socket == null || socket.emit('markAsRead', {
          groupId: data.groupId,
          _id: data._id
        });
      }
    };
    socket == null || socket.on('groupMessage', listener);
    return () => {
      socket == null || socket.off('groupMessage', listener);
    };
  }, [socket == null ? void 0 : socket.id, state.activeRoom]);
  React.useEffect(() => {
    const listener = async res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      if (data.contactId === state.user.userId || data.userId === state.user.userId) {
        var _state$activeRoom;
        dispatch({
          type: 'ADD_PRIVATE_MESSAGE',
          payload: data
        });
        // если есть активная комната и это приватная комната (!groupId && userId) с отправителем сообщения (userId)
        if (state.activeRoom && !state.activeRoom.groupId && ((_state$activeRoom = state.activeRoom) == null ? void 0 : _state$activeRoom.userId) === data.userId) {
          socket == null || socket.emit('markAsRead', {
            contactId: data.userId,
            _id: data._id
          });
        }
      }
    };
    socket == null || socket.on('privateMessage', listener);
    return () => {
      socket == null || socket.off('privateMessage', listener);
    };
  }, [socket == null ? void 0 : socket.id, state.activeRoom]);
  React.useEffect(() => {
    let timer;
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      if (timer) clearTimeout(timer);
      dispatch({
        type: 'SET_TYPING',
        payload: res.data
      });
      timer = setTimeout(() => {
        dispatch({
          type: 'SET_TYPING',
          payload: null
        });
      }, 1000);
    };
    socket == null || socket.on('typing', listener);
    return () => {
      if (timer) clearTimeout(timer);
      socket == null || socket.off('typing', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      if (data.userId === state.user.userId) {
        if (data.groupId) {
          dispatch({
            type: 'LOSE_GROUP_UNREAD_GATHER',
            payload: data.groupId
          });
        } else {
          dispatch({
            type: 'LOSE_CONTACT_UNREAD_GATHER',
            payload: data.contactId
          });
        }
      } else {
        if (data.contactId) dispatch({
          type: 'MARK_PRIVATE_MESSAGES_READ',
          payload: data.userId
        });
      }
    };
    socket == null || socket.on('markAsRead', listener);
    return () => {
      socket == null || socket.off('markAsRead', listener);
    };
  }, [socket == null ? void 0 : socket.id, state.user.userId]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      dispatch({
        type: 'REVOKE_MESSAGE',
        payload: data
      });
    };
    socket == null || socket.on('revokeMessage', listener);
    return () => {
      socket == null || socket.off('revokeMessage', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      dispatch({
        type: 'SET_GROUP_GATHER',
        payload: res.data
      });
    };
    socket == null || socket.on('addGroup', listener);
    return () => {
      socket == null || socket.off('addGroup', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      dispatch({
        type: 'SET_CONTACT_GATHER',
        payload: data
      });
      dispatch({
        type: 'SET_USER_GATHER',
        payload: data
      });
      socket == null || socket.emit('joinPrivateSocket', {
        contactId: data.userId
      });
    };
    socket == null || socket.on('addContact', listener);
    return () => {
      socket == null || socket.off('addContact', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      if (data.userId === state.user.userId) {
        // если удаляем себя из группы
        dispatch({
          type: 'DEL_GROUP',
          payload: data.groupId
        });
      } else {
        dispatch({
          type: 'DEL_GROUP_MEMBER',
          payload: data
        });
      }
    };
    socket == null || socket.on('deleteGroup', listener);
    return () => {
      socket == null || socket.off('deleteGroup', listener);
    };
  }, [socket == null ? void 0 : socket.id, state.user]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      dispatch({
        type: 'DEL_CONTACT',
        payload: data
      });
    };
    socket == null || socket.on('deleteContact', listener);
    return () => {
      socket == null || socket.off('deleteContact', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      dispatch({
        type: 'UPDATE_GROUP_INFO',
        payload: data
      });
    };
    socket == null || socket.on('updateGroupInfo', listener);
    return () => {
      socket == null || socket.off('updateGroupInfo', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const data = res.data;
      dispatch({
        type: 'UPDATE_USER_INFO',
        payload: data
      });
    };
    socket == null || socket.on('updateUserInfo', listener);
    return () => {
      socket == null || socket.off('updateUserInfo', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      const {
        group,
        user: newUser
      } = res.data;
      if (!state.groupGather[group.groupId]) {
        console.log('joined to a new group');
        // Если группы еще у нас нет, то получаем информацию о пользователях в группе
        socket == null || socket.emit('chatData');
      } else if (newUser.userId !== state.user.userId) {
        // Новые пользователи присоединяются к группе
        dispatch({
          type: 'ADD_GROUP_MEMBER',
          payload: {
            groupId: group.groupId,
            members: [newUser]
          }
        });
      }
    };
    socket == null || socket.on('joinGroup', listener);
    return () => {
      socket == null || socket.off('joinGroup', listener);
    };
  }, [socket == null ? void 0 : socket.id, state.user, state.groupGather]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      dispatch({
        type: 'SET_CONFERENCE',
        payload: res.data
      });
    };
    socket == null || socket.on('startConference', listener);
    return () => {
      socket == null || socket.off('startConference', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      dispatch({
        type: 'PAUSE_CONFERENCE',
        payload: res.data
      });
    };
    socket == null || socket.on('pauseConference', listener);
    return () => {
      socket == null || socket.off('pauseConference', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      dispatch({
        type: 'STOP_CONFERENCE',
        payload: res.data
      });
    };
    socket == null || socket.on('stopConference', listener);
    return () => {
      socket == null || socket.off('stopConference', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
    };
    socket == null || socket.on('addOperator', listener);
    return () => {
      socket == null || socket.off('addOperator', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    const listener = res => {
      if (res.code) {
        dispatch({
          type: 'SET_ERROR',
          payload: res.msg
        });
        return;
      }
      dispatch({
        type: 'SET_ACTIVE_ROOM',
        payload: res.data
      });
    };
    socket == null || socket.on('setActiveRoom', listener);
    return () => {
      socket == null || socket.off('setActiveRoom', listener);
    };
  }, [socket == null ? void 0 : socket.id]);
  return /*#__PURE__*/React__default.createElement(SocketContext.Provider, {
    value: {
      socket,
      online
    }
  }, children);
};

const CheckAudiVideoPerm = _ref => {
  let {
    audio,
    video
  } = _ref;
  const {
    t
  } = reactI18next.useTranslation();
  //const [havePermissions, setHavePermissions] = useState(false);
  const {
    dispatch
  } = React__default.useContext(ChatContext);
  const checkPermissions = () => {
    const permissions = navigator.mediaDevices.getUserMedia({
      audio,
      video
    });
    permissions.then(data => {
      console.log('permissions', data);
      dispatch({
        type: 'SET_SUCCES',
        payload: t('CHAT.CONFERENCE.ALLOK')
      });
    }).catch(err => {
      let payload = t('CHAT.CONFERENCE.ErrorAny');
      if (err.name === 'NotFoundError') {
        payload = t('CHAT.CONFERENCE.NotFoundError');
      }
      if (err.name === 'NotAllowedError') {
        payload = t('CHAT.CONFERENCE.NotAllowedError');
      }
      dispatch({
        type: 'SET_ERROR',
        payload
      });
      //setHavePermissions(false);
      console.log('err', err.name + " : " + err.message);
    });
  };
  const title = audio && video ? t('CHAT.CONFERENCE.CheckCamMic') : audio ? t('CHAT.CONFERENCE.CheckMic') : t('CHAT.CONFERENCE.CheckCam');
  return /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: title
  }, /*#__PURE__*/React__default.createElement(material.IconButton, {
    "aria-label": "check",
    onClick: () => checkPermissions(),
    size: "large"
  }, audio && video ? /*#__PURE__*/React__default.createElement(SettingsSuggestIcon, null) : audio ? /*#__PURE__*/React__default.createElement(SettingsVoiceIcon, null) : /*#__PURE__*/React__default.createElement(VideoSettingsIcon, null)));
};

const ChatAlert = () => {
  // const { t } = useTranslation();
  //const [havePermissions, setHavePermissions] = useState(false);
  const {
    state: {
      error,
      success
    },
    dispatch
  } = React__default.useContext(ChatContext);
  const handleClose = () => {
    dispatch({
      type: "SET_ERROR",
      payload: undefined
    });
    dispatch({
      type: "SET_SUCCES",
      payload: undefined
    });
  };
  return /*#__PURE__*/React__default.createElement(material.Snackbar, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    open: !!error || !!success,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/React__default.createElement(material.Alert, {
    onClose: handleClose,
    severity: error ? "error" : "success"
  }, error ? error : success));
};

// Отключили проигрыш звука
// const getRingAudio = (): HTMLAudioElement => {
//   const audio = new Audio(
//     process.env.PUBLIC_URL + '/audio/ring-in.ogg',
//   );
//   audio.loop = true;
//   return audio;
// };
const useStyles$f = /*#__PURE__*/styles.makeStyles(theme => ({
  root: {
    height: '100%',
    overflow: 'hidden',
    padding: 0
  },
  innerGrid: {
    height: '100%',
    width: '100%'
  },
  conAbsOnConf: {
    position: 'absolute',
    top: 42,
    left: 25,
    zIndex: 1000,
    margin: theme.spacing(3)
  }
}));
const ChatPage = _ref => {
  var _state$conference$dat, _state$conference$dat2, _state$conference$dat3, _state$activeRoom, _state$activeRoom2, _state$conference$dat5, _state$conference$dat6;
  let {
    activeGroupId,
    activeChatUserId,
    inModale = true
  } = _ref;
  const classes = useStyles$f();
  const isMobile = material.useMediaQuery(theme => theme.breakpoints.down('sm'));
  const {
    t
  } = reactI18next.useTranslation();
  const {
    state,
    dispatch
  } = React.useContext(ChatContext);
  const {
    socket
  } = React.useContext(SocketContext);
  const {
    apiUrl,
    pageSize,
    getPrivateMessages,
    getGroupMessages,
    getUserByMmk
  } = React.useContext(RestContext);
  // const [ringAudio] = React.useState(getRingAudio());
  const onExitActiveRoom = React.useCallback(() => {
    dispatch({
      type: 'SET_ACTIVE_ROOM',
      payload: {}
    });
  }, [dispatch]);
  const onNeedMoreMessages = React.useCallback(async chat => {
    if (chat.groupId) await getGroupMessages(chat);else await getPrivateMessages(chat);
  }, [getPrivateMessages, getGroupMessages]);
  const onMessageDelete = React.useCallback((chat, message) => {
    socket == null || socket.emit('revokeMessage', {
      groupId: chat.groupId,
      contactId: chat.userId,
      _id: message._id
    });
  }, [socket == null ? void 0 : socket.id]);
  const onTyping = React.useCallback(chat => {
    socket == null || socket.emit('typing', {
      groupId: chat == null ? void 0 : chat.groupId,
      contactId: chat == null ? void 0 : chat.userId
    });
  }, [socket == null ? void 0 : socket.id]);
  const onSendMessage = React.useCallback((chat, data) => {
    if (chat.groupId) {
      socket == null || socket.emit('groupMessage', {
        groupId: chat == null ? void 0 : chat.groupId,
        content: data.message,
        width: data.width,
        height: data.height,
        fileName: data.fileName,
        messageType: data.messageType,
        size: data.size
      });
    } else {
      socket == null || socket.emit('privateMessage', {
        contactId: chat == null ? void 0 : chat.userId,
        content: data.message,
        width: data.width,
        height: data.height,
        fileName: data.fileName,
        messageType: data.messageType,
        size: data.size
      });
    }
  }, [socket == null ? void 0 : socket.id]);
  const onChangeChat = React.useCallback(chat => {
    dispatch({
      type: 'SET_ACTIVE_ROOM',
      payload: {
        groupId: chat == null ? void 0 : chat.groupId,
        contactId: chat == null ? void 0 : chat.userId
      }
    });
    onEnterRoom(chat);
  }, [socket == null ? void 0 : socket.id, dispatch]);
  const onEnterRoom = React.useCallback(chat => {
    if (!chat.messages || chat.messages.length === 0) return;
    if (chat.groupId) {
      socket == null || socket.emit('markAsRead', {
        groupId: chat.groupId,
        _id: chat.messages[chat.messages.length - 1]._id
      });
    } else {
      socket == null || socket.emit('markAsRead', {
        contactId: chat.userId,
        _id: chat.messages[chat.messages.length - 1]._id
      });
    }
  }, [socket == null ? void 0 : socket.id]);
  const onVideoCall = React.useCallback(function (chat, visitId) {
    if (visitId === void 0) {
      visitId = null;
    }
    // console.log('-----------', {
    //   groupId: (chat as Group).groupId,
    //   contactId: chat.userId,
    //   visitId,
    //   recreate: visitId ? true : false,
    // });
    socket == null || socket.emit('startConference', {
      groupId: chat.groupId,
      contactId: chat.userId,
      visitId,
      recreate: visitId ? true : false
    });
  }, [socket == null ? void 0 : socket.id]);
  const onVideoEnd = React.useCallback(conference => {
    if ((conference == null ? void 0 : conference.id) != null) socket == null || socket.emit('stopConference', {
      id: conference == null ? void 0 : conference.id
    });
  }, [socket == null ? void 0 : socket.id]);
  const onConferencePause = React.useCallback(conference => {
    if ((conference == null ? void 0 : conference.id) != null) socket == null || socket.emit('pauseConference', {
      id: conference.id
    });
  }, [socket == null ? void 0 : socket.id]);
  const onConferenceCallAccept = React.useCallback(conference => {
    // отправляем resumeConference чтобы возобновить запись
    if ((conference == null ? void 0 : conference.id) != null) socket == null || socket.emit('resumeConference', {
      id: conference.id
    });
    dispatch({
      type: 'JOIN_CONFERENCE',
      payload: conference
    });
  }, [socket == null ? void 0 : socket.id, dispatch]);
  const onOperatorAdd = React.useCallback((group, operator) => {
    socket == null || socket.emit('addOperator', {
      groupId: group.groupId,
      operatorId: operator.userId
    });
  }, [socket == null ? void 0 : socket.id]);
  const onLeaveGroup = React.useCallback(group => {
    socket == null || socket.emit('deleteGroup', {
      groupId: group.groupId
    });
  }, [socket == null ? void 0 : socket.id]);
  React.useEffect(() => {
    if (activeChatUserId != null && !isEmpty(state.contactGather)) {
      const Chat = Object.values(state.contactGather).find(item => item.userId === activeChatUserId);
      onChangeChat(Chat);
    }
    const mmkId = getParam('mmk');
    const guid = getParam('guid');
    if ((mmkId != null || guid != null) && !isEmpty(state.contactGather)) {
      //console.log("mmkId", mmkId);
      const changeChatByMmkId = async () => {
        const userId = await getUserByMmk(mmkId, guid);
        if (userId != null) {
          const Chat = Object.values(state.contactGather).find(item => item.userId === userId);
          onChangeChat(Chat);
        }
      };
      changeChatByMmkId();
    }
  }, [state.contactGather]);
  React.useEffect(() => {
    if (activeGroupId != null && !isEmpty(state.groupGather)) {
      const onlyChat = Object.values(state.groupGather).find(item => item.groupId === activeGroupId);
      if (!isEmpty(onlyChat)) {
        onChangeChat(onlyChat);
      }
    }
  }, [state.groupGather]);
  // Отключили проигрыш звука
  // React.useEffect(() => {
  //   if (
  //     state.conference.data?.id &&
  //     state.conference.ringPlayed &&
  //     !state.conference.joined
  //   )
  //     ringAudio.play();
  //   else ringAudio.pause();
  // }, [state.conference.data?.id, state.conference.ringPlayed]);
  // console.log('state--', state);
  const renderRoom = state.activeRoom != null && /*#__PURE__*/React.createElement(Room, {
    apiUrl: apiUrl,
    user: state.user,
    users: state.userGather,
    operators: state.operators,
    chat: state.activeRoom,
    typing: state.typing,
    conference: state.conference.data,
    visitData: state.visitData,
    conferenceJoined: state.conference.joined,
    loading: state.loading,
    pageSize: pageSize,
    onExitRoom: onExitActiveRoom,
    onEnterRoom: onEnterRoom,
    onNeedMoreMessages: onNeedMoreMessages,
    onMeesageDelete: onMessageDelete,
    onTyping: onTyping,
    onSendMessage: onSendMessage,
    onVideoCall: onVideoCall,
    onVideoEnd: onVideoEnd,
    onConferencePause: onConferencePause,
    onOperatorAdd: onOperatorAdd,
    onLeaveGroup: onLeaveGroup
  });
  const GetRoomList = () => /*#__PURE__*/React.createElement(RoomList, {
    apiUrl: apiUrl,
    user: state.user,
    activeRoom: state.activeRoom,
    groups: Object.values(state.groupGather),
    contacts: Object.values(state.contactGather),
    typing: state.typing,
    onChangeChat: onChangeChat
  });
  const GetConferenceCall = () => state.conference.data && /*#__PURE__*/React.createElement(ConferenceCall, {
    apiUrl: apiUrl,
    contact: state.contactGather[state.user.userId === state.conference.data.userId ? state.conference.data.contactId : state.conference.data.userId],
    conference: state.conference.data,
    onAccept: onConferenceCallAccept
  });
  const GetConference = () => /*#__PURE__*/React.createElement(Conference, {
    conference: state.conference.data,
    onClose: onConferencePause,
    langCode: state.user.langCode
  });
  // const getMessCount = (data: GroupGather) => {
  //   const messages = ;
  //   return messages.reduce((a: number, b: number) => a + b, 0);
  // };
  const depsContats = (_state$conference$dat = state.conference.data) != null && _state$conference$dat.id ? [state.conference.joined, (_state$conference$dat2 = state.conference.data) == null ? void 0 : _state$conference$dat2.id, (_state$conference$dat3 = state.conference.data) == null ? void 0 : _state$conference$dat3.contactId, (_state$activeRoom = state.activeRoom) == null ? void 0 : _state$activeRoom.groupId, (_state$activeRoom2 = state.activeRoom) == null ? void 0 : _state$activeRoom2.userId] : [state.activeRoom, allMessCount(state.groupGather), allMessCount(state.contactGather)];
  const Contacts = React.useMemo(() => {
    var _state$conference$dat4;
    return ((_state$conference$dat4 = state.conference.data) == null ? void 0 : _state$conference$dat4.id) != null ? /*#__PURE__*/React.createElement(React.Fragment, null, state.conference.joined ? /*#__PURE__*/React.createElement(GetConference, null) : /*#__PURE__*/React.createElement(GetConferenceCall, null), /*#__PURE__*/React.createElement(material.Box, {
      className: classes.conAbsOnConf
    }, /*#__PURE__*/React.createElement(material.Paper, {
      style: {
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement(material.Box, {
      display: "flex",
      flexDirection: "row",
      my: 3
    }, (isEmpty(state.activeRoom) && isMobile || !isEmpty(state.activeRoom) && !isMobile) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckAudiVideoPerm, {
      audio: true,
      video: false
    }), /*#__PURE__*/React.createElement(CheckAudiVideoPerm, {
      audio: false,
      video: true
    })), isEmpty(state.activeRoom) && state.chatOld != null && isMobile && /*#__PURE__*/React.createElement(material.Tooltip, {
      title: t('CHAT.CONFERENCE.BACK')
    }, /*#__PURE__*/React.createElement(material.IconButton, {
      "aria-label": "check",
      onClick: () => state.chatOld != null && onChangeChat(state.chatOld),
      size: "large"
    }, /*#__PURE__*/React.createElement(iconsMaterial.ArrowForward, null))))))) : /*#__PURE__*/React.createElement(GetRoomList, null);
  }, depsContats);
  console.log('chat state', state);
  return /*#__PURE__*/React.createElement(material.Container, {
    maxWidth: "lg",
    className: classes.root,
    sx: theme => ({
      width: inModale ? "calc(100vw - " + theme.spacing(8) + ")" : '100%'
    })
  }, isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, Contacts, renderRoom) : /*#__PURE__*/React.createElement(material.Grid, {
    container: true,
    spacing: 1,
    className: classes.innerGrid
  }, /*#__PURE__*/React.createElement(material.Grid, {
    item: true,
    sm: ((_state$conference$dat5 = state.conference.data) == null ? void 0 : _state$conference$dat5.id) != null ? 6 : 4,
    className: classes.innerGrid
  }, Contacts), /*#__PURE__*/React.createElement(material.Grid, {
    item: true,
    sm: ((_state$conference$dat6 = state.conference.data) == null ? void 0 : _state$conference$dat6.id) != null ? 6 : 8,
    className: classes.innerGrid
  }, renderRoom)), /*#__PURE__*/React.createElement(ChatAlert, null));
};

var CHAT = {
	STATUS: {
		ONLINE: "online",
		OFFLINE: "offline",
		TYPING: "typing"
	},
	MESSAGE: {
		TYPE: {
			IMAGE: "Image",
			VIDEO: "Video",
			FILE: "File",
			NOTIFY: "Notification"
		},
		MENU: {
			COPY: "Copy",
			DELETE: "Delete"
		},
		REVOKED: {
			YOU: "You deleted the message",
			CONTACT: "deleted the message"
		}
	},
	CONFERENCE: {
		JOIN: "Join",
		START: "Start",
		RESTART: "Recreate the conference",
		CONFIRM_RECREATE_CONF: "Are you sure you want to re-create the conference?",
		PAUSE: "Pause",
		FINISH: "Finish",
		BACK: "Back to chat",
		NotFoundError: "Requested device not found",
		NotAllowedError: "Permission denied. To allow access to the device, go to the browser settings",
		ErrorAny: "The device is not configured",
		ALLOK: "All OK",
		CheckCamMic: "Check access to microphone and camera",
		CheckMic: "Check access to microphone",
		CheckCam: "Check access to camera",
		UntillTheEnd: "There is still time until the end of the conference",
		LEFT_TIME: "Time left"
	},
	ADD_CONTACT: "Add contact",
	INPUT_MESSAGE: "Please write a message...",
	INPUT_SEARCH_CONTACT: "Surname Name",
	MEMBERS: "members",
	BUT_CLOSE: "Close",
	BUT_CONFIRM: "Yes"
};
var en = {
	CHAT: CHAT
};

var CHAT$1 = {
	STATUS: {
		ONLINE: "en ligne",
		OFFLINE: "hors ligne",
		TYPING: "imprime"
	},
	MESSAGE: {
		TYPE: {
			IMAGE: "Image",
			VIDEO: "Vidéo",
			FILE: "File",
			NOTIFY: "Notification"
		},
		MENU: {
			COPY: "Copier",
			DELETE: "Supprimer"
		},
		REVOKED: {
			YOU: "Vous avez supprimé le message",
			CONTACT: "message supprimé"
		}
	},
	CONFERENCE: {
		JOIN: "Rejoindre",
		START: "Démarrer",
		RESTART: "Recréer la conférence",
		CONFIRM_RECREATE_CONF: "êtes-vous sûr de vouloir recréer la conférence?",
		PAUSE: "Pause",
		FINISH: "Terminer",
		BACK: "Retour au chat",
		NotFoundError: "Périphérique demandé introuvable",
		NotAllowedError: "Autorisation refusée. Pour autoriser l'accès à l'appareil, accédez aux paramètres du navigateur",
		ErrorAny: "L'appareil n'est pas configuré",
		ALLOK: "Tout va bien",
		CheckCamMic: "Vérifier l'accès au microphone et à la caméra",
		CheckMic: "Vérifier l'accès au microphone",
		CheckCam: "Vérifier l'accès à la caméra",
		UntillTheEnd: " Il est encore temps jusqu'à la fin de la conférence",
		LEFT_TIME: "temps restant:"
	},
	ADD_CONTACT: "Ajouter un contact",
	INPUT_MESSAGE: "Veuillez écrire un message...",
	INPUT_SEARCH_CONTACT: "Surname Name",
	MEMBERS: "members",
	BUT_CLOSE: "Fermer",
	BUT_CONFIRM: "Oui"
};
var fr = {
	CHAT: CHAT$1
};

var CHAT$2 = {
	STATUS: {
		ONLINE: "в сети",
		OFFLINE: "не в сети",
		TYPING: "печатает"
	},
	MESSAGE: {
		TYPE: {
			IMAGE: "Изображение",
			VIDEO: "Видео",
			FILE: "Файл",
			NOTIFY: "Уведомление"
		},
		MENU: {
			COPY: "Копировать",
			DELETE: "Удалить"
		},
		REVOKED: {
			YOU: "Вы удалили сообщение",
			CONTACT: "удалил(а) сообщение"
		}
	},
	CONFERENCE: {
		JOIN: "Присоединиться",
		START: "Начать",
		RESTART: "Пересоздать конференцию",
		CONFIRM_RECREATE_CONF: "Вы уверена что хотите пересоздать конференцию?",
		PAUSE: "Остановить",
		FINISH: "Завершить",
		BACK: "Вернуться в чат",
		NotFoundError: "Запрошенное устройство не найдено",
		NotAllowedError: "В доступе  отказано. Чтобы разрешить доступ к устройству зайдите в настройки браузера",
		ErrorAny: "Устройство не настроено",
		ALLOK: "Все OK",
		CheckCamMic: "Проверить доступ к микрофону и камере",
		CheckMic: "Проверить доступ к микрофону",
		CheckCam: "Проверить доступ к камере",
		UntillTheEnd: "До окончания конференции осталось",
		LEFT_TIME: "Осталось"
	},
	ADD_CONTACT: "Добавить контакт",
	INPUT_MESSAGE: "Напишите сообщение...",
	INPUT_SEARCH_CONTACT: "Фамилия Имя Отчество",
	MEMBERS: "участников",
	BUT_CLOSE: "Закрыть",
	BUT_CONFIRM: "Да"
};
var ru = {
	CHAT: CHAT$2
};

const getLang = () => {
  const str = localStorage.getItem('user');
  if (str) {
    const user = JSON.parse(str);
    return user == null ? void 0 : user.lang;
  }
  return 'ru';
};
const lang = /*#__PURE__*/getLang();
i18n.use(LanguageDetector).use(reactI18next.initReactI18next).init({
  resources: {
    ru: {
      translations: ru
    },
    en: {
      translations: en
    },
    fr: {
      translations: fr
    }
  },
  lng: lang,
  load: 'languageOnly',
  fallbackLng: lang,
  debug: true,
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  lowerCaseLng: true
});

const languageWithoutCountry = () => {
  return i18n.language.substring(0, 2);
};
const LANGUAGES = {
  RU: 'ru',
  FR: 'fr',
  EN: 'en'
};
const LANGUAGES_ACTIONS = {
  SET_RUSSIAN: 'SET_RUSSIAN',
  SET_ENGLISH: 'SET_ENGLISH',
  SET_FRENCH: 'SET_FRENCH'
};
const reducer = (state, action) => {
  switch (action.type) {
    case LANGUAGES_ACTIONS.SET_ENGLISH:
      i18n.changeLanguage('en');
      return {
        language: LANGUAGES.EN
      };
    case LANGUAGES_ACTIONS.SET_FRENCH:
      i18n.changeLanguage('fr');
      return {
        language: LANGUAGES.FR
      };
    case LANGUAGES_ACTIONS.SET_RUSSIAN:
      i18n.changeLanguage('ru');
      return {
        language: LANGUAGES.RU
      };
    default:
      return state;
  }
};
const LanguageContext = /*#__PURE__*/React.createContext({});
const AppLanguageProvider = props => {
  const [languageState, dispatchLanguage] = React.useReducer(reducer, {
    language: languageWithoutCountry()
  });
  return /*#__PURE__*/React__default.createElement(LanguageContext.Provider, {
    value: {
      languageState,
      dispatchLanguage
    }
  }, /*#__PURE__*/React__default.createElement(reactI18next.I18nextProvider, {
    i18n: i18n
  }, props.children));
};

const ChatIndex = _ref => {
  let {
    activeGroupId,
    activeChatUserId,
    lang,
    chatBaseURLApi,
    chatWsUrl,
    chatWsPath,
    token,
    inModale = false,
    refreshToken
  } = _ref;
  return /*#__PURE__*/React__default.createElement(AppLanguageProvider, null, /*#__PURE__*/React__default.createElement(ChatProvider, {
    defLang: lang,
    token: token,
    refreshToken: refreshToken
  }, /*#__PURE__*/React__default.createElement(RestProvider, {
    baseURLApi: chatBaseURLApi,
    pageSize: 25
  }, /*#__PURE__*/React__default.createElement(SocketProvider, {
    wsUrl: chatWsUrl,
    wsPath: chatWsPath
  }, /*#__PURE__*/React__default.createElement(ChatPage, {
    activeGroupId: activeGroupId,
    activeChatUserId: activeChatUserId,
    inModale: inModale
  })))));
};

exports.AddContact = AddContact;
exports.ChatContext = ChatContext;
exports.ChatIndex = ChatIndex;
exports.ChatPage = ChatPage;
exports.ChatProvider = ChatProvider;
exports.Conference = Conference;
exports.ConferenceCall = ConferenceCall;
exports.Emoji = Emoji;
exports.Message = Message;
exports.RestContext = RestContext;
exports.RestProvider = RestProvider;
exports.Room = Room;
exports.RoomList = RoomList;
exports.SocketContext = SocketContext;
exports.SocketProvider = SocketProvider;
exports.Typing = Typing;
exports.clearLocalStorage = clearLocalStorage;
exports.getRefreshToken = getRefreshToken;
exports.signOut = signOut;
//# sourceMappingURL=chat.cjs.development.js.map

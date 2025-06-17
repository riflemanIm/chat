import { Typography, List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Dialog, DialogTitle, Paper, Button, Box, ListItem, Alert, Link, TextField, InputAdornment, IconButton, CircularProgress, SvgIcon, Popover, DialogContent as DialogContent$1, DialogActions as DialogActions$1, Slide as Slide$1, CardHeader, Fade, Fab, CardContent, Backdrop, Card, Divider, Menu as Menu$1, MenuItem as MenuItem$1, ListItemIcon, Chip, Badge, Snackbar, Container, Grid2, useMediaQuery, Tooltip } from '@mui/material';
import React__default, { useEffect, createElement, memo, forwardRef, useRef, useState, useCallback, Fragment, useMemo, createContext, useContext, useReducer } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import StarIcon from '@mui/icons-material/Star';
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import dayjs from 'dayjs';
import { Done, DoneAll, InsertEmoticon, Send } from '@mui/icons-material';
import { AspectRatio } from 'react-aspect-ratio';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CallEndIcon from '@mui/icons-material/CallEnd';
import GroupIcon from '@mui/icons-material/Group';
import PauseIcon from '@mui/icons-material/Pause';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Button$1 from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Dialog$1 from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import List$1 from '@mui/material/List';
import axios from 'axios';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import io from 'socket.io-client';

// Этот интерфейс используется для типизации всех ответов от сервера. Когда сервер отправляет данные через сокет, они приходят в таком формате:
var MessageStatus;
(function (MessageStatus) {
  MessageStatus[MessageStatus["sent"] = 0] = "sent";
  MessageStatus[MessageStatus["read"] = 1] = "read";
})(MessageStatus || (MessageStatus = {}));
var Role;
(function (Role) {
  Role[Role["Unknown"] = 0] = "Unknown";
  Role[Role["Client"] = 1] = "Client";
  Role[Role["Agent"] = 2] = "Agent";
  Role[Role["Specialist"] = 3] = "Specialist";
  Role[Role["Operator"] = 4] = "Operator";
})(Role || (Role = {}));
// Операции контекстного меню
var ContextMenuType;
(function (ContextMenuType) {
  ContextMenuType["COPY"] = "COPY";
  ContextMenuType["REVOKE"] = "REVOKE";
  ContextMenuType["TOP_REVERT"] = "TOP_REVERT";
  ContextMenuType["TOP"] = "TOP";
  ContextMenuType["READ"] = "READ";
  ContextMenuType["DELETE"] = "DELETE";
})(ContextMenuType || (ContextMenuType = {}));
var CHAT_ACTIONS = {
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  REVOKE_MESSAGE: "REVOKE_MESSAGE",
  MARK_PRIVATE_MESSAGES_READ: "MARK_PRIVATE_MESSAGES_READ"
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function isEmpty(value) {
  return value == null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
}
/**
 * Формитирование времени сообщения
 * @param time
 */
function formatTime(time, format) {
  if (format === void 0) {
    format = "DD.MM.YYYY HH:mm";
  }
  if (typeof time === "undefined") return null;
  if (typeof time === "string") time = new Date(time);
  // больше чем вчера
  if (dayjs().add(-1, "days").startOf("day").isAfter(time)) {
    return dayjs(time).format(format);
  }
  // вчера
  if (dayjs().startOf("day").isAfter(time)) {
    return "\u0412\u0447\u0435\u0440\u0430 \u0432 " + dayjs(time).format("HH:mm");
  }
  return dayjs(time).format("HH:mm");
}
/**
 * Раскрыть содержимое
 * @param content - данные в строке
 */
function getFileMeta(content) {
  // Формат  [date]$[userId]$[size]$[fileName]
  // Например fileName = 1606980397047$1a01e20f-3780-4227-84b5-5c69ca766ee5$15.41KB$123.docx
  var meta = content.split("$");
  var date = meta[0],
    userId = meta[1],
    size = meta[2],
    name = meta[3];
  return {
    date: date,
    userId: userId,
    size: size,
    name: name
  };
}
function splitFileName(name) {
  var idx = name.lastIndexOf(".");
  if (idx === -1) return {
    name: name,
    ext: ""
  };
  return {
    name: name.slice(0, idx),
    ext: name.slice(idx + 1)
  };
}
var getChatId = function getChatId(chat) {
  if (!chat) return null;
  return chat.groupId ? "group:" + chat.groupId : "user:" + chat.userId;
};
var getChatName = function getChatName(chat) {
  return chat.groupId ? chat.name : chat.username;
};
var isGroup = function isGroup(chat) {
  return "groupId" in chat;
};
var allGather = function allGather(chats) {
  return Object.values(chats).map(function (it) {
    return (it == null ? void 0 : it.messages) != null ? it == null ? void 0 : it.messages.length : 0;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
};
var chatRoomComparer = function chatRoomComparer(a, b) {
  var hasMessagesA = Array.isArray(a.messages) && a.messages.length > 0;
  var hasMessagesB = Array.isArray(b.messages) && b.messages.length > 0;
  if (hasMessagesA && hasMessagesB && b.messages != null && a.messages != null) {
    // !!! if cdate === undefined !!!
    var bb = b.messages[b.messages.length - 1].cdate != null ? new Date(b.messages[b.messages.length - 1].cdate).getTime() : new Date().getTime();
    var aa = a.messages[a.messages.length - 1].cdate != null ? new Date(a.messages[a.messages.length - 1].cdate).getTime() : new Date().getTime() - 1;
    var res = bb - aa;
    //console.log('res', res);
    return res;
  }
  if (hasMessagesA) {
    return -1;
  }
  return 1;
};
var getParam = function getParam(param) {
  var QueryString = window.location.search;
  var urlParams = new URLSearchParams(QueryString);
  return urlParams.get(param);
};
var combineURLs = function combineURLs(baseURL, relativeURL, queryParams) {
  var url = relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  if (!queryParams) return url;
  return url + (url.includes("?") ? "&" : "?") + new URLSearchParams(queryParams).toString();
};

var useStyles = /*#__PURE__*/makeStyles(function (theme) {
  return createStyles({
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
  });
});
var Typing = function Typing(props) {
  var classes = useStyles();
  return /*#__PURE__*/React__default.createElement(Typography, {
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

var ContactStatus = function ContactStatus(props) {
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  if (props.isTyping) return /*#__PURE__*/React__default.createElement(Typing, {
    message: t("CHAT.STATUS.TYPING")
  });
  if (props.contact.online === 1) return /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    color: "primary",
    component: "span"
  }, t("CHAT.STATUS.ONLINE"));
  return /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, t("CHAT.STATUS.OFFLINE"));
};

var _excluded = ["apiUrl", "contacts", "owner", "onContactClick"];
var useStyles$1 = /*#__PURE__*/makeStyles(function () {
  return {
    star: {
      fontSize: "0.85rem",
      verticalAlign: "middle"
    }
  };
});
var ContactList = function ContactList(props) {
  var classes = useStyles$1();
  var apiUrl = props.apiUrl,
    contacts = props.contacts,
    owner = props.owner,
    onContactClick = props.onContactClick,
    listProps = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React__default.createElement(List, _extends({}, listProps, {
    "aria-label": "contacts"
  }), contacts.map(function (contact) {
    return /*#__PURE__*/React__default.createElement(ListItemButton, {
      key: contact.userId,
      onClick: function onClick() {
        return onContactClick && onContactClick(contact);
      }
    }, /*#__PURE__*/React__default.createElement(ListItemAvatar, null, /*#__PURE__*/React__default.createElement(Avatar, {
      alt: contact.username,
      src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
    })), /*#__PURE__*/React__default.createElement(ListItemText, {
      primary: /*#__PURE__*/React__default.createElement("span", null, contact.username, " ", owner === contact.userId && /*#__PURE__*/React__default.createElement(StarIcon, {
        className: classes.star,
        color: "primary"
      })),
      secondary: /*#__PURE__*/React__default.createElement(ContactStatus, {
        contact: contact,
        isTyping: false
      })
    }));
  }));
};

var AddContact = function AddContact(props) {
  var onClose = props.onClose,
    open = props.open,
    apiUrl = props.apiUrl,
    contacts = props.contacts;
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var handleClose = function handleClose() {
    onClose();
  };
  var handleListItemClick = function handleListItemClick(contact) {
    onClose(contact);
  };
  return /*#__PURE__*/React__default.createElement(Dialog, {
    onClose: handleClose,
    "aria-labelledby": "add-contact-title",
    open: open
  }, /*#__PURE__*/React__default.createElement(DialogTitle, {
    id: "switch-operator-title"
  }, t("CHAT.ADD_CONTACT")), /*#__PURE__*/React__default.createElement(ContactList, {
    apiUrl: apiUrl,
    contacts: contacts,
    onContactClick: handleListItemClick
  }));
};

function updateUrlParameter(url, param, value) {
  var regex = new RegExp("(" + param + "=)[^&]+");
  return url.replace(regex, "$1" + value);
}
var transLang = function transLang(lang) {
  return lang === "ru" ? "rus" : lang === "fr" ? "fra" : lang === "en" ? "eng" : "";
};
var useStyles$2 = /*#__PURE__*/makeStyles(function () {
  return {
    root: {
      width: "100%",
      height: "100%",
      borderRadius: 4
    }
  };
});
var Conference = function Conference(_ref) {
  var conference = _ref.conference,
    onClose = _ref.onClose,
    _ref$langCode = _ref.langCode,
    langCode = _ref$langCode === void 0 ? "en" : _ref$langCode;
  var classes = useStyles$2();
  var ref = React__default.useRef(null);
  var confUrl = conference != null && conference.url && langCode ? updateUrlParameter(conference == null ? void 0 : conference.url, "lang", transLang(langCode)) : "";
  useEffect(function () {
    var listener = function listener(_ref2) {
      var _ref$current;
      var source = _ref2.source,
        data = _ref2.data;
      if (source === ((_ref$current = ref.current) == null ? void 0 : _ref$current.contentWindow)) {
        var type = data.type;
        if (["notSupported", "connectionFail",
        // "loginFail",
        "callFail", "hangUp", "remoteHangUp"].includes(type)) onClose(conference);
      }
    };
    window.addEventListener("message", listener);
    return function () {
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

var useStyles$3 = /*#__PURE__*/makeStyles(function () {
  return {
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
  };
});
var ConferenceCall = function ConferenceCall(_ref) {
  var conference = _ref.conference,
    contact = _ref.contact,
    apiUrl = _ref.apiUrl,
    onAccept = _ref.onAccept;
  var classes = useStyles$3();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  return /*#__PURE__*/React__default.createElement(Paper, {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.pulse
  }, contact ? /*#__PURE__*/React__default.createElement(Avatar, {
    className: classes.avatar,
    alt: contact.username,
    src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
  }) : /*#__PURE__*/React__default.createElement(Avatar, {
    className: classes.avatar
  })), /*#__PURE__*/React__default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return onAccept(conference);
    }
  }, t("CHAT.CONFERENCE.JOIN"))));
};

var useStyles$4 = /*#__PURE__*/makeStyles(function () {
  return createStyles({
    item: {
      cursor: "pointer"
    }
  });
});
var Emoji = function Emoji(props) {
  var classes = useStyles$4();
  var emojiClick = function emojiClick(e) {
    if (props.onSelect) {
      props.onSelect(e.target.innerText);
    }
  };
  var Item = function Item(itemProps) {
    return /*#__PURE__*/createElement(Box, {
      m: 0.5,
      component: "span",
      onClick: emojiClick,
      className: classes.item
    }, itemProps.emoji);
  };
  return /*#__PURE__*/createElement(Box, null, /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE03"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE01"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE02"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE04"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE05"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE06"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE07"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE08"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE09"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE0A"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE0B"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE0C"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE0D"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE0E"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE0F"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE10"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE12"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE13"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\u2753"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE15"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE16"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE17"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE18"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE19"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE1A"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE1C"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE1D"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE1E"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE1F"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE20"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE21"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE22"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE23"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE24"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE25"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE26"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE28"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE29"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE2A"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE2B"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE2C"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE2D"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE2E"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE2F"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE30"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE32"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE33"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE34"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE35"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDDD0"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE37"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE41"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE42"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83D\uDE43"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD10"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD11"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD12"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD13"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD14"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD15"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD20"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD21"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD22"
  })), /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD24"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD25"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD27"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD28"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD29"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD2A"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD2B"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD2C"
  }), /*#__PURE__*/createElement(Item, {
    emoji: "\uD83E\uDD2D"
  })));
};

var useStyles$5 = /*#__PURE__*/makeStyles(function (theme) {
  return createStyles({
    fileIcon: {
      fontSize: "0.75rem"
    },
    fileBody: {
      paddingLeft: theme.spacing(1.2)
    }
  });
});
var File = function File(_ref) {
  var message = _ref.message;
  var classes = useStyles$5();
  var meta = getFileMeta(message.content);
  var _splitFileName = splitFileName(meta.name),
    name = _splitFileName.name,
    ext = _splitFileName.ext;
  return /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    className: classes.fileIcon
  }, ext.toUpperCase()), /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    className: classes.fileBody
  }, name, /*#__PURE__*/React__default.createElement("span", null, ext + " " + meta.size)));
};

var useStyles$6 = /*#__PURE__*/makeStyles(function (theme) {
  var _img, _aspect;
  return createStyles({
    img: (_img = {
      cursor: "pointer",
      borderRadius: theme.spacing(1.2),
      maxWidth: 284,
      maxHeight: 190
    }, _img[theme.breakpoints.down("sm")] = {
      maxWidth: 250,
      maxHeight: 170
    }, _img),
    aspect: (_aspect = {
      maxWidth: 284,
      height: 190
    }, _aspect[theme.breakpoints.down("sm")] = {
      maxWidth: 250,
      height: 170
    }, _aspect)
  });
});
var Image$1 = function Image(_ref) {
  var apiUrl = _ref.apiUrl,
    message = _ref.message,
    setViewerData = _ref.setViewerData;
  var classes = useStyles$6();
  //const meta = getImageMeta(message.content);
  return /*#__PURE__*/React__default.createElement(AspectRatio, {
    ratio: "3/4",
    className: classes.aspect
  }, /*#__PURE__*/React__default.createElement("img", {
    src: combineURLs(apiUrl, "/static/image/" + message.content),
    onClick: function onClick() {
      setViewerData({
        visible: true,
        src: combineURLs(apiUrl, "/static/image/" + message.content)
      });
    },
    className: classes.img,
    alt: message.cdate
  }));
};

var useStyles$7 = /*#__PURE__*/makeStyles(function (theme) {
  var _mediaContent;
  return {
    mediaContent: (_mediaContent = {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.spacing(1.2),
      maxWidth: 284,
      height: 190
    }, _mediaContent[theme.breakpoints.down("sm")] = {
      maxWidth: 250,
      height: 170
    }, _mediaContent)
  };
});
var Video = function Video(_ref) {
  var apiUrl = _ref.apiUrl,
    message = _ref.message,
    isConference = _ref.isConference;
  var classes = useStyles$7();
  var src = "";
  if (isConference) {
    var meta = JSON.parse(message.content);
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

var MessageContent = function MessageContent(_ref) {
  var apiUrl = _ref.apiUrl,
    message = _ref.message,
    setViewerData = _ref.setViewerData;
  switch (message.messageType) {
    case "text":
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, message.content);
    case "video":
    case "video_conference":
      return /*#__PURE__*/React__default.createElement(Video, {
        message: message,
        apiUrl: apiUrl,
        isConference: message.messageType === "video_conference"
      });
    case "image":
      return /*#__PURE__*/React__default.createElement(Image$1, {
        message: message,
        apiUrl: apiUrl,
        setViewerData: setViewerData
      });
    case "file":
      return /*#__PURE__*/React__default.createElement(File, {
        message: message
      });
  }
  return null;
};

var useStyles$8 = /*#__PURE__*/makeStyles(function (theme) {
  var _message;
  return createStyles({
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
    message: (_message = {
      //maxWidth: "55%",
      //minWidth: "50%",
      maxWidth: "65%"
    }, _message[theme.breakpoints.down("md")] = {
      maxWidth: "95%"
    }, _message[theme.breakpoints.down("sm")] = {
      maxWidth: "85%"
    }, _message.borderRadius = theme.spacing(0.6), _message.padding = theme.spacing(0.9), _message.paddingLeft = theme.spacing(1.8), _message.paddingRight = theme.spacing(1.8), _message),
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
  });
});

var wrapMessage = function wrapMessage(apiUrl, message, classes, isUserFirst, isUserLast, onContextMenu, child) {
  var messageType = message.messageType;
  var className = isUserFirst && isUserLast ? classes.message + " " + classes.firstMessage + " " + classes.lastMessage : isUserFirst ? classes.message + " " + classes.firstMessage : isUserLast ? classes.message + " " + classes.lastMessage : classes.message;
  if (messageType === "file") {
    return /*#__PURE__*/React__default.createElement(Link, {
      className: className + " " + classes.file,
      underline: "none",
      href: combineURLs(apiUrl, "/static/file/" + message.content),
      target: "_blank",
      download: true,
      onContextMenu: onContextMenu
    }, child);
  }
  var isMedia = messageType === "image" || messageType === "video" || messageType === "video_conference";
  return /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    flexDirection: isMedia ? "column" : "row",
    flexWrap: "wrap",
    className: className,
    onContextMenu: onContextMenu
  }, child);
};
var Message = /*#__PURE__*/memo(/*#__PURE__*/forwardRef(function (props, ref) {
  var classes = useStyles$8();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var apiUrl = props.apiUrl,
    message = props.message,
    owner = props.owner,
    user = props.user,
    isGroupMessage = props.isGroupMessage,
    isUserFirst = props.isUserFirst,
    isUserLast = props.isUserLast,
    setViewerData = props.setViewerData;
  //console.log('message', message);
  if (message.messageType === "notify") {
    // Уведомление - особый случай
    var content = message.content[0] === "{" ? JSON.parse(message.content) : message.content;
    return /*#__PURE__*/React__default.createElement(ListItem, {
      className: classes.rootNotify,
      ref: ref
    }, /*#__PURE__*/React__default.createElement(Alert
    //ref={refOnMess}
    , {
      severity: typeof content === "string" ? "info" : content.severity
    }, typeof content === "string" ? content : content.message));
  }
  if (message.isRevoke) {
    // Удаленное сообщение
    return /*#__PURE__*/React__default.createElement(ListItem, {
      className: classes.rootNotify,
      ref: ref
    }, /*#__PURE__*/React__default.createElement(Typography, {
      variant: "body2",
      align: "center"
    }, message.userId === user.userId ? t("CHAT.MESSAGE.REVOKED.YOU") : message.revokeUserName + " " + t("CHAT.MESSAGE.REVOKED.CONTACT")));
  }
  var isMine = user.userId === message.userId;
  return /*#__PURE__*/React__default.createElement(ListItem, {
    ref: ref,
    className: message.messageType === "video_conference" ? classes.rootNotify : isMine ? classes.rootUser : classes.rootContact
  }, wrapMessage(apiUrl, message, classes, isUserFirst, isUserLast, props.onContextMenu, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !isMine && isGroupMessage && owner && isUserFirst && /*#__PURE__*/React__default.createElement("div", {
    className: classes.header
  }, owner.username), /*#__PURE__*/React__default.createElement("div", {
    className: classes.body
  }, /*#__PURE__*/React__default.createElement(MessageContent, {
    message: message,
    apiUrl: apiUrl,
    setViewerData: setViewerData
  })), /*#__PURE__*/React__default.createElement("div", {
    className: classes.status
  }, /*#__PURE__*/React__default.createElement("span", null, isMine ? message.status === 0 ? /*#__PURE__*/React__default.createElement(Done, {
    className: classes.statusImage
  }) : /*#__PURE__*/React__default.createElement(DoneAll, {
    className: classes.statusImage
  }) : null, formatTime(message.cdate))))));
}));
Message.displayName = "Message";

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
var ALLOWED_FILE_TYPES = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp"],
  video: ["video/mp4", "video/webm"],
  file: ["application/pdf"]
};
var MAX_IMAGE_DIMENSION = 335;
var useStyles$9 = /*#__PURE__*/makeStyles(function () {
  return {
    input: {
      flex: "auto"
    },
    inputUpload: {
      display: "none"
    },
    attachmentIcon: {
      fill: "none",
      stroke: "currentColor"
    },
    error: {
      color: "red",
      fontSize: "0.75rem",
      marginTop: "4px"
    }
  };
});
var getImageSize = function getImageSize(data) {
  var width = data.width,
    height = data.height;
  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = MAX_IMAGE_DIMENSION * (height / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = MAX_IMAGE_DIMENSION * (width / height);
      height = MAX_IMAGE_DIMENSION;
    }
  }
  return {
    width: width,
    height: height
  };
};
var Entry = function Entry(_ref) {
  var chat = _ref.chat,
    onTyping = _ref.onTyping,
    onSendMessage = _ref.onSendMessage,
    _ref$maxMessageLength = _ref.maxMessageLength,
    maxMessageLength = _ref$maxMessageLength === void 0 ? 1000 : _ref$maxMessageLength;
  var classes = useStyles$9();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var fileInputRef = useRef(null);
  var _useState = useState(null),
    emojiAnchorEl = _useState[0],
    setEmojiAnchorEl = _useState[1];
  var textRef = useRef(null);
  var textValueRef = useRef("");
  var _useState2 = useState(""),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = useState(false),
    isUploading = _useState3[0],
    setIsUploading = _useState3[1];
  var _useState4 = useState({
      chat: chat,
      time: 0
    }),
    lastTyping = _useState4[0],
    setLastTyping = _useState4[1];
  var handleEmojiClick = function handleEmojiClick(event) {
    setEmojiAnchorEl(event.currentTarget);
  };
  var handleEmojiClose = function handleEmojiClose() {
    setEmojiAnchorEl(null);
  };
  var emojiSelect = useCallback(function (emoji) {
    if (textRef.current) {
      var newValue = textValueRef.current + emoji;
      textValueRef.current = newValue;
      textRef.current.value = newValue;
    }
    handleEmojiClose();
  }, []);
  var handleTyping = useCallback(function (e) {
    var newText = e.target.value;
    textValueRef.current = newText;
    if (chat && onTyping && (lastTyping.chat !== chat || Date.now() - lastTyping.time >= 500)) {
      setLastTyping({
        chat: chat,
        time: Date.now()
      });
      onTyping(chat);
    }
  }, [chat, onTyping, lastTyping.chat]);
  var sendMessage = useCallback(function (data) {
    if (!chat || !onSendMessage) return;
    onSendMessage(chat, data);
  }, [chat, onSendMessage]);
  var validateMessage = function validateMessage(message) {
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
  var handleSubmit = useCallback(function () {
    var currentText = textValueRef.current;
    if (!validateMessage(currentText)) return;
    sendMessage({
      message: currentText,
      messageType: "text"
    });
    if (textRef.current) {
      textRef.current.value = "";
      textValueRef.current = "";
    }
    setError("");
  }, [sendMessage]);
  var handleFileUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee(event) {
      var _event$target$files;
      var file, _Object$entries$find, messageType, imageSize;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = (_event$target$files = event.target.files) == null ? void 0 : _event$target$files[0];
              if (file) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              if (!(file.size > MAX_FILE_SIZE)) {
                _context.next = 6;
                break;
              }
              setError(t("CHAT.ERROR.FILE_TOO_LARGE"));
              return _context.abrupt("return");
            case 6:
              _context.prev = 6;
              setIsUploading(true);
              setError("");
              messageType = ((_Object$entries$find = Object.entries(ALLOWED_FILE_TYPES).find(function (_ref3) {
                var types = _ref3[1];
                return types.includes(file.type);
              })) == null ? void 0 : _Object$entries$find[0]) || "file";
              if (!(messageType === "image")) {
                _context.next = 17;
                break;
              }
              _context.next = 13;
              return new Promise(function (resolve) {
                var image = new Image();
                var url = URL.createObjectURL(file);
                image.onload = function () {
                  URL.revokeObjectURL(url);
                  resolve(getImageSize({
                    width: image.width,
                    height: image.height
                  }));
                };
                image.src = url;
              });
            case 13:
              imageSize = _context.sent;
              sendMessage({
                message: file,
                width: imageSize.width,
                height: imageSize.height,
                messageType: messageType
              });
              _context.next = 18;
              break;
            case 17:
              sendMessage({
                message: file,
                messageType: messageType,
                fileName: file.name,
                size: file.size
              });
            case 18:
              _context.next = 23;
              break;
            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](6);
              setError(t("CHAT.ERROR.UPLOAD_FAILED"));
            case 23:
              _context.prev = 23;
              setIsUploading(false);
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
              return _context.finish(23);
            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 20, 23, 27]]);
    }));
    return function handleFileUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onKeyDown = function onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };
  return /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React__default.createElement(TextField, {
    className: classes.input,
    placeholder: t("CHAT.INPUT_MESSAGE") || "",
    autoFocus: true,
    variant: "standard",
    error: !!error,
    disabled: isUploading,
    inputRef: textRef,
    slotProps: {
      input: {
        autoComplete: "off",
        inputProps: {
          maxLength: maxMessageLength
        },
        disableUnderline: true,
        startAdornment: /*#__PURE__*/React__default.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React__default.createElement("input", {
          ref: fileInputRef,
          accept: Object.values(ALLOWED_FILE_TYPES).flat().join(","),
          className: classes.inputUpload,
          id: "icon-button-file",
          type: "file",
          onChange: handleFileUpload,
          disabled: isUploading
        }), /*#__PURE__*/React__default.createElement("label", {
          htmlFor: "icon-button-file"
        }, /*#__PURE__*/React__default.createElement(IconButton, {
          color: "primary",
          "aria-label": "upload",
          component: "span",
          size: "small",
          disabled: isUploading
        }, isUploading ? /*#__PURE__*/React__default.createElement(CircularProgress, {
          size: 24
        }) : /*#__PURE__*/React__default.createElement(SvgIcon, {
          className: classes.attachmentIcon
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })))), /*#__PURE__*/React__default.createElement(IconButton, {
          "aria-describedby": Boolean(emojiAnchorEl) ? "emoji-popover" : undefined,
          onClick: handleEmojiClick,
          color: "primary",
          size: "small",
          disabled: isUploading
        }, /*#__PURE__*/React__default.createElement(InsertEmoticon, null))),
        endAdornment: /*#__PURE__*/React__default.createElement(IconButton, {
          edge: "end",
          color: "inherit",
          size: "small",
          onClick: handleSubmit,
          disabled: isUploading || !textValueRef.current.trim()
        }, /*#__PURE__*/React__default.createElement(Send, null)),
        onKeyDown: onKeyDown
      }
    },
    onChange: handleTyping
  }), error && /*#__PURE__*/React__default.createElement("div", {
    className: classes.error
  }, error), /*#__PURE__*/React__default.createElement(Popover, {
    id: "emoji-popover",
    open: Boolean(emojiAnchorEl),
    anchorEl: emojiAnchorEl,
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

var Transition = /*#__PURE__*/forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/createElement(Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
});
function ConfirmDialogSlide(_ref) {
  var open = _ref.open,
    setOpen = _ref.setOpen,
    contentText = _ref.contentText,
    callback = _ref.callback;
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var handleClose = function handleClose() {
    setOpen(false);
  };
  var handleCloseOk = function handleCloseOk() {
    setOpen(false);
    callback();
  };
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Dialog$1, {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-describedby": "alert-dialog-slide-description"
  }, /*#__PURE__*/createElement(DialogContent, null, /*#__PURE__*/createElement(Typography, {
    variant: "h6"
  }, contentText)), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Button$1, {
    onClick: handleClose,
    color: "primary"
  }, t("CHAT.BUT_CLOSE")), /*#__PURE__*/createElement(Button$1, {
    onClick: handleCloseOk,
    color: "warning"
  }, t("CHAT.BUT_CONFIRM")))));
}

var StyledMenu = /*#__PURE__*/styled(function (props) {
  return /*#__PURE__*/React__default.createElement(Menu, _extends({
    elevation: 0,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    }
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
      boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0"
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5)
        },
        "&:active": {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
      }
    }
  };
});
var getVisitMessage = function getVisitMessage(visit) {
  var visitDate = new Date(visit.visitDate);
  return visit.plExamName + " (" + formatTime(visitDate, "HH:mm") + " - " + formatTime(new Date(visitDate.getTime() + visit.duration * 60000), "HH:mm") + ")";
};
function ConferenceButton(props) {
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var _React$useState = React__default.useState(null),
    anchorEl = _React$useState[0],
    setAnchorEl = _React$useState[1];
  var _React$useState2 = React__default.useState(null),
    visitId = _React$useState2[0],
    setVisitId = _React$useState2[1];
  var _React$useState3 = React__default.useState(false),
    confirmReCreateVisit = _React$useState3[0],
    setConfirmReCreateVisit = _React$useState3[1];
  var open = Boolean(anchorEl);
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  var handleStart = function handleStart(item) {
    setAnchorEl(null);
    setVisitId(item.visitId);
    if (item.conferenceStatus === "finished") {
      setConfirmReCreateVisit(true);
    } else {
      props.onVideoCall(props.chat, item.visitId);
    }
  };
  var visitData = React__default.useMemo(function () {
    return props.visitData.filter(function (it) {
      return it.contactId === props.chat.userId;
    });
  }, [props.visitData, props.chat]);
  /**
   * <Button
                  aria-label="video call"
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<VideoCallIcon />}
                  onClick={() =>
                    visitId &&
                    !isEmpty(
                      visitData.find(
                        (it) =>
                          it.conferenceStatus === 'finished' &&
                          it.visitId === Number(visitId),
                      ),
                    )
                      ? setConfirmReCreateVisit(true)
                      : onVideoCall(contact, null)
                  }
                  fullWidth
                >
                  {t(
                    visitId
                      ? 'CHAT.CONFERENCE.RESTART'
                      : 'CHAT.CONFERENCE.START',
                  )}
                </Button>
   */
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button$1, {
    id: "conference-button",
    "aria-controls": open ? "conference-menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : undefined,
    color: "primary",
    size: "small",
    variant: "contained",
    disableElevation: true,
    onClick: handleClick,
    startIcon: /*#__PURE__*/React__default.createElement(VideoCallIcon, null),
    endIcon: /*#__PURE__*/React__default.createElement(KeyboardArrowDownIcon, null),
    disabled: visitData.length === 0
  }, t("CHAT.CONFERENCE.START")), /*#__PURE__*/React__default.createElement(ConfirmDialogSlide, {
    open: confirmReCreateVisit,
    setOpen: setConfirmReCreateVisit,
    contentText: t("CHAT.CONFERENCE.CONFIRM_RECREATE_CONF"),
    callback: function callback() {
      if (visitId && confirmReCreateVisit) {
        props.onVideoCall(props.chat, visitId, true);
      }
    }
  }), /*#__PURE__*/React__default.createElement(StyledMenu, {
    id: "conference-menu",
    MenuListProps: {
      "aria-labelledby": "conference-button"
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose
  }, visitData.map(function (item) {
    return /*#__PURE__*/React__default.createElement(MenuItem, {
      onClick: function onClick() {
        return handleStart(item);
      },
      key: item.visitId,
      value: item.visitId,
      disableRipple: true
    }, item.conferenceStatus === "finished" ? /*#__PURE__*/React__default.createElement(RestartAltIcon, null) : /*#__PURE__*/React__default.createElement(PlayArrowIcon, null), getVisitMessage(item));
  })));
}

function useCounter(max) {
  if (max === void 0) {
    max = 30000;
  }
  var _useState = useState(max),
    counter = _useState[0],
    setCounter = _useState[1];
  var counterRef = useRef(null);
  var handlerRefresh = function handlerRefresh() {
    setCounter(max);
  };
  // Counter
  useEffect(function () {
    if (counter > 0) counterRef.current = setInterval(function () {
      return setCounter(function (prev) {
        return prev - 1;
      });
    }, 1000);
    return function () {
      if (counterRef.current) clearInterval(counterRef.current);
    };
  }, [counter]);
  return {
    counter: counter,
    handlerRefresh: handlerRefresh
  };
}

var Transition$1 = /*#__PURE__*/React__default.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/React__default.createElement(Slide$1, _extends({
    direction: "up",
    ref: ref
  }, props));
});
function AlertDialog(_ref) {
  var children = _ref.children,
    open = _ref.open,
    setOpen = _ref.setOpen,
    _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? "warning" : _ref$severity;
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/React__default.createElement(Dialog, {
    open: open,
    TransitionComponent: Transition$1,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(DialogContent$1, null, /*#__PURE__*/React__default.createElement(Alert, {
    severity: severity
  }, typeof children === "string" ? /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2"
  }, children) : children)), /*#__PURE__*/React__default.createElement(DialogActions$1, null, /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleClose,
    variant: "text"
  }, t("CHAT.BUT_CLOSE"))));
}

//import { useTranslation } from "react-i18next";
var hhMmSs = function hhMmSs(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var strHours = hours < 10 ? "0" + hours : hours;
  totalSeconds %= 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var strMinutes = minutes < 10 ? "0" + minutes : minutes;
  var seconds = totalSeconds % 60;
  var strSeconds = seconds < 10 ? "0" + seconds : seconds;
  var strTime = strHours + ":" + strMinutes + ":" + strSeconds;
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    strTime: strTime
  };
};
var AlertModale = function AlertModale(_ref) {
  var modaleInfo = _ref.modaleInfo,
    setModaleInfo = _ref.setModaleInfo,
    strTime = _ref.strTime;
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  return useMemo(function () {
    return /*#__PURE__*/React__default.createElement(AlertDialog, {
      open: modaleInfo,
      setOpen: setModaleInfo,
      severity: "info"
    }, /*#__PURE__*/React__default.createElement(Typography, {
      variant: "body1",
      textAlign: "center"
    }, t("CHAT.CONFERENCE.UntillTheEnd"), ":"), /*#__PURE__*/React__default.createElement(Typography, {
      variant: "h6",
      textAlign: "center"
    }, strTime));
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [modaleInfo]);
};
var ConferenceTime = function ConferenceTime(_ref2) {
  var finishDate = _ref2.finishDate;
  var _useTranslation2 = useTranslation(),
    t = _useTranslation2.t;
  var _useState = useState(false),
    modaleInfo = _useState[0],
    setModaleInfo = _useState[1];
  var currTime = Date.now();
  // console.log("currentDate server", currentDate);
  // console.log("currTime client", currTime);
  var finTime = new Date(finishDate).getTime();
  //const diffTimeMin = Math.round((finTime - currTime) / (1000 * 60));
  var diffTimeSec = Math.round((finTime - currTime) / 1000);
  var _useCounter = useCounter(diffTimeSec),
    counter = _useCounter.counter;
  var _hhMmSs = hhMmSs(diffTimeSec),
    minutes = _hhMmSs.minutes,
    seconds = _hhMmSs.seconds,
    strTime = _hhMmSs.strTime;
  useEffect(function () {
    if (minutes && minutes === 3 && seconds != null && seconds === 0) {
      setModaleInfo(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  if (diffTimeSec < 1) return null;
  return /*#__PURE__*/React__default.createElement(Box, {
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    component: "span"
  }, t("CHAT.CONFERENCE.LEFT_TIME"), ":", " "), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "button",
    component: "span"
  }, strTime), /*#__PURE__*/React__default.createElement(AlertModale, {
    modaleInfo: modaleInfo,
    setModaleInfo: setModaleInfo,
    strTime: strTime
  }));
};

var useStyles$a = /*#__PURE__*/makeStyles(function (theme) {
  return createStyles({
    paper: {
      padding: theme.spacing(1)
    },
    avatarGroup: {
      backgroundColor: "#28B7C6",
      color: "#fff"
    }
  });
});
var getGroupStatus = function getGroupStatus(group, t) {
  var _group$members;
  var status = [((_group$members = group.members) == null ? void 0 : _group$members.length) + " " + t("CHAT.MEMBERS")];
  var onlineCount = (group.members || []).reduce(function (sum, contact) {
    return contact.online ? sum + 1 : sum;
  }, 0);
  if (onlineCount) status.push(onlineCount + " " + t("CHAT.STATUS.ONLINE"));
  return status.join(", ");
};
var RoomHeader = function RoomHeader(_ref) {
  var apiUrl = _ref.apiUrl,
    user = _ref.user,
    chat = _ref.chat,
    typing = _ref.typing,
    conference = _ref.conference,
    visitData = _ref.visitData,
    conferenceJoined = _ref.conferenceJoined,
    className = _ref.className,
    operators = _ref.operators,
    onVideoCall = _ref.onVideoCall,
    onVideoEnd = _ref.onVideoEnd,
    onConferencePause = _ref.onConferencePause,
    onOperatorAdd = _ref.onOperatorAdd,
    onLeaveGroup = _ref.onLeaveGroup,
    onContactClick = _ref.onContactClick;
  var classes = useStyles$a();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var _useState = useState(null),
    anchorEl = _useState[0],
    setAnchorEl = _useState[1];
  var _useState2 = useState(false),
    addOperatorOpen = _useState2[0],
    setAddOperatorOpen = _useState2[1];
  var _React$useState = React__default.useState(false),
    confirmFinishConf = _React$useState[0],
    setConfirmFinishConf = _React$useState[1];
  if (!chat) return /*#__PURE__*/React__default.createElement(CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(Avatar, null),
    title: "",
    subheader: "",
    className: className
  });
  var closeTimer = null;
  var handlePopoverIn = function handlePopoverIn(event) {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    }
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  };
  var handlePopoverClose = function handlePopoverClose() {
    setAnchorEl(null);
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  };
  var handlePopoverOut = function handlePopoverOut() {
    if (!closeTimer) {
      closeTimer = setTimeout(function () {
        handlePopoverClose();
      }, 1000);
    }
  };
  var handleAddOperatorOpen = function handleAddOperatorOpen() {
    setAddOperatorOpen(true);
  };
  var handleAddOperatorClose = function handleAddOperatorClose(operator) {
    setAddOperatorOpen(false);
    if (onOperatorAdd && operator && chat) onOperatorAdd(chat, operator);
  };
  var group = chat;
  if (group.groupId) {
    var _group$members2;
    // группа
    return /*#__PURE__*/React__default.createElement(CardHeader, {
      avatar: /*#__PURE__*/React__default.createElement(Avatar, {
        alt: group.name,
        className: classes.avatarGroup
      }, /*#__PURE__*/React__default.createElement(GroupIcon, null)),
      title: group.name,
      subheader: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
        id: "mouse-over-span",
        "aria-owns": anchorEl ? "mouse-over-popover" : undefined,
        "aria-haspopup": "true",
        onMouseEnter: handlePopoverIn,
        onMouseLeave: handlePopoverOut
      }, getGroupStatus(group, t)), /*#__PURE__*/React__default.createElement(Popover, {
        id: "mouse-over-popover",
        classes: {
          paper: classes.paper
        },
        sx: {
          pointerEvents: "none"
        },
        open: !!anchorEl,
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        onClose: handlePopoverClose,
        disableRestoreFocus: true
      }, /*#__PURE__*/React__default.createElement(ContactList, {
        apiUrl: apiUrl,
        contacts: group.members,
        onContactClick: onContactClick,
        owner: group.userId,
        onMouseEnter: handlePopoverIn,
        onMouseLeave: handlePopoverOut,
        sx: {
          pointerEvents: "all"
        }
      }))),
      className: className,
      action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role === 4 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconButton, {
        "aria-label": "add user",
        onClick: handleAddOperatorOpen
      }, /*#__PURE__*/React__default.createElement(PersonAddIcon, null)), /*#__PURE__*/React__default.createElement(AddContact, {
        apiUrl: apiUrl,
        open: addOperatorOpen,
        contacts: operators,
        onClose: handleAddOperatorClose
      })), user.role === 4 && ((_group$members2 = group.members) == null ? void 0 : _group$members2.find(function (it) {
        return it.userId !== user.userId && it.role === 4;
      })) && onLeaveGroup && /*#__PURE__*/React__default.createElement(IconButton, {
        "aria-label": "leave group",
        onClick: function onClick() {
          return onLeaveGroup(group);
        }
      }, /*#__PURE__*/React__default.createElement(DeleteIcon, null)))
    });
  }
  var contact = chat;
  var isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId;
  return /*#__PURE__*/React__default.createElement(CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(Avatar, {
      alt: contact.username,
      src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
    }),
    title: /*#__PURE__*/React__default.createElement(Typography, {
      variant: "h6",
      sx: function sx(theme) {
        var _ref2;
        return _ref2 = {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.9rem"
        }, _ref2[theme.breakpoints.down("md")] = {
          fontSize: "0.8rem"
        }, _ref2[theme.breakpoints.down("sm")] = {
          whiteSpace: "wrap",
          fontSize: "0.7rem"
        }, _ref2;
      }
    }, contact.username),
    subheader: /*#__PURE__*/React__default.createElement(ContactStatus, {
      contact: contact,
      isTyping: isTyping
    }),
    className: className,
    action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role !== 1 && conferenceJoined && conference && !isEmpty(conference) && onConferencePause != null && /*#__PURE__*/React__default.createElement(Button, {
      "aria-label": "cancel call",
      variant: "contained",
      color: "secondary",
      size: "small",
      startIcon: /*#__PURE__*/React__default.createElement(PauseIcon, {
        color: "primary"
      }),
      onClick: function onClick() {
        return onConferencePause(conference);
      }
    }, t("CHAT.CONFERENCE.PAUSE")), conference && !isEmpty(conference) && onVideoEnd != null && user.role != null && [3, 4].includes(user.role) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
      "aria-label": "cancel call",
      variant: "contained",
      color: "warning",
      size: "small",
      startIcon: /*#__PURE__*/React__default.createElement(CallEndIcon, {
        color: "inherit"
      }),
      onClick: function onClick() {
        return setConfirmFinishConf(true);
      },
      style: {
        marginLeft: 8
      }
    }, t("CHAT.CONFERENCE.FINISH")), /*#__PURE__*/React__default.createElement(ConfirmDialogSlide, {
      open: confirmFinishConf,
      setOpen: setConfirmFinishConf,
      contentText: t("CHAT.CONFERENCE.CONFIRM_FINISH_CONF"),
      callback: function callback() {
        onVideoEnd(conference);
      }
    })), isEmpty(conference) && onVideoCall != null && user.role && [3, 4].includes(user.role) && /*#__PURE__*/React__default.createElement(ConferenceButton, {
      visitData: visitData,
      chat: contact,
      onVideoCall: onVideoCall
    }), (conference == null ? void 0 : conference.finishDate) != null && /*#__PURE__*/React__default.createElement(ConferenceTime, {
      finishDate: conference.finishDate
    }))
  });
};

function useInterval(callback, state, delay) {
  var savedCallback = useRef();

  // Remember the latest callback.
  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(function () {
    function tick() {
      savedCallback.current();
    }
    if (state) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [state]);
}

function isVisibleInViewport(element, root) {
  var rect = element.getBoundingClientRect();
  // console.log(
  //   'rect.top',
  //   rect.top,
  //   'rect.bottom',
  //   rect.bottom,
  //   root.clientHeight,
  // );
  return rect.top >= 150 && rect.bottom <= root.clientHeight;
}
var useMessageScroll = function useMessageScroll(_ref) {
  var chatId = _ref.chatId,
    messages = _ref.messages,
    scrollableRootRef = _ref.scrollableRootRef,
    pageSize = _ref.pageSize,
    hasNextPage = _ref.hasNextPage,
    chat = _ref.chat,
    onEnterRoom = _ref.onEnterRoom,
    setIsVisible = _ref.setIsVisible;
  var _useState = useState(false),
    scrollDownButton = _useState[0],
    setScrollDownButton = _useState[1];
  var lastScrollDistanceToBottomRef = useRef();
  var lastMessageCount = useRef();
  var messageCount = (messages == null ? void 0 : messages.length) || 0;
  var lastMessage = messageCount && messages[messageCount - 1];
  var SCROLL_THRESHOLD = 900;
  var scrollDown = useCallback(function () {
    if (scrollableRootRef.current) {
      scrollableRootRef.current.scrollTop = scrollableRootRef.current.scrollHeight;
      if (onEnterRoom && chat) {
        onEnterRoom(chat);
      }
    }
  }, [chatId, onEnterRoom]);
  var handleRootScroll = useCallback(function () {
    var rootNode = scrollableRootRef.current;
    if (rootNode) {
      var scrollDistanceToBottom = rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;
      var isShowScrollButton = hasNextPage && scrollDistanceToBottom > SCROLL_THRESHOLD;
      setScrollDownButton(isShowScrollButton);
      for (var i = 0; i < messageCount; i++) {
        var _mess$ref;
        var mess = messages[i];
        // console.log(
        //   '------------loop------------',
        //   //mess?.ref?.current,
        // );
        if (mess != null && (_mess$ref = mess.ref) != null && _mess$ref.current) {
          var isVisibleMess = isVisibleInViewport(mess.ref.current, rootNode);
          if (isVisibleMess) {
            // console.log(
            //   'visible',
            //   dayjs(mess.cdate).format('DD.MM.YYYY'),
            // );
            setIsVisible(mess.cdate);
            break;
          }
        } else {
          break;
        }
      }
    }
  }, [messages, chatId]);
  useEffect(function () {
    if (chatId && scrollableRootRef.current && messages.length) {
      var _messages$cdate, _messages;
      setIsVisible((_messages$cdate = (_messages = messages[messageCount - 1]) == null ? void 0 : _messages.cdate) != null ? _messages$cdate : "");
      scrollDown();
    }
  }, [chatId]);
  // ------ keep the scroll position and lastMessageCount when messageCount changed ----------
  useEffect(function () {
    var _lastScrollDistanceTo;
    var scrollableRoot = scrollableRootRef.current;
    var lastScrollDistanceToBottom = (_lastScrollDistanceTo = lastScrollDistanceToBottomRef.current) != null ? _lastScrollDistanceTo : 0;
    if (scrollableRoot && lastMessage && chat) {
      // -----  scroll to prev lastScrollDistanceToBottom -----------
      if (lastMessageCount.current === messageCount - pageSize) {
        scrollableRoot.scrollTop = scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
      } else if (
      // -----  scroll to bottom forced -----------
      lastMessage.userId !== chat.userId || lastScrollDistanceToBottom <= SCROLL_THRESHOLD) {
        scrollDown();
      }
    }
    lastMessageCount.current = messageCount;
  }, [messageCount, chatId]);
  return {
    scrollDown: scrollDown,
    handleRootScroll: handleRootScroll,
    scrollDownButton: scrollDownButton,
    setScrollDownButton: setScrollDownButton,
    unreadCount: messages.filter(function (m) {
      return m.status === 0;
    }).length
  };
};

var MessageDateIndicator = function MessageDateIndicator(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      position: "relative",
      height: 0,
      margin: "8px 0"
    }
  }, /*#__PURE__*/React__default.createElement(Fade, {
    in: !!date,
    timeout: 2000
  }, /*#__PURE__*/React__default.createElement(Alert, {
    severity: "warning",
    icon: false,
    sx: function sx() {
      return {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 150,
        mx: "auto",
        justifyContent: "center",
        zIndex: 1000
      };
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h6",
    textAlign: "center"
  }, date && dayjs(date).format("DD.MM.YYYY")))));
};

var useStyles$b = /*#__PURE__*/makeStyles(function (theme) {
  var _arrowDown;
  return {
    arrowDown: (_arrowDown = {
      position: "absolute",
      left: "94.5%",
      bottom: 105
    }, _arrowDown[theme.breakpoints.down("md")] = {
      left: "91.5%",
      bottom: 95
    }, _arrowDown[theme.breakpoints.down("sm")] = {
      left: "84%",
      bottom: 95
    }, _arrowDown)
  };
});
var MessageScrollButton = function MessageScrollButton(_ref) {
  var visible = _ref.visible,
    unreadCount = _ref.unreadCount,
    onScrollDown = _ref.onScrollDown;
  var classes = useStyles$b();
  if (!visible) return null;
  return /*#__PURE__*/React__default.createElement(Box, {
    className: classes.arrowDown,
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(Fab, {
    color: "info",
    "aria-label": "scroll-down",
    size: "medium",
    onClick: onScrollDown
  }, /*#__PURE__*/React__default.createElement(KeyboardArrowDownIcon, null)), unreadCount > 0 && /*#__PURE__*/React__default.createElement(Fab, {
    color: "warning",
    size: "small",
    sx: {
      width: 24,
      height: 24,
      minHeight: 24,
      position: "relative",
      top: -10,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    sx: function sx(theme) {
      return {
        color: theme.palette.background.default
      };
    }
  }, unreadCount)));
};

var useStyles$c = /*#__PURE__*/makeStyles(function (theme) {
  var _img;
  return {
    messageListOuter: {
      flex: 1,
      overflowY: "auto",
      margin: 0,
      padding: 0,
      height: "100%",
      scrollbarWidth: "thin",
      scrollbarColor: theme.palette.primary.light + " #fff"
    },
    messageList: {},
    img: (_img = {
      cursor: "pointer",
      borderRadius: theme.spacing(1.2),
      maxWidth: "auto",
      maxHeight: "95%"
    }, _img[theme.breakpoints.down("sm")] = {
      maxWidth: "auto",
      maxHeight: "95%"
    }, _img)
  };
});
var RoomMessageList = function RoomMessageList(_ref) {
  var _chat$messages;
  var apiUrl = _ref.apiUrl,
    user = _ref.user,
    users = _ref.users,
    chat = _ref.chat,
    loading = _ref.loading,
    pageSize = _ref.pageSize,
    initialMenuState = _ref.initialMenuState,
    onNeedMoreMessages = _ref.onNeedMoreMessages,
    onMessageDelete = _ref.onMessageDelete,
    setMenuState = _ref.setMenuState,
    onEnterRoom = _ref.onEnterRoom;
  var classes = useStyles$c();
  var scrollableRootRef = React__default.useRef(null);
  var chatId = React__default.useMemo(function () {
    return getChatId(chat);
  }, [chat]);
  var _React$useState = React__default.useState({
      visible: false,
      src: ""
    }),
    viewerData = _React$useState[0],
    setViewerData = _React$useState[1];
  var _React$useState2 = React__default.useState(""),
    isVisible = _React$useState2[0],
    setIsVisible = _React$useState2[1];
  var messages = (chat == null ? void 0 : (_chat$messages = chat.messages) == null ? void 0 : _chat$messages.map(function (it) {
    return _extends({}, it, {
      ref: /*#__PURE__*/React__default.createRef()
    });
  })) || [];
  var hasNextPage = React__default.useMemo(function () {
    return chat == null || (chat == null ? void 0 : chat.noMoreData) == null ? true : !chat.noMoreData;
  }, [chat == null ? void 0 : chat.noMoreData]);
  var _useMessageScroll = useMessageScroll({
      chatId: chatId,
      messages: messages,
      scrollableRootRef: scrollableRootRef,
      pageSize: pageSize,
      hasNextPage: hasNextPage,
      chat: chat,
      onEnterRoom: onEnterRoom,
      setIsVisible: setIsVisible
    }),
    scrollDown = _useMessageScroll.scrollDown,
    handleRootScroll = _useMessageScroll.handleRootScroll,
    scrollDownButton = _useMessageScroll.scrollDownButton,
    unreadCount = _useMessageScroll.unreadCount;
  var _useInfiniteScroll = useInfiniteScroll({
      loading: loading,
      hasNextPage: hasNextPage,
      onLoadMore: function onLoadMore() {
        return chat && onNeedMoreMessages(chat);
      },
      disabled: false
    }),
    infiniteRef = _useInfiniteScroll[0],
    rootRef = _useInfiniteScroll[1].rootRef;
  var rootRefSetter = React__default.useCallback(function (node) {
    rootRef(node);
    scrollableRootRef.current = node;
  }, [rootRef]);
  useInterval(function () {
    setIsVisible("");
  }, isVisible, 4700);
  var handleMenuPopup = function handleMenuPopup(message, event) {
    var canCopy = message.messageType === "text";
    var canDelete = user.userId === message.userId && !!onMessageDelete && new Date().getTime() - new Date(message.cdate).getTime() <= 1000 * 60 * 2;
    if (!canCopy && !canDelete) {
      setMenuState(initialMenuState);
      return;
    }
    event.preventDefault();
    setMenuState({
      message: message,
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      canCopy: canCopy,
      canDelete: canDelete
    });
  };
  if (!chatId) return null;
  var messageList = React__default.useMemo(function () {
    return messages.map(function (message, index) {
      var _messages, _messages2;
      return /*#__PURE__*/React__default.createElement(Message, {
        ref: message.ref,
        key: message._id || index // Better to use unique ID if available
        ,
        apiUrl: apiUrl,
        user: user,
        message: message,
        owner: users[message.userId],
        isGroupMessage: !!(chat != null && chat.groupId),
        isUserFirst: index === 0 || messages[index - 1].messageType === "notify" || messages[index - 1].userId !== messages[index].userId,
        isUserLast: index === messages.length - 1 || ((_messages = messages[index + 1]) == null ? void 0 : _messages.messageType) === "notify" || ((_messages2 = messages[index + 1]) == null ? void 0 : _messages2.userId) !== messages[index].userId,
        onContextMenu: function onContextMenu(event) {
          return handleMenuPopup(message, event);
        },
        setViewerData: setViewerData
      });
    });
  }, [(messages || []).filter(function (it) {
    return it._id;
  }).length, unreadCount, apiUrl, user, users, chat == null ? void 0 : chat.groupId, scrollDownButton, isVisible]);
  // console.count("RoomMessageList - render");
  // console.log("unreadCount", unreadCount);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MessageDateIndicator, {
    date: isVisible
  }), /*#__PURE__*/React__default.createElement(CardContent, {
    className: classes.messageListOuter,
    ref: rootRefSetter,
    onScroll: handleRootScroll
  }, /*#__PURE__*/React__default.createElement(List, {
    className: classes.messageList
  }, hasNextPage && /*#__PURE__*/React__default.createElement(ListItem, {
    ref: infiniteRef,
    sx: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/React__default.createElement(CircularProgress, null)), messageList), /*#__PURE__*/React__default.createElement(MessageScrollButton, {
    visible: scrollDownButton,
    unreadCount: unreadCount,
    onScrollDown: scrollDown
  }), viewerData.visible && /*#__PURE__*/React__default.createElement(Backdrop, {
    sx: {
      color: "#fff",
      zIndex: function zIndex(theme) {
        return theme.zIndex.drawer + 1;
      }
    },
    open: viewerData.visible,
    onClick: function onClick() {
      return setViewerData({
        visible: false,
        src: ""
      });
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: viewerData.src,
    className: classes.img,
    alt: ""
  }))));
};
// export default React.memo(RoomMessageList, (prevProps, nextProps) => {
//   console.log("RoomMessageList memo");
//   return (
//     (prevProps.chat?.messages || []).filter((it) => it._id) ===
//       (nextProps.chat?.messages || []).filter((it) => it._id) &&
//     prevProps.loading === nextProps.loading &&
//     prevProps.user === nextProps.user &&
//     prevProps.users === nextProps.users &&
//     prevProps.chat?.groupId === nextProps.chat?.groupId &&
//     prevProps.apiUrl === nextProps.apiUrl
//   );
// });

var useStyles$d = /*#__PURE__*/makeStyles(function (theme) {
  return createStyles({
    root: {
      width: "100%",
      minWidth: 360,
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    roomHeader: {
      flex: 1
    },
    flexAll: {
      flex: "1 1 auto"
    },
    flexEnd: {
      justifyContent: "flex-end"
    }
  });
});
var initialMenuState = {
  message: null,
  mouseX: null,
  mouseY: null,
  canCopy: false,
  canDelete: false
};
var Room = function Room(props) {
  var apiUrl = props.apiUrl,
    user = props.user,
    users = props.users,
    chat = props.chat,
    typing = props.typing,
    conference = props.conference,
    visitData = props.visitData,
    conferenceJoined = props.conferenceJoined,
    loading = props.loading,
    pageSize = props.pageSize,
    onEnterRoom = props.onEnterRoom;
  var classes = useStyles$d();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var _React$useState = React__default.useState(initialMenuState),
    menuState = _React$useState[0],
    setMenuState = _React$useState[1];
  var handleMenuClose = function handleMenuClose() {
    setMenuState(initialMenuState);
  };
  var handleCopy = useCallback(function () {
    var message = menuState.message;
    setMenuState(initialMenuState);
    if (!message) return;
    navigator.clipboard.writeText(message.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);
  var handleDelete = useCallback(function () {
    var message = menuState.message;
    setMenuState(initialMenuState);
    if (props.onMessageDelete && chat && message) props.onMessageDelete(chat, message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);
  return /*#__PURE__*/React__default.createElement(Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React__default.createElement(RoomHeader, {
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
    onLeaveGroup: props.onLeaveGroup,
    onContactClick: props.onContactClick
  })), /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement(RoomMessageList, {
    apiUrl: apiUrl,
    user: user,
    users: users,
    chat: chat,
    loading: loading,
    pageSize: pageSize,
    initialMenuState: initialMenuState,
    onNeedMoreMessages: props.onNeedMoreMessages,
    onMessageDelete: props.onMessageDelete,
    setMenuState: setMenuState,
    onEnterRoom: onEnterRoom
  }), /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement(CardContent, null, /*#__PURE__*/React__default.createElement(Entry, {
    chat: chat,
    onTyping: props.onTyping,
    onSendMessage: props.onSendMessage
  })), /*#__PURE__*/React__default.createElement(Menu$1, {
    keepMounted: true,
    open: menuState.mouseY !== null,
    onClose: handleMenuClose,
    anchorReference: "anchorPosition",
    anchorPosition: menuState.mouseY !== null && menuState.mouseX !== null ? {
      top: menuState.mouseY,
      left: menuState.mouseX
    } : undefined
  }, /*#__PURE__*/React__default.createElement(MenuItem$1, {
    onClick: handleCopy,
    disabled: !menuState.canCopy
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t("CHAT.MESSAGE.MENU.COPY")), /*#__PURE__*/React__default.createElement(ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(FileCopyIcon, {
    fontSize: "small"
  }))), /*#__PURE__*/React__default.createElement(MenuItem$1, {
    onClick: handleDelete,
    disabled: !menuState.canDelete
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t("CHAT.MESSAGE.MENU.DELETE")), /*#__PURE__*/React__default.createElement(ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(DeleteIcon, {
    fontSize: "small"
  })))));
};

var emptyUser = {
  userId: 0,
  username: "",
  password: "",
  avatar: "",
  langCode: ""
};
var emptyChatState = {
  user: emptyUser,
  token: "",
  refreshToken: "",
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
var getFreshActiveRoom = function getFreshActiveRoom(state) {
  if (state.activeRoom) return state.groupGather[state.activeRoom.groupId] || state.contactGather[state.activeRoom.userId];
  return null;
};
var getActiveRoom = function getActiveRoom(state) {
  var activeRoom = state.activeRoom,
    initialContactId = state.initialContactId,
    contactGather = state.contactGather;
  var newActiveRoom = null;
  if (initialContactId) {
    newActiveRoom = contactGather[initialContactId];
  } else if (activeRoom) {
    newActiveRoom = getFreshActiveRoom(state);
  } else {
    // ищем комнату с самым свежим сообщением
    var rooms = [].concat(Object.values(state.contactGather), Object.values(state.groupGather)).sort(chatRoomComparer);
    if (rooms.length > 0) newActiveRoom = rooms[0];
  }
  return newActiveRoom;
};
var setUserOnline = function setUserOnline(state, userId, online) {
  var newState = _extends({}, state);
  // Обновить статусы приватных чатов
  if (state.contactGather[userId]) newState.contactGather[userId] = _extends({}, newState.contactGather[userId], {
    online: online
  });
  // Обновить статус участника в группах
  for (var _i = 0, _Object$values = Object.values(state.groupGather); _i < _Object$values.length; _i++) {
    var group = _Object$values[_i];
    if (!group.members) continue;
    var member = group.members.find(function (m) {
      return m.userId === userId;
    });
    if (member) {
      var index = group.members.indexOf(member);
      group.members[index] = _extends({}, member, {
        online: online
      });
    }
  }
  // Обновить статус операторов
  var idx = newState.operators.findIndex(function (it) {
    return it.userId === userId;
  });
  if (idx !== -1) newState.operators[idx] = _extends({}, newState.operators[idx], {
    online: online
  });
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var addGroupMessage = function addGroupMessage(state, payload) {
  var newState = _extends({}, state);
  var groupId = payload.groupId;
  if (newState.groupGather[groupId]) {
    if (newState.groupGather[groupId].messages) {
      newState.groupGather[groupId].messages = [].concat(newState.groupGather[groupId].messages, [payload]);
    } else {
      newState.groupGather[groupId] = _extends({}, state.groupGather[groupId], {
        messages: [payload]
      });
    }
  }
  // увеличиваем счетчик новых сообщений, если это не активная комната и сообщение не от нас
  var activeRoom = newState.activeRoom;
  if (activeRoom && activeRoom.groupId !== groupId && payload.userId !== state.user.userId) {
    return groupUnreadGather(newState, groupId, function (x) {
      return (x || 0) + 1;
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var addPrivateMessage = function addPrivateMessage(state, payload) {
  var _newState$activeRoom;
  var newState = _extends({}, state);
  var contactId = payload.contactId === state.user.userId ? payload.userId : payload.contactId;
  // 1 добавляем сообщение
  if (newState.contactGather[contactId].messages) {
    newState.contactGather[contactId].messages = [].concat(newState.contactGather[contactId].messages, [payload]);
  } else {
    newState.contactGather[contactId] = _extends({}, newState.contactGather[contactId], {
      messages: [payload]
    });
  }
  // 2 если это сообщение в неактивной комнате и источник не мы (в соседней вкладке), то увеличиваем счетчик непрочитанных
  if (((_newState$activeRoom = newState.activeRoom) == null ? void 0 : _newState$activeRoom.userId) !== contactId && payload.userId !== state.user.userId) {
    return contactUnreadGather(newState, contactId, function (x) {
      return (x || 0) + 1;
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var contactUnreadGather = function contactUnreadGather(state, userId, predicate) {
  var newState = _extends({}, state);
  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = _extends({}, newState.contactGather[userId], {
      unreadCount: predicate(newState.contactGather[userId].unreadCount)
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var groupUnreadGather = function groupUnreadGather(state, groupId, predicate) {
  var newState = _extends({}, state);
  if (newState.groupGather[groupId]) {
    newState.groupGather[groupId] = _extends({}, newState.groupGather[groupId], {
      unreadCount: predicate(newState.groupGather[groupId].unreadCount)
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var revokeMessage = function revokeMessage(state, payload) {
  var userId = state.user.userId;
  var newState = _extends({}, state);
  var userName = payload.username || newState.userGather[payload.userId].username;
  if (payload.groupId) {
    var messages = newState.groupGather[payload.groupId].messages;
    // задаем isRevoke
    if (messages) {
      var msg = messages.find(function (message) {
        return message._id === payload._id;
      });
      if (msg) {
        var index = messages.indexOf(msg);
        messages[index] = _extends({}, msg, {
          isRevoke: true,
          revokeUserName: userName
        });
      }
    }
  } else {
    var _messages = newState.contactGather[payload.contactId === userId ? payload.userId : payload.contactId].messages;
    // задаем isRevoke
    if (_messages) {
      var _msg = _messages.find(function (message) {
        return message._id === payload._id;
      });
      if (_msg) {
        var _index = _messages.indexOf(_msg);
        _messages[_index] = _extends({}, _msg, {
          isRevoke: true,
          revokeUserName: userName
        });
      }
    }
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var delContact = function delContact(state, userId) {
  var newState = _extends({}, state);
  var updateActiveRoom = newState.activeRoom === newState.contactGather[userId];
  delete newState.contactGather[userId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);
  return newState;
};
var delGroup = function delGroup(state, groupId) {
  var newState = _extends({}, state);
  var updateActiveRoom = newState.activeRoom === newState.groupGather[groupId];
  delete newState.groupGather[groupId];
  if (updateActiveRoom) newState.activeRoom = getActiveRoom(newState);
  return newState;
};
var delGroupMember = function delGroupMember(state, data) {
  var newState = _extends({}, state);
  var group = newState.groupGather[data.groupId];
  if (group) {
    var _group$members;
    group.members = (_group$members = group.members) == null ? void 0 : _group$members.filter(function (it) {
      return it.userId !== data.userId;
    });
  }
  return newState;
};
var updateGroupInfo = function updateGroupInfo(state, group) {
  var newState = _extends({}, state);
  var groupId = group.groupId,
    name = group.name,
    notice = group.notice;
  var info = newState.groupGather[groupId];
  if (info) {
    newState.groupGather[groupId] = _extends({}, info, {
      name: name,
      notice: notice
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var updateUserInfo = function updateUserInfo(state, user) {
  var newState = _extends({}, state);
  var userId = user.userId,
    username = user.username,
    avatar = user.avatar;
  if (newState.userGather[userId]) {
    newState.userGather[userId] = _extends({}, newState.userGather[userId], {
      username: username,
      avatar: avatar
    });
  }
  if (newState.contactGather[userId]) {
    newState.contactGather[userId] = _extends({}, newState.contactGather[userId], {
      username: username,
      avatar: avatar
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var addGroupMember = function addGroupMember(state, payload) {
  var members = payload.members.map(function (member) {
    return _extends({}, member, {
      isManager: 0
    });
  });
  var newState = _extends({}, state);
  if (newState.groupGather[payload.groupId].members && members) {
    newState.groupGather[payload.groupId].members = [].concat(state.groupGather[payload.groupId].members, members);
  } else {
    newState.groupGather[payload.groupId] = _extends({}, newState.groupGather[payload.groupId], {
      members: members
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var markPrivateMessagesRead = function markPrivateMessagesRead(state, userId) {
  var newState = _extends({}, state);
  if (newState.contactGather[userId]) {
    var updatedValue = _extends({}, newState.contactGather[userId]);
    if (updatedValue.messages) {
      for (var i = 0; i < updatedValue.messages.length; i++) {
        updatedValue.messages[i] = _extends({}, updatedValue.messages[i], {
          status: 1
        });
      }
    }
    newState.contactGather[userId] = updatedValue;
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  // помечаем все не прочитанные как прочитанные
  if (newState.activeRoom != null && newState.activeRoom.messages) {
    for (var _i2 = 0; _i2 < newState.activeRoom.messages.length; _i2++) {
      newState.activeRoom.messages[_i2] = _extends({}, newState.activeRoom.messages[_i2], {
        status: 1
      });
    }
  }
  return newState;
};
var addPrivateMessages = function addPrivateMessages(state, data) {
  var newState = _extends({}, state);
  var messages = data.messages,
    contactId = data.contactId;
  if (newState.contactGather[contactId]) {
    newState.contactGather[contactId] = _extends({}, newState.contactGather[contactId], {
      messages: [].concat(messages || [], newState.contactGather[contactId].messages || []),
      noMoreData: messages != null && messages.length ? (messages == null ? void 0 : messages.length) < data.pageSize : true
    });
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var addGroupMessages = function addGroupMessages(state, data) {
  var newState = _extends({}, state);
  var groupId = data.groupId,
    messages = data.messages,
    users = data.userArr;
  if (newState.groupGather[groupId]) {
    newState.groupGather[groupId] = _extends({}, newState.groupGather[groupId], {
      messages: [].concat(messages || [], newState.groupGather[groupId].messages || []),
      noMoreData: messages != null && messages.length ? (messages == null ? void 0 : messages.length) < data.pageSize : true
    });
  }
  newState.userGather = _extends({}, newState.userGather);
  for (var _iterator = _createForOfIteratorHelperLoose(users), _step; !(_step = _iterator()).done;) {
    var user = _step.value;
    if (!newState.userGather[user.userId]) {
      newState.userGather[user.userId] = user;
    }
  }
  // обновляем активный чат
  newState.activeRoom = getFreshActiveRoom(newState);
  return newState;
};
var setActiveRoom = function setActiveRoom(state, data) {
  //if (state.activeRoom && data.ifNotExists) return state;
  return _extends({}, state, {
    chatOld: state.activeRoom != null ? _extends({}, state.activeRoom) : null,
    activeRoom: data.groupId ? state.groupGather[data.groupId] : data.contactId ? state.contactGather[data.contactId] : null
  });
};
var setToken = function setToken(state, token) {
  return _extends({}, state, {
    token: token
  });
};
var clearUser = function clearUser(state) {
  return _extends({}, state, {
    token: "",
    user: emptyUser
  });
};
var setConference = function setConference(state, conference) {
  return _extends({}, state, {
    conference: {
      data: _extends({}, conference),
      joined: (conference == null ? void 0 : conference.userId) === state.user.userId,
      ringPlayed: (conference == null ? void 0 : conference.userId) !== state.user.userId
    }
  });
};
var pauseConference = function pauseConference(state, conference) {
  var _state$conference$dat;
  if (((_state$conference$dat = state.conference.data) == null ? void 0 : _state$conference$dat.id) !== (conference == null ? void 0 : conference.id)) return state;
  return _extends({}, state, {
    conference: {
      data: _extends({}, state.conference.data),
      joined: false,
      ringPlayed: false
    }
  });
};
var stopConference = function stopConference(state, conference) {
  var _state$conference$dat2;
  if (((_state$conference$dat2 = state.conference.data) == null ? void 0 : _state$conference$dat2.id) !== (conference == null ? void 0 : conference.id)) return state;
  return _extends({}, state, {
    conference: {
      data: null,
      joined: false,
      ringPlayed: false
    }
  });
};
function chatReducer(state, action) {
  var _extends2, _extends3, _extends4;
  switch (action.type) {
    case "SET_GROUP_GATHER":
      return _extends({}, state, {
        groupGather: _extends({}, state.groupGather, (_extends2 = {}, _extends2[action.payload.groupId] = action.payload, _extends2))
      });
    case "SET_CONTACT_GATHER":
      return _extends({}, state, {
        contactGather: _extends({}, state.contactGather, (_extends3 = {}, _extends3[action.payload.userId] = action.payload, _extends3))
      });
    case "DEL_GROUP":
      return delGroup(state, action.payload);
    case "DEL_GROUP_MEMBER":
      return delGroupMember(state, action.payload);
    case "DEL_CONTACT":
      return delContact(state, action.payload.userId);
    case "SET_USER_GATHER":
      return _extends({}, state, {
        userGather: _extends({}, state.userGather, (_extends4 = {}, _extends4[action.payload.userId] = action.payload, _extends4))
      });
    case "UPDATE_ACTIVE_ROOM":
      return _extends({}, state, {
        activeRoom: getActiveRoom(state)
      });
    case "SET_ACTIVE_ROOM":
      return setActiveRoom(state, action.payload);
    case "USER_ONLINE":
      return setUserOnline(state, action.payload, 1);
    case "USER_OFFLINE":
      return setUserOnline(state, action.payload, 0);
    case "ADD_GROUP_MESSAGE":
      return addGroupMessage(state, action.payload);
    case "ADD_PRIVATE_MESSAGE":
      return addPrivateMessage(state, action.payload);
    case "ADD_GROUP_UNREAD_GATHER":
      return groupUnreadGather(state, action.payload, function (x) {
        return (x || 0) + 1;
      });
    case "ADD_CONTACT_UNREAD_GATHER":
      return contactUnreadGather(state, action.payload, function (x) {
        return (x || 0) + 1;
      });
    case "SET_TYPING":
      return _extends({}, state, {
        typing: action.payload
      });
    case "LOSE_GROUP_UNREAD_GATHER":
      return groupUnreadGather(state, action.payload, function () {
        return 0;
      });
    case "LOSE_CONTACT_UNREAD_GATHER":
      return contactUnreadGather(state, action.payload, function () {
        return 0;
      });
    case "REVOKE_MESSAGE":
      return revokeMessage(state, action.payload);
    case "UPDATE_GROUP_INFO":
      return updateGroupInfo(state, action.payload);
    case "UPDATE_USER_INFO":
      return updateUserInfo(state, action.payload);
    case "ADD_GROUP_MEMBER":
      return addGroupMember(state, action.payload);
    case "SET_CONFERENCE":
      return setConference(state, action.payload);
    case "JOIN_CONFERENCE":
      return _extends({}, state, {
        conference: {
          data: _extends({}, action.payload),
          joined: true,
          ringPlayed: false
        }
      });
    case "PAUSE_CONFERENCE":
      return pauseConference(state, action.payload);
    case "STOP_CONFERENCE":
      return stopConference(state, action.payload);
    case "MARK_PRIVATE_MESSAGES_READ":
      return markPrivateMessagesRead(state, action.payload);
    case "ADD_PRIVATE_MESSAGES":
      return addPrivateMessages(state, action.payload);
    case "ADD_GROUP_MESSAGES":
      return addGroupMessages(state, action.payload);
    case "SET_LOADING":
      return _extends({}, state, {
        loading: action.payload,
        error: ""
      });
    case "SET_ERROR":
      return _extends({}, state, {
        error: action.payload,
        success: undefined
      });
    case "SET_SUCCES":
      return _extends({}, state, {
        success: action.payload,
        error: undefined
      });
    case "SET_TOKEN":
      return setToken(state, action.payload);
    case "SET_USER":
      return _extends({}, state, {
        user: action.payload
      });
    case "CLEAR_USER":
      return clearUser(state);
    case "CLEAR_CHAT_DATA":
      return _extends({}, state, {
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
      });
    case "SET_OPERATORS":
      return _extends({}, state, {
        operators: action.payload
      });
    case "SET_VISIT_DATA":
      return _extends({}, state, {
        visitData: action.payload
      });
  }
  return state;
}
var emptyDispatch = function emptyDispatch() {
  return null;
};
var ChatContext = /*#__PURE__*/React__default.createContext({
  state: emptyChatState,
  dispatch: emptyDispatch
});
var ChatProvider = function ChatProvider(props) {
  emptyUser.langCode = props.defLang;
  var token = props.token;
  var refreshToken = props.token;
  var chatState = _extends({}, emptyChatState, {
    token: token,
    refreshToken: refreshToken
  });
  var _React$useReducer = React__default.useReducer(chatReducer, chatState),
    state = _React$useReducer[0],
    dispatch = _React$useReducer[1];
  var value = useMemo(function () {
    return {
      state: state,
      dispatch: dispatch
    };
  }, [state]);
  return /*#__PURE__*/React__default.createElement(ChatContext.Provider, {
    value: value
  }, props.children);
};

var initialContext = {};
var RestContext = /*#__PURE__*/createContext(initialContext);
function clearLocalStorage() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  localStorage.removeItem("doctor");
  localStorage.removeItem("chatUser");
}
function getRefreshToken(_x, _x2, _x3) {
  return _getRefreshToken.apply(this, arguments);
}
function _getRefreshToken() {
  _getRefreshToken = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee4(authToken, refreshToken, baseUrl) {
    var _yield$axios$post, data;
    return runtime_1.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            localStorage.removeItem("authToken");
            localStorage.removeItem("refreshToken");
            _context4.prev = 2;
            _context4.next = 5;
            return axios.post(baseUrl + "/auth/refreshToken", {
              authToken: authToken,
              refreshToken: refreshToken
            });
          case 5:
            _yield$axios$post = _context4.sent;
            data = _yield$axios$post.data;
            localStorage.setItem("authToken", data == null ? void 0 : data.authToken);
            localStorage.setItem("refreshToken", data == null ? void 0 : data.refreshToken);
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](2);
            console.log("ERROR RefreshToken", _context4.t0);
          case 14:
            window.location.reload();
          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 11]]);
  }));
  return _getRefreshToken.apply(this, arguments);
}
var RestProvider = function RestProvider(_ref) {
  var chatBaseURLApi = _ref.chatBaseURLApi,
    pageSize = _ref.pageSize,
    children = _ref.children,
    baseUrl = _ref.baseUrl;
  var _useContext = useContext(ChatContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var errorInterceptor = function errorInterceptor(error) {
    if (state.token && error.response != null && error.response.status === 401) {
      getRefreshToken(state.token, state.refreshToken, baseUrl);
    }
  };
  var fetch = axios.create({
    timeout: 60000,
    baseURL: chatBaseURLApi,
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Authorization: "Bearer " + state.token
    },
    withCredentials: false
  });
  fetch.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log("ERROR AxiosError");
    errorInterceptor(error);
    return Promise.reject(error);
  });
  var getPrivateMessages = useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee(chat, callback) {
      var _chat$messages;
      var contactId, current, _yield$fetch$get, data, err;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contactId = chat.userId;
              current = (_chat$messages = chat.messages) == null ? void 0 : _chat$messages.length;
              _context.prev = 2;
              dispatch({
                type: "SET_LOADING",
                payload: true
              });
              _context.next = 6;
              return fetch.get("/contact/messages", {
                params: {
                  contactId: contactId,
                  current: current,
                  pageSize: pageSize
                }
              });
            case 6:
              _yield$fetch$get = _context.sent;
              data = _yield$fetch$get.data;
              if (data) {
                dispatch({
                  type: "ADD_PRIVATE_MESSAGES",
                  payload: {
                    pageSize: pageSize,
                    contactId: contactId,
                    messages: data
                  }
                });
                if (callback) {
                  callback();
                }
              }
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              err = _context.t0;
              dispatch({
                type: "SET_ERROR",
                payload: err.message
              });
            case 15:
              _context.prev = 15;
              dispatch({
                type: "SET_LOADING",
                payload: false
              });
              return _context.finish(15);
            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11, 15, 18]]);
    }));
    return function (_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }(), [dispatch]);
  var getGroupMessages = useCallback(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee2(chat) {
      var _chat$messages2;
      var groupId, current, _yield$fetch$get2, data, err;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              groupId = chat.groupId;
              current = (_chat$messages2 = chat.messages) == null ? void 0 : _chat$messages2.length;
              _context2.prev = 2;
              dispatch({
                type: "SET_LOADING",
                payload: true
              });
              _context2.next = 6;
              return fetch.get("/group/messages", {
                params: {
                  groupId: groupId,
                  current: current,
                  pageSize: pageSize
                }
              });
            case 6:
              _yield$fetch$get2 = _context2.sent;
              data = _yield$fetch$get2.data;
              if (data) {
                dispatch({
                  type: "ADD_GROUP_MESSAGES",
                  payload: _extends({
                    pageSize: pageSize,
                    groupId: groupId
                  }, data)
                });
              }
              _context2.next = 15;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);
              err = _context2.t0;
              dispatch({
                type: "SET_ERROR",
                payload: err.message
              });
            case 15:
              _context2.prev = 15;
              dispatch({
                type: "SET_LOADING",
                payload: false
              });
              return _context2.finish(15);
            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 11, 15, 18]]);
    }));
    return function (_x6) {
      return _ref3.apply(this, arguments);
    };
  }(), [dispatch]);
  var getUserByMmk = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee3(mmkId, guid) {
      var _yield$fetch$get3, data;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fetch.get("/contact/find", {
                params: {
                  mmkId: mmkId,
                  guid: guid
                }
              });
            case 3:
              _yield$fetch$get3 = _context3.sent;
              data = _yield$fetch$get3.data;
              if (!(data != null)) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", data);
            case 7:
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.log("err getUserByMmk", _context3.t0);
            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function getUserByMmk(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
  var value = useMemo(function () {
    return {
      apiUrl: chatBaseURLApi,
      pageSize: pageSize,
      fetch: fetch,
      getPrivateMessages: getPrivateMessages,
      getGroupMessages: getGroupMessages,
      getUserByMmk: getUserByMmk
    };
  }, [chatBaseURLApi, pageSize]);
  return /*#__PURE__*/React__default.createElement(RestContext.Provider, {
    value: value
  }, children);
};

var useStyles$e = /*#__PURE__*/makeStyles(function (theme) {
  return createStyles({
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
  });
});
var getMessageText = function getMessageText(message, t) {
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
var TypingBadge = /*#__PURE__*/withStyles(function (theme) {
  return createStyles({
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
  });
})(Badge);
var OnlineBadge = /*#__PURE__*/withStyles(function (theme) {
  return createStyles({
    badge: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 0 0 2px " + theme.palette.background.paper
    }
  });
})(Badge);
var contactAvatar = function contactAvatar(apiUrl, contact, typing) {
  var avatar = /*#__PURE__*/React__default.createElement(Avatar, {
    alt: contact.username,
    src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
  });
  var isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId;
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
var RoomListItem = function RoomListItem(props) {
  var classes = useStyles$e();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var apiUrl = props.apiUrl,
    chat = props.chat,
    typing = props.typing;
  var roomName = getChatName(chat);
  var avatar = chat.groupId ? /*#__PURE__*/React__default.createElement(Avatar, {
    alt: roomName,
    className: classes.avatarGroup
  }, /*#__PURE__*/React__default.createElement(GroupIcon, null), " ") : contactAvatar(apiUrl, chat, typing);
  var lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
  var roomText = getMessageText(lastMessage, t);
  var roomTime = lastMessage == null ? void 0 : lastMessage.cdate;
  return /*#__PURE__*/React__default.createElement(ListItemButton, {
    selected: props.active,
    onClick: props.onClick
  }, /*#__PURE__*/React__default.createElement(ListItemAvatar, null, avatar), /*#__PURE__*/React__default.createElement(ListItemText, {
    secondaryTypographyProps: {
      component: "span"
    },
    primary: /*#__PURE__*/React__default.createElement(Box, {
      display: "flex",
      flexDirection: "row"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.main
    }, roomName), /*#__PURE__*/React__default.createElement("span", {
      className: classes.time
    }, formatTime(roomTime))),
    secondary: /*#__PURE__*/React__default.createElement(Box, {
      display: "flex",
      flexDirection: "row"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.main
    }, roomText), chat.unreadCount ? /*#__PURE__*/React__default.createElement(Chip, {
      className: classes.unread,
      component: "span",
      size: "small",
      color: "primary",
      label: chat.unreadCount
    }) : null)
  }));
};

var useStyles$f = /*#__PURE__*/makeStyles(function (theme) {
  return {
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
  };
});
var filterChats = function filterChats(chats, filter) {
  if (!filter) return chats;
  var lowerFilter = filter.toLowerCase();
  return chats.filter(function (chat) {
    return getChatName(chat).toLowerCase().includes(lowerFilter);
  });
};
var sortChats = function sortChats(userId, groups, contacts) {
  var roomArr = [].concat(groups, contacts);
  // Сортировать окно чата (по времени последних сообщений)
  roomArr = roomArr.sort(chatRoomComparer);
  // Проверяем, есть ли список, который нужно закрепить
  var topChatId = localStorage.getItem(userId + "-topChatId");
  if (topChatId) {
    var chat = roomArr.find(function (c) {
      return getChatId(c) === topChatId;
    });
    if (chat) {
      // На первое место
      roomArr = roomArr.filter(function (k) {
        return getChatId(k) !== topChatId;
      });
      chat.isTop = true;
      roomArr.unshift(chat);
    }
  }
  return roomArr;
};
var getRoomList = function getRoomList(userId, groups, contacts, filter) {
  return sortChats(userId, filterChats(groups, filter), filterChats(contacts, filter));
};
var RoomList = function RoomList(_ref) {
  var user = _ref.user,
    activeRoom = _ref.activeRoom,
    groups = _ref.groups,
    contacts = _ref.contacts,
    typing = _ref.typing,
    onChangeChat = _ref.onChangeChat;
  console.log(" -- RoomList -- ");
  var classes = useStyles$f();
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var _useContext = useContext(RestContext),
    apiUrl = _useContext.apiUrl;
  // Add search state
  var _useState = useState(""),
    searchFilter = _useState[0],
    setSearchFilter = _useState[1];
  // Memoize the chat list
  var allContacts = React__default.useMemo(function () {
    return getRoomList(user.userId, groups, contacts, searchFilter);
  }, [user.userId, groups, contacts, searchFilter]);
  var onSearchChange = function onSearchChange(e) {
    setSearchFilter(e.target.value);
  };
  return /*#__PURE__*/React__default.createElement(Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(CardHeader, {
    title: /*#__PURE__*/React__default.createElement(TextField, {
      className: classes.searchField,
      label: t("CHAT.INPUT_SEARCH_CONTACT"),
      variant: "outlined",
      size: "small",
      fullWidth: true,
      onChange: onSearchChange,
      value: searchFilter
    })
  }), /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement(List$1, {
    "aria-label": "rooms",
    className: classes.listStyle
  }, allContacts.map(function (chat) {
    return /*#__PURE__*/React__default.createElement(RoomListItem, {
      key: getChatId(chat),
      apiUrl: apiUrl,
      chat: chat,
      active: chat === activeRoom,
      typing: typing,
      onClick: function onClick() {
        return onChangeChat(chat);
      }
    });
  })));
};

var ChatAlert = function ChatAlert() {
  // const { t } = useTranslation();
  //const [havePermissions, setHavePermissions] = useState(false);
  var _React$useContext = React__default.useContext(ChatContext),
    _React$useContext$sta = _React$useContext.state,
    error = _React$useContext$sta.error,
    success = _React$useContext$sta.success,
    dispatch = _React$useContext.dispatch;
  var handleClose = function handleClose() {
    dispatch({
      type: "SET_ERROR",
      payload: undefined
    });
    dispatch({
      type: "SET_SUCCES",
      payload: undefined
    });
  };
  return /*#__PURE__*/React__default.createElement(Snackbar, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    open: !!error || !!success,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/React__default.createElement(Alert, {
    onClose: handleClose,
    severity: error ? "error" : "success"
  }, error ? error : success));
};

var useStyles$g = /*#__PURE__*/makeStyles(function (theme) {
  var _root;
  return {
    root: (_root = {
      height: "100%",
      overflow: "hidden",
      padding: 0
    }, _root[theme.breakpoints.up("lg")] = {
      minWidth: 1200
    }, _root)
  };
});
var ChatContainer = function ChatContainer(_ref) {
  var children = _ref.children;
  var classes = useStyles$g();
  return /*#__PURE__*/React__default.createElement(Container, {
    maxWidth: false,
    className: classes.root
  }, children);
};

var ChatLayout = function ChatLayout(_ref) {
  var isMobile = _ref.isMobile,
    conferenceActive = _ref.conferenceActive,
    hideRooms = _ref.hideRooms,
    contactsList = _ref.contactsList,
    chatRoom = _ref.chatRoom,
    activeRoom = _ref.activeRoom,
    user = _ref.user,
    onExitRoom = _ref.onExitRoom,
    onChangeChat = _ref.onChangeChat,
    chatOld = _ref.chatOld;
  if (isMobile) {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, conferenceActive && /*#__PURE__*/React__default.createElement(Box, {
      sx: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 1400,
        top: user != null && user.role && [3, 4].includes(user.role) ? -56 : -12,
        left: user != null && user.role && [3, 4].includes(user.role) ? 32 : 218
      }
    }, /*#__PURE__*/React__default.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      columnGap: 3,
      my: 3,
      sx: {
        position: "relative"
      }
    }, /*#__PURE__*/React__default.createElement(IconButton, {
      "aria-label": "exit room",
      sx: {
        color: "#fff",
        background: "#000",
        "&:hover": {
          background: "#eee",
          color: "#000",
          boxShadow: "none"
        }
      },
      onClick: function onClick() {
        if (activeRoom && onExitRoom) onExitRoom(activeRoom);else if (chatOld && onChangeChat) {
          console.log("onChangeChat");
          onChangeChat(chatOld);
        }
      }
    }, activeRoom ? /*#__PURE__*/React__default.createElement(VideocamIcon, null) : /*#__PURE__*/React__default.createElement(RecentActorsIcon, null)))), contactsList, chatRoom);
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Grid2, {
    container: true,
    spacing: 1,
    sx: {
      height: "100%"
    }
  }, (conferenceActive || !hideRooms) && /*#__PURE__*/React__default.createElement(Grid2, {
    size: activeRoom ? {
      sm: conferenceActive ? 6 : 4,
      lg: conferenceActive ? 6 : 4,
      xl: conferenceActive ? 6 : 3
    } : 12,
    sx: {
      height: "100%"
    }
  }, contactsList), activeRoom && /*#__PURE__*/React__default.createElement(Grid2, {
    size: {
      sm: conferenceActive ? 6 : hideRooms ? 12 : 8,
      lg: conferenceActive ? 6 : hideRooms ? 12 : 8,
      xl: conferenceActive ? 6 : hideRooms ? 12 : 9
    },
    sx: {
      height: "100%"
    }
  }, chatRoom)));
};

var CheckAudiVideoPerm = function CheckAudiVideoPerm(_ref) {
  var audio = _ref.audio,
    video = _ref.video;
  var _useTranslation = useTranslation(),
    t = _useTranslation.t;
  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down("md");
  });
  var _React$useContext = React__default.useContext(ChatContext),
    dispatch = _React$useContext.dispatch;
  var checkPermissions = function checkPermissions() {
    var permissions = navigator.mediaDevices.getUserMedia({
      audio: audio,
      video: video
    });
    permissions.then(function (data) {
      console.log("permissions", data);
      dispatch({
        type: "SET_SUCCES",
        payload: t("CHAT.CONFERENCE.ALLOK")
      });
    }).catch(function (err) {
      var payload = t("CHAT.CONFERENCE.ErrorAny");
      if (err.name === "NotFoundError") {
        payload = t("CHAT.CONFERENCE.NotFoundError");
      }
      if (err.name === "NotAllowedError") {
        payload = t("CHAT.CONFERENCE.NotAllowedError");
      }
      dispatch({
        type: "SET_ERROR",
        payload: payload
      });
      //setHavePermissions(false);
      console.log("err", err.name + " : " + err.message);
    });
  };
  var title = audio && video ? t("CHAT.CONFERENCE.CheckCamMic") : audio ? t("CHAT.CONFERENCE.CheckMic") : t("CHAT.CONFERENCE.CheckCam");
  return !isMobile ? /*#__PURE__*/React__default.createElement(Button, {
    "aria-label": "cancel call",
    variant: "contained",
    sx: {
      color: "#fff",
      background: "#000",
      "&:hover": {
        background: "#eee",
        color: "#000",
        boxShadow: "none"
      }
    },
    size: "small",
    startIcon: audio && video ? /*#__PURE__*/React__default.createElement(SettingsSuggestIcon, null) : audio ? /*#__PURE__*/React__default.createElement(SettingsVoiceIcon, null) : /*#__PURE__*/React__default.createElement(VideocamIcon, null),
    onClick: function onClick() {
      return checkPermissions();
    }
  }, title) : /*#__PURE__*/React__default.createElement(Tooltip, {
    title: title
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    sx: {
      color: "#fff",
      background: "#000",
      "&:hover": {
        background: "#eee",
        color: "#000",
        boxShadow: "none"
      }
    },
    "aria-label": "check",
    onClick: function onClick() {
      return checkPermissions();
    },
    size: "large"
  }, audio && video ? /*#__PURE__*/React__default.createElement(SettingsSuggestIcon, null) : audio ? /*#__PURE__*/React__default.createElement(SettingsVoiceIcon, null) : /*#__PURE__*/React__default.createElement(VideocamIcon, null)));
};

var ConferenceControls = function ConferenceControls(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/createElement(Box, {
    sx: function sx(theme) {
      var _ref2;
      return _ref2 = {
        position: "absolute",
        overflow: "hidden",
        top: user != null && user.role && [3, 4].includes(user.role) ? 50 : 110,
        left: user != null && user.role && [3, 4].includes(user.role) ? 50 : 30,
        zIndex: 1000
      }, _ref2[theme.breakpoints.down("sm")] = {
        top: 98,
        left: 26
      }, _ref2;
    }
  }, /*#__PURE__*/createElement(Box, {
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
    my: 3,
    sx: {
      position: "relative"
    }
  }, /*#__PURE__*/createElement(CheckAudiVideoPerm, {
    audio: true,
    video: false
  }), /*#__PURE__*/createElement(CheckAudiVideoPerm, {
    audio: false,
    video: true
  })));
};

var ConferenceSection = function ConferenceSection(_ref) {
  var conference = _ref.conference,
    onClose = _ref.onClose,
    onAccept = _ref.onAccept,
    isMobile = _ref.isMobile,
    user = _ref.user,
    activeRoom = _ref.activeRoom,
    apiUrl = _ref.apiUrl;
  if (!conference.data) return null;
  if (conference.joined) {
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Conference, {
      conference: conference.data,
      onClose: onClose,
      langCode: user.langCode
    }), (!activeRoom && isMobile || !isMobile) && /*#__PURE__*/createElement(ConferenceControls, {
      user: user
    }));
  }
  return /*#__PURE__*/createElement(ConferenceCall, {
    apiUrl: apiUrl,
    contact: user.userId === conference.data.userId ? conference.data.contactId : conference.data.userId,
    conference: conference.data,
    onAccept: onAccept
  });
};

var useSocket = function useSocket(url, path, accessToken) {
  var _useState = useState(null),
    socket = _useState[0],
    setSocket = _useState[1];
  var connectSocket = useCallback(function () {
    // console.log("do connect");
    var socketTemp = io(url, {
      path: path,
      reconnection: true,
      extraHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });
    setSocket(socketTemp);
  }, [url, path, accessToken]);
  var disconnectSocket = useCallback(function () {
    // console.log("do disconnect");
    socket == null ? void 0 : socket.disconnect();
    setSocket(null);
  }, [socket]);
  var _useState2 = useState(false),
    online = _useState2[0],
    setOnline = _useState2[1];
  useEffect(function () {
    setOnline(socket != null && socket.connected ? true : false);
  }, [socket]);
  useEffect(function () {
    socket == null ? void 0 : socket.on("connect", function () {
      // console.log("connected");
      setOnline(true);
      socket.emit("chatData");
    });
  }, [socket]);
  useEffect(function () {
    socket == null ? void 0 : socket.on("disconnect", function () {
      // console.log("disconnected");
      setOnline(false);
    });
  }, [socket]);
  return {
    socket: socket,
    online: online,
    disconnectSocket: disconnectSocket,
    connectSocket: connectSocket
  };
};

var initialContext$1 = {
  online: false
};
var SocketContext = /*#__PURE__*/createContext(initialContext$1);
var SocketProvider = function SocketProvider(_ref) {
  var _state$activeRoom2, _state$activeRoom3;
  var wsUrl = _ref.wsUrl,
    wsPath = _ref.wsPath,
    baseUrl = _ref.baseUrl,
    children = _ref.children;
  var _useContext = useContext(ChatContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var _useSocket = useSocket(wsUrl, wsPath, state.token),
    socket = _useSocket.socket,
    online = _useSocket.online,
    disconnectSocket = _useSocket.disconnectSocket,
    connectSocket = _useSocket.connectSocket;
  useEffect(function () {
    if (state.token) {
      connectSocket();
    }
    if (!state.token) disconnectSocket();
    return function () {
      disconnectSocket();
    };
  }, [state.token]);
  // Consider creating a reusable error handler
  var handleSocketError = function handleSocketError(res, dispatch) {
    if (res.code) {
      dispatch({
        type: "SET_ERROR",
        payload: res.msg
      });
      return true;
    }
    return false;
  };
  useEffect(function () {
    // listen unauthorized event
    var listener = function listener(msg) {
      console.log("unauthorized msg", msg);
      getRefreshToken(state.token, state.refreshToken, baseUrl);
    };
    socket == null ? void 0 : socket.on("unauthorized", listener);
    // listen chatData event
    var listener1 = function listener1(res) {
      if (handleSocketError(res, dispatch)) return;
      var payload = res.data;
      var groupArr = payload.groupData;
      var contactArr = payload.contactData;
      var userArr = payload.userData;
      dispatch({
        type: "CLEAR_CHAT_DATA"
      });
      dispatch({
        type: "SET_USER",
        payload: payload.user
      });
      if (groupArr.length) {
        for (var _iterator = _createForOfIteratorHelperLoose(groupArr), _step; !(_step = _iterator()).done;) {
          var group = _step.value;
          socket == null ? void 0 : socket.emit("joinGroupSocket", {
            groupId: group.groupId
          });
          dispatch({
            type: "SET_GROUP_GATHER",
            payload: group
          });
        }
      }
      if (contactArr.length) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(contactArr), _step2; !(_step2 = _iterator2()).done;) {
          var contact = _step2.value;
          socket == null ? void 0 : socket.emit("joinPrivateSocket", {
            contactId: contact.userId
          });
          dispatch({
            type: "SET_CONTACT_GATHER",
            payload: contact
          });
        }
      }
      dispatch({
        type: "SET_OPERATORS",
        payload: payload.operatorData
      });
      if (userArr.length) {
        for (var _iterator3 = _createForOfIteratorHelperLoose(userArr), _step3; !(_step3 = _iterator3()).done;) {
          var user_ = _step3.value;
          dispatch({
            type: "SET_USER_GATHER",
            payload: user_
          });
        }
      }
      dispatch({
        type: "UPDATE_ACTIVE_ROOM"
      });
      dispatch({
        type: "SET_CONFERENCE",
        payload: payload.conferenceData
      });
      dispatch({
        type: "SET_VISIT_DATA",
        payload: payload.visitData
      });
    };
    socket == null ? void 0 : socket.on("chatData", listener1);
    // listen user online
    var listener2 = function listener2(res) {
      dispatch({
        type: "USER_ONLINE",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("userOnline", listener2);
    // listen user offline
    var listener3 = function listener3(res) {
      dispatch({
        type: "USER_OFFLINE",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("userOffline", listener3);
    // listen private socket join
    var listener4 = function listener4(res) {
      if (handleSocketError(res, dispatch)) return;
      console.log("Успешно вошел в приватный чат");
    };
    socket == null ? void 0 : socket.on("joinPrivateSocket", listener4);
    // typing
    var typingTimer;
    var listener5 = function listener5(res) {
      if (handleSocketError(res, dispatch)) return;
      if (typingTimer) clearTimeout(typingTimer);
      dispatch({
        type: "SET_TYPING",
        payload: res.data
      });
      typingTimer = setTimeout(function () {
        dispatch({
          type: "SET_TYPING",
          payload: null
        });
      }, 1000);
    };
    socket == null ? void 0 : socket.on("typing", listener5);
    // revoke
    var listener6 = function listener6(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      dispatch({
        type: "REVOKE_MESSAGE",
        payload: data
      });
      console.log("REVOKE_MESSAGE");
    };
    socket == null ? void 0 : socket.on("revokeMessage", listener6);
    // set group gather
    var listener7 = function listener7(res) {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "SET_GROUP_GATHER",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("addGroup", listener7);
    // set contact gather, user gather
    var listener8 = function listener8(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      dispatch({
        type: "SET_CONTACT_GATHER",
        payload: data
      });
      dispatch({
        type: "SET_USER_GATHER",
        payload: data
      });
      socket == null ? void 0 : socket.emit("joinPrivateSocket", {
        contactId: data.userId
      });
    };
    socket == null ? void 0 : socket.on("addContact", listener8);
    // delete contact
    var listener10 = function listener10(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      dispatch({
        type: "DEL_CONTACT",
        payload: data
      });
    };
    socket == null ? void 0 : socket.on("deleteContact", listener10);
    // update GroupInfo
    var listener11 = function listener11(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      dispatch({
        type: "UPDATE_GROUP_INFO",
        payload: data
      });
    };
    socket == null ? void 0 : socket.on("updateGroupInfo", listener11);
    // update UserInfo
    var listener12 = function listener12(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      dispatch({
        type: "UPDATE_USER_INFO",
        payload: data
      });
    };
    socket == null ? void 0 : socket.on("updateUserInfo", listener12);
    // start Conference
    var listener13 = function listener13(res) {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "SET_CONFERENCE",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("startConference", listener13);
    // pause Conference
    var listener14 = function listener14(res) {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "PAUSE_CONFERENCE",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("pauseConference", listener14);
    // stop Conference
    var listener15 = function listener15(res) {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "STOP_CONFERENCE",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("stopConference", listener15);
    // add Operator
    var listener16 = function listener16(res) {
      if (handleSocketError(res, dispatch)) return;
    };
    socket == null ? void 0 : socket.on("addOperator", listener16);
    // set ActiveRoom
    var listener17 = function listener17(res) {
      if (handleSocketError(res, dispatch)) return;
      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: res.data
      });
    };
    socket == null ? void 0 : socket.on("setActiveRoom", listener17);
    // visit Data
    var listener18 = function listener18(res) {
      if (handleSocketError(res, dispatch)) return;
      var payload = res.data;
      dispatch({
        type: "SET_VISIT_DATA",
        payload: payload.visitData
      });
    };
    socket == null ? void 0 : socket.on("visitData", listener18);
    return function () {
      // detach
      socket == null ? void 0 : socket.off("unauthorized", listener);
      socket == null ? void 0 : socket.off("chatData", listener1);
      socket == null ? void 0 : socket.off("userOnline", listener2);
      socket == null ? void 0 : socket.off("userOffline", listener3);
      socket == null ? void 0 : socket.off("joinPrivateSocket", listener4);
      if (typingTimer) clearTimeout(typingTimer);
      socket == null ? void 0 : socket.off("typing", listener5);
      socket == null ? void 0 : socket.off("revokeMessage", listener6);
      socket == null ? void 0 : socket.off("addGroup", listener7);
      socket == null ? void 0 : socket.off("addContact", listener8);
      socket == null ? void 0 : socket.off("deleteContact", listener10);
      socket == null ? void 0 : socket.off("updateGroupInfo", listener11);
      socket == null ? void 0 : socket.off("updateUserInfo", listener12);
      socket == null ? void 0 : socket.off("startConference", listener13);
      socket == null ? void 0 : socket.off("pauseConference", listener14);
      socket == null ? void 0 : socket.off("stopConference", listener15);
      socket == null ? void 0 : socket.off("addOperator", listener16);
      socket == null ? void 0 : socket.off("setActiveRoom", listener17);
      socket == null ? void 0 : socket.off("visitData", listener18);
    };
  }, [socket == null ? void 0 : socket.id]);
  // group Message
  useEffect(function () {
    var listener = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee(res) {
        var data;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!handleSocketError(res, dispatch)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                data = res.data;
                dispatch({
                  type: "ADD_GROUP_MESSAGE",
                  payload: data
                });
                if (data.userId !== state.user.userId) {
                  socket == null ? void 0 : socket.emit("markAsRead", {
                    groupId: data.groupId,
                    _id: data._id
                  });
                }
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function listener(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    socket == null ? void 0 : socket.on("groupMessage", listener);
    // private Message
    var listener1 = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee2(res) {
        var data, _state$activeRoom;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!handleSocketError(res, dispatch)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                data = res.data;
                if (data.contactId === state.user.userId || data.userId === state.user.userId) {
                  dispatch({
                    type: "ADD_PRIVATE_MESSAGE",
                    payload: data
                  });
                  // если есть активная комната и это приватная комната (!groupId && userId) с отправителем сообщения (userId)
                  if (state.activeRoom && ((_state$activeRoom = state.activeRoom) == null ? void 0 : _state$activeRoom.userId) === data.userId) {
                    socket == null ? void 0 : socket.emit("markAsRead", {
                      contactId: data.userId,
                      _id: data._id
                    });
                  }
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function listener1(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    socket == null ? void 0 : socket.on("privateMessage", listener1);
    return function () {
      socket == null ? void 0 : socket.off("groupMessage", listener);
      socket == null ? void 0 : socket.off("privateMessage", listener1);
    };
  }, [socket == null ? void 0 : socket.id, (_state$activeRoom2 = state.activeRoom) == null ? void 0 : _state$activeRoom2.userId, (_state$activeRoom3 = state.activeRoom) == null ? void 0 : _state$activeRoom3.groupId]);
  useEffect(function () {
    // mark As Read
    var listener = function listener(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      if (data.userId === state.user.userId) {
        if (data.groupId) {
          dispatch({
            type: "LOSE_GROUP_UNREAD_GATHER",
            payload: data.groupId
          });
        } else {
          dispatch({
            type: "LOSE_CONTACT_UNREAD_GATHER",
            payload: data.contactId
          });
        }
      } else {
        if (data.contactId) dispatch({
          type: "MARK_PRIVATE_MESSAGES_READ",
          payload: data.userId
        });
      }
    };
    socket == null ? void 0 : socket.on("markAsRead", listener);
    // delete Group
    var listener1 = function listener1(res) {
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      if (data.userId === state.user.userId) {
        // если удаляем себя из группы
        dispatch({
          type: "DEL_GROUP",
          payload: data.groupId
        });
      } else {
        dispatch({
          type: "DEL_GROUP_MEMBER",
          payload: data
        });
      }
    };
    socket == null ? void 0 : socket.on("deleteGroup", listener1);
    var listener2 = function listener2(res) {
      if (handleSocketError(res, dispatch)) return;
      var _res$data = res.data,
        group = _res$data.group,
        newUser = _res$data.user;
      if (!state.groupGather[group.groupId]) {
        console.log("joined to a new group");
        // Если группы еще у нас нет, то получаем информацию о пользователях в группе
        socket == null ? void 0 : socket.emit("chatData");
      } else if (newUser.userId !== state.user.userId) {
        // Новые пользователи присоединяются к группе
        dispatch({
          type: "ADD_GROUP_MEMBER",
          payload: {
            groupId: group.groupId,
            members: [newUser]
          }
        });
      }
    };
    socket == null ? void 0 : socket.on("joinGroup", listener2);
    // listen group socket join
    var listener4 = function listener4(res) {
      var _groupObj$members;
      if (handleSocketError(res, dispatch)) return;
      var data = res.data;
      var newUser = data.user;
      newUser.online = 1;
      var group = data.group;
      var groupObj = state.groupGather[group.groupId];
      // Информация о присоединении к группе новых пользователей
      if (groupObj && !((_groupObj$members = groupObj.members) != null && _groupObj$members.find(function (member) {
        return member.userId === newUser.userId;
      }))) {
        var _groupObj$members2;
        newUser.isManager = 0;
        (_groupObj$members2 = groupObj.members) == null ? void 0 : _groupObj$members2.push(newUser);
        // Vue.prototype.$message.info(res.msg);
      }
      dispatch({
        type: "SET_USER_GATHER",
        payload: newUser
      });
    };
    socket == null ? void 0 : socket.on("joinGroupSocket", listener4);
    return function () {
      socket == null ? void 0 : socket.off("markAsRead", listener);
      socket == null ? void 0 : socket.off("deleteGroup", listener1);
      socket == null ? void 0 : socket.off("joinGroup", listener2);
      socket == null ? void 0 : socket.off("joinGroupSocket", listener4);
    };
  }, [socket == null ? void 0 : socket.id, state.user.userId, allGather(state.groupGather)]);
  var value = useMemo(function () {
    return {
      socket: socket,
      online: online
    };
  }, [socket, online]);
  return /*#__PURE__*/React__default.createElement(SocketContext.Provider, {
    value: value
  }, children);
};

var _excluded$1 = ["activeGroupId", "activeChatUserId", "hideRooms", "fullWidth"];
// Отключили проигрыш звука
// const getRingAudio = (): HTMLAudioElement => {
//   const audio = new Audio(
//     process.env.PUBLIC_URL + '/audio/ring-in.ogg',
//   );
//   audio.loop = true;
//   return audio;
// };
// Add at the top of the file after imports
var ChatPage = function ChatPage(_ref) {
  var _state$conference$dat, _state$conference$dat2;
  var activeGroupId = _ref.activeGroupId,
    activeChatUserId = _ref.activeChatUserId,
    _ref$hideRooms = _ref.hideRooms,
    hideRooms = _ref$hideRooms === void 0 ? false : _ref$hideRooms,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down("md");
  });
  // Update context usage
  var _React$useContext = useContext(ChatContext),
    state = _React$useContext.state,
    dispatch = _React$useContext.dispatch;
  var _React$useContext2 = useContext(SocketContext),
    socket = _React$useContext2.socket;
  var _React$useContext3 = useContext(RestContext),
    apiUrl = _React$useContext3.apiUrl,
    pageSize = _React$useContext3.pageSize,
    getPrivateMessages = _React$useContext3.getPrivateMessages,
    getGroupMessages = _React$useContext3.getGroupMessages,
    getUserByMmk = _React$useContext3.getUserByMmk;
  // const [ringAudio] = React.useState(getRingAudio());
  var onExitActiveRoom = useCallback(function () {
    dispatch({
      type: "SET_ACTIVE_ROOM",
      payload: {}
    });
  }, [dispatch]);
  // Добавляем утилитарную функцию для безопасной отправки сообщений через сокет
  var emitSocketEvent = useCallback(function (eventName, data) {
    if (!socket) {
      console.warn("Socket not connected, cannot emit " + eventName);
      return;
    }
    try {
      socket.emit(eventName, data);
    } catch (error) {
      console.error("Error emitting " + eventName + ":", error);
      dispatch({
        type: "SET_ERROR",
        payload: "Failed to send " + eventName
      });
    }
  }, [socket, dispatch]);
  var onNeedMoreMessages = useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee(chat) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch({
                type: "SET_LOADING",
                payload: true
              });
              if (!isGroup(chat)) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return getGroupMessages(chat);
            case 5:
              _context.next = 9;
              break;
            case 7:
              _context.next = 9;
              return getPrivateMessages(chat);
            case 9:
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error("Failed to load messages:", _context.t0);
              dispatch({
                type: "SET_ERROR",
                payload: "Failed to load messages"
              });
            case 15:
              _context.prev = 15;
              dispatch({
                type: "SET_LOADING",
                payload: false
              });
              return _context.finish(15);
            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11, 15, 18]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [getPrivateMessages, getGroupMessages, dispatch]);
  var onMessageDelete = useCallback(function (chat, message) {
    emitSocketEvent("revokeMessage", {
      groupId: isGroup(chat) ? chat.groupId : undefined,
      contactId: chat.userId,
      _id: message._id
    });
  }, [emitSocketEvent]);
  var onTyping = useCallback(function (chat) {
    emitSocketEvent("typing", {
      groupId: isGroup(chat) ? chat.groupId : undefined,
      contactId: chat.userId
    });
  }, [emitSocketEvent]);
  var onSendMessage = useCallback(function (chat, data) {
    var baseMessage = {
      content: data.message,
      width: data.width,
      height: data.height,
      fileName: data.fileName,
      messageType: data.messageType,
      size: data.size
    };
    if (isGroup(chat)) {
      emitSocketEvent("groupMessage", _extends({}, baseMessage, {
        groupId: chat.groupId
      }));
    } else {
      emitSocketEvent("privateMessage", _extends({}, baseMessage, {
        contactId: chat.userId
      }));
    }
  }, [emitSocketEvent]);
  // Обновляем onEnterRoom для безопасного доступа к данным
  var onEnterRoom = useCallback(function (chat) {
    var _chat$messages;
    if (!(chat != null && (_chat$messages = chat.messages) != null && _chat$messages.length) || !socket) return;
    try {
      var lastMessage = chat.messages[chat.messages.length - 1];
      if (!(lastMessage != null && lastMessage._id)) return;
      if (isGroup(chat)) {
        socket.emit("markAsRead", {
          groupId: chat.groupId,
          _id: lastMessage._id
        });
        //} else if (chat.userId === lastMessage.userId) {
      } else {
        dispatch({
          type: "MARK_PRIVATE_MESSAGES_READ",
          payload: chat.userId
        });
        socket.emit("markAsRead", {
          contactId: chat.userId,
          _id: lastMessage._id
        });
      }
    } catch (error) {
      console.error("Error marking messages as read:", error);
      dispatch({
        type: "SET_ERROR",
        payload: "Failed to mark messages as read"
      });
    }
  }, [socket, dispatch]);
  // Обновляем функцию onChangeChat
  var onChangeChat = useCallback(function (chat) {
    if (!chat) return;
    try {
      // Устанавливаем активную комнату
      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: {
          groupId: isGroup(chat) ? chat.groupId : undefined,
          contactId: chat == null ? void 0 : chat.userId
        }
      });
      // Помечаем сообщения как прочитанные
      onEnterRoom(chat);
    } catch (error) {
      console.error("Error changing chat:", error);
      dispatch({
        type: "SET_ERROR",
        payload: "Failed to change chat room"
      });
    }
  }, [dispatch, onEnterRoom, socket] // Добавляем socket в зависимости
  );
  var onVideoCall = useCallback(function (chat, visitId, recreate) {
    emitSocketEvent("startConference", {
      groupId: isGroup(chat) ? chat.groupId : undefined,
      contactId: chat.userId,
      visitId: visitId,
      recreate: recreate
    });
  }, [emitSocketEvent]);
  var onVideoEnd = useCallback(function (conference) {
    if (conference != null && conference.id) {
      emitSocketEvent("stopConference", {
        id: conference.id
      });
    }
  }, [emitSocketEvent]);
  var onConferencePause = useCallback(function (conference) {
    if (conference != null && conference.id) {
      emitSocketEvent("pauseConference", {
        id: conference.id
      });
    }
  }, [emitSocketEvent]);
  var onConferenceCallAccept = useCallback(function (conference) {
    if (conference != null && conference.id) {
      emitSocketEvent("resumeConference", {
        id: conference.id
      });
      dispatch({
        type: "JOIN_CONFERENCE",
        payload: conference
      });
    }
  }, [emitSocketEvent, dispatch]);
  var onOperatorAdd = useCallback(function (group, operator) {
    emitSocketEvent("addOperator", {
      groupId: group.groupId,
      operatorId: operator.userId
    });
  }, [emitSocketEvent]);
  var onLeaveGroup = useCallback(function (group) {
    emitSocketEvent("deleteGroup", {
      groupId: group.groupId
    });
  }, [emitSocketEvent]);
  // First useEffect for initialization
  useEffect(function () {
    var mounted = true;
    var initializeChat = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/runtime_1.mark(function _callee2() {
        var onlyChat, chat, mmkId, guid, userId, _chat;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(activeGroupId != null && !isEmpty(state.groupGather))) {
                  _context2.next = 5;
                  break;
                }
                onlyChat = Object.values(state.groupGather).find(function (item) {
                  return item.groupId === activeGroupId;
                });
                if (!(!isEmpty(onlyChat) && mounted)) {
                  _context2.next = 5;
                  break;
                }
                onChangeChat(onlyChat);
                return _context2.abrupt("return");
              case 5:
                if (!(activeChatUserId != null && !isEmpty(state.contactGather))) {
                  _context2.next = 10;
                  break;
                }
                chat = Object.values(state.contactGather).find(function (item) {
                  return item.userId === activeChatUserId;
                });
                if (!(chat && mounted)) {
                  _context2.next = 10;
                  break;
                }
                onChangeChat(chat);
                return _context2.abrupt("return");
              case 10:
                mmkId = getParam("mmk");
                guid = getParam("guid");
                if (!((mmkId != null || guid != null) && !isEmpty(state.contactGather))) {
                  _context2.next = 27;
                  break;
                }
                _context2.prev = 13;
                _context2.next = 16;
                return getUserByMmk(mmkId, guid);
              case 16:
                userId = _context2.sent;
                if (!(userId != null)) {
                  _context2.next = 22;
                  break;
                }
                _chat = Object.values(state.contactGather).find(function (item) {
                  return item.userId === userId;
                });
                if (!(_chat && mounted)) {
                  _context2.next = 22;
                  break;
                }
                onChangeChat(_chat);
                return _context2.abrupt("return");
              case 22:
                _context2.next = 27;
                break;
              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](13);
                console.error("Failed to get user by MMK:", _context2.t0);
              case 27:
                return _context2.abrupt("return", function () {
                  mounted = false;
                });
              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[13, 24]]);
      }));
      return function initializeChat() {
        return _ref3.apply(this, arguments);
      };
    }();
    initializeChat();
    return function () {
      mounted = false;
    };
  }, [state.user.userId]);
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
  // console.log("--state--", state);
  var renderRoom = state.activeRoom != null && /*#__PURE__*/createElement(Room, {
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
    onMessageDelete: onMessageDelete,
    onTyping: onTyping,
    onSendMessage: onSendMessage,
    onVideoCall: onVideoCall,
    onVideoEnd: onVideoEnd,
    onConferencePause: onConferencePause,
    onOperatorAdd: onOperatorAdd,
    onLeaveGroup: onLeaveGroup,
    onContactClick: props.onContactInfoClick,
    isMobile: isMobile
  });
  return /*#__PURE__*/createElement(ChatContainer, null, /*#__PURE__*/createElement(ChatLayout, {
    isMobile: isMobile,
    conferenceActive: !!((_state$conference$dat = state.conference.data) != null && _state$conference$dat.id),
    hideRooms: hideRooms,
    contactsList: ((_state$conference$dat2 = state.conference.data) == null ? void 0 : _state$conference$dat2.id) != null && activeGroupId == null ? /*#__PURE__*/createElement(ConferenceSection, {
      conference: state.conference,
      onClose: onConferencePause,
      onAccept: onConferenceCallAccept,
      user: state.user,
      activeRoom: state.activeRoom,
      onChangeChat: onChangeChat,
      apiUrl: apiUrl,
      isMobile: isMobile
    }) : /*#__PURE__*/createElement(RoomList, {
      user: state.user,
      activeRoom: state.activeRoom,
      groups: Object.values(state.groupGather),
      contacts: Object.values(state.contactGather),
      typing: state.typing,
      onChangeChat: onChangeChat
    }),
    chatRoom: renderRoom,
    activeRoom: state.activeRoom,
    user: state.user,
    onExitRoom: onExitActiveRoom,
    onChangeChat: onChangeChat,
    chatOld: state.chatOld
  }), /*#__PURE__*/createElement(ChatAlert, null));
};

var isString = function isString(obj) {
  return typeof obj === 'string';
};
var defer = function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
var makeString = function makeString(object) {
  if (object == null) return '';
  return '' + object;
};
var copy = function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = function cleanKey(key) {
  return key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
};
var canNotTraverseDeeper = function canNotTraverseDeeper(object) {
  return !object || isString(object);
};
var getLastOfPath = function getLastOfPath(object, path, Empty) {
  var stack = !isString(path) ? path : path.split('.');
  var stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    var key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
var setPath = function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
    obj = _getLastOfPath.obj,
    k = _getLastOfPath.k;
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  var e = path[path.length - 1];
  var p = path.slice(0, path.length - 1);
  var last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = p[p.length - 1] + "." + e;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last && last.obj && typeof last.obj[last.k + "." + e] !== 'undefined') {
      last.obj = undefined;
    }
  }
  last.obj[last.k + "." + e] = newValue;
};
var pushPath = function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
    obj = _getLastOfPath2.obj,
    k = _getLastOfPath2.k;
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
var getPath = function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
    obj = _getLastOfPath3.obj,
    k = _getLastOfPath3.k;
  if (!obj) return undefined;
  return obj[k];
};
var getPathWithDefaults = function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
};
var deepExtend = function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
var regexEscape = function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
var escape = function escape(data) {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }
  return data;
};
var RegExpCache = /*#__PURE__*/function () {
  function RegExpCache(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  var _proto = RegExpCache.prototype;
  _proto.getRegExp = function getRegExp(pattern) {
    var regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    var regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  };
  return RegExpCache;
}();
var chars = [' ', ',', '?', '!', ';'];
var looksLikeObjectPathRegExpCache = /*#__PURE__*/new RegExpCache(20);
var looksLikeObjectPath = function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = looksLikeObjectPathRegExpCache.getRegExp("(" + possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|') + ")");
  var matched = !r.test(key);
  if (!matched) {
    var ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
var deepFind = function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var tokens = path.split(keySeparator);
  var current = obj;
  for (var i = 0; i < tokens.length;) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    var next = void 0;
    var nextPath = '';
    for (var j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
var getCleanedCode = function getCleanedCode(code) {
  return code && code.replace('_', '-');
};
var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
var Logger = /*#__PURE__*/function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  var _proto2 = Logger.prototype;
  _proto2.init = function init(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  };
  _proto2.log = function log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, 'log', '', true);
  };
  _proto2.warn = function warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, 'warn', '', true);
  };
  _proto2.error = function error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, 'error', '');
  };
  _proto2.deprecate = function deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  };
  _proto2.forward = function forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = "" + prefix + this.prefix + " " + args[0];
    return this.logger[lvl](args);
  };
  _proto2.create = function create(moduleName) {
    return new Logger(this.logger, _extends({}, {
      prefix: this.prefix + ":" + moduleName + ":"
    }, this.options));
  };
  _proto2.clone = function clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  };
  return Logger;
}();
var baseLogger = /*#__PURE__*/new Logger();
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    this.observers = {};
  }
  var _proto3 = EventEmitter.prototype;
  _proto3.on = function on(events, listener) {
    var _this4 = this;
    events.split(' ').forEach(function (event) {
      if (!_this4.observers[event]) _this4.observers[event] = new Map();
      var numListeners = _this4.observers[event].get(listener) || 0;
      _this4.observers[event].set(listener, numListeners + 1);
    });
    return this;
  };
  _proto3.off = function off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  };
  _proto3.emit = function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      var cloned = Array.from(this.observers[event].entries());
      cloned.forEach(function (_ref) {
        var observer = _ref[0],
          numTimesAdded = _ref[1];
        for (var i = 0; i < numTimesAdded; i++) {
          observer.apply(void 0, args);
        }
      });
    }
    if (this.observers['*']) {
      var _cloned = Array.from(this.observers['*'].entries());
      _cloned.forEach(function (_ref2) {
        var observer = _ref2[0],
          numTimesAdded = _ref2[1];
        for (var i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event].concat(args));
        }
      });
    }
  };
  return EventEmitter;
}();
var ResourceStore = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(ResourceStore, _EventEmitter);
  function ResourceStore(data) {
    var _this5;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    _this5 = _EventEmitter.call(this) || this;
    _this5.data = data || {};
    _this5.options = options;
    if (_this5.options.keySeparator === undefined) {
      _this5.options.keySeparator = '.';
    }
    if (_this5.options.ignoreJSONStructure === undefined) {
      _this5.options.ignoreJSONStructure = true;
    }
    return _this5;
  }
  var _proto4 = ResourceStore.prototype;
  _proto4.addNamespaces = function addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  };
  _proto4.removeNamespaces = function removeNamespaces(ns) {
    var index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  };
  _proto4.getResource = function getResource(lng, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    var path;
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          var _path;
          (_path = path).push.apply(_path, key);
        } else if (isString(key) && keySeparator) {
          var _path2;
          (_path2 = path).push.apply(_path2, key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    var result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf('.') > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join('.');
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  };
  _proto4.addResource = function addResource(lng, ns, key, value) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      silent: false
    };
    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    var path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  };
  _proto4.addResources = function addResources(lng, ns, resources) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      silent: false
    };
    for (var m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  };
  _proto4.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    var path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    var pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = _extends({}, pack, resources);
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  };
  _proto4.removeResourceBundle = function removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  };
  _proto4.hasResourceBundle = function hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  };
  _proto4.getResourceBundle = function getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === 'v1') return _extends({}, {}, this.getResource(lng, ns));
    return this.getResource(lng, ns);
  };
  _proto4.getDataByLanguage = function getDataByLanguage(lng) {
    return this.data[lng];
  };
  _proto4.hasLanguageSomeTranslations = function hasLanguageSomeTranslations(lng) {
    var data = this.getDataByLanguage(lng);
    var n = data && Object.keys(data) || [];
    return !!n.find(function (v) {
      return data[v] && Object.keys(data[v]).length > 0;
    });
  };
  _proto4.toJSON = function toJSON() {
    return this.data;
  };
  return ResourceStore;
}(EventEmitter);
var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this6 = this;
    processors.forEach(function (processor) {
      if (_this6.processors[processor]) value = _this6.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
var checkedLoadedFor = {};
var Translator = /*#__PURE__*/function (_EventEmitter2) {
  _inheritsLoose(Translator, _EventEmitter2);
  function Translator(services) {
    var _this7;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _this7 = _EventEmitter2.call(this) || this;
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this7));
    _this7.options = options;
    if (_this7.options.keySeparator === undefined) {
      _this7.options.keySeparator = '.';
    }
    _this7.logger = baseLogger.create('translator');
    return _this7;
  }
  var _proto5 = Translator.prototype;
  _proto5.changeLanguage = function changeLanguage(lng) {
    if (lng) this.language = lng;
  };
  _proto5.exists = function exists(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    if (key === undefined || key === null) {
      return false;
    }
    var resolved = this.resolve(key, options);
    return resolved && resolved.res !== undefined;
  };
  _proto5.extractFromKey = function extractFromKey(key, options) {
    var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    var namespaces = options.ns || this.options.defaultNS || [];
    var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      var m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key: key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      var parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key: key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  };
  _proto5.translate = function translate(keys, options, lastKey) {
    var _this8 = this;
    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === 'object') options = _extends({}, options);
    if (!options) options = {};
    if (keys === undefined || keys === null) return '';
    if (!Array.isArray(keys)) keys = [String(keys)];
    var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
      key = _this$extractFromKey.key,
      namespaces = _this$extractFromKey.namespaces;
    var namespace = namespaces[namespaces.length - 1];
    var lng = options.lng || this.language;
    var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        var nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: "" + namespace + nsSeparator + key,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return "" + namespace + nsSeparator + key;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    var resolved = this.resolve(keys, options);
    var res = resolved && resolved.res;
    var resUsedKey = resolved && resolved.usedKey || key;
    var resExactUsedKey = resolved && resolved.exactUsedKey || key;
    var resType = Object.prototype.toString.apply(res);
    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
    var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    var handleAsObject = !isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _extends({}, options, {
          ns: namespaces
        })) : "key '" + key + " (" + this.language + ")' returned an object instead of string.";
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        var resTypeIsArray = Array.isArray(res);
        var _copy = resTypeIsArray ? [] : {};
        var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (var m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            var deepKey = "" + newKeyToUse + keySeparator + m;
            _copy[m] = this.translate(deepKey, _extends({}, options, {
              joinArrays: false,
              ns: namespaces
            }));
            if (_copy[m] === deepKey) _copy[m] = res[m];
          }
        }
        res = _copy;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      var usedDefault = false;
      var usedKey = false;
      var needsPluralHandling = options.count !== undefined && !isString(options.count);
      var hasDefaultValue = Translator.hasDefaultValue(options);
      var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
      var defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : '';
      var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      var defaultValue = needsZeroSuffixLookup && options["defaultValue" + this.options.pluralSeparator + "zero"] || options["defaultValue" + defaultValueSuffix] || options["defaultValue" + defaultValueSuffixOrdinalFallback] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          var fk = this.resolve(key, _extends({}, options, {
            keySeparator: false
          }));
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        var lngs = [];
        var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (var i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        var send = function send(l, k, specificDefaultValue) {
          var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (_this8.options.missingKeyHandler) {
            _this8.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (_this8.backendConnector && _this8.backendConnector.saveMissing) {
            _this8.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          _this8.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(function (language) {
              var suffixes = _this8.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options["defaultValue" + _this8.options.pluralSeparator + "zero"] && suffixes.indexOf(_this8.options.pluralSeparator + "zero") < 0) {
                suffixes.push(_this8.options.pluralSeparator + "zero");
              }
              suffixes.forEach(function (suffix) {
                send([language], key + suffix, options["defaultValue" + suffix] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ":" + key;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== 'v1') {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? namespace + ":" + key : key, usedDefault ? res : undefined);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  };
  _proto5.extendTranslation = function extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, _extends({}, this.options.interpolation.defaultVariables, options), options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved: resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init(_extends({}, options, {
        interpolation: _extends({}, this.options.interpolation, options.interpolation)
      }));
      var skipOnVariables = isString(res) && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      var nestBef;
      if (skipOnVariables) {
        var nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      var data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = _extends({}, this.options.interpolation.defaultVariables, data);
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        var na = res.match(this.interpolator.nestingRegexp);
        var nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== 'v1' && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn("It seems you are nesting recursively key: " + args[0] + " in key: " + key[0]);
          return null;
        }
        return _this.translate.apply(_this, args.concat([key]));
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    var postProcess = options.postProcess || this.options.postProcess;
    var postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _extends({
        i18nResolved: _extends({}, resolved, {
          usedParams: this.getUsedParamsDetails(options)
        })
      }, options) : options, this);
    }
    return res;
  };
  _proto5.resolve = function resolve(keys) {
    var _this9 = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var found;
    var usedKey;
    var exactUsedKey;
    var usedLng;
    var usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach(function (k) {
      if (_this9.isValidLookup(found)) return;
      var extracted = _this9.extractFromKey(k, options);
      var key = extracted.key;
      usedKey = key;
      var namespaces = extracted.namespaces;
      if (_this9.options.fallbackNS) namespaces = namespaces.concat(_this9.options.fallbackNS);
      var needsPluralHandling = options.count !== undefined && !isString(options.count);
      var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this9.pluralResolver.shouldUseIntlApi();
      var needsContextHandling = options.context !== undefined && (isString(options.context) || typeof options.context === 'number') && options.context !== '';
      var codes = options.lngs ? options.lngs : _this9.languageUtils.toResolveHierarchy(options.lng || _this9.language, options.fallbackLng);
      namespaces.forEach(function (ns) {
        if (_this9.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[codes[0] + "-" + ns] && _this9.utils && _this9.utils.hasLoadedNamespace && !_this9.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[codes[0] + "-" + ns] = true;
          _this9.logger.warn("key \"" + usedKey + "\" for languages \"" + codes.join(', ') + "\" won't get resolved as namespace \"" + usedNS + "\" was not yet loaded", 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(function (code) {
          if (_this9.isValidLookup(found)) return;
          usedLng = code;
          var finalKeys = [key];
          if (_this9.i18nFormat && _this9.i18nFormat.addLookupKeys) {
            _this9.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            var pluralSuffix;
            if (needsPluralHandling) pluralSuffix = _this9.pluralResolver.getSuffix(code, options.count, options);
            var zeroSuffix = _this9.options.pluralSeparator + "zero";
            var ordinalPrefix = _this9.options.pluralSeparator + "ordinal" + _this9.options.pluralSeparator;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, _this9.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              var contextKey = "" + key + _this9.options.contextSeparator + options.context;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, _this9.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          var possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!_this9.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = _this9.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey: usedKey,
      exactUsedKey: exactUsedKey,
      usedLng: usedLng,
      usedNS: usedNS
    };
  };
  _proto5.isValidLookup = function isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  };
  _proto5.getResource = function getResource(code, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  };
  _proto5.getUsedParamsDetails = function getUsedParamsDetails() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
    var useOptionsReplaceForData = options.replace && !isString(options.replace);
    var data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = _extends({}, this.options.interpolation.defaultVariables, data);
    }
    if (!useOptionsReplaceForData) {
      data = _extends({}, data);
      for (var _iterator = _createForOfIteratorHelperLoose(optionsKeys), _step; !(_step = _iterator()).done;) {
        var key = _step.value;
        delete data[key];
      }
    }
    return data;
  };
  Translator.hasDefaultValue = function hasDefaultValue(options) {
    var prefix = 'defaultValue';
    for (var option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  };
  return Translator;
}(EventEmitter);
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var LanguageUtil = /*#__PURE__*/function () {
  function LanguageUtil(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  var _proto6 = LanguageUtil.prototype;
  _proto6.getScriptPartFromCode = function getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    var p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  };
  _proto6.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    var p = code.split('-');
    return this.formatLanguageCode(p[0]);
  };
  _proto6.formatLanguageCode = function formatLanguageCode(code) {
    if (isString(code) && code.indexOf('-') > -1) {
      if (typeof Intl !== 'undefined' && typeof Intl.getCanonicalLocales !== 'undefined') {
        try {
          var formattedCode = Intl.getCanonicalLocales(code)[0];
          if (formattedCode && this.options.lowerCaseLng) {
            formattedCode = formattedCode.toLowerCase();
          }
          if (formattedCode) return formattedCode;
        } catch (e) {}
      }
      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      var p = code.split('-');
      if (this.options.lowerCaseLng) {
        p = p.map(function (part) {
          return part.toLowerCase();
        });
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join('-');
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  };
  _proto6.isSupportedCode = function isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  };
  _proto6.getBestMatchFromCodes = function getBestMatchFromCodes(codes) {
    var _this10 = this;
    if (!codes) return null;
    var found;
    codes.forEach(function (code) {
      if (found) return;
      var cleanedLng = _this10.formatLanguageCode(code);
      if (!_this10.options.supportedLngs || _this10.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(function (code) {
        if (found) return;
        var lngOnly = _this10.getLanguagePartFromCode(code);
        if (_this10.isSupportedCode(lngOnly)) return found = lngOnly;
        found = _this10.options.supportedLngs.find(function (supportedLng) {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  };
  _proto6.getFallbackCodes = function getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    var found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  };
  _proto6.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
    var _this11 = this;
    var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    var codes = [];
    var addCode = function addCode(c) {
      if (!c) return;
      if (_this11.isSupportedCode(c)) {
        codes.push(c);
      } else {
        _this11.logger.warn("rejecting language code not found in supportedLngs: " + c);
      }
    };
    if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(function (fc) {
      if (codes.indexOf(fc) < 0) addCode(_this11.formatLanguageCode(fc));
    });
    return codes;
  };
  return LanguageUtil;
}();
var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var nonIntlVersions = ['v1', 'v2', 'v3'];
var intlVersions = ['v4'];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
var createRules = function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
};
var PluralResolver = /*#__PURE__*/function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }
    this.rules = createRules();
    this.pluralRulesCache = {};
  }
  var _proto7 = PluralResolver.prototype;
  _proto7.addRule = function addRule(lng, obj) {
    this.rules[lng] = obj;
  };
  _proto7.clearCache = function clearCache() {
    this.pluralRulesCache = {};
  };
  _proto7.getRule = function getRule(code) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      var cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
      var type = options.ordinal ? 'ordinal' : 'cardinal';
      var cacheKey = JSON.stringify({
        cleanedCode: cleanedCode,
        type: type
      });
      if (cacheKey in this.pluralRulesCache) {
        return this.pluralRulesCache[cacheKey];
      }
      var rule;
      try {
        rule = new Intl.PluralRules(cleanedCode, {
          type: type
        });
      } catch (err) {
        if (!code.match(/-|_/)) return;
        var lngPart = this.languageUtils.getLanguagePartFromCode(code);
        rule = this.getRule(lngPart, options);
      }
      this.pluralRulesCache[cacheKey] = rule;
      return rule;
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  };
  _proto7.needsPlural = function needsPlural(code) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  };
  _proto7.getPluralFormsOfKey = function getPluralFormsOfKey(code, key) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.getSuffixes(code, options).map(function (suffix) {
      return "" + key + suffix;
    });
  };
  _proto7.getSuffixes = function getSuffixes(code) {
    var _this12 = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
        return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
      }).map(function (pluralCategory) {
        return "" + _this12.options.prepend + (options.ordinal ? "ordinal" + _this12.options.prepend : '') + pluralCategory;
      });
    }
    return rule.numbers.map(function (number) {
      return _this12.getSuffix(code, number, options);
    });
  };
  _proto7.getSuffix = function getSuffix(code, count) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return "" + this.options.prepend + (options.ordinal ? "ordinal" + this.options.prepend : '') + rule.select(count);
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn("no plural rule found for: " + code);
    return '';
  };
  _proto7.getSuffixRetroCompatible = function getSuffixRetroCompatible(rule, count) {
    var _this13 = this;
    var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    var suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = 'plural';
      } else if (suffix === 1) {
        suffix = '';
      }
    }
    var returnSuffix = function returnSuffix() {
      return _this13.options.prepend && suffix.toString() ? _this13.options.prepend + suffix.toString() : suffix.toString();
    };
    if (this.options.compatibilityJSON === 'v1') {
      if (suffix === 1) return '';
      if (typeof suffix === 'number') return "_plural_" + suffix.toString();
      return returnSuffix();
    } else if (this.options.compatibilityJSON === 'v2') {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  };
  _proto7.shouldUseIntlApi = function shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  };
  return PluralResolver;
}();
var deepFindWithDefaults = function deepFindWithDefaults(data, defaultData, key) {
  var keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
var regexSafe = function regexSafe(val) {
  return val.replace(/\$/g, '$$$$');
};
var Interpolator = /*#__PURE__*/function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };
    this.init(options);
  }
  var _proto8 = Interpolator.prototype;
  _proto8.init = function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    var _options$interpolatio = options.interpolation,
      escape$1 = _options$interpolatio.escape,
      escapeValue = _options$interpolatio.escapeValue,
      useRawValueToEscape = _options$interpolatio.useRawValueToEscape,
      prefix = _options$interpolatio.prefix,
      prefixEscaped = _options$interpolatio.prefixEscaped,
      suffix = _options$interpolatio.suffix,
      suffixEscaped = _options$interpolatio.suffixEscaped,
      formatSeparator = _options$interpolatio.formatSeparator,
      unescapeSuffix = _options$interpolatio.unescapeSuffix,
      unescapePrefix = _options$interpolatio.unescapePrefix,
      nestingPrefix = _options$interpolatio.nestingPrefix,
      nestingPrefixEscaped = _options$interpolatio.nestingPrefixEscaped,
      nestingSuffix = _options$interpolatio.nestingSuffix,
      nestingSuffixEscaped = _options$interpolatio.nestingSuffixEscaped,
      nestingOptionsSeparator = _options$interpolatio.nestingOptionsSeparator,
      maxReplaces = _options$interpolatio.maxReplaces,
      alwaysFormat = _options$interpolatio.alwaysFormat;
    this.escape = escape$1 !== undefined ? escape$1 : escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
    this.formatSeparator = formatSeparator || ',';
    this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  };
  _proto8.reset = function reset() {
    if (this.options) this.init(this.options);
  };
  _proto8.resetRegExp = function resetRegExp() {
    var getOrResetRegExp = function getOrResetRegExp(existingRegExp, pattern) {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, 'g');
    };
    this.regexp = getOrResetRegExp(this.regexp, this.prefix + "(.+?)" + this.suffix);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, this.nestingPrefix + "(.+?)" + this.nestingSuffix);
  };
  _proto8.interpolate = function interpolate(str, data, lng, options) {
    var _this14 = this;
    var match;
    var value;
    var replaces;
    var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    var handleFormat = function handleFormat(key) {
      if (key.indexOf(_this14.formatSeparator) < 0) {
        var path = deepFindWithDefaults(data, defaultData, key, _this14.options.keySeparator, _this14.options.ignoreJSONStructure);
        return _this14.alwaysFormat ? _this14.format(path, undefined, lng, _extends({}, options, data, {
          interpolationkey: key
        })) : path;
      }
      var p = key.split(_this14.formatSeparator);
      var k = p.shift().trim();
      var f = p.join(_this14.formatSeparator).trim();
      return _this14.format(deepFindWithDefaults(data, defaultData, k, _this14.options.keySeparator, _this14.options.ignoreJSONStructure), f, lng, _extends({}, options, data, {
        interpolationkey: k
      }));
    };
    this.resetRegExp();
    var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    var todos = [{
      regex: this.regexpUnescape,
      safeValue: function safeValue(val) {
        return regexSafe(val);
      }
    }, {
      regex: this.regexp,
      safeValue: function safeValue(val) {
        return _this14.escapeValue ? regexSafe(_this14.escape(val)) : regexSafe(val);
      }
    }];
    todos.forEach(function (todo) {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        var matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            _this14.logger.warn("missed to pass in variable " + matchedVar + " for interpolating " + str);
            value = '';
          }
        } else if (!isString(value) && !_this14.useRawValueToEscape) {
          value = makeString(value);
        }
        var safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= _this14.maxReplaces) {
          break;
        }
      }
    });
    return str;
  };
  _proto8.nest = function nest(str, fc) {
    var _this15 = this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var match;
    var value;
    var clonedOptions;
    var handleHasOptions = function handleHasOptions(key, inheritedOptions) {
      var sep = _this15.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      var c = key.split(new RegExp(sep + "[ ]*{"));
      var optionsString = "{" + c[1];
      key = c[0];
      optionsString = _this15.interpolate(optionsString, clonedOptions);
      var matchedSingleQuotes = optionsString.match(/'/g);
      var matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = _extends({}, inheritedOptions, clonedOptions);
      } catch (e) {
        _this15.logger.warn("failed parsing options string in nesting for key " + key, e);
        return "" + key + sep + optionsString;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(_this15.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      var formatters = [];
      clonedOptions = _extends({}, options);
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      var doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        var r = match[1].split(this.formatSeparator).map(function (elem) {
          return elem.trim();
        });
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn("missed to resolve " + match[1] + " for nesting " + str);
        value = '';
      }
      if (doReduce) {
        value = formatters.reduce(function (v, f) {
          return _this15.format(v, f, options.lng, _extends({}, options, {
            interpolationkey: match[1].trim()
          }));
        }, value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  };
  return Interpolator;
}();
var parseFormatStr = function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (opt) {
          var _opt$split = opt.split(':'),
            key = _opt$split[0],
            rest = _opt$split.slice(1);
          var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          var trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === 'false') formatOptions[trimmedKey] = false;
          if (val === 'true') formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
};
var createCachedFormatter = function createCachedFormatter(fn) {
  var cache = {};
  return function (val, lng, options) {
    var optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      var _extends2;
      optForCache = _extends({}, optForCache, (_extends2 = {}, _extends2[options.interpolationkey] = undefined, _extends2));
    }
    var key = lng + JSON.stringify(optForCache);
    var formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
var Formatter = /*#__PURE__*/function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.NumberFormat(lng, _extends({}, opt));
        return function (val) {
          return formatter.format(val);
        };
      }),
      currency: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.NumberFormat(lng, _extends({}, opt, {
          style: 'currency'
        }));
        return function (val) {
          return formatter.format(val);
        };
      }),
      datetime: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.DateTimeFormat(lng, _extends({}, opt));
        return function (val) {
          return formatter.format(val);
        };
      }),
      relativetime: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.RelativeTimeFormat(lng, _extends({}, opt));
        return function (val) {
          return formatter.format(val, opt.range || 'day');
        };
      }),
      list: createCachedFormatter(function (lng, opt) {
        var formatter = new Intl.ListFormat(lng, _extends({}, opt));
        return function (val) {
          return formatter.format(val);
        };
      })
    };
    this.init(options);
  }
  var _proto9 = Formatter.prototype;
  _proto9.init = function init(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ',';
  };
  _proto9.add = function add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  };
  _proto9.addCached = function addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  };
  _proto9.format = function format(value, _format, lng) {
    var _this16 = this;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var formats = _format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find(function (f) {
      return f.indexOf(')') > -1;
    })) {
      var lastIndex = formats.findIndex(function (f) {
        return f.indexOf(')') > -1;
      });
      formats[0] = [formats[0]].concat(formats.splice(1, lastIndex)).join(this.formatSeparator);
    }
    var result = formats.reduce(function (mem, f) {
      var _parseFormatStr = parseFormatStr(f),
        formatName = _parseFormatStr.formatName,
        formatOptions = _parseFormatStr.formatOptions;
      if (_this16.formats[formatName]) {
        var formatted = mem;
        try {
          var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = _this16.formats[formatName](mem, l, _extends({}, formatOptions, options, valOptions));
        } catch (error) {
          _this16.logger.warn(error);
        }
        return formatted;
      } else {
        _this16.logger.warn("there was no format function for " + formatName);
      }
      return mem;
    }, value);
    return result;
  };
  return Formatter;
}();
var removePending = function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
var Connector = /*#__PURE__*/function (_EventEmitter3) {
  _inheritsLoose(Connector, _EventEmitter3);
  function Connector(backend, store, services) {
    var _this17;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _this17 = _EventEmitter3.call(this) || this;
    _this17.backend = backend;
    _this17.store = store;
    _this17.services = services;
    _this17.languageUtils = services.languageUtils;
    _this17.options = options;
    _this17.logger = baseLogger.create('backendConnector');
    _this17.waitingReads = [];
    _this17.maxParallelReads = options.maxParallelReads || 10;
    _this17.readingCalls = 0;
    _this17.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    _this17.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    _this17.state = {};
    _this17.queue = [];
    if (_this17.backend && _this17.backend.init) {
      _this17.backend.init(services, options.backend, options);
    }
    return _this17;
  }
  var _proto10 = Connector.prototype;
  _proto10.queueLoad = function queueLoad(languages, namespaces, options, callback) {
    var _this18 = this;
    var toLoad = {};
    var pending = {};
    var toLoadLanguages = {};
    var toLoadNamespaces = {};
    languages.forEach(function (lng) {
      var hasAllNamespaces = true;
      namespaces.forEach(function (ns) {
        var name = lng + "|" + ns;
        if (!options.reload && _this18.store.hasResourceBundle(lng, ns)) {
          _this18.state[name] = 2;
        } else if (_this18.state[name] < 0) ;else if (_this18.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          _this18.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending: pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback: callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  };
  _proto10.loaded = function loaded(name, err, data) {
    var s = name.split('|');
    var lng = s[0];
    var ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    var loaded = {};
    this.queue.forEach(function (q) {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(function (l) {
          if (!loaded[l]) loaded[l] = {};
          var loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(function (n) {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(function (q) {
      return !q.done;
    });
  };
  _proto10.read = function read(lng, ns, fcName) {
    var _this19 = this;
    var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
    var callback = arguments.length > 5 ? arguments[5] : undefined;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: lng,
        ns: ns,
        fcName: fcName,
        tried: tried,
        wait: wait,
        callback: callback
      });
      return;
    }
    this.readingCalls++;
    var resolver = function resolver(err, data) {
      _this19.readingCalls--;
      if (_this19.waitingReads.length > 0) {
        var next = _this19.waitingReads.shift();
        _this19.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < _this19.maxRetries) {
        setTimeout(function () {
          _this19.read.call(_this19, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    var fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        var r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(function (data) {
            return resolver(null, data);
          }).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  };
  _proto10.prepareLoading = function prepareLoading(languages, namespaces) {
    var _this20 = this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = arguments.length > 3 ? arguments[3] : undefined;
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    var toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(function (name) {
      _this20.loadOne(name);
    });
  };
  _proto10.load = function load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  };
  _proto10.reload = function reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  };
  _proto10.loadOne = function loadOne(name) {
    var _this21 = this;
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var s = name.split('|');
    var lng = s[0];
    var ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
      if (err) _this21.logger.warn(prefix + "loading namespace " + ns + " for language " + lng + " failed", err);
      if (!err && data) _this21.logger.log(prefix + "loaded namespace " + ns + " for language " + lng, data);
      _this21.loaded(name, err, data);
    });
  };
  _proto10.saveMissing = function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : function () {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn("did not save key \"" + key + "\" as the namespace \"" + namespace + "\" was not yet loaded", 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend && this.backend.create) {
      var opts = _extends({}, options, {
        isUpdate: isUpdate
      });
      var fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          var r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(function (data) {
              return clb(null, data);
            }).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  };
  return Connector;
}(EventEmitter);
var get = function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
      var ret = {};
      if (typeof args[1] === 'object') ret = args[1];
      if (isString(args[1])) ret.defaultValue = args[1];
      if (isString(args[2])) ret.tDescription = args[2];
      if (typeof args[2] === 'object' || typeof args[3] === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
};
var transformOptions = function transformOptions(options) {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  return options;
};
var noop = function noop() {};
var bindMemberFunctions = function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function (mem) {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
var I18n = /*#__PURE__*/function (_EventEmitter4) {
  _inheritsLoose(I18n, _EventEmitter4);
  function I18n() {
    var _this22;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    _this22 = _EventEmitter4.call(this) || this;
    _this22.options = transformOptions(options);
    _this22.services = {};
    _this22.logger = baseLogger;
    _this22.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this22));
    if (callback && !_this22.isInitialized && !options.isClone) {
      if (!_this22.options.initImmediate) {
        _this22.init(options, callback);
        return _assertThisInitialized(_this22) || _assertThisInitialized(_this22);
      }
      setTimeout(function () {
        _this22.init(options, callback);
      }, 0);
    }
    return _this22;
  }
  var _proto11 = I18n.prototype;
  _proto11.init = function init() {
    var _this23 = this;
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    this.isInitializing = true;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    var defOpts = get();
    this.options = _extends({}, defOpts, this.options, transformOptions(options));
    if (this.options.compatibilityAPI !== 'v1') {
      this.options.interpolation = _extends({}, defOpts.interpolation, this.options.interpolation);
    }
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    var createClassOnDemand = function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      var formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== 'undefined') {
        formatter = Formatter;
      }
      var lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      var s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit.apply(_this, [event].concat(args));
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit.apply(_this, [event].concat(args));
      });
      this.modules.external.forEach(function (m) {
        if (m.init) m.init(_this23);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(function (fcName) {
      _this23[fcName] = function () {
        var _this$store;
        return (_this$store = _this.store)[fcName].apply(_this$store, arguments);
      };
    });
    var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(function (fcName) {
      _this23[fcName] = function () {
        var _this$store2;
        (_this$store2 = _this.store)[fcName].apply(_this$store2, arguments);
        return _this;
      };
    });
    var deferred = defer();
    var load = function load() {
      var finish = function finish(err, t) {
        _this23.isInitializing = false;
        if (_this23.isInitialized && !_this23.initializedStoreOnce) _this23.logger.warn('init: i18next is already initialized. You should call init just once!');
        _this23.isInitialized = true;
        if (!_this23.options.isClone) _this23.logger.log('initialized', _this23.options);
        _this23.emit('initialized', _this23.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (_this23.languages && _this23.options.compatibilityAPI !== 'v1' && !_this23.isInitialized) return finish(null, _this23.t.bind(_this23));
      _this23.changeLanguage(_this23.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  };
  _proto11.loadResources = function loadResources(language) {
    var _this24 = this;
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var usedCallback = callback;
    var usedLng = isString(language) ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      var toLoad = [];
      var append = function append(lng) {
        if (!lng) return;
        if (lng === 'cimode') return;
        var lngs = _this24.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (l === 'cimode') return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(function (l) {
          return append(l);
        });
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach(function (l) {
          return append(l);
        });
      }
      this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
        if (!e && !_this24.resolvedLanguage && _this24.language) _this24.setResolvedLanguage(_this24.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  };
  _proto11.reloadResources = function reloadResources(lngs, ns, callback) {
    var deferred = defer();
    if (typeof lngs === 'function') {
      callback = lngs;
      lngs = undefined;
    }
    if (typeof ns === 'function') {
      callback = ns;
      ns = undefined;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, function (err) {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  };
  _proto11.use = function use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  };
  _proto11.setResolvedLanguage = function setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (var li = 0; li < this.languages.length; li++) {
      var lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  };
  _proto11.changeLanguage = function changeLanguage(lng, callback) {
    var _this25 = this;
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    var deferred = defer();
    this.emit('languageChanging', lng);
    var setLngProps = function setLngProps(l) {
      _this25.language = l;
      _this25.languages = _this25.services.languageUtils.toResolveHierarchy(l);
      _this25.resolvedLanguage = undefined;
      _this25.setResolvedLanguage(l);
    };
    var done = function done(err, l) {
      if (l) {
        setLngProps(l);
        _this25.translator.changeLanguage(l);
        _this25.isLanguageChangingTo = undefined;
        _this25.emit('languageChanged', l);
        _this25.logger.log('languageChanged', l);
      } else {
        _this25.isLanguageChangingTo = undefined;
      }
      deferred.resolve(function () {
        return _this2.t.apply(_this2, arguments);
      });
      if (callback) callback(err, function () {
        return _this2.t.apply(_this2, arguments);
      });
    };
    var setLng = function setLng(lngs) {
      if (!lng && !lngs && _this25.services.languageDetector) lngs = [];
      var l = isString(lngs) ? lngs : _this25.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!_this25.language) {
          setLngProps(l);
        }
        if (!_this25.translator.language) _this25.translator.changeLanguage(l);
        if (_this25.services.languageDetector && _this25.services.languageDetector.cacheUserLanguage) _this25.services.languageDetector.cacheUserLanguage(l);
      }
      _this25.loadResources(l, function (err) {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  };
  _proto11.getFixedT = function getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    var fixedT = function fixedT(key, opts) {
      var options;
      if (typeof opts !== 'object') {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = _extends({}, opts);
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== '') options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      var keySeparator = _this3.options.keySeparator || '.';
      var resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(function (k) {
          return "" + options.keyPrefix + keySeparator + k;
        });
      } else {
        resultKey = options.keyPrefix ? "" + options.keyPrefix + keySeparator + key : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  };
  _proto11.t = function t() {
    var _this$translator;
    return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
  };
  _proto11.exists = function exists() {
    var _this$translator2;
    return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
  };
  _proto11.setDefaultNamespace = function setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  };
  _proto11.hasLoadedNamespace = function hasLoadedNamespace(ns) {
    var _this26 = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    var lng = options.lng || this.resolvedLanguage || this.languages[0];
    var fallbackLng = this.options ? this.options.fallbackLng : false;
    var lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    var loadNotPending = function loadNotPending(l, n) {
      var loadState = _this26.services.backendConnector.state[l + "|" + n];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      var preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  };
  _proto11.loadNamespaces = function loadNamespaces(ns, callback) {
    var _this27 = this;
    var deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach(function (n) {
      if (_this27.options.ns.indexOf(n) < 0) _this27.options.ns.push(n);
    });
    this.loadResources(function (err) {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  };
  _proto11.loadLanguages = function loadLanguages(lngs, callback) {
    var _this28 = this;
    var deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    var preloaded = this.options.preload || [];
    var newLngs = lngs.filter(function (lng) {
      return preloaded.indexOf(lng) < 0 && _this28.services.languageUtils.isSupportedCode(lng);
    });
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(function (err) {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  };
  _proto11.dir = function dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    var languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  };
  I18n.createInstance = function createInstance() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  };
  _proto11.cloneInstance = function cloneInstance() {
    var _this29 = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    var mergedOptions = _extends({}, this.options, options, {
      isClone: true
    });
    var clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    var membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(function (m) {
      clone[m] = _this29[m];
    });
    clone.services = _extends({}, this.services);
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit.apply(clone, [event].concat(args));
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  };
  _proto11.toJSON = function toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  };
  return I18n;
}(EventEmitter);
var instance = /*#__PURE__*/I18n.createInstance();
instance.createInstance = I18n.createInstance;

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
		CONFIRM_FINISH_CONF: "Are you sure you want to end the conference?",
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
		CONFIRM_FINISH_CONF: "êtes-vous sûr de vouloir terminer la conférence?",
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
		CONFIRM_RECREATE_CONF: "Вы уверены что хотите пересоздать конференцию?",
		CONFIRM_FINISH_CONF: "Вы уверены что хотите завершить конференцию?",
		PAUSE: "Остановить",
		FINISH: "Завершить",
		BACK: "Вернуться в чат",
		NotFoundError: "Запрошенное устройство не найдено",
		NotAllowedError: "В доступе  отказано. Чтобы разрешить доступ к устройству зайдите в настройки браузера",
		ErrorAny: "Устройство не настроено",
		ALLOK: "Все OK",
		CheckCamMic: "Проверить доступ к микрофону и камере",
		CheckMic: "Проверить микрофон",
		CheckCam: "Проверить камеру",
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

instance.addResourceBundle("ru", "translations", ru);
instance.addResourceBundle("en", "translations", en);
instance.addResourceBundle("fr", "translations", fr);

var languageWithoutCountry = function languageWithoutCountry() {
  return instance.language.substring(0, 2);
};
var LANGUAGES = {
  RU: "ru",
  FR: "fr",
  EN: "en"
};
var LANGUAGES_ACTIONS = {
  SET_RUSSIAN: "SET_RUSSIAN",
  SET_ENGLISH: "SET_ENGLISH",
  SET_FRENCH: "SET_FRENCH"
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case LANGUAGES_ACTIONS.SET_ENGLISH:
      instance.changeLanguage("en");
      return {
        language: LANGUAGES.EN
      };
    case LANGUAGES_ACTIONS.SET_FRENCH:
      instance.changeLanguage("fr");
      return {
        language: LANGUAGES.FR
      };
    case LANGUAGES_ACTIONS.SET_RUSSIAN:
      instance.changeLanguage("ru");
      return {
        language: LANGUAGES.RU
      };
    default:
      return state;
  }
};
var LanguageContext = /*#__PURE__*/createContext({});
var AppLanguageProvider = function AppLanguageProvider(_ref) {
  var children = _ref.children;
  var _useReducer = useReducer(reducer, {
      language: languageWithoutCountry()
    }),
    languageState = _useReducer[0],
    dispatchLanguage = _useReducer[1];
  var value = useMemo(function () {
    return {
      languageState: languageState,
      dispatchLanguage: dispatchLanguage
    };
  }, [languageState]);
  return /*#__PURE__*/React__default.createElement(LanguageContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default.createElement(I18nextProvider, {
    i18n: instance
  }, children));
};

var _excluded$2 = ["lang", "chatBaseURLApi", "baseUrl", "chatWsUrl", "chatWsPath", "token", "refreshToken"];
var ChatIndex = function ChatIndex(_ref) {
  var lang = _ref.lang,
    chatBaseURLApi = _ref.chatBaseURLApi,
    baseUrl = _ref.baseUrl,
    chatWsUrl = _ref.chatWsUrl,
    chatWsPath = _ref.chatWsPath,
    token = _ref.token,
    refreshToken = _ref.refreshToken,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return /*#__PURE__*/React__default.createElement(AppLanguageProvider, null, /*#__PURE__*/React__default.createElement(ChatProvider, {
    defLang: lang,
    token: token,
    refreshToken: refreshToken
  }, /*#__PURE__*/React__default.createElement(RestProvider, {
    chatBaseURLApi: chatBaseURLApi,
    pageSize: 25,
    baseUrl: baseUrl
  }, /*#__PURE__*/React__default.createElement(SocketProvider, {
    wsUrl: chatWsUrl,
    wsPath: chatWsPath,
    baseUrl: baseUrl
  }, /*#__PURE__*/React__default.createElement(ChatPage, props)))));
};

export { AddContact, CHAT_ACTIONS, ChatContext, ChatIndex, ChatPage, ChatProvider, Conference, ConferenceCall, ContextMenuType, Emoji, Message, MessageStatus, RestContext, RestProvider, Role, Room, RoomList, SocketContext, SocketProvider, Typing, clearLocalStorage, getRefreshToken };
//# sourceMappingURL=chat.esm.js.map

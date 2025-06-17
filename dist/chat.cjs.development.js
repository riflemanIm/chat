'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var material = require('@mui/material');
var React = require('react');
var React__default = _interopDefault(React);
var reactI18next = require('react-i18next');
var StarIcon = _interopDefault(require('@mui/icons-material/Star'));
var styles = require('@mui/styles');
var dayjs = _interopDefault(require('dayjs'));
var iconsMaterial = require('@mui/icons-material');
var reactAspectRatio = require('react-aspect-ratio');
var DeleteIcon = _interopDefault(require('@mui/icons-material/Delete'));
var FileCopyIcon = _interopDefault(require('@mui/icons-material/FileCopy'));
var CallEndIcon = _interopDefault(require('@mui/icons-material/CallEnd'));
var GroupIcon = _interopDefault(require('@mui/icons-material/Group'));
var PauseIcon = _interopDefault(require('@mui/icons-material/Pause'));
var PersonAddIcon = _interopDefault(require('@mui/icons-material/PersonAdd'));
var KeyboardArrowDownIcon = _interopDefault(require('@mui/icons-material/KeyboardArrowDown'));
var PlayArrowIcon = _interopDefault(require('@mui/icons-material/PlayArrow'));
var RestartAltIcon = _interopDefault(require('@mui/icons-material/RestartAlt'));
var VideoCallIcon = _interopDefault(require('@mui/icons-material/VideoCall'));
var Button = _interopDefault(require('@mui/material/Button'));
var Menu = _interopDefault(require('@mui/material/Menu'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var styles$1 = require('@mui/material/styles');
var Dialog = _interopDefault(require('@mui/material/Dialog'));
var DialogActions = _interopDefault(require('@mui/material/DialogActions'));
var DialogContent = _interopDefault(require('@mui/material/DialogContent'));
var Slide = _interopDefault(require('@mui/material/Slide'));
var useInfiniteScroll = _interopDefault(require('react-infinite-scroll-hook'));
var List = _interopDefault(require('@mui/material/List'));
var axios = _interopDefault(require('axios'));
var RecentActorsIcon = _interopDefault(require('@mui/icons-material/RecentActors'));
var VideocamIcon = _interopDefault(require('@mui/icons-material/Videocam'));
var SettingsSuggestIcon = _interopDefault(require('@mui/icons-material/SettingsSuggest'));
var SettingsVoiceIcon = _interopDefault(require('@mui/icons-material/SettingsVoice'));
var io = _interopDefault(require('socket.io-client'));
var i18next = _interopDefault(require('i18next'));
var LanguageDetector = _interopDefault(require('i18next-browser-languagedetector'));
require('regenerator-runtime');
require('jwt-decode');
var config = _interopDefault(require('@/config'));
require('@/helpers');
require('@/api/httpClient');
require('@/api/apiParams');
require('@/helpers/utils');
require('@/helpers/validators');
require('@/helpers/base64');

// Этот интерфейс используется для типизации всех ответов от сервера. Когда сервер отправляет данные через сокет, они приходят в таком формате:
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

var useStyles = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
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

var ContactStatus = function ContactStatus(props) {
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  if (props.isTyping) return /*#__PURE__*/React__default.createElement(Typing, {
    message: t("CHAT.STATUS.TYPING")
  });
  if (props.contact.online === 1) return /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    color: "primary",
    component: "span"
  }, t("CHAT.STATUS.ONLINE"));
  return /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, t("CHAT.STATUS.OFFLINE"));
};

var _excluded = ["apiUrl", "contacts", "owner", "onContactClick"];
var useStyles$1 = /*#__PURE__*/styles.makeStyles(function () {
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
  return /*#__PURE__*/React__default.createElement(material.List, _extends({}, listProps, {
    "aria-label": "contacts"
  }), contacts.map(function (contact) {
    return /*#__PURE__*/React__default.createElement(material.ListItemButton, {
      key: contact.userId,
      onClick: function onClick() {
        return onContactClick && onContactClick(contact);
      }
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
    }));
  }));
};

var AddContact = function AddContact(props) {
  var onClose = props.onClose,
    open = props.open,
    apiUrl = props.apiUrl,
    contacts = props.contacts;
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var handleClose = function handleClose() {
    onClose();
  };
  var handleListItemClick = function handleListItemClick(contact) {
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
var useStyles$2 = /*#__PURE__*/styles.makeStyles(function () {
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
  React.useEffect(function () {
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

var useStyles$3 = /*#__PURE__*/styles.makeStyles(function () {
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
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
    onClick: function onClick() {
      return onAccept(conference);
    }
  }, t("CHAT.CONFERENCE.JOIN"))));
};

var useStyles$4 = /*#__PURE__*/styles.makeStyles(function () {
  return styles.createStyles({
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

var useStyles$5 = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
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

var useStyles$6 = /*#__PURE__*/styles.makeStyles(function (theme) {
  var _img, _aspect;
  return styles.createStyles({
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
  return /*#__PURE__*/React__default.createElement(reactAspectRatio.AspectRatio, {
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

var useStyles$7 = /*#__PURE__*/styles.makeStyles(function (theme) {
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

var useStyles$8 = /*#__PURE__*/styles.makeStyles(function (theme) {
  var _message;
  return styles.createStyles({
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
    return /*#__PURE__*/React__default.createElement(material.Link, {
      className: className + " " + classes.file,
      underline: "none",
      href: combineURLs(apiUrl, "/static/file/" + message.content),
      target: "_blank",
      download: true,
      onContextMenu: onContextMenu
    }, child);
  }
  var isMedia = messageType === "image" || messageType === "video" || messageType === "video_conference";
  return /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: isMedia ? "column" : "row",
    flexWrap: "wrap",
    className: className,
    onContextMenu: onContextMenu
  }, child);
};
var Message = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(function (props, ref) {
  var classes = useStyles$8();
  var _useTranslation = reactI18next.useTranslation(),
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
    return /*#__PURE__*/React__default.createElement(material.ListItem, {
      className: classes.rootNotify,
      ref: ref
    }, /*#__PURE__*/React__default.createElement(material.Alert
    //ref={refOnMess}
    , {
      severity: typeof content === "string" ? "info" : content.severity
    }, typeof content === "string" ? content : content.message));
  }
  if (message.isRevoke) {
    // Удаленное сообщение
    return /*#__PURE__*/React__default.createElement(material.ListItem, {
      className: classes.rootNotify,
      ref: ref
    }, /*#__PURE__*/React__default.createElement(material.Typography, {
      variant: "body2",
      align: "center"
    }, message.userId === user.userId ? t("CHAT.MESSAGE.REVOKED.YOU") : message.revokeUserName + " " + t("CHAT.MESSAGE.REVOKED.CONTACT")));
  }
  var isMine = user.userId === message.userId;
  return /*#__PURE__*/React__default.createElement(material.ListItem, {
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
  }, /*#__PURE__*/React__default.createElement("span", null, isMine ? message.status === 0 ? /*#__PURE__*/React__default.createElement(iconsMaterial.Done, {
    className: classes.statusImage
  }) : /*#__PURE__*/React__default.createElement(iconsMaterial.DoneAll, {
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
var useStyles$9 = /*#__PURE__*/styles.makeStyles(function () {
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var fileInputRef = React.useRef(null);
  var _useState = React.useState(null),
    emojiAnchorEl = _useState[0],
    setEmojiAnchorEl = _useState[1];
  var textRef = React.useRef(null);
  var textValueRef = React.useRef("");
  var _useState2 = React.useState(""),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = React.useState(false),
    isUploading = _useState3[0],
    setIsUploading = _useState3[1];
  var _useState4 = React.useState({
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
  var emojiSelect = React.useCallback(function (emoji) {
    if (textRef.current) {
      var newValue = textValueRef.current + emoji;
      textValueRef.current = newValue;
      textRef.current.value = newValue;
    }
    handleEmojiClose();
  }, []);
  var handleTyping = React.useCallback(function (e) {
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
  var sendMessage = React.useCallback(function (data) {
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
  var handleSubmit = React.useCallback(function () {
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
  return /*#__PURE__*/React__default.createElement(material.Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React__default.createElement(material.TextField, {
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
        startAdornment: /*#__PURE__*/React__default.createElement(material.InputAdornment, {
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
        }, /*#__PURE__*/React__default.createElement(material.IconButton, {
          color: "primary",
          "aria-label": "upload",
          component: "span",
          size: "small",
          disabled: isUploading
        }, isUploading ? /*#__PURE__*/React__default.createElement(material.CircularProgress, {
          size: 24
        }) : /*#__PURE__*/React__default.createElement(material.SvgIcon, {
          className: classes.attachmentIcon
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M16.768 13.5767L11.6961 18.6486C9.35886 20.9859 5.56937 20.9859 3.23208 18.6486V18.6486C0.894789 16.3114 0.894789 12.5219 3.23208 10.1846L10.4479 2.96872C12.0875 1.32914 14.7458 1.32914 16.3854 2.96873V2.96873C18.025 4.60831 18.025 7.26659 16.3854 8.90617L9.16515 16.1264C8.23032 17.0612 6.71466 17.0612 5.77982 16.1264V16.1264C4.84499 15.1916 4.84499 13.6759 5.77982 12.7411L10.8896 7.63131",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })))), /*#__PURE__*/React__default.createElement(material.IconButton, {
          "aria-describedby": Boolean(emojiAnchorEl) ? "emoji-popover" : undefined,
          onClick: handleEmojiClick,
          color: "primary",
          size: "small",
          disabled: isUploading
        }, /*#__PURE__*/React__default.createElement(iconsMaterial.InsertEmoticon, null))),
        endAdornment: /*#__PURE__*/React__default.createElement(material.IconButton, {
          edge: "end",
          color: "inherit",
          size: "small",
          onClick: handleSubmit,
          disabled: isUploading || !textValueRef.current.trim()
        }, /*#__PURE__*/React__default.createElement(iconsMaterial.Send, null)),
        onKeyDown: onKeyDown
      }
    },
    onChange: handleTyping
  }), error && /*#__PURE__*/React__default.createElement("div", {
    className: classes.error
  }, error), /*#__PURE__*/React__default.createElement(material.Popover, {
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

var Transition = /*#__PURE__*/React.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
});
function ConfirmDialogSlide(_ref) {
  var open = _ref.open,
    setOpen = _ref.setOpen,
    contentText = _ref.contentText,
    callback = _ref.callback;
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var handleClose = function handleClose() {
    setOpen(false);
  };
  var handleCloseOk = function handleCloseOk() {
    setOpen(false);
    callback();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-describedby": "alert-dialog-slide-description"
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(material.Typography, {
    variant: "h6"
  }, contentText)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClose,
    color: "primary"
  }, t("CHAT.BUT_CLOSE")), /*#__PURE__*/React.createElement(Button, {
    onClick: handleCloseOk,
    color: "warning"
  }, t("CHAT.BUT_CONFIRM")))));
}

var StyledMenu = /*#__PURE__*/styles$1.styled(function (props) {
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
          backgroundColor: styles$1.alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
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
  var _useTranslation = reactI18next.useTranslation(),
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
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
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
  var _useState = React.useState(max),
    counter = _useState[0],
    setCounter = _useState[1];
  var counterRef = React.useRef(null);
  var handlerRefresh = function handlerRefresh() {
    setCounter(max);
  };
  // Counter
  React.useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement(material.Slide, _extends({
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/React__default.createElement(material.Dialog, {
    open: open,
    TransitionComponent: Transition$1,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(material.DialogContent, null, /*#__PURE__*/React__default.createElement(material.Alert, {
    severity: severity
  }, typeof children === "string" ? /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2"
  }, children) : children)), /*#__PURE__*/React__default.createElement(material.DialogActions, null, /*#__PURE__*/React__default.createElement(material.Button, {
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  return React.useMemo(function () {
    return /*#__PURE__*/React__default.createElement(AlertDialog, {
      open: modaleInfo,
      setOpen: setModaleInfo,
      severity: "info"
    }, /*#__PURE__*/React__default.createElement(material.Typography, {
      variant: "body1",
      textAlign: "center"
    }, t("CHAT.CONFERENCE.UntillTheEnd"), ":"), /*#__PURE__*/React__default.createElement(material.Typography, {
      variant: "h6",
      textAlign: "center"
    }, strTime));
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [modaleInfo]);
};
var ConferenceTime = function ConferenceTime(_ref2) {
  var finishDate = _ref2.finishDate;
  var _useTranslation2 = reactI18next.useTranslation(),
    t = _useTranslation2.t;
  var _useState = React.useState(false),
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
  React.useEffect(function () {
    if (minutes && minutes === 3 && seconds != null && seconds === 0) {
      setModaleInfo(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  if (diffTimeSec < 1) return null;
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

var useStyles$a = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var _useState = React.useState(null),
    anchorEl = _useState[0],
    setAnchorEl = _useState[1];
  var _useState2 = React.useState(false),
    addOperatorOpen = _useState2[0],
    setAddOperatorOpen = _useState2[1];
  var _React$useState = React__default.useState(false),
    confirmFinishConf = _React$useState[0],
    setConfirmFinishConf = _React$useState[1];
  if (!chat) return /*#__PURE__*/React__default.createElement(material.CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(material.Avatar, null),
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
    return /*#__PURE__*/React__default.createElement(material.CardHeader, {
      avatar: /*#__PURE__*/React__default.createElement(material.Avatar, {
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
      }, getGroupStatus(group, t)), /*#__PURE__*/React__default.createElement(material.Popover, {
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
      action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role === 4 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "add user",
        onClick: handleAddOperatorOpen
      }, /*#__PURE__*/React__default.createElement(PersonAddIcon, null)), /*#__PURE__*/React__default.createElement(AddContact, {
        apiUrl: apiUrl,
        open: addOperatorOpen,
        contacts: operators,
        onClose: handleAddOperatorClose
      })), user.role === 4 && ((_group$members2 = group.members) == null ? void 0 : _group$members2.find(function (it) {
        return it.userId !== user.userId && it.role === 4;
      })) && onLeaveGroup && /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "leave group",
        onClick: function onClick() {
          return onLeaveGroup(group);
        }
      }, /*#__PURE__*/React__default.createElement(DeleteIcon, null)))
    });
  }
  var contact = chat;
  var isTyping = !!(typing != null && typing.contactId) && (typing == null ? void 0 : typing.userId) === contact.userId;
  return /*#__PURE__*/React__default.createElement(material.CardHeader, {
    avatar: /*#__PURE__*/React__default.createElement(material.Avatar, {
      alt: contact.username,
      src: contact.avatar ? combineURLs(apiUrl, contact.avatar) : ""
    }),
    title: /*#__PURE__*/React__default.createElement(material.Typography, {
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
    action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, user.role !== 1 && conferenceJoined && conference && !isEmpty(conference) && onConferencePause != null && /*#__PURE__*/React__default.createElement(material.Button, {
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
    }, t("CHAT.CONFERENCE.PAUSE")), conference && !isEmpty(conference) && onVideoEnd != null && user.role != null && [3, 4].includes(user.role) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(material.Button, {
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
  var savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(function () {
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
  var _useState = React.useState(false),
    scrollDownButton = _useState[0],
    setScrollDownButton = _useState[1];
  var lastScrollDistanceToBottomRef = React.useRef();
  var lastMessageCount = React.useRef();
  var messageCount = (messages == null ? void 0 : messages.length) || 0;
  var lastMessage = messageCount && messages[messageCount - 1];
  var SCROLL_THRESHOLD = 900;
  var scrollDown = React.useCallback(function () {
    if (scrollableRootRef.current) {
      scrollableRootRef.current.scrollTop = scrollableRootRef.current.scrollHeight;
      if (onEnterRoom && chat) {
        onEnterRoom(chat);
      }
    }
  }, [chatId, onEnterRoom]);
  var handleRootScroll = React.useCallback(function () {
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
  React.useEffect(function () {
    if (chatId && scrollableRootRef.current && messages.length) {
      var _messages$cdate, _messages;
      setIsVisible((_messages$cdate = (_messages = messages[messageCount - 1]) == null ? void 0 : _messages.cdate) != null ? _messages$cdate : "");
      scrollDown();
    }
  }, [chatId]);
  // ------ keep the scroll position and lastMessageCount when messageCount changed ----------
  React.useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement(material.Box, {
    sx: {
      position: "relative",
      height: 0,
      margin: "8px 0"
    }
  }, /*#__PURE__*/React__default.createElement(material.Fade, {
    in: !!date,
    timeout: 2000
  }, /*#__PURE__*/React__default.createElement(material.Alert, {
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
  }, /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "h6",
    textAlign: "center"
  }, date && dayjs(date).format("DD.MM.YYYY")))));
};

var useStyles$b = /*#__PURE__*/styles.makeStyles(function (theme) {
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
  return /*#__PURE__*/React__default.createElement(material.Box, {
    className: classes.arrowDown,
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(material.Fab, {
    color: "info",
    "aria-label": "scroll-down",
    size: "medium",
    onClick: onScrollDown
  }, /*#__PURE__*/React__default.createElement(KeyboardArrowDownIcon, null)), unreadCount > 0 && /*#__PURE__*/React__default.createElement(material.Fab, {
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
  }, /*#__PURE__*/React__default.createElement(material.Typography, {
    variant: "body2",
    sx: function sx(theme) {
      return {
        color: theme.palette.background.default
      };
    }
  }, unreadCount)));
};

var useStyles$c = /*#__PURE__*/styles.makeStyles(function (theme) {
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
  }), /*#__PURE__*/React__default.createElement(material.CardContent, {
    className: classes.messageListOuter,
    ref: rootRefSetter,
    onScroll: handleRootScroll
  }, /*#__PURE__*/React__default.createElement(material.List, {
    className: classes.messageList
  }, hasNextPage && /*#__PURE__*/React__default.createElement(material.ListItem, {
    ref: infiniteRef,
    sx: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/React__default.createElement(material.CircularProgress, null)), messageList), /*#__PURE__*/React__default.createElement(MessageScrollButton, {
    visible: scrollDownButton,
    unreadCount: unreadCount,
    onScrollDown: scrollDown
  }), viewerData.visible && /*#__PURE__*/React__default.createElement(material.Backdrop, {
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

var useStyles$d = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var _React$useState = React__default.useState(initialMenuState),
    menuState = _React$useState[0],
    setMenuState = _React$useState[1];
  var handleMenuClose = function handleMenuClose() {
    setMenuState(initialMenuState);
  };
  var handleCopy = React.useCallback(function () {
    var message = menuState.message;
    setMenuState(initialMenuState);
    if (!message) return;
    navigator.clipboard.writeText(message.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);
  var handleDelete = React.useCallback(function () {
    var message = menuState.message;
    setMenuState(initialMenuState);
    if (props.onMessageDelete && chat && message) props.onMessageDelete(chat, message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState.message]);
  return /*#__PURE__*/React__default.createElement(material.Card, {
    elevation: 1,
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(material.Box, {
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
  })), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(RoomMessageList, {
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
  }, t("CHAT.MESSAGE.MENU.COPY")), /*#__PURE__*/React__default.createElement(material.ListItemIcon, {
    className: classes.flexEnd
  }, /*#__PURE__*/React__default.createElement(FileCopyIcon, {
    fontSize: "small"
  }))), /*#__PURE__*/React__default.createElement(material.MenuItem, {
    onClick: handleDelete,
    disabled: !menuState.canDelete
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.flexAll
  }, t("CHAT.MESSAGE.MENU.DELETE")), /*#__PURE__*/React__default.createElement(material.ListItemIcon, {
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
  var value = React.useMemo(function () {
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
var RestContext = /*#__PURE__*/React.createContext(initialContext);
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
  var _useContext = React.useContext(ChatContext),
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
  var getPrivateMessages = React.useCallback(/*#__PURE__*/function () {
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
  var getGroupMessages = React.useCallback(/*#__PURE__*/function () {
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
  var value = React.useMemo(function () {
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

var useStyles$e = /*#__PURE__*/styles.makeStyles(function (theme) {
  return styles.createStyles({
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
var TypingBadge = /*#__PURE__*/styles.withStyles(function (theme) {
  return styles.createStyles({
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
})(material.Badge);
var OnlineBadge = /*#__PURE__*/styles.withStyles(function (theme) {
  return styles.createStyles({
    badge: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 0 0 2px " + theme.palette.background.paper
    }
  });
})(material.Badge);
var contactAvatar = function contactAvatar(apiUrl, contact, typing) {
  var avatar = /*#__PURE__*/React__default.createElement(material.Avatar, {
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var apiUrl = props.apiUrl,
    chat = props.chat,
    typing = props.typing;
  var roomName = getChatName(chat);
  var avatar = chat.groupId ? /*#__PURE__*/React__default.createElement(material.Avatar, {
    alt: roomName,
    className: classes.avatarGroup
  }, /*#__PURE__*/React__default.createElement(GroupIcon, null), " ") : contactAvatar(apiUrl, chat, typing);
  var lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
  var roomText = getMessageText(lastMessage, t);
  var roomTime = lastMessage == null ? void 0 : lastMessage.cdate;
  return /*#__PURE__*/React__default.createElement(material.ListItemButton, {
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

var useStyles$f = /*#__PURE__*/styles.makeStyles(function (theme) {
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var _useContext = React.useContext(RestContext),
    apiUrl = _useContext.apiUrl;
  // Add search state
  var _useState = React.useState(""),
    searchFilter = _useState[0],
    setSearchFilter = _useState[1];
  // Memoize the chat list
  var allContacts = React__default.useMemo(function () {
    return getRoomList(user.userId, groups, contacts, searchFilter);
  }, [user.userId, groups, contacts, searchFilter]);
  var onSearchChange = function onSearchChange(e) {
    setSearchFilter(e.target.value);
  };
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
      onChange: onSearchChange,
      value: searchFilter
    })
  }), /*#__PURE__*/React__default.createElement(material.Divider, null), /*#__PURE__*/React__default.createElement(List, {
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

var useStyles$g = /*#__PURE__*/styles.makeStyles(function (theme) {
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
  return /*#__PURE__*/React__default.createElement(material.Container, {
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
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, conferenceActive && /*#__PURE__*/React__default.createElement(material.Box, {
      sx: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 1400,
        top: user != null && user.role && [3, 4].includes(user.role) ? -56 : -12,
        left: user != null && user.role && [3, 4].includes(user.role) ? 32 : 218
      }
    }, /*#__PURE__*/React__default.createElement(material.Box, {
      display: "flex",
      flexDirection: "row",
      columnGap: 3,
      my: 3,
      sx: {
        position: "relative"
      }
    }, /*#__PURE__*/React__default.createElement(material.IconButton, {
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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(material.Grid2, {
    container: true,
    spacing: 1,
    sx: {
      height: "100%"
    }
  }, (conferenceActive || !hideRooms) && /*#__PURE__*/React__default.createElement(material.Grid2, {
    size: activeRoom ? {
      sm: conferenceActive ? 6 : 4,
      lg: conferenceActive ? 6 : 4,
      xl: conferenceActive ? 6 : 3
    } : 12,
    sx: {
      height: "100%"
    }
  }, contactsList), activeRoom && /*#__PURE__*/React__default.createElement(material.Grid2, {
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
  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;
  var isMobile = material.useMediaQuery(function (theme) {
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
  return !isMobile ? /*#__PURE__*/React__default.createElement(material.Button, {
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
  }, title) : /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: title
  }, /*#__PURE__*/React__default.createElement(material.IconButton, {
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
  return /*#__PURE__*/React.createElement(material.Box, {
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
  }, /*#__PURE__*/React.createElement(material.Box, {
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
    my: 3,
    sx: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(CheckAudiVideoPerm, {
    audio: true,
    video: false
  }), /*#__PURE__*/React.createElement(CheckAudiVideoPerm, {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Conference, {
      conference: conference.data,
      onClose: onClose,
      langCode: user.langCode
    }), (!activeRoom && isMobile || !isMobile) && /*#__PURE__*/React.createElement(ConferenceControls, {
      user: user
    }));
  }
  return /*#__PURE__*/React.createElement(ConferenceCall, {
    apiUrl: apiUrl,
    contact: user.userId === conference.data.userId ? conference.data.contactId : conference.data.userId,
    conference: conference.data,
    onAccept: onAccept
  });
};

var useSocket = function useSocket(url, path, accessToken) {
  var _useState = React.useState(null),
    socket = _useState[0],
    setSocket = _useState[1];
  var connectSocket = React.useCallback(function () {
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
  var disconnectSocket = React.useCallback(function () {
    // console.log("do disconnect");
    socket == null ? void 0 : socket.disconnect();
    setSocket(null);
  }, [socket]);
  var _useState2 = React.useState(false),
    online = _useState2[0],
    setOnline = _useState2[1];
  React.useEffect(function () {
    setOnline(socket != null && socket.connected ? true : false);
  }, [socket]);
  React.useEffect(function () {
    socket == null ? void 0 : socket.on("connect", function () {
      // console.log("connected");
      setOnline(true);
      socket.emit("chatData");
    });
  }, [socket]);
  React.useEffect(function () {
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
var SocketContext = /*#__PURE__*/React.createContext(initialContext$1);
var SocketProvider = function SocketProvider(_ref) {
  var _state$activeRoom2, _state$activeRoom3;
  var wsUrl = _ref.wsUrl,
    wsPath = _ref.wsPath,
    baseUrl = _ref.baseUrl,
    children = _ref.children;
  var _useContext = React.useContext(ChatContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var _useSocket = useSocket(wsUrl, wsPath, state.token),
    socket = _useSocket.socket,
    online = _useSocket.online,
    disconnectSocket = _useSocket.disconnectSocket,
    connectSocket = _useSocket.connectSocket;
  React.useEffect(function () {
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
  React.useEffect(function () {
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
  React.useEffect(function () {
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
  React.useEffect(function () {
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
  var value = React.useMemo(function () {
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
  var isMobile = material.useMediaQuery(function (theme) {
    return theme.breakpoints.down("md");
  });
  // Update context usage
  var _React$useContext = React.useContext(ChatContext),
    state = _React$useContext.state,
    dispatch = _React$useContext.dispatch;
  var _React$useContext2 = React.useContext(SocketContext),
    socket = _React$useContext2.socket;
  var _React$useContext3 = React.useContext(RestContext),
    apiUrl = _React$useContext3.apiUrl,
    pageSize = _React$useContext3.pageSize,
    getPrivateMessages = _React$useContext3.getPrivateMessages,
    getGroupMessages = _React$useContext3.getGroupMessages,
    getUserByMmk = _React$useContext3.getUserByMmk;
  // const [ringAudio] = React.useState(getRingAudio());
  var onExitActiveRoom = React.useCallback(function () {
    dispatch({
      type: "SET_ACTIVE_ROOM",
      payload: {}
    });
  }, [dispatch]);
  // Добавляем утилитарную функцию для безопасной отправки сообщений через сокет
  var emitSocketEvent = React.useCallback(function (eventName, data) {
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
  var onNeedMoreMessages = React.useCallback(/*#__PURE__*/function () {
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
  var onMessageDelete = React.useCallback(function (chat, message) {
    emitSocketEvent("revokeMessage", {
      groupId: isGroup(chat) ? chat.groupId : undefined,
      contactId: chat.userId,
      _id: message._id
    });
  }, [emitSocketEvent]);
  var onTyping = React.useCallback(function (chat) {
    emitSocketEvent("typing", {
      groupId: isGroup(chat) ? chat.groupId : undefined,
      contactId: chat.userId
    });
  }, [emitSocketEvent]);
  var onSendMessage = React.useCallback(function (chat, data) {
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
  var onEnterRoom = React.useCallback(function (chat) {
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
  var onChangeChat = React.useCallback(function (chat) {
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
  var onVideoCall = React.useCallback(function (chat, visitId, recreate) {
    emitSocketEvent("startConference", {
      groupId: isGroup(chat) ? chat.groupId : undefined,
      contactId: chat.userId,
      visitId: visitId,
      recreate: recreate
    });
  }, [emitSocketEvent]);
  var onVideoEnd = React.useCallback(function (conference) {
    if (conference != null && conference.id) {
      emitSocketEvent("stopConference", {
        id: conference.id
      });
    }
  }, [emitSocketEvent]);
  var onConferencePause = React.useCallback(function (conference) {
    if (conference != null && conference.id) {
      emitSocketEvent("pauseConference", {
        id: conference.id
      });
    }
  }, [emitSocketEvent]);
  var onConferenceCallAccept = React.useCallback(function (conference) {
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
  var onOperatorAdd = React.useCallback(function (group, operator) {
    emitSocketEvent("addOperator", {
      groupId: group.groupId,
      operatorId: operator.userId
    });
  }, [emitSocketEvent]);
  var onLeaveGroup = React.useCallback(function (group) {
    emitSocketEvent("deleteGroup", {
      groupId: group.groupId
    });
  }, [emitSocketEvent]);
  // First useEffect for initialization
  React.useEffect(function () {
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
  var renderRoom = state.activeRoom != null && /*#__PURE__*/React.createElement(Room, {
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
  return /*#__PURE__*/React.createElement(ChatContainer, null, /*#__PURE__*/React.createElement(ChatLayout, {
    isMobile: isMobile,
    conferenceActive: !!((_state$conference$dat = state.conference.data) != null && _state$conference$dat.id),
    hideRooms: hideRooms,
    contactsList: ((_state$conference$dat2 = state.conference.data) == null ? void 0 : _state$conference$dat2.id) != null && activeGroupId == null ? /*#__PURE__*/React.createElement(ConferenceSection, {
      conference: state.conference,
      onClose: onConferencePause,
      onAccept: onConferenceCallAccept,
      user: state.user,
      activeRoom: state.activeRoom,
      onChangeChat: onChangeChat,
      apiUrl: apiUrl,
      isMobile: isMobile
    }) : /*#__PURE__*/React.createElement(RoomList, {
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
  }), /*#__PURE__*/React.createElement(ChatAlert, null));
};

var TAX_REFUND = {
	SUBMIT_OK: "Ваша заявка отправлена",
	ERR: "Что-то пошло не так. Возможно отправляемый файл слишком большой"
};
var NOTIFY_SETTINGS = {
	FORM_TITLE: "Notification Settings",
	FORM_SUBTITLE: "Here you can enable or disable the notifications you need",
	SAVE_OK: "Settings saved",
	IS_EMPTY: "Settings unavailable",
	Visit: "Visits",
	Mmk: "Electronic medical card",
	Email: "By Email",
	Sms: "By Sms",
	Invoice: "Invoices",
	OnlineConsultation: "Online consultation",
	External: "Information message"
};
var ERROR_CODES = {
	"404": "File not found",
	"500": "Internal server error",
	ERROR: "Error",
	"4XX": "Invalid request",
	"5XX": "Service temporarily suspended"
};
var BOTTOM = {
	COPY: "©MEDIALOGIS S.A. {{year}}. All rights reserved."
};
var MAP = {
	ERROR: "Unfortunately, the service is unavailable at the moment, please try again later"
};
var DRUGS = {
	FILTER_CURRENT: "Current",
	FILTER_PAST: "Past",
	FILTER_FUTURE: "Future",
	FILTER_ALL: "All",
	LEFT_DAYS: "Days left",
	INTAKES: "Medication schedule",
	DO_STATE_DONE: "Mark drug intake",
	DO_STATE_ACTIVE: "Remove the mark on the drug intake",
	STATE_CHANGED_ACTIVE: "The mark about the drug intake has been removed",
	STATE_CHANGED_DONE: "Drug intake marked",
	CONFIRM_CHANGE_STATE_ACTIVE: "Confirm the deletion of the mark on the drug intake",
	CONFIRM_CHANGE_STATE_DONE: "Confirm that the drug is marked",
	OF: "of"
};
var COMPONENT = {
	NEAR: "next to",
	SORT_DATE: "по дате",
	LINK_TO_ACTION: "To the promotion page",
	APPOINTMENT_DATE: "Appointment date",
	ARIA_DATE_LABEL: "Choose a Date",
	BIRTH_DATE: "Date of Birth",
	BROWSER_NOT_SUUPORT_FRAMES: "Your browser does not support inline frames!",
	BUTTON_SAVE: "Save",
	BUT_CANCEL: "Cancel",
	BUT_CLOSE: "Close",
	BUT_CONFIRM: "Yes",
	BUT_MAKE_APPONTMENT: "Make an appointment",
	BUT_CONFIRM_APPONTMENT: "Confirm Appointment",
	BUT_UPDATE: "Update",
	BUT_FILTERS: "Filters",
	CLINICS: "Clinics",
	DATAILS: "Details",
	DATA_SAVED: "Data Saved",
	DEPARTMENTS: "Department",
	DOCTOR_FIO: "Doctor",
	FORM_EMAIL: "Email",
	FORM_EMAIL_OR_PHONE: "Email or Phone",
	FORM_EMAIL_FOR_CONFIRM: "Enter your Email to receive a confirmation code",
	FORM_GENDER: "Gender",
	FORM_GENDER_F: "Female",
	FORM_GENDER_M: "Male",
	FORM_GENDER_F_PET: "Female",
	FORM_GENDER_M_PET: "Male",
	FORM_LAST_NAME: "Last name",
	FORM_LAST_NAME_PET: "Type",
	FORM_MIDDLE_NAME: "Patronymic",
	FORM_NAME: "Name",
	FORM_NAME_PET: "Nickname",
	FORM_PASS: "Password",
	FORM_PASS_ADD: "Additional password",
	FORM_REPASS: "Retype Password",
	FORM_PHONE: "Phone",
	FORM_VISIT_KIND: "Types of Reception",
	FORM_VISIT_KIND_DURATION: "Duration",
	FORM_VISIT_KIND_PRICE: "Cost",
	EMPTY_BIRTHDAY: "Enter date of birth",
	INVALID_BIRTH_DATE: "Invalid date of birth",
	EMPTY_LAST_NAME: "Enter your last name",
	EMPTY_LAST_NAME_PET: "Enter the type of pet",
	EMPTY_MIDDLE_NAME: "Enter the patronymic",
	EMPTY_MKID: "Please select a name",
	EMPTY_NAME: "Enter a name",
	EMPTY_NAME_PET: "Enter the pet's nickname",
	INCORECT_PHONE: "Invalid phone number",
	EMPTY_PHONE: "Enter phone number",
	SPECS: "Search by specialization",
	SPECS_SEL: "Choose a specialization",
	SPEC_OR_DOCNAME: "Specialty or Name",
	BUT_ICAME: "I've come",
	FILTER_NOTICE_TYPES: "Notification Type",
	MED_DEP: "Select Department",
	CONFIRM_CODE: "Confirmation Code",
	TITLE_CONFIRM_CODE: "Enter the confirmation code",
	BACK_ONE_STEP: "Go back one step",
	BUTTON_NEXT: "Next",
	BUTTON_SEE_APPOINMENT: "Check the Appointment",
	BUTTON_GET_CONFIRM_CODE: "Get confirmation code",
	BUT_SEND_EMAIL_DOCTOR: "Submit an application",
	FILE_TOO_MATCH: "File size must be less than {{maxFileSize}}Mb",
	NEEDED_EMAIL_OR_PHONE: "You must fill in your email or phone number",
	NEEDED_PHONE_FOR_APP: "To make an appointment, you must fill in the phone number",
	HAS_MESS_OPER: "You have messages from the Receptionist",
	BUT_OPEN_CHAT: "Open Chat",
	CONTACT_ME: "Submit an application",
	SEARCH_FIO: "Search by full name",
	SEARCH: "Search",
	FORM_AGEGROUP: "Select Doctor Type",
	FORM_AGEGROUP_TITLE0: "Any",
	FORM_AGEGROUP_TITLE1: "Adult",
	FORM_AGEGROUP_TITLE2: "Child",
	FORM_MAKE_APPOINTMENT_REG: "Apply and Register",
	A_U_HAVE_ACCOUN: "Do you already have an account?",
	FORM_OMS_NAME: "OMS company name",
	FORM_OMS_NUMBER: "OMS policy number",
	FORM_DMS_NAME: "DMS company name",
	FORM_DMS_NUMBER: "DMS policy number",
	FORM_DMS_COMMENT: "DMS policy",
	FORM_DMS_COMMENT_UNTIL: "Untill",
	FORM_USER_ID: "Ваш ID",
	INVALID_OMS_NUMBER: "Invalid OMS number",
	NEED_DMS_NUMBER: "Please fill in the DMS policy number",
	NEED_OMS_NUMBER: "Please fill in the OMS policy number",
	FORM_DMS_END_DATE: "DMS policy end date",
	INVALID_DMS_END_DATE: "Invalid DMS policy end date",
	NEED_DMS_NAME: "Please fill in the name of the DMS company",
	NEED_AGE_GR: "You need to select a doctor type",
	REFER_BUTT: "To the clinic's website"
};
var CALL_DOCTOR = {
	PRIVATE_HOUSE: "Private house",
	FORM_TITLE: "Fill out the doctor's call form",
	FORM_CALL_DATE: "Specify the desired date",
	FORM_REASON: "Description of the problem, symptoms, complaints",
	FORM_ADDRESS: "Specify the address",
	FORM_COMMENTS: "Comments",
	BUTTON_CALL_DOCTOR: "Send",
	INVALID_CALL_DATE: "Incorrect doctor's call date",
	INVALID_DMS_END_DATE: "Incorrect policy end date",
	EMPTY_CITY: "Please fill in the city",
	EMPTY_STREET: "Please fill in the street",
	EMPTY_HOUSE: "Please fill in the house number",
	EMPTY_FLAT: "Please fill in the apartment",
	EMPTY_ENTRANCE: "Please fill in the entrance",
	EMPTY_FLOOR: "Please fill in the floor",
	EMPTY_DOORPHONE: "Please fill in the intercom",
	EMPTY_REASON: "Please fill in the reason for the call",
	FORM_SENT_OK: "Application accepted.",
	INFO_FOR_DOC: "For the doctor",
	ADDRESS: "Address",
	FORM_ADDRESS_CITY: "City",
	FORM_ADDRESS_STREET: "Street",
	FORM_ADDRESS_HOUSE: "House number",
	FORM_ADDRESS_APPARPMENT: "Apartment",
	FORM_ADDRESS_FLOOR: "Floor",
	FORM_ADDRESS_ENTRANCE: "Entrance",
	FORM_ADDRESS_DOORPHONE: "Intercom",
	FORM_HAS_COVID19: "COVID-19 test",
	FORM_YES_COVID19: "COVID-19 positive test",
	FORM_NO_COVID19: "COVID-19 Negative test",
	NEED_HAS_COVID: "COVID-19 test must be selected"
};
var EMPTY_DATA = {
	NO_OPTIONS: "No options",
	NO_DOCTORS: "According to the selected filters, there are no doctors with available slots or specialists have not been found",
	NO_DOCTORS_CURRENTLY: "There are currently no specialists",
	NO_EVENTS: "There are no events at this time",
	NO_INVOICES: "No Invoices at this time",
	NO_INVOICE: "No such Invoice #{{invoiceId}} at this time",
	NO_PROMO: "There are currently no promotions",
	NO_SLOTS: "Unfortunately, for the selected date, the doctor does not have free slots for an appointment. Choose another date or leave us your contacts and we will call you back to offer other options.",
	NO_VISIT_KIND: "An appointment with a doctor is possible only through an operator. Leave us your contacts and we will call you back.",
	NO_NOTIFICATIONS: "No notifications. Please change filter options",
	NO_PRESCRIBEDDRUGS: "No drugs prescribed",
	NO_DIR_DOCS: "There are currently no doctors for this area"
};
var EVENTS_VISITS = {
	FILTER_FUTURE: "Future Visits",
	FILTER_SHOW_CANCELED: "Canceled",
	FILTER_TYPE: "Type of visit",
	FILTER_TYPE_ALL: "All",
	FILTER_TYPE_OFFLINE: "Offline",
	FILTER_TYPE_ONLINE: "Online",
	FILTER_ROWS: "Record type",
	FILTER_ROWS_ALL: "All",
	FILTER_ROWS_DOC: "Doctor",
	TITLE_ONLINE_CONF: "Online consultation",
	PANEL_ONLINE_CONF: "The online consultation has begun",
	TITLE_VISIT: "Visit",
	TITLE_VISIT_CANCELED: "Canceled visit",
	VISIT_CANCELED: "The appointment has been canceled.",
	ICAME_VISIT_OK: "You have confirmed your presence",
	INVOICE_CREATED: "Invoice created successfully",
	PAY_INVOICE: "Pay invoice",
	PERSONAL_NOTIFICATIONS: "Private messages"
};
var HEADER = {
	CONT_NEW_MSS: "{{unreadCount}} New",
	MESSAGES: "Messages",
	ALERT_SITE_WILL_REALOAD: "A new version of the site is available, click «Yes» to update"
};
var FEEDBACK = {
	FORM_TITLE: "Report a bug",
	FORM_SUBTITLE: "We are constantly working on improvements, your opinion is very important to us",
	FORM_SUBMIT_OK: "Thank you, your application is accepted! We will contact you soon by the specified email",
	FORM_FIO: "Your Name",
	FORM_EMAIL: "Email",
	"FORM_TEXT ERROR": "Describe the problem",
	OK: "The email has been sent",
	EMPTY_EMAIL: "Enter the email for feedback. If there is no mail, technical support will not be able to respond to the request"
};
var HOME = {
	FEEDBACK: "Report a bug",
	AMBULANCE: "Call an ambulance",
	CALL_DOCTOR: "Call doctor",
	BRANCH1: "Something bothering you?",
	BRANCH2: "Sign up to a specialist",
	BRANCH3: "Now Online",
	BRANCH4: "Upcoming Events",
	BRANCH5: "Promotions",
	COLD: "Cold",
	HEADACHE: "Headache",
	MAKE_APPOINTMENT: "Make an appointment",
	OTOLARYNGOLOGIST: "otolaryngologist",
	OTOLARYNGOLOGIST_TEXT: "Specialist in ear, nose and throat diseases",
	SICKCHILD: "Sick child",
	START_CHAT: "Start Chat",
	THERAPIST: "therapist",
	THERAPIST_TEXT: "General Specialist",
	TRAUMATOLOGIST: "traumatologist",
	TRAUMATOLOGIST_TEXT: "Specialist in musculoskeletal injuries",
	CALL: "Call",
	COVID: "COVID",
	APPOINTMENT: "Appointment",
	CLINIC_PHONE: "Clinic Phone"
};
var INVOICES = {
	SUCCESS: "Payment was successful",
	ERROR: "Payment failed",
	BILL_PAYMENT: "Bill Payment",
	COST: "Service cost",
	FILTER_ALL: "All",
	FILTER_PAID: "Paid",
	FILTER_UNPAID: "Unpaid",
	INVOICE_NO: "Invoice #",
	QUANTITY: "Quantity",
	TO_PAY: "To pay",
	BANNER_CERT_TEXT: "In order for you to make an online payment, install the Russian certificates of Ministry of Digital Development",
	BANNER_CERT_BUTTON: "How to install the certificate",
	CLOSE_WIN: "Close the window",
	CLOSE_WIN_ERR: "Close the window and try again"
};
var MAINMENU = {
	NOTIFY: "Notification Settings",
	HOME: "Main page",
	APPOINTMENT: "Make an Visit",
	BLANK: "Application form",
	EVENTS: "Events",
	INVOICES: "Invoices",
	MED_CARD: "Medical Record",
	MED_CARD_H1: "Medical Record",
	PRESCRIBED_DRUGS: "Prescribed Drugs",
	PROFILE: "Personal Information",
	CLINIC_MAP: "On the map",
	SIGNOUT: "Sing Out",
	DIRECTIONS: "Directions",
	CHAT_OPER: "Chat with the receptionist",
	USER_SESSIONS: "User sessions",
	FAQ: "FAQ",
	SETTINGS: "Settings",
	CALYPSO: "Calypso forms",
	FEEDBACK: "Report a bug",
	TAX_REFUND: "Tax refund"
};
var SESSIONS = {
	REMOVE: "Remove",
	NO_SESSIONS_RECORDS: "No sessions"
};
var MMK = {
	APPOINTMENT: "Appointment",
	NO_MMK_RECORDS: "No entries",
	NO_MMK_RECORDS_COMMENT: "Your electronic medical record (EHR) has been created",
	NO_MMK_RECORDS_COMMENT_PET: "An electronic medical card (EHR) has been created for your pet",
	NO_MMK_RECORDS_COMMENT1: "All changes and new records will be available in this section after requests and visits to the clinic",
	RESULTS: "Results",
	PREVIEW: "Preview",
	DOWNLOAD: "Download",
	NO_MMK_RECORDS_1: "To get access to the electronic medical record, a personal visit to the clinic branch is required",
	NO_MMK_RECORDS_2: "Contact the clinic staff at the reception with an identity document",
	NO_MMK_RECORDS_3: "After contacting the clinic, the consultation history will appear",
	CLOSE_CLINIC: "Find the nearest branch"
};
var DIRECTIONS = {
	DATE_TILL: "till",
	DATE_UNTILL: "untill",
	NO_DIRECTIONS_RECORDS: "You currently have no referrals"
};
var SIGN = {
	CHAT_ALERT: "To continue, you need to log in or register",
	IN_BY_QR: "Enter by QR code",
	IN_BY_QR_LIFETIME: "{{sec}} left",
	IN_BY_QR_INFO: "If you are already logged into the MobiApp app, scan the QR code through the app to quickly log in",
	IN_BY_QR_INFO1: "QR code is imputable and valid for {{sec}} seconds",
	IN_BY_QR_REFRESH: "Refresh",
	CH_BUTTON_SUBMIT: "Change Password",
	CH_CONFIRM_CODE: "Password change confirmation code",
	CH_CONFIRM_CODE_SENT_EMAIL: "Enter the confirmation code sent by Email",
	CH_CONFIRM_CODE_SENT_SMS: "Enter the confirmation code sent by SMS",
	CH_CONFIRM_CODE_SENT_VOICE: "Enter the confirmation code that the robot will call by phone",
	CH_CONFIRM_CODE_SENT: "Enter the confirmation code sent by {{deliveryMethod}}",
	CH_CONFIRM_CODE_SET_CHANGE_PHONE: "Authorization will be via mobile phone",
	CH_CONFIRM_CODE_SENT_CHANGE_EMAIL: "Authorization will be via Email",
	CH_CAN_CHANGE_PHONE_EMAIL_ONLY: "You cannot change your Phone and Email at the same time. Change one thing, save it, then another",
	CH_PASS_BUTTON: "Change Password",
	CH_PASS_OK: "Successful password change",
	CH_EMAIL_NOT_CONFIRM: "New Email ({{email}}) has not been confirmed",
	CH_PHONE_NOT_CONFIRM: "New Phone ({{phone}}) has not been confirmed",
	IN_BUTTON: "Sign In",
	IN_DOC_ENTER: "Doctor login",
	IN_ERRORS: "Something is wrong with your username or password :(",
	IN_FOGOT_PASS: "Forgot your password?",
	IN_HEAD: "Your online doctor for you and your family",
	IN_HEAD_PET: "Your doctor is online for your pets",
	IN_HEAD_DOC: "Doctor login",
	IN_HEAD_DOC1: "Please identify yourself",
	IN_PATIENT_ENTER: "Patient login",
	IN_TEXT: "This is the latest web service for those who value their health and time, and take care of their loved ones. You can safely and effectively manage your medical records, make appointments for consultations and diagnostic and treatment activities for yourself and family members from any geographical location with Internet access.",
	IN_TEXT_PET: "This is the latest web service for those who value the health of pets and their time. You can safely and effectively manage your pets' medical records, make appointments for consultations and diagnostic and treatment activities for pets from any geographical location with Internet access.",
	IN_PASS_HAS_BEEN_EXPIRED: "Please change your temporary password",
	IN_EISA: "Access to e-government",
	IN_EMPTY_CONFIRM_CODE: "Please fill in the confirmation code",
	UP_AGEEMENT: "I accept",
	UP_AGEEMENT1: "terms of the agreement",
	UP_BUTTON: "Sing Up",
	UP_BUTTON_SUBMIT: "Create Account",
	UP_EMAIL_ALREADY_REG: "This email is already registered",
	UP_EMPTY_EMAIL: "Enter email",
	UP_EMPTY_PHONE: "Enter phone",
	UP_EMPTY_GENDER: "Select gender",
	UP_EMPTY_EMAIL_OR_PHONE: "Enter email or phone",
	UP_NOT_VALID_EMAIL_OR_PHONE: "Invalid email or phone number",
	UP_EMPTY_PASS: "Enter Password",
	UP_MAY_LOGIN: "You can Sing In",
	UP_NOT_MATCH_PASS: "Passwords do not match",
	UP_NOT_VALID_EMAIL: "Invalid email",
	UP_NOT_VALID_PHONE: "Invalid phone",
	UP_NOT_VALID_CONFIRM_CODE: "Enter confirmation code",
	UP_NOT_VALID_PASS: "Password must contain: at least one number, at least one Latin letter in lower and upper case, at least one special character: ! # $ % & * , . @  ^ _  -  and must be at least 8 characters",
	UP_OK: "Successful registration",
	UP_SUBMIT_CONFIRM: "Confirm",
	UP_TITLE_LIC_AGR: "License Agreement",
	UP_WRONG_LOG_OR_PASS: "The combination of Email or password is incorrect",
	UP_NOT_VALID_NAME: "Invalid name",
	UP_NOT_VALID_LAST_NAME: "Invalid last name",
	UP_NOT_VALID_MIDDLE_NAME: "Invalid middle name",
	UP_CANNOT_BE_SAME: "Last name and first name cannot be the same",
	UP_ONE_DIGIT: "at least one number",
	UP_ONE_UPPER_LETTER: "at least one uppercase latin letter",
	UP_ONE_LOWECASE_LAEER: "at least one lowercase latin letter",
	UP_ONE_SYMBOL: "at least one special character: ! # $ % & * , . @  ^ _  - ",
	UP_MIN_LENGTH: "at least 8 of the above characters",
	UP_CONFIRM_CODE_WRONG: "Invalid confirmation code",
	UP_HELPER_TEXT: "To fully function in the system, you need to register. After full registration in the system, you will have an electronic medical record and other system functions"
};
var VISIT = {
	COST: "Cost",
	FORM_REASON: "Reason for the Request",
	EMPTY_REASON: "Please fill in the reason for the Request",
	AGE_GROUP: "Age group",
	AGE_GROUP_CHILD: "up to {{age}} years",
	AGE_GROUP_ADULT: "from {{age}} years",
	AGE_GROUP_ANY: "any",
	AGE_IS_EMPTY_DOC_CHILD: "This doctor has age restrictions (under 18), but your age is not specified. Try to fill in the age in the profile or contact the registry.",
	AGE_GROUP_ALERT: "Your profile is not suitable for the age category.",
	AGE_GROUP_ALERT_MORE: "Your profile is not suitable for the age category. You can change the profile of the record by clicking on your avatar near the last name at the top of the screen. If you are a representative of another person, click the \"I am a representative\" checkbox and fill out the form.",
	ANONYMOUS_NOT_ENABLED_NOTE: "Please contact the registry",
	LOADING: "Loading",
	SET_USER_DATA: "Enter your details to continue",
	ALERT_OK: "You are making an appointment",
	ALERT_REQ_EMAIL_DOCTOR_OK: "The request has been sent. To confirm the recording, wait for the operator to call.",
	APPOINTMENTS: "Appointments",
	CONFIRM_CANCEL: "Are you sure you want to cancel the appointment?",
	CONSULT: "Consultation",
	FAVS: "Favorites",
	CACHED: "Get slots from cache",
	FROM: "From",
	ONLINE: "Online",
	INCLINIC: "In Clinic",
	TYPE: "Visit type",
	CONFIRM_ICAME: "Are you confirm?",
	CONF_IS_EXPIRED: "This conference has expired",
	BUT_CREATE_INVOICE: "Pay invoice",
	CABINET: "Cabinet",
	CONFIRM_CREATE_INVOICE: "The formation of the invoice for the visit will be queued. Upon its completion, you will receive a notification. Confirm invoice creation. ",
	WITH_SLOTS_ONLY: "With slots only",
	CR_PATIENT: "Patient",
	CR_DOCTOR: "Doctor",
	CR_SPEC: "Specialization",
	CR_VISITKIND: "Reception type",
	CR_DATE: "Reception date",
	CR_ADDRESS: "Clinic address",
	CR_OFFICE: "Office",
	DR_WORKEXPERIENCE: "{{yars}} years of experience",
	DR_EXPERIENCE: "Work experience",
	DR_EDUCATION: "Education",
	DR_GRADUATE: "Graduate",
	DR_TRAINEESHIP: "Traineeship",
	DR_CONFERENCES: "Conferences",
	DR_PROFESSIONALSKILLIMPROVEMENT: "Professional Skill Improvement",
	"DR_WORK EXPERIENCE_PET": "",
	DR_EXPERIENCE_PET: "UNIVERSITY",
	DR_EDUCATION_PET: "Specialization",
	DR_GRADUATE_PET: "Work experience ({{yars}} years)",
	DR_TRAINEESHIP_PET: "Diploma specialty",
	DR_CONFERENCES_PET: "Additional education",
	SLOTS: "Free slots",
	REVIEWS_HEADER: "Reviews",
	REVIEWS_HAS_NOT: "No reviews",
	REVIEW_SET: "Leave a review and rating",
	REVIEW_SENDED: "Your review has been sent",
	REVIEW_TO_FAVS: "Favorite",
	REVIEW_RATING: "Review rating",
	REVIEW_TEXT: "Review",
	REVIEW_SUBMIT: "Submit",
	REVIEW_ADDED: "Thank you, your feedback will be taken into account",
	REVIEW_FAV_KEEPED: "This doctor has been added to Favorites, you can use the \"Favorites only\" filter to quickly find a doctor",
	REVIEW_FAV_REMOVED: "This doctor has been removed from Favorites",
	ORDER: "Slots first",
	WAITING_THE_CUSTOM_CHECK: "Wait. There is a check on the possibility of providing services",
	AGREE_PAID_SERVICES: "I agree with the possibility of providing paid services",
	IM_CHILD_REPRESENTATIVE: "I am a representative",
	ENTER_CHILD_DATA: "Enter another person's details",
	DATES_MARKED: "The dates marked with the indicator (<dot/>) have slots",
	EMPTY_BITH_DATE: "Your date of birth is not filled in. Enter your date of birth via <linkToProfile/>"
};
var PROFILE = {
	ANONYMOUS: "Owner",
	INSURANCE_COMPANY: "Insurance company",
	ARE_U_DELETE_ACCOUNT: "Are you sure you want to delete your account?",
	ACCOUNT_DELETED: "Account has been deleted.",
	BUTTON_DELETE: "Delete account",
	ARE_U_DELETE_PHOTO: "Do you really want to delete the photo?",
	DELETE_PHOTO: "Delete Photo",
	PHOTO_UPLOAD_OK: "Photo uploaded",
	PHOTO_DELETED: "Photo deleted",
	EXPIRED_PASSWORD: "The password is expired. Please change your password",
	ALERT_CHILD_DATA: "The data of associated patients is loaded from a medical institution, you cannot correct it. If you find an error, please contact our specialist by phone"
};
var CONFIRM = {
	OK: "Confirmation successful",
	ERR: "Something went wrong"
};
var WORKSPACE = {
	HEADER: "Select workspace",
	BACK: "Go back"
};
var resourcesEn = {
	TAX_REFUND: TAX_REFUND,
	NOTIFY_SETTINGS: NOTIFY_SETTINGS,
	ERROR_CODES: ERROR_CODES,
	BOTTOM: BOTTOM,
	MAP: MAP,
	DRUGS: DRUGS,
	COMPONENT: COMPONENT,
	CALL_DOCTOR: CALL_DOCTOR,
	EMPTY_DATA: EMPTY_DATA,
	EVENTS_VISITS: EVENTS_VISITS,
	HEADER: HEADER,
	FEEDBACK: FEEDBACK,
	HOME: HOME,
	INVOICES: INVOICES,
	MAINMENU: MAINMENU,
	SESSIONS: SESSIONS,
	MMK: MMK,
	DIRECTIONS: DIRECTIONS,
	SIGN: SIGN,
	VISIT: VISIT,
	PROFILE: PROFILE,
	CONFIRM: CONFIRM,
	WORKSPACE: WORKSPACE
};

var TAX_REFUND$1 = {
	SUBMIT_OK: "Ваша заявка отправлена",
	ERR: "Что-то пошло не так. Возможно отправляемый файл слишком большой"
};
var NOTIFY_SETTINGS$1 = {
	FORM_TITLE: "paramètres de notification",
	FORM_SUBTITLE: "Ici vous pouvez activer ou désactiver les notifications dont vous avez besoin",
	SAVE_OK: "Paramètres enregistrés",
	IS_EMPTY: "paramètres non Disponibles",
	Visit: "Visites",
	Mmk: "dossier médical Électronique",
	Email: "par Email",
	Sms: "par Sms",
	Invoice: "Invoices",
	OnlineConsultation: "Сonsultation en Ligne",
	External: "Message d'Information"
};
var ERROR_CODES$1 = {
	"404": "Fichier introuvable",
	"500": "Erreur Interne du serveur",
	ERROR: "Erreur",
	"4XX": "Requête Incorrecte",
	"5XX": "Service temporairement suspendu"
};
var BOTTOM$1 = {
	COPY: "© MEDIALOGIS S.A. {{year}}. Tous les droits sont réservés."
};
var MAP$1 = {
	ERROR: "Malheureusement, le service n'est pas disponible pour le moment, essayez-le plus tard"
};
var DRUGS$1 = {
	FILTER_CURRENT: "Actuel",
	FILTER_PAST: "Passé",
	FILTER_FUTURE: "Avenir",
	FILTER_ALL: "Tous",
	LEFT_DAYS: "Jours restants",
	INTAKES: "Calendrier des médicaments",
	DO_STATE_DONE: "Marquer la prise de médicament",
	DO_STATE_ACTIVE: "Supprimer la marque sur la prise de médicament",
	STATE_CHANGED_ACTIVE: "La marque concernant la prise de médicament a été supprimée",
	STATE_CHANGED_DONE: "Prise de médicaments marquée",
	CONFIRM_CHANGE_STATE_ACTIVE: "Confirmer la suppression de la marque sur la prise de médicament",
	CONFIRM_CHANGE_STATE_DONE: "Confirmez que le médicament est marqué",
	OF: "sur"
};
var COMPONENT$1 = {
	NEAR: "près de",
	SORT_DATE: "par date",
	LINK_TO_ACTION: "Vers la page de promotion",
	APPOINTMENT_DATE: "Date de rendez-vous",
	ARIA_DATE_LABEL: "Choisissez une date",
	BIRTH_DATE: "Date de naissance",
	BROWSER_NOT_SUUPORT_FRAMES: "Votre navigateur ne prend pas en charge les cadres en ligne!",
	BUTTON_SAVE: "Enregistrer",
	BUT_CANCEL: "Annuler",
	BUT_CLOSE: "Fermer",
	BUT_CONFIRM: "Oui",
	BUT_MAKE_APPONTMENT: "Prendre rendez-vous",
	BUT_CONFIRM_APPONTMENT: "Confirmer le rendez-vous",
	BUT_UPDATE: "Mise à jour",
	BUT_FILTERS: "Filtres",
	CLINICS: "Les établissements",
	DATAILS: "détails",
	DATA_SAVED: "Données enregistrées",
	DEPARTMENTS: "Service",
	DOCTOR_FIO: "Médecin",
	FORM_EMAIL: "E-mail",
	FORM_EMAIL_OR_PHONE: "E-mail ou téléphone",
	FORM_EMAIL_FOR_CONFIRM: "Entrez votre Email pour recevoir un code de confirmation",
	FORM_GENDER: "Sexe",
	FORM_GENDER_F: "Femme",
	FORM_GENDER_M: "Homme",
	FORM_GENDER_F_PET: "Femelle",
	FORM_GENDER_M_PET: "Mâle",
	FORM_LAST_NAME: "Nom de Famille",
	FORM_LAST_NAME_PET: "Vue",
	FORM_MIDDLE_NAME: "Patronyme",
	FORM_NAME: "Nom",
	FORM_NAME_PET: "Surnom",
	FORM_PASS: "Mot de passe",
	FORM_PASS_ADD: "Mot de passe supplémentaire",
	FORM_REPASS: "Retaper le mot de passe",
	FORM_PHONE: "Téléphone",
	FORM_VISIT_KIND: "Types de réception",
	FORM_VISIT_KIND_DURATION: "Durée",
	FORM_VISIT_KIND_PRICE: "Coût",
	EMPTY_BIRTHDAY: "Entrez la date de naissance",
	INVALID_BIRTH_DATE: "Date de naissance invalide",
	EMPTY_LAST_NAME: "Entrez le nom de famille",
	EMPTY_LAST_NAME_PET: "Entrez le type de l'animal",
	EMPTY_MIDDLE_NAME: "Entrez votre prénom",
	EMPTY_MKID: "Veuillez choisir un nom",
	EMPTY_NAME: "Entrez le nom",
	EMPTY_NAME_PET: "Entrez le surnom de l'animal",
	INCORECT_PHONE: "Numéro de téléphone invalide",
	EMPTY_PHONE: "Entrez le numéro de téléphone",
	SPECS: "Recherche par spécialisation",
	SPECS_SEL: "Choisir une spécialisation",
	SPEC_OR_DOCNAME: "Spécialité ou nom",
	BUT_ICAME: "Je suis venu",
	FILTER_NOTICE_TYPES: "Type de notification",
	MED_DEP: "Sélectionner le département",
	TITLE_CONFIRM_CODE: "Entrez le code de confirmation",
	CONFIRM_CODE: "Сode de confirmation",
	BACK_ONE_STEP: "Revenir en arrière",
	BUTTON_NEXT: "Suivant",
	BUTTON_SEE_APPOINMENT: "Vérifier le rendez-vous",
	BUTTON_GET_CONFIRM_CODE: "Obtenir le code de confirmation",
	BUT_SEND_EMAIL_DOCTOR: "Soumettre une candidature",
	FILE_TOO_MATCH: "La taille du fichier doit être inférieure à {{maxFileSize}}Mb",
	NEEDED_EMAIL_OR_PHONE: "Vous devez renseigner votre e-mail ou votre numéro de téléphone",
	NEEDED_PHONE_FOR_APP: "Pour prendre rendez-vous, vous devez renseigner le numéro de téléphone",
	HAS_MESS_OPER: "Vous avez des messages de la Réceptionniste",
	BUT_OPEN_CHAT: "Ouvrir le chat",
	CONTACT_ME: "Soumettre une candidature",
	SEARCH_FIO: "Recherche par nom complet",
	SEARCH: "Rechercher",
	FORM_AGEGROUP: "Sélectionner le type de médecin",
	FORM_AGEGROUP_TITLE0: "Tout",
	FORM_AGEGROUP_TITLE1: "Adulte",
	FORM_AGEGROUP_TITLE2: "Enfant",
	FORM_MAKE_APPOINTMENT_REG: "Postuler et s'inscrire",
	A_U_HAVE_ACCOUN: "Avez-vous déjà un compte ?",
	FORM_OMS_NAME: "Nom de la société OMS",
	FORM_OMS_NUMBER: "Numéro de police OMS",
	FORM_DMS_NAME: "Nom de la société DMS",
	FORM_DMS_NUMBER: "Numéro de police DMS",
	FORM_DMS_COMMENT: "Police DMS",
	FORM_DMS_COMMENT_UNTIL: "Avant",
	FORM_USER_ID: "Votre ID",
	INVALID_OMS_NUMBER: "Numéro OMS invalide",
	NEED_DMS_NUMBER: "Veuillez renseigner le numéro de police DMS",
	NEED_OMS_NUMBER: "Veuillez indiquer le numéro de police OMS",
	FORM_DMS_END_DATE: "Date de fin de la politique DMS",
	INVALID_DMS_END_DATE: "Date de fin de politique DMS non valide",
	NEED_DMS_NAME: "Veuillez renseigner le nom de la société DMS",
	NEED_AGE_GR: "Vous devez sélectionner un type de médecin",
	REFER_BUTT: "Sur le site de la clinique"
};
var CALL_DOCTOR$1 = {
	PRIVATE_HOUSE: "maison Privée",
	FORM_TITLE: "Remplissez le formulaire d'appel du médecin",
	FORM_CALL_DATE: "Spécifiez la date souhaitée",
	FORM_REASON: "Description du problème, symptômes, plaintes",
	FORM_ADDRESS: "Spécifiez l'adresse",
	FORM_COMMENTS: "Commentaires",
	BUTTON_CALL_DOCTOR: "Envoyer",
	INVALID_CALL_DATE: "date d'appel du médecin Incorrecte",
	INVALID_DMS_END_DATE: "date de fin de police Incorrecte",
	EMPTY_CITY: "Veuillez remplir la ville",
	EMPTY_STREET: "Veuillez remplir la rue",
	EMPTY_HOUSE: "veuillez remplir le numéro de la maison",
	EMPTY_FLAT: "Veuillez remplir l'appartement",
	EMPTY_ENTRANCE: "Veuillez remplir l'entrée",
	EMPTY_FLOOR: "veuillez remplir le plancher",
	EMPTY_DOORPHONE: "veuillez remplir l'interphone",
	EMPTY_REASON: "veuillez remplir la raison de l'appel",
	FORM_SENT_OK: "Demande acceptée.",
	INFO_FOR_DOC: "Pour le médecin",
	ADDRESS: "Adresse",
	FORM_ADDRESS_CITY: "Ville",
	FORM_ADDRESS_STREET: "Rue",
	FORM_ADDRESS_HOUSE: "numéro de la maison",
	FORM_ADDRESS_APPARPMENT: "Appartement",
	FORM_ADDRESS_FLOOR: "Étage",
	FORM_ADDRESS_ENTRANCE: "Entrée",
	FORM_ADDRESS_DOORPHONE: "Interphone",
	FORM_HAS_COVID19: "test COVID-19",
	FORM_YES_COVID19: "test COVID-19 Positif",
	FORM_NO_COVID19: "test COVID-19 Négatif",
	NEED_HAS_COVID: "vous Devez sélectionner le test COVID-19"
};
var EMPTY_DATA$1 = {
	NO_OPTIONS: "Aucune option",
	NO_DOCTORS: "Aucun médecin avec des emplacements disponibles ou aucun spécialiste n'a été trouvé pour les filtres sélectionnés",
	NO_DOCTORS_CURRENTLY: "Il n'y a actuellement aucun spécialiste",
	NO_EVENTS: "Il n'y a aucun événement pour le moment",
	NO_INVOICES: "Aucune facture pour le moment",
	NO_INVOICE: "Aucune facture de ce type #{{invoiceId}} pour le moment",
	NO_PROMO: "Il n'y a actuellement aucune promotion",
	NO_SLOTS: "Malheureusement, pour la date choisie, le médecin ne dispose pas de créneaux libres pour un rendez-vous. Choisissez une autre date ou laissez-nous vos contacts et nous vous rappellerons pour vous proposer d'autres options.",
	NO_VISIT_KIND: "l'Enregistrement chez le médecin n'est possible que par l'intermédiaire de l'opérateur. Laissez - nous vos contacts et nous vous rappellerons.",
	NO_NOTIFICATIONS: "Aucune notification. Modifier les options de filtre",
	NO_PRESCRIBEDDRUGS: "Aucun médicament prescrit",
	NO_DIR_DOCS: "Il n'y a actuellement aucun médecin pour cette région"
};
var EVENTS_VISITS$1 = {
	FILTER_FUTURE: "Consultations futures",
	FILTER_SHOW_CANCELED: "Annulé",
	FILTER_TYPE: "Type de visite",
	FILTER_TYPE_ALL: "Tous",
	FILTER_TYPE_OFFLINE: "Hors ligne",
	FILTER_TYPE_ONLINE: "En ligne",
	FILTER_ROWS: "Type d'enregistrement",
	FILTER_ROWS_ALL: "Tous",
	FILTER_ROWS_DOC: "Docteur",
	TITLE_ONLINE_CONF: "Consultation en ligne",
	PANEL_ONLINE_CONF: "la consultation en ligne a Commencé",
	TITLE_VISIT: "Consultation",
	TITLE_VISIT_CANCELED: "Rendez-vous annullé",
	VISIT_CANCELED: "Le rendez-vous a été annulé.",
	ICAME_VISIT_OK: "Vous avez confirmé votre présence",
	INVOICE_CREATED: "Facture créée avec succès",
	PAY_INVOICE: "Payer la facture",
	PERSONAL_NOTIFICATIONS: "Messages Privés"
};
var HEADER$1 = {
	CONT_NEW_MSS: "{{unreadCount}} Nouveaux",
	MESSAGES: "Messages",
	ALERT_SITE_WILL_REALOAD: "Une nouvelle version du site est disponible, cliquez sur «Oui» pour mettre à jour"
};
var FEEDBACK$1 = {
	FORM_TITLE: "Signaler une erreur",
	FORM_SUBTITLE: "nous travaillons constamment sur des améliorations, Votre avis est très important pour nous",
	FORM_SUBMIT_OK: "Merci, votre candidature est acceptée! Nous vous contacterons bientôt par email",
	FORM_FIO: "Votre Nom",
	FORM_EMAIL: "Email",
	FORM_TEXTERROR: "Décrivez le problème",
	OK: "e-Mail envoyé",
	EMPTY_EMAIL: "Entrez un e-mail pour vos commentaires. En l'absence de courrier électronique, le support technique ne pourra pas répondre à l'appel"
};
var HOME$1 = {
	FEEDBACK: "Signaler un bug",
	AMBULANCE: "Appeler une ambulance",
	CALL_DOCTOR: "Appeler le médecin",
	BRANCH1: "Quelque chose vous gêne-t-il ?",
	BRANCH2: "Inscrivez-vous chez un professionnel de santé",
	BRANCH3: "Consultation en ligne",
	BRANCH4: "Événements à venir",
	BRANCH5: "Promotions et codes promotionnels",
	COLD: "Froid",
	HEADACHE: "Mal à la tête",
	MAKE_APPOINTMENT: "Prendre rendez-vous",
	OTOLARYNGOLOGIST: "oto-rhino-laryngologiste",
	OTOLARYNGOLOGIST_TEXT: "Spécialiste des maladies des oreilles, du nez et de la gorge",
	SICKCHILD: "Enfant malade",
	START_CHAT: "Démarrer la discussion",
	THERAPIST: "généraliste",
	THERAPIST_TEXT: "Spécialiste général",
	TRAUMATOLOGIST: "traumatologue",
	TRAUMATOLOGIST_TEXT: "Spécialiste des blessures musculo-squelettiques",
	CALL: "Appeler",
	COVID: "COVID",
	APPOINTMENT: "Prendre rendez-vous",
	CLINIC_PHONE: "Téléphone de la clinique"
};
var INVOICES$1 = {
	SUCCESS: "Le paiement a réussi",
	ERROR: "Le paiement a échoué",
	BILL_PAYMENT: "Paiement de facture",
	COST: "Coût des services",
	FILTER_ALL: "Tout",
	FILTER_PAID: "Payé",
	FILTER_UNPAID: "Non payé",
	INVOICE_NO: "Facture d'achat #",
	QUANTITY: "Quantité",
	TO_PAY: "Payer",
	BANNER_CERT_TEXT: "Pour que vous puissiez effectuer un paiement en ligne, installez les certificats russes du Ministère du Développement numérique",
	BANNER_CERT_BUTTON: "Comment installer le certificat",
	CLOSE_WIN: "Fermez la fenêtre",
	CLOSE_WIN_ERR: "Fermez la fenêtre et réessayez"
};
var MAINMENU$1 = {
	NOTIFY: "Paramètres de notification",
	HOME: "Accueil",
	APPOINTMENT: "Prendre rendez-vous",
	BLANK: "Questionnaire",
	EVENTS: "Événements",
	INVOICES: "Factures",
	MED_CARD: "Dossier médical",
	MED_CARD_H1: "Dossier médical",
	PRESCRIBED_DRUGS: "Drogues",
	PRESCRIBED_DRUGS_H1: "Médicaments prescrits",
	PROFILE: "Renseignements personnels",
	CLINIC_MAP: "Afficher la carte",
	SIGNOUT: "Quitter",
	DIRECTIONS: "Directions",
	CHAT_OPER: "Discutez avec la réceptionniste",
	USER_SESSIONS: "Sessions utilisateur",
	FAQ: "FAQ",
	SETTINGS: "Paramètres",
	CALYPSO: "Entreprise Calypso",
	FEEDBACK: "Signaler une erreur",
	TAX_REFUND: "Tax refund"
};
var SESSIONS$1 = {
	REMOVE: "Retirer",
	NO_SESSIONS_RECORDS: "Aucune session"
};
var MMK$1 = {
	APPOINTMENT: "Mes rendez-vous",
	NO_MMK_RECORDS: "Aucune entrée",
	NO_MMK_RECORDS_COMMENT: "Votre dossier médical électronique a été créé",
	NO_MMK_RECORDS_COMMENT_PET: "Un dossier médical électronique (CEM) pour votre animal de compagnie a été créé",
	NO_MMK_RECORDS_COMMENT1: "toutes les modifications et les nouvelles entrées seront disponibles dans cette section, après les appels et les visites à la clinique",
	RESULTS: "Résultats",
	PREVIEW: "Aperçu",
	DOWNLOAD: "Télécharger",
	NO_MMK_RECORDS_1: "Une visite personnelle à la clinique est nécessaire pour accéder au dossier médical électronique",
	NO_MMK_RECORDS_2: "Contactez le personnel de la clinique à la réception avec une pièce d'identité",
	NO_MMK_RECORDS_3: "Après avoir contacté la clinique, l'historique des consultations apparaîtra",
	CLOSE_CLINIC: "Trouver la branche la plus proche"
};
var DIRECTIONS$1 = {
	DATE_TILL: "jusqu'à",
	DATE_UNTILL: "jusqu'à",
	NO_DIRECTIONS_RECORDS: "Vous n'avez actuellement aucune recommandation"
};
var SIGN$1 = {
	CHAT_ALERT: "Vous devez vous connecter ou vous inscrire pour continuer",
	IN_BY_QR: "Entrez par code QR",
	IN_BY_QR_LIFETIME: "{{sec}} restantes",
	IN_BY_QR_INFO: "Si vous êtes déjà connecté à l'application MobiApp, scannez le code QR via l'application pour vous connecter rapidement",
	IN_BY_QR_INFO1: "Le code QR est imputable et valide pendant {{sec}} secondes",
	IN_BY_QR_REFRESH: "Actualiser",
	CH_BUTTON_SUBMIT: "Changer le mot de passe",
	CH_CONFIRM_CODE: "Code de confirmation de changement de mot de passe",
	CH_CONFIRM_CODE_SENT_EMAIL: "Entrez le code de confirmation envoyé par e-Mail",
	CH_CONFIRM_CODE_SENT_SMS: "Entrez le code de confirmation envoyé par SMS",
	CH_CONFIRM_CODE_SENT_VOICE: "Entrez le code de confirmation que le robot appellera par téléphone",
	CH_CONFIRM_CODE_SENT: "Entrez le code de confirmation envoyé par {{deliveryMethod}}",
	CH_CONFIRM_CODE_SENT_CHANGE_PHONE: "l'Autorisation sera via un téléphone mobile",
	CH_CONFIRM_CODE_SENT_CHANGE_EMAIL: "l'Autorisation sera par Email",
	CH_CAN_CHANGE_PHONE_EMAIL_ONLY: "vous ne pouvez pas changer de Téléphone et d'Email en Même temps. Changez quelque chose, enregistrez-le, puis l'autre",
	CH_PASS_ACCOUNT_NOT_FOUND: "Cette adresse e-mail ou connexion n'existe pas",
	CH_PASS_BUTTON: "Changer le mot de passe",
	CH_PASS_OK: "Changement de mot de passe réussi",
	CH_EMAIL_NOT_CONFIRM: "Nouveau E-mail ({{email}}) non confirmé",
	CH_PHONE_NOT_CONFIRM: "Nouveau Téléphone ({{phone}}) non confirmé",
	IN_BUTTON: "Connexion",
	IN_DOC_ENTER: "Accès pour les professionnels de santé",
	IN_ERRORS: "Quelque chose ne va pas avec votre nom d'utilisateur ou votre mot de passe  :-(",
	IN_FOGOT_PASS: "Mot de passe oublié ?",
	IN_HEAD: "Votre dossier médical en ligne pour vous et votre famille",
	IN_HEAD_PET: "Votre médecin est en ligne pour Vos animaux de compagnie",
	IN_HEAD_DOC: "Espace destiné aux professionnels de santé.",
	IN_HEAD_DOC1: "Merci de vous identifier.",
	IN_PATIENT_ENTER: "Accès pour les patients",
	IN_EISA: "Accès à l'e-gouvernement",
	IN_TEXT: "C'est le dernier service Web pour ceux qui apprécient leur santé et leur temps, prennent soin de leurs proches. Vous pouvez gérer vos dossiers médicaux en toute sécurité et efficacement, vous inscrire à des consultations et à des activités de traitement et de diagnostic pour vous-même et pour les membres de votre famille à partir de n'importe quel point géographique avec accès à Internet.",
	IN_TEXT_PET: "C'est le dernier service Web pour ceux qui apprécient la santé des animaux et leur temps. Vous pouvez gérer en toute sécurité et efficacement les dossiers médicaux de vos animaux de compagnie, vous inscrire à des consultations et à des activités médicales et diagnostiques de vos animaux de compagnie à partir de n'importe quel point géographique avec accès à Internet.",
	IN_PASS_HAS_BEEN_EXPIRED: "Veuillez changer le mot de passe temporaire",
	IN_EMPTY_CONFIRM_CODE: "Veuillez remplir le code de confirmation",
	UP_AGEEMENT: "J'accepte",
	UP_AGEEMENT1: "les termes de l'accord",
	UP_BUTTON: "S'inscrire",
	UP_BUTTON_SUBMIT: "Créer un compte",
	UP_EMAIL_ALREADY_REG: "Cet e-mail est déjà enregistré",
	UP_EMPTY_EMAIL: "Entrez votre e-mail",
	UP_EMPTY_PHONE: "Entrez votre téléphone",
	UP_EMPTY_GENDER: "Sélectionnez le sexe",
	UP_EMPTY_EMAIL_OR_PHONE: "Entrez l'e-mail ou le téléphone",
	UP_NOT_VALID_EMAIL_OR_PHONE: "Email ou numéro de téléphone invalide",
	UP_EMPTY_PASS: "Entrez le mot de passe",
	UP_MAY_LOGIN: "Vous pouvez vous connecter",
	UP_NOT_MATCH_PASS: "Non concordance des mots de passe",
	UP_NOT_VALID_EMAIL: "E-mail non valide",
	UP_NOT_VALID_PHONE: "E-mail non  téléphone",
	UP_NOT_VALID_CONFIRM_CODE: "Entrez le code de confirmation",
	UP_NOT_VALID_PASS: "Le mot de passe doit contenir : au moins un chiffre, au moins une lettre latine en minuscule et majuscule, au moins un caractère spécial: ! # $ % & * , . @  ^ _  -  et doit comporter au moins 8 caractères",
	UP_OK: "Inscription réussie",
	UP_SUBMIT_CONFIRM: "Confirmer",
	UP_TITLE_LIC_AGR: "Accord de licence",
	UP_WRONG_LOG_OR_PASS: "L'e-mail ou la combinaison de mots de passe est incorrect",
	UP_NOT_VALID_NAME: "Nom invalide",
	UP_NOT_VALID_LAST_NAME: "Nom de famille invalide",
	UP_NOT_VALID_MIDDLE_NAME: "Deuxième prénom invalide",
	UP_CANNOT_BE_SAME: "le Nom et le prénom ne peuvent pas être identiques",
	UP_ONE_DIGIT: "au moins un numéro",
	UP_ONE_UPPER_LETTER: "au moins une lettre latine majuscule",
	UP_ONE_LOWECASE_LAEER: "au moins une lettre latine minuscule",
	UP_ONE_SYMBOL: "au moins un caractère spécial: ! # $ % & * , . @  ^ _  - ",
	UP_MIN_LENGTH: "au moins 8 des caractères ci-dessus",
	UP_CONFIRM_CODE_WRONG: "Code de confirmation invalide",
	UP_HELPER_TEXT: "Pour fonctionner pleinement dans le système, vous devez vous inscrire. Après une inscription complète dans le système, vous aurez un dossier médical électronique et d'autres fonctions du système"
};
var VISIT$1 = {
	COST: "Coût",
	FORM_REASON: "Raison de la requête",
	EMPTY_REASON: "Veuillez indiquer la raison de la requête",
	AGE_GROUP: "groupe d'Âge",
	AGE_GROUP_CHILD: "jusqu'à {{age}} ans",
	AGE_GROUP_ADULT: "de {{age}} ans",
	AGE_GROUP_ANY: "tout",
	AGE_IS_EMPTY_DOC_CHILD: "CE médecin a une limite d'âge (jusqu'à 18 ans), mais votre âge n'est pas spécifié. Essayez de remplir l'âge dans le profil ou contactez le bureau d'enregistrement.",
	AGE_GROUP_ALERT: "Votre profil ne correspond pas à la catégorie d'âge.",
	AGE_GROUP_ALERT_MORE: "Votre profil ne correspond pas à la catégorie d'âge. Vous pouvez changer le profil d'enregistrement en cliquant sur Votre avatar près du nom de famille en haut de l'écran. Si Vous êtes le représentant d'une autre personne, cliquez sur la coche \"Je suis le représentant\" et remplissez le formulaire",
	ANONYMOUS_NOT_ENABLED: "Inscription Anonyme interdite",
	ANONYMOUS_NOT_ENABLED_NOTE: "Veuillez contacter le registre",
	LOADING: "Loading",
	SET_USER_DATA: "Entrez vos coordonnées pour continuer",
	ALERT_OK: "Vous prenez rendez-vous",
	ALERT_REQ_EMAIL_DOCTOR_OK: "Demande envoyée. Attendez l'appel de l'opérateur pour confirmer l'enregistrement",
	APPOINTMENTS: "Mes rendez-vous",
	CONFIRM_CANCEL: "Êtes-vous sûr de vouloir annuler le rendez-vous?",
	CONSULT: "Consultation",
	FAVS: "Favoris",
	CACHED: "Obtenir les emplacements du cache",
	FROM: "À partir de",
	ONLINE: "En ligne",
	INCLINIC: "La clinique",
	TYPE: "Prendre rendez-vous",
	CONFIRM_ICAME: "Êtes-vous d'accord?",
	CONF_IS_EXPIRED: "Cette conférence a expiré",
	BUT_CREATE_INVOICE: "Payer la facture",
	CABINET: "Cabinet",
	CONFIRM_CREATE_INVOICE: "La formation d'un compte sur la visite sera mise en file d'attente. Une fois terminé, vous recevrez une notification. Confirmer la création de la facture.",
	WITH_SLOTS_ONLY: "Avec des emplacements uniquement",
	CR_PATIENT: "Patient",
	CR_DOCTOR: "Docteur",
	CR_SPEC: "Spécialisation",
	CR_VISITKIND: "Type de réception",
	CR_DATE: "Date de réception",
	CR_ADDRESS: "Adresse de la clinique",
	CR_OFFICE: "Bureau",
	DR_WORKEXPERIENCE: "{{yars}} ans d'expérience",
	DR_EXPERIENCE: "Expérience professionnelle",
	DR_EDUCATION: "Enseignement",
	DR_GRADUATE: "Diplômé",
	DR_TRAINEESHIP: "Stage",
	DR_CONFERENCES: "Conférences",
	DR_PROFESSIONALSKILLIMPROVEMENT: "Amélioration des compétences professionnelles",
	"DR_WORK EXPERIENCE_PET": "",
	DR_EXPERIENCE_PET: "UNIVERSITÉ",
	DR_EDUCATION_PET: "Spécialisation",
	DR_GRADUATE_PET: "Ancienneté ({{yars}} ans)",
	DR_TRAINEESHIP_PET: "Spécialité par diplôme",
	DR_CONFERENCES_PET: "formation Complémentaire",
	SLOTS: "Emplacements libres",
	REVIEWS_HEADER: "Avis",
	REVIEWS_HAS_NOT: "aucun avis",
	REVIEW_SET: "Laisser un avis et une Note",
	REVIEW_SENDED: "Your review has been sent",
	REVIEW_TO_FAVS: "Favorite",
	REVIEW_RATING: "Review rating",
	REVIEW_TEXT: "Review",
	REVIEW_SUBMIT: "Submit",
	REVIEW_ADDED: "Merci, vos commentaires seront pris en compte",
	REVIEW_FAV_KEEPED: "Ce médecin a été ajouté aux Favoris, vous pouvez utiliser le filtre \"Favoris uniquement\" pour trouver rapidement un médecin",
	REVIEW_FAV_REMOVED: "Ce médecin a été supprimé des favoris",
	ORDER: "Emplacements en premier",
	WAITING_THE_CUSTOM_CHECK: "Patientez. Un contrôle est en cours sur la possibilité de fournir des services",
	AGREE_PAID_SERVICES: "Accepte la possibilité de fournir un service payant",
	IM_CHILD_REPRESENTATIVE: "je suis le représentant",
	ENTER_CHILD_DATA: "Entrez les données d'une autre personne",
	DATES_MARKED: "les Dates marquées par un indicateur (<dot/>) ont des emplacements",
	EMPTY_BITH_DATE: "vous n'avez pas de date de naissance. Entrez votre date de naissance via <linkToProfile/>"
};
var PROFILE$1 = {
	ANONYMOUS: "Propriétaire",
	INSURANCE_COMPANY: "Compagnie d'assurance",
	ARE_U_DELETE_ACCOUNT: "Voulez-vous vraiment supprimer votre compte ?",
	ACCOUNT_DELETED: "Le compte a été supprimé.",
	BUTTON_DELETE: "Supprimer le compte",
	ARE_U_DELETE_PHOTO: "Voulez-vous vraiment supprimer la photo ?",
	DELETE_PHOTO: "Supprimer la photo",
	PHOTO_UPLOAD_OK: "Photo téléchargée",
	PHOTO_DELETED: "Photo supprimée",
	EXPIRED_PASSWORD: "Mot de Passe expiré. Veuillez changer le mot de passe",
	ALERT_CHILD_DATA: "Les données des patients associés sont chargées à partir d'un établissement médical, vous ne pouvez pas les corriger. Si vous trouvez une erreur, veuillez contacter notre spécialiste par téléphone"
};
var CONFIRM$1 = {
	OK: "Confirmation réussie",
	ERR: "Quelque chose s'est mal passé"
};
var WORKSPACE$1 = {
	HEADER: "Choisisse l`orientation",
	BACK: "dos"
};
var resourcesFr = {
	TAX_REFUND: TAX_REFUND$1,
	NOTIFY_SETTINGS: NOTIFY_SETTINGS$1,
	ERROR_CODES: ERROR_CODES$1,
	BOTTOM: BOTTOM$1,
	MAP: MAP$1,
	DRUGS: DRUGS$1,
	COMPONENT: COMPONENT$1,
	CALL_DOCTOR: CALL_DOCTOR$1,
	EMPTY_DATA: EMPTY_DATA$1,
	EVENTS_VISITS: EVENTS_VISITS$1,
	HEADER: HEADER$1,
	FEEDBACK: FEEDBACK$1,
	HOME: HOME$1,
	INVOICES: INVOICES$1,
	MAINMENU: MAINMENU$1,
	SESSIONS: SESSIONS$1,
	MMK: MMK$1,
	DIRECTIONS: DIRECTIONS$1,
	SIGN: SIGN$1,
	VISIT: VISIT$1,
	PROFILE: PROFILE$1,
	CONFIRM: CONFIRM$1,
	WORKSPACE: WORKSPACE$1
};

var TAX_REFUND$2 = {
	SUBMIT_OK: "Ваша заявка отправлена",
	ERR: "Что-то пошло не так. Возможно отправляемый файл слишком большой"
};
var NOTIFY_SETTINGS$2 = {
	FORM_TITLE: "Настройки уведомлений",
	FORM_SUBTITLE: "Здесь Вы можете включить или отключить необходимые Вам уведомления",
	SAVE_OK: "Настройки сохранены",
	IS_EMPTY: "Настройки недоступны",
	Visit: "Запись на прием",
	Mmk: "Электронная медицинская карта",
	Email: "Email",
	Sms: "SMS",
	Invoice: "Счета",
	OnlineConsultation: "Онлайн-консультация",
	External: "Информационное сообщение"
};
var ERROR_CODES$2 = {
	"404": "Файл не найден",
	"500": "Внутренняя ошибка сервера",
	ERROR: "Ошибка",
	"4XX": "Некорректный запрос",
	"5XX": "Обслуживание временно приостановлено"
};
var BOTTOM$2 = {
	COPY: "© Post Modern Technology {{year}}. Все права защищены"
};
var MAP$2 = {
	ERROR: "К сожалению, на данный момент сервис карт не доступен, попробуйте позднее"
};
var DRUGS$2 = {
	FILTER_CURRENT: "Текущие",
	FILTER_PAST: "Прошедшие ",
	FILTER_FUTURE: "Будущие",
	FILTER_ALL: "Все",
	LEFT_DAYS: "Осталось дней",
	INTAKES: "Схема приема препарата",
	DO_STATE_DONE: "Отметить прием препарата",
	DO_STATE_ACTIVE: "Удалить отметку о приеме препарата",
	STATE_CHANGED_ACTIVE: "Отметка о приеме препарата удалена",
	STATE_CHANGED_DONE: "Прием препарата отмечен",
	CONFIRM_CHANGE_STATE_ACTIVE: "Подтвердите удаление отметки о приеме препарата",
	CONFIRM_CHANGE_STATE_DONE: "Подтвердите, что препарат отмечен",
	OF: "из"
};
var COMPONENT$2 = {
	NEAR: "рядом с",
	SORT_DATE: "по дате",
	LINK_TO_ACTION: "На страницу акции",
	APPOINTMENT_DATE: "Дата посещения",
	ARIA_DATE_LABEL: "Выберите дату",
	BIRTH_DATE: "Дата рождения",
	BROWSER_NOT_SUUPORT_FRAMES: "Ваш браузер не поддерживает встроенные фреймы!",
	BUTTON_SAVE: "Сохранить",
	BUT_CANCEL: "Отменить",
	BUT_CLOSE: "Закрыть",
	BUT_CONFIRM: "Да",
	BUT_MAKE_APPONTMENT: "Записаться на приём",
	BUT_CONFIRM_APPONTMENT: "Подтвердить запись на приём",
	BUT_UPDATE: "Обновить",
	BUT_FILTERS: "Фильтры",
	CLINICS: "Клиники",
	DATAILS: "Подробнее",
	DATA_SAVED: "Данные сохранены",
	DEPARTMENTS: "Отделение",
	DOCTOR_FIO: "Доктор",
	FORM_EMAIL: "Email",
	FORM_EMAIL_OR_PHONE: "Email или Телефон",
	FORM_EMAIL_FOR_CONFIRM: "Введите Email для получения кода подтверждения",
	FORM_GENDER: "Пол",
	FORM_GENDER_F: "Женский",
	FORM_GENDER_M: "Мужской",
	FORM_GENDER_F_PET: "Самка",
	FORM_GENDER_M_PET: "Самец",
	FORM_LAST_NAME: "Фамилия",
	FORM_LAST_NAME_PET: "Вид",
	FORM_MIDLE_NAME: "Отчество",
	FORM_NAME: "Имя",
	FORM_NAME_PET: "Кличка",
	FORM_PASS: "Пароль",
	FORM_PASS_ADD: "Дополнительный пароль",
	FORM_REPASS: "Повторите пароль",
	FORM_PHONE: "Телефон",
	FORM_VISIT_KIND: "Виды приема",
	FORM_VISIT_KIND_DURATION: "Продолжительность",
	FORM_VISIT_KIND_PRICE: "Стоимость",
	EMPTY_BIRTHDAY: "Введите дату рождения",
	INVALID_BIRTH_DATE: "Некорректная дата рождения",
	EMPTY_LAST_NAME: "Введите фамилию",
	EMPTY_LAST_NAME_PET: "Введите вид питомца",
	EMPTY_MIDDLE_NAME: "Введите отчество",
	EMPTY_MMKID: "Пожалуйста выберите имя",
	EMPTY_NAME: "Введите имя",
	EMPTY_NAME_PET: "Введите кличку питомца",
	INCORECT_PHONE: "Некорректный телефон",
	EMPTY_PHONE: "Введите номер телефона",
	SPECS: "Поиск по специализациям",
	SPECS_SEL: "Выберите специализацию",
	SPEC_OR_DOCNAME: "Специальность или ФИО",
	BUT_ICAME: "Я Пришел",
	FILTER_NOTICE_TYPES: "Тип уведомления",
	MED_DEP: "Выберите отделение",
	TITLE_CONFIRM_CODE: "Введите код подтверждения",
	CONFIRM_CODE: "Код подтверждения",
	BACK_ONE_STEP: "Вернуться назад",
	BUTTON_NEXT: "Подробнее",
	BUTTON_SEE_APPOINMENT: "Посмотреть запись на прием ",
	BUTTON_GET_CONFIRM_CODE: "Получить код подтверждения",
	BUT_SEND_EMAIL_DOCTOR: "Отправить заявку",
	FILE_TOO_MATCH: "Размер файла должен быть меньше {{maxFileSize}}Mb",
	NEEDED_EMAIL_OR_PHONE: "Необходимо заполнить email или телефон",
	NEEDED_PHONE_FOR_APP: "Для записи на прием необходимо заполнить телефон",
	HAS_MESS_OPER: "У Вас есть сообщения из регистратуры",
	BUT_OPEN_CHAT: "Открыть",
	CONTACT_ME: "Отправить заявку",
	SEARCH_FIO: "Поиск по ФИО",
	SEARCH: "Поиск",
	FORM_AGEGROUP: "Выберите тип  врача",
	FORM_AGEGROUP_TITLE0: "Любой",
	FORM_AGEGROUP_TITLE1: "Взрослый",
	FORM_AGEGROUP_TITLE2: "Детский",
	FORM_MAKE_APPOINTMENT_REG: "Записаться и зарегистрироваться",
	A_U_HAVE_ACCOUN: "У Вас уже есть учетная запись?",
	FORM_OMS_NAME: "Название компании ОМС",
	FORM_OMS_NUMBER: "Номер полиса ОМС",
	FORM_DMS_NAME: "Название компании ДМС",
	FORM_DMS_NUMBER: "Номер полиса ДМС",
	FORM_DMS_COMMENT: "Полис ДМС",
	FORM_DMS_COMMENT_UNTILL: "До",
	FORM_USER_ID: "Ваш ID",
	INVALID_OMS_NUMBER: "Неправильный номер ОМС",
	NEED_DMS_NUMBER: "Пожалуйста заполните номер полиса ДМС",
	NEED_OMS_NUMBER: "Пожалуйста заполните номер полиса ОМС",
	FORM_DMS_END_DATE: "Дата окончания полиса ДМС",
	INVALID_DMS_END_DATE: "Некорректная дата окончания полиса ДМС",
	NEED_DMS_NAME: "Пожалуйста заполните название компании ДМС",
	NEED_AGE_GR: "Необходимо выбрать тип врача",
	REFER_BUTT: "На сайт клиники"
};
var CALL_DOCTOR$2 = {
	PRIVATE_HOUSE: "Частный дом",
	FORM_TITLE: "Заполните форму вызова врача",
	FORM_CALL_DATE: "Укажите  желаемую дату",
	FORM_REASON: "Описание проблемы, симптомы, жалобы",
	FORM_ADDRESS: "Укажите адрес",
	FORM_COMMENTS: "Комментарии",
	BUTTON_CALL_DOCTOR: "Отправить",
	INVALID_CALL_DATE: "Некорректная дата вызова врача",
	INVALID_DMS_END_DATE: "Некорректная дата окончания полиса",
	EMPTY_CITY: "Пожалуйста заполните город",
	EMPTY_STREET: "Пожалуйста заполните улицу",
	EMPTY_HOUSE: "Пожалуйста заполните номер дома",
	EMPTY_FLAT: "Пожалуйста заполните квартиру",
	EMPTY_ENTRANCE: "Пожалуйста заполните подъезд",
	EMPTY_FLOOR: "Пожалуйста заполните этаж",
	EMPTY_DOORPHONE: "Пожалуйста заполните домофон",
	EMPTY_REASON: "Пожалуйста заполните причину вызова",
	FORM_SENT_OK: "Заявка принята.",
	INFO_FOR_DOC: "Для врача",
	ADDRESS: "Адрес",
	FORM_ADDRESS_CITY: "Город",
	FORM_ADDRESS_STREET: "Улица",
	FORM_ADDRESS_HOUSE: "Номер дома",
	FORM_ADDRESS_APPARPMENT: "Квартира",
	FORM_ADDRESS_FLOOR: "Этаж",
	FORM_ADDRESS_ENTRANCE: "Подъезд",
	FORM_ADDRESS_DOORPHONE: "Домофон",
	FORM_HAS_COVID19: "Тест на COVID-19",
	FORM_YES_COVID19: "Положительный тест на COVID-19",
	FORM_NO_COVID19: "Отрицательный тест на COVID-19",
	NEED_HAS_COVID: "Необходимо выбрать тест на COVID-19"
};
var EMPTY_DATA$2 = {
	NO_OPTIONS: "Нет таких вариантов",
	NO_DOCTORS: "По выбранным фильтрам отсутствуют врачи с доступными слотами либо не найдены специалисты",
	NO_DOCTORS_CURRENTLY: "В данный момент специалистов нет",
	NO_EVENTS: "В данный момент нет событий",
	NO_INVOICES: "В данный момент нет счетов",
	NO_INVOICE: "В данный момент нет такого счета №{{invoiceId}}",
	NO_PROMO: "В данный момент нет акций",
	NO_SLOTS: "К сожалению, на выбранную дату у врача нет свободных слотов для записи. Выберите другую дату или оставьте нам свои контакты, и мы Вам перезвоним, чтобы предложить другие варианты.",
	NO_VISIT_KIND: "Запись к врачу возможна только через оператора. Оставьте нам свои контакты, и мы Вам перезвоним.",
	NO_NOTIFICATIONS: "Нет уведомлений. Измените параметры фильтра",
	NO_PRESCRIBEDDRUGS: "Нет назначенных препаратов",
	NO_DIR_DOCS: "Нет расписаний для данного направления"
};
var EVENTS_VISITS$2 = {
	FILTER_FUTURE: "Будущие визиты",
	FILTER_SHOW_CANCELED: "Отмененные визиты",
	FILTER_TYPE: "Тип визита",
	FILTER_TYPE_ALL: "Все",
	FILTER_TYPE_OFFLINE: " Офлайн",
	FILTER_TYPE_ONLINE: "Онлайн",
	FILTER_ROWS: "Тип записей",
	FILTER_ROWS_ALL: "Все",
	FILTER_ROWS_DOC: "Доктор",
	TITLE_ONLINE_CONF: "Онлайн-консультация",
	PANEL_ONLINE_CONF: "Началась онлайн-консультация",
	TITLE_VISIT: "Визит",
	TITLE_VISIT_CANCELED: "Отмененный визит",
	VISIT_CANCELED: "Запись на приём отменена",
	ICAME_VISIT_OK: "Вы подтвердили свое присутствие",
	INVOICE_CREATED: "Счет успешно создан",
	PAY_INVOICE: "Оплатить",
	PERSONAL_NOTIFICATIONS: "Личные сообщения"
};
var HEADER$2 = {
	CONT_NEW_MSS: "{{unreadCount}} новых",
	MESSAGES: "Сообщения",
	ALERT_SITE_WILL_REALOAD: "Доступна новая версия сайта, чтобы обновить нажмите «Да»"
};
var FEEDBACK$2 = {
	FORM_TITLE: "Сообщить об ошибке",
	FORM_SUBTITLE: "Мы постоянно работаем над улучшениями, Ваше мнение очень важно для нас",
	FORM_SUBMIT_OK: "Спасибо, Ваша заявка принята! В скором времени мы свяжемся с Вами по указанному email",
	FORM_FIO: "Ваше Имя",
	FORM_EMAIL: "Email",
	FORM_TEXTERROR: "Опишите проблему",
	EMPTY_FIO: "Пожалуйста заполните Ваше имя",
	EMPTY_TEXTERROR: "Пожалуйста опишите проблему",
	OK: "Письмо отправлено",
	EMPTY_EMAIL: "Введите почту для обратной связи. При отсутствии почты техническая поддержка не сможет ответить на обращение"
};
var HOME$2 = {
	FEEDBACK: "Сообщить об ошибке",
	AMBULANCE: "Вызвать скорую",
	CALL_DOCTOR: "Вызов врача на дом",
	BRANCH1: "Что-то беспокоит?",
	BRANCH2: "Записаться к специалисту",
	BRANCH3: "Сейчас онлайн",
	BRANCH4: "Ближайшие события",
	BRANCH5: "Акции и предложения",
	COLD: "Простуда",
	HEADACHE: "Болит голова",
	MAKE_APPOINTMENT: "Записаться на приём",
	OTOLARYNGOLOGIST: "отоларинголог",
	OTOLARYNGOLOGIST_TEXT: "Специалист по заболеваниям уха, горло и носа",
	SICKCHILD: "Заболел ребёнок",
	START_CHAT: "Начать консультацию",
	THERAPIST: "терапевт",
	THERAPIST_TEXT: "Специалист общего профиля",
	TRAUMATOLOGIST: "травматолог",
	TRAUMATOLOGIST_TEXT: "Специалист по травмам опорно-двигательного аппарата",
	CALL: "Позвонить",
	COVID: "COVID",
	APPOINTMENT: "Запись на приём",
	CLINIC_PHONE: "Телефон клиники"
};
var INVOICES$2 = {
	SUCCESS: "Платеж прошел успешно",
	ERROR: "Платеж не прошел",
	BILL_PAYMENT: "Оплата счета",
	COST: "Стоимость услуг",
	FILTER_ALL: "Все",
	FILTER_PAID: "Оплаченные",
	FILTER_UNPAID: "Не оплаченные",
	INVOICE_NO: "Счет №",
	QUANTITY: "Количество",
	TO_PAY: "Oплатить",
	BANNER_CERT_TEXT: "Для того чтобы Вы могли провести онлайн оплату, установите российские сертификаты Минцифры",
	BANNER_CERT_BUTTON: "Как установить сертификат",
	CLOSE_WIN: "Можете закрыть окно",
	CLOSE_WIN_ERR: "Можете закрыть окно и попробовать еще раз"
};
var MAINMENU$2 = {
	NOTIFY: "Настройки уведомлений",
	HOME: "На главную",
	APPOINTMENT: "Запись на приём",
	BLANK: "Анкета",
	EVENTS: "События",
	INVOICES: "Счета",
	MED_CARD: "Медкарта",
	MED_CARD_H1: "Электронная медицинская карта",
	PRESCRIBED_DRUGS: "Назначения",
	PROFILE: "Персональные данные",
	CLINIC_MAP: "Клиники",
	SIGNOUT: "Выход",
	DIRECTIONS: "Направления",
	CHAT_OPER: "Чат с регистратурой",
	USER_SESSIONS: "Пользовательские сессии",
	FAQ: "Вопрос — Ответ",
	SETTINGS: "Настройки",
	CALYPSO: "Формы Calypso",
	FEEDBACK: "Сообщить об ошибке",
	TAX_REFUND: "Возврат НДФЛ"
};
var SESSIONS$2 = {
	REMOVE: "Удалить",
	NO_SESSIONS_RECORDS: "Нет сессий"
};
var MMK$2 = {
	APPOINTMENT: "Прием у врача",
	NO_MMK_RECORDS: "Нет записей",
	NO_MMK_RECORDS_COMMENT: "Ваша электронная медицинская карта (ЭМК) создана",
	NO_MMK_RECORDS_COMMENT_PET: "Электронная медицинская карта (ЭМК) для Вашего питомца создана",
	NO_MMK_RECORDS_COMMENT1: " Все изменения и новые записи будут доступны в этом разделе, после обращений и посещений клиники",
	RESULTS: "Результаты",
	PREVIEW: "Просмотр",
	DOWNLOAD: "Скачать",
	NO_MMK_RECORDS_1: "Для получения доступа к электронной медицинской карте необходим личный визит в филиал клиники",
	NO_MMK_RECORDS_2: "Обратитесь к сотрудникам клиники на ресепшн с документом, удостоверяющим личность",
	NO_MMK_RECORDS_3: "После обращения в клинику появится история консультаций",
	CLOSE_CLINIC: "Найти ближайший филиал"
};
var DIRECTIONS$2 = {
	DATE_TILL: "с",
	DATE_UNTILL: "по",
	NO_DIRECTIONS_RECORDS: "В данный момент у Вас нет направлений"
};
var SIGN$2 = {
	CHAT_ALERT: "Для продолжения необходимо авторизоваться или зарегистрироваться",
	IN_BY_QR: "Вход по QR-коду",
	IN_BY_QR_LIFETIME: "Осталось: {{sec}}",
	IN_BY_QR_INFO: "Если вы уже авторизованы в приложении MobiApp, то для быстрого входа в систему отсканируйте QR-код через приложение",
	IN_BY_QR_INFO1: "QR-код является временным и действует в течении {{sec}}",
	IN_BY_QR_REFRESH: "Обновить",
	CH_BUTTON_SUBMIT: "Сменить пароль",
	CH_CONFIRM_CODE: "Код подтверждения смены пароля",
	CH_CONFIRM_CODE_SENT_EMAIL: "Код подтверждения выслан на Email",
	CH_CONFIRM_CODE_SENT_SMS: "Код подтверждения выслан в SMS",
	CH_CONFIRM_CODE_SENT_VOICE: "Код подтверждения который назовет робот по телефону",
	CH_CONFIRM_CODE_SENT: "Код подтверждения выслан в {{deliveryMethod}}",
	CH_CONFIRM_CODE_SENT_CHANGE_PHONE: "Авторизация будет через мобильный Телефон",
	CH_CONFIRM_CODE_SENT_CHANGE_EMAIL: "Авторизация будет через Email",
	CH_CAN_CHANGE_PHONE_EMAIL_ONLY: "Одновременно нельзя менять Телефон и Email. Измените что то одно, сохраните, потом другое",
	CH_PASS_ACCOUNT_NOT_FOUND: "Такой email или логин не существуют",
	CH_PASS_BUTTON: "Смена пароля",
	CH_PASS_OK: "Успешная смена пароля",
	CH_EMAIL_NOT_CONFIRM: "Новый Email ({{email}}) не подтвержден",
	CH_PHONE_NOT_CONFIRM: "Новый Телефон ({{phone}}) не подтвержден",
	IN_TITLE: "Войти",
	IN_TITLE_PHONE: "Войти по телефону",
	IN_TITLE_EMAIL: "Войти по Email",
	IN_BUTTON: "Войти",
	IN_BUTTON_PHONE: "Вход по телефону",
	IN_BUTTON_EMAIL: "Вход по Email",
	IN_DOC_ENTER: "Вход для врача",
	IN_ERRORS: "Что-то не так с Вашим логином или паролем :(",
	IN_FOGOT_PASS: "Забыли пароль?",
	IN_HEAD: "Ваш врач онлайн для Вас и Вашей семьи",
	IN_HEAD_PET: "Ваш врач онлайн для Ваших питомцев",
	IN_HEAD_DOC: "Вход для врача",
	IN_HEAD_DOC1: "Пожалуйста, представьтесь",
	IN_PATIENT_ENTER: "Вход для пациента",
	IN_TEXT: "Это новейший веб-сервис для тех, кто дорожит своим здоровьем и временем, заботится о своих близких. Вы можете безопасно и эффективно управлять своими медицинскими картами, записываться на консультации и лечебно-диагностические мероприятия для себя и для членов семьи из любой географической точки с доступом в интернет.",
	IN_TEXT_PET: "Это новейший веб-сервис для тех, кто дорожит здоровьем питомцев и своим временем. Вы можете безопасно и эффективно управлять медицинскими картами питомцев, записываться на консультации и лечебно-диагностические мероприятия питомцев из любой географической точки с доступом в интернет.",
	IN_PASS_HAS_BEEN_EXPIRED: "Пожалуйста смените временный пароль",
	IN_EISA: "Вход через Госуслуги",
	IN_EMPTY_CONFIRM_CODE: "Пожалуйста, заполните код подтверждения",
	UP_AGEEMENT: "Я принимаю",
	UP_AGEEMENT1: "условия соглашения",
	UP_BUTTON: "Регистрация",
	UP_BUTTON_SUBMIT: "Создать аккаунт",
	UP_EMAIL_ALREADY_REG: "Такой email уже зарегистрирован",
	UP_EMPTY_EMAIL: "Введите email",
	UP_EMPTY_PHONE: "Введите телефон",
	UP_EMPTY_GENDER: "Выберите пол",
	UP_EMPTY_EMAIL_OR_PHONE: "Введите email или телефон",
	UP_NOT_VALID_EMAIL_OR_PHONE: "Некорректный email или телефон",
	UP_EMPTY_PASS: "Введите пароль",
	UP_MAY_LOGIN: "Можете войти в систему",
	UP_NOT_MATCH_PASS: "Пароли не совпадают",
	UP_NOT_VALID_EMAIL: "Некорректный email",
	UP_NOT_VALID_PHONE: "Некорректный телефон",
	UP_NOT_VALID_CONFIRM_CODE: "Введите код подтверждения",
	UP_NOT_VALID_PASS: "Пароль должен содержать: хотя бы одно число, хотя бы одну латинскую букву в нижнем и верхнем регистре, хотя бы один специальный символ: ! # $ % & * , . @  ^ _  -  и должен быть не менее, чем из 8 символов",
	UP_OK: "Успешная регистрация",
	UP_SUBMIT_CONFIRM: "Подтвердить",
	UP_TITLE_LIC_AGR: "Лицензионное соглашение",
	UP_WRONG_LOG_OR_PASS: "Комбинация Email или пароль не верна",
	UP_NOT_VALID_NAME: "Некорректное имя",
	UP_NOT_VALID_LAST_NAME: "Некорректная фамилия",
	UP_NOT_VALID_MIDDLE_NAME: "Некорректное отчество",
	UP_CANNOT_BE_SAME: "Фамилия и имя не могут быть одинаковыми",
	UP_ONE_DIGIT: "хотя бы одно число",
	UP_ONE_UPPER_LETTER: "хотя бы одна латинская буква в верхнем регистре",
	UP_ONE_LOWECASE_LAEER: "хотя бы одна латинская буква в нижнем регистре",
	UP_ONE_SYMBOL: "хотя бы один специальный символ: ! # $ % & * , . @  ^ _  - ",
	UP_MIN_LENGTH: "не менее, чем  8 вышеупомянутых символов",
	UP_CONFIRM_CODE_WRONG: "Неправильный код подтверждения",
	UP_HELPER_TEXT: "Для полноценного функционирования в системе Вам необходимо зарегистрироваться. После полной регистрации в системе у Вас появится электронная медицинская карта и другие функции системы"
};
var VISIT$2 = {
	COST: "Стоимость",
	FORM_REASON: "Причина обращения",
	EMPTY_REASON: "Пожалуйста заполните причину обращения",
	AGE_GROUP: "Возрастная группа",
	AGE_GROUP_CHILD: "до {{age}} лет",
	AGE_GROUP_ADULT: "от {{age}} лет",
	AGE_GROUP_ANY: "любая",
	AGE_IS_EMPTY_DOC_CHILD: "У этого врача есть возрастные ограничения (до 18 лет), но Ваш возраст не указан. Попробуйте заполнить возраст в профиле или обратитесь в регистратуру.",
	AGE_GROUP_ALERT: "Ваш профиль не подходит по возрастной категории.",
	AGE_GROUP_ALERT_MORE: "Ваш профиль не подходит по возрастной категории. Сменить профиль записи Вы можете, нажав на Ваш аватар возле фамилии вверху экрана. Если Вы являетесь представителем другого человека, нажмите галочку \"Я представитель\" и заполните форму",
	ANONYMOUS_NOT_ENABLED: "Анонимная запись на прием запрещена",
	ANONYMOUS_NOT_ENABLED_NOTE: "Пожалуйста, обратитесь в регистратуру",
	LOADING: "Загрузка",
	SET_USER_DATA: "Для продолжения укажите Ваши данные",
	ALERT_OK: "Вы записаны на приём",
	ALERT_REQ_EMAIL_DOCTOR_OK: "Заявка отправлена. Для подтверждения записи дождитесь звонка оператора",
	APPOINTMENTS: "Записи на прием",
	CONFIRM_CANCEL: "Вы уверены, что хотите отменить запись на приём?",
	CONSULT: "Консультация",
	FAVS: "Избранные",
	CACHED: "Брать слоты из кеша",
	FROM: "От",
	ONLINE: "Онлайн",
	INCLINIC: "В клинике",
	TYPE: "Вид приема",
	CONFIRM_ICAME: "Вы подтверждаете?",
	CONF_IS_EXPIRED: "Срок действия этой конференции истек",
	BUT_CREATE_INVOICE: "Оплатить",
	CABINET: "Кабинет",
	CONFIRM_CREATE_INVOICE: "Формирование счета по визиту будет поставлено в очередь. По факту его завершения Вы получите уведомление. Подтвердите создание счета.",
	WITH_SLOTS_ONLY: "Только со слотами",
	CR_PATIENT: "Пациент",
	CR_DOCTOR: "Врач",
	CR_SPEC: "Специализация",
	CR_VISITKIND: "Вид приема",
	CR_DATE: "Дата приема",
	CR_ADDRESS: "Адрес клиники",
	CR_OFFICE: "Кабинет",
	DR_WORKEXPERIENCE: "Опыт работы {{yars}} лет",
	DR_EXPERIENCE: " Опыт работы",
	DR_EDUCATION: "Образование",
	DR_GRADUATE: "Специализация",
	DR_TRAINEESHIP: "Стажировка",
	DR_CONFERENCES: "Конференции",
	DR_PROFESSIONALSKILLIMPROVEMENT: "Повышение квалификации",
	DR_WORKEXPERIENCE_PET: "",
	DR_EXPERIENCE_PET: "ВУЗ",
	DR_EDUCATION_PET: "Специализация",
	DR_GRADUATE_PET: "Стаж работы",
	DR_TRAINEESHIP_PET: "Специальность по диплому",
	DR_CONFERENCES_PET: "Дополнительное образование",
	SLOTS: "Свободные слоты",
	REVIEWS_HEADER: "Отзывы",
	REVIEWS_HAS_NOT: "Отзывов нет",
	REVIEW_SET: "Оставить oтзыв и рейтинг",
	REVIEW_SENDED: "Ваш отзыв отправлен",
	REVIEW_TO_FAVS: "Избранный",
	REVIEW_RATING: "Отметить рейтинг врача",
	REVIEW_TEXT: "Отзыв",
	REVIEW_SUBMIT: "Отправить",
	REVIEW_ADDED: "Спасибо, Ваше мнение будет учтено",
	REVIEW_FAV_KEEPED: "Этот врач добавлен в «Избранные», для быстрого поиска врача можете воспользоваться фильтром «Только избранные»",
	REVIEW_FAV_REMOVED: "Этот врач удален из «Избранных»",
	ORDER: "Сначала со слотами",
	WAITING_THE_CUSTOM_CHECK: "Подождите. Происходит проверка на возможность оказания услуг",
	AGREE_PAID_SERVICES: "Согласен с возможностью платного оказания услуги",
	IM_CHILD_REPRESENTATIVE: "Я представитель",
	ENTER_CHILD_DATA: "Введите данные другого человека",
	DATES_MARKED: "На датах отмеченных индикатором (<dot/>), есть свободное время для записи.",
	EMPTY_BITH_DATE: "У Вас не заполнена дата рождения. Введите свою дату рождения через <linkToProfile/>"
};
var PROFILE$2 = {
	ANONYMOUS: "Владелец",
	INSURANCE_COMPANY: "Страховая компания",
	ARE_U_DELETE_ACCOUNT: "Вы уверены, что хотите удалить аккаунт?",
	ACCOUNT_DELETED: "Аккаунт удален.",
	BUTTON_DELETE: "Удалить аккаунт",
	ARE_U_DELETE_PHOTO: "Вы действительно хотите удалить фото?",
	DELETE_PHOTO: "Удалить фото",
	PHOTO_UPLOAD_OK: "Фото загружено",
	PHOTO_DELETED: "Фото удалено",
	EXPIRED_PASSWORD: "Пароль просрочен. Пожалуйста смените пароль",
	ACCOUT_DOESNT_CONDIRMED: "Ваш аккаунт не подтвержден. Пожалуйста подтверждаете Ваш аккаунт.",
	ALERT_CHILD_DATA: "Данные связанных пациентов загружены из медицинского учреждения, Вы не можете их корректировать. Если Вы нашли ошибку, обратитесь к нашему специалисту по телефону клиники"
};
var CONFIRM$2 = {
	OK: "Подтверждение прошло успешно",
	ERR: "Что-то пошло не так"
};
var WORKSPACE$2 = {
	HEADER: "Выбрать рабочее пространство",
	BACK: "Вернуться назад"
};
var resourcesRu = {
	TAX_REFUND: TAX_REFUND$2,
	NOTIFY_SETTINGS: NOTIFY_SETTINGS$2,
	ERROR_CODES: ERROR_CODES$2,
	BOTTOM: BOTTOM$2,
	MAP: MAP$2,
	DRUGS: DRUGS$2,
	COMPONENT: COMPONENT$2,
	CALL_DOCTOR: CALL_DOCTOR$2,
	EMPTY_DATA: EMPTY_DATA$2,
	EVENTS_VISITS: EVENTS_VISITS$2,
	HEADER: HEADER$2,
	FEEDBACK: FEEDBACK$2,
	HOME: HOME$2,
	INVOICES: INVOICES$2,
	MAINMENU: MAINMENU$2,
	SESSIONS: SESSIONS$2,
	MMK: MMK$2,
	DIRECTIONS: DIRECTIONS$2,
	SIGN: SIGN$2,
	VISIT: VISIT$2,
	PROFILE: PROFILE$2,
	CONFIRM: CONFIRM$2,
	WORKSPACE: WORKSPACE$2
};

var getLang = function getLang() {
  var lang = localStorage.getItem("i18nextLng");
  if (!lang) return config.defLang;
  return lang;
};

var lang = /*#__PURE__*/getLang();
i18next.use(LanguageDetector).use(reactI18next.initReactI18next).init({
  resources: {
    ru: {
      translations: resourcesRu
    },
    en: {
      translations: resourcesEn
    },
    fr: {
      translations: resourcesFr
    }
  },
  lng: lang,
  load: 'languageOnly',
  fallbackLng: lang,
  debug: true,
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  //    keySeparator: false, // we use content as keys

  // interpolation: {
  //   escapeValue: false, // not needed for react!!
  //   formatSeparator: lang === "ru" ? " " : ",",
  // },

  lowerCaseLng: true
});

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

i18next.addResourceBundle("ru", "translations", ru);
i18next.addResourceBundle("en", "translations", en);
i18next.addResourceBundle("fr", "translations", fr);

var languageWithoutCountry = function languageWithoutCountry() {
  return i18next.language.substring(0, 2);
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
      i18next.changeLanguage("en");
      return {
        language: LANGUAGES.EN
      };
    case LANGUAGES_ACTIONS.SET_FRENCH:
      i18next.changeLanguage("fr");
      return {
        language: LANGUAGES.FR
      };
    case LANGUAGES_ACTIONS.SET_RUSSIAN:
      i18next.changeLanguage("ru");
      return {
        language: LANGUAGES.RU
      };
    default:
      return state;
  }
};
var LanguageContext = /*#__PURE__*/React.createContext({});
var AppLanguageProvider = function AppLanguageProvider(_ref) {
  var children = _ref.children;
  var _useReducer = React.useReducer(reducer, {
      language: languageWithoutCountry()
    }),
    languageState = _useReducer[0],
    dispatchLanguage = _useReducer[1];
  var value = React.useMemo(function () {
    return {
      languageState: languageState,
      dispatchLanguage: dispatchLanguage
    };
  }, [languageState]);
  return /*#__PURE__*/React__default.createElement(LanguageContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default.createElement(reactI18next.I18nextProvider, {
    i18n: i18next
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

exports.AddContact = AddContact;
exports.CHAT_ACTIONS = CHAT_ACTIONS;
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
//# sourceMappingURL=chat.cjs.development.js.map

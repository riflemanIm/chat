import dayjs from "dayjs";
import { ChatRoom, Contact, ContactGather, Group, GroupGather } from "../types";

export function isEmpty(value: unknown): boolean {
  return (
    value == null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

// string contains string
export function isContainStr(str1: string, str2: string): boolean {
  return str2.indexOf(str1) >= 0;
}

/**
 * check URL
 * @param text
 */
export function isUrl(text: string): boolean {
  // parse url
  const UrlReg = new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/);
  return UrlReg.test(text);
}

export const compareDates = (
  d1: Date | string | undefined,
  d2: Date | string | undefined,
  period:
    | "day"
    | "millisecond"
    | "second"
    | "minute"
    | "hour"
    | "month"
    | "year"
    | "date"
    | "milliseconds"
    | "seconds"
    | "minutes"
    | "hours"
    | "days" = "day",
  count = 0
) => {
  const date1 = dayjs(d1).startOf("date");
  const date2 = dayjs(d2).startOf("date");

  // console.log(
  //   'diff',
  //   dayjs(date1).format('DD.MM.YYYY'),
  //   dayjs(date2).format('DD.MM.YYYY'),
  //   date1.diff(date2, period) === count,
  // );
  return date1.diff(date2, period) === count;
};

/**
 * Формитирование времени сообщения
 * @param time
 */
export function formatTime(
  time: Date | string | undefined,
  format = "DD.MM.YYYY HH:mm"
) {
  if (typeof time === "undefined") return null;
  if (typeof time === "string") time = new Date(time);
  // больше чем вчера
  if (dayjs().add(-1, "days").startOf("day").isAfter(time)) {
    return dayjs(time).format(format);
  }
  // вчера
  if (dayjs().startOf("day").isAfter(time)) {
    return `Вчера в ${dayjs(time).format("HH:mm")}`;
  }

  return dayjs(time).format("HH:mm");
}

/**
 * Раскрыть содержимое
 * @param content - данные в строке
 */
export function getFileMeta(content: string): {
  date: string;
  userId: string;
  size: string;
  name: string;
} {
  // Формат  [date]$[userId]$[size]$[fileName]
  // Например fileName = 1606980397047$1a01e20f-3780-4227-84b5-5c69ca766ee5$15.41KB$123.docx
  const meta = content.split("$");
  const [date, userId, size, name] = meta;
  return {
    date,
    userId,
    size,
    name,
  };
}

export function getImageMeta(content: string): {
  date: string;
  userId: string;
  width: string;
  height: string;
} {
  // Формат [date]$[userId]$[width]$[height]$...
  const meta = content.split("$");
  const [date, userId, width, height] = meta;
  return {
    date,
    userId,
    width,
    height,
  };
}

export function splitFileName(name: string): { name: string; ext: string } {
  const idx = name.lastIndexOf(".");
  if (idx === -1)
    return {
      name,
      ext: "",
    };
  return {
    name: name.slice(0, idx),
    ext: name.slice(idx + 1),
  };
}

export const getChatId = (chat: ChatRoom | null): string | null => {
  if (!chat) return null;
  return (chat as Group).groupId
    ? `group:${(chat as Group).groupId}`
    : `user:${chat.userId}`;
};

export const getChatName = (chat: ChatRoom): string => {
  return (chat as Group).groupId
    ? (chat as Group).name
    : (chat as Contact).username;
};

export const isGroup = (chat: ChatRoom): chat is Group => {
  return "groupId" in chat;
};

export const allGather = (chats: GroupGather | ContactGather) => {
  return Object.values(chats)
    .map((it) => (it?.messages != null ? it?.messages.length : 0))
    .reduce((a: number, b: number) => a + b, 0);
};

export const chatRoomComparer = (a: ChatRoom, b: ChatRoom): number => {
  const hasMessagesA = Array.isArray(a.messages) && a.messages.length > 0;
  const hasMessagesB = Array.isArray(b.messages) && b.messages.length > 0;
  if (
    hasMessagesA &&
    hasMessagesB &&
    b.messages != null &&
    a.messages != null
  ) {
    // !!! if cdate === undefined !!!
    const bb =
      b.messages[b.messages.length - 1].cdate != null
        ? new Date(b.messages[b.messages.length - 1].cdate).getTime()
        : new Date().getTime();

    const aa =
      a.messages[a.messages.length - 1].cdate != null
        ? new Date(a.messages[a.messages.length - 1].cdate).getTime()
        : new Date().getTime() - 1;
    const res = bb - aa;

    //console.log('res', res);
    return res;
  }
  if (hasMessagesA) {
    return -1;
  }
  return 1;
};

export const getParam = (param: string) => {
  const QueryString = window.location.search;
  const urlParams = new URLSearchParams(QueryString);
  return urlParams.get(param);
};

export const combineURLs = (
  baseURL: string,
  relativeURL: string,
  queryParams?: Record<string, string>
): string => {
  const url = relativeURL
    ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "")
    : baseURL;
  if (!queryParams) return url;

  return (
    url +
    (url.includes("?") ? "&" : "?") +
    new URLSearchParams(queryParams).toString()
  );
};

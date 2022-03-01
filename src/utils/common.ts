import moment from "moment";
import { ChatRoom, Contact, Group } from "../types";

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

/**
 * Формитирование времени сообщения
 * @param time
 */
export function formatTime(
  time: Date | string | undefined
): string | Date | null {
  if (typeof time === "undefined") return null;
  if (typeof time === "string") time = new Date(time);
  // больше чем вчера
  if (moment().add(-1, "days").startOf("day").isAfter(time)) {
    return moment(time).format("DD.MM.YYYY HH:mm");
  }
  // вчера
  if (moment().startOf("day").isAfter(time)) {
    return `Вчера в ${moment(time).format("HH:mm")}`;
  }

  return moment(time).format("HH:mm");
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

export const chatRoomComparer = (a: ChatRoom, b: ChatRoom): number => {
  if (a.messages && b.messages) {
    return (
      new Date(b.messages[b.messages.length - 1].cdate).getTime() -
      new Date(a.messages[a.messages.length - 1].cdate).getTime()
    );
  }
  if (a.messages) {
    return -1;
  }
  return 1;
};

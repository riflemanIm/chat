import dayjs from 'dayjs';
import {
  ChatRoom,
  Contact,
  ContactGather,
  Group,
  GroupGather,
} from '../types';

export function isEmpty(value: unknown): boolean {
  return (
    value == null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
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
  const UrlReg = new RegExp(
    /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/,
  );
  return UrlReg.test(text);
}

/**
 * Формитирование времени сообщения
 * @param time
 */
export function formatTime(
  time: Date | string | undefined,
  format = 'DD.MM.YYYY HH:mm',
) {
  if (typeof time === 'undefined') return null;
  if (typeof time === 'string') time = new Date(time);
  // больше чем вчера
  if (
    dayjs()
      .add(-1, 'days')
      .startOf('day')
      .isAfter(time)
  ) {
    return dayjs(time).format(format);
  }
  // вчера
  if (
    dayjs()
      .startOf('day')
      .isAfter(time)
  ) {
    return `Вчера в ${dayjs(time).format('HH:mm')}`;
  }

  return dayjs(time).format('HH:mm');
}

/**
 * Раскрыть содержимое
 * @param content - данные в строке
 */
export function getFileMeta(
  content: string,
): {
  date: string;
  userId: string;
  size: string;
  name: string;
} {
  // Формат  [date]$[userId]$[size]$[fileName]
  // Например fileName = 1606980397047$1a01e20f-3780-4227-84b5-5c69ca766ee5$15.41KB$123.docx
  const meta = content.split('$');
  const [date, userId, size, name] = meta;
  return {
    date,
    userId,
    size,
    name,
  };
}

export function getImageMeta(
  content: string,
): {
  date: string;
  userId: string;
  width: string;
  height: string;
} {
  // Формат [date]$[userId]$[width]$[height]$...
  const meta = content.split('$');
  const [date, userId, width, height] = meta;
  return {
    date,
    userId,
    width,
    height,
  };
}

export function splitFileName(
  name: string,
): { name: string; ext: string } {
  const idx = name.lastIndexOf('.');
  if (idx === -1)
    return {
      name,
      ext: '',
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

export const allMessCount = (chats: GroupGather | ContactGather) => {
  return Object.values(chats)
    .map(it => (it?.messages != null ? it?.messages.length : 0))
    .reduce((a: number, b: number) => a + b, 0);
};

export const chatRoomComparer = (
  a: ChatRoom,
  b: ChatRoom,
): number => {
  const hasMessagesA =
    Array.isArray(a.messages) && a.messages.length > 0;
  const hasMessagesB =
    Array.isArray(b.messages) && b.messages.length > 0;
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
  queryParams?: Record<string, string>,
): string => {
  const url = relativeURL
    ? baseURL.replace(/\/?\/$/, '') +
      '/' +
      relativeURL.replace(/^\/+/, '')
    : baseURL;
  if (!queryParams) return url;

  return (
    url +
    (url.includes('?') ? '&' : '?') +
    new URLSearchParams(queryParams).toString()
  );
};

function isVisibleInViewport(element: HTMLLIElement) {
  const elementStyle = window.getComputedStyle(element);
  //Particular cases when the element is not visible at all
  if (
    elementStyle.height == '0px' ||
    elementStyle.display == 'none' ||
    elementStyle.opacity == '0' ||
    elementStyle.visibility == 'hidden' ||
    elementStyle.clipPath == 'circle(0px at 50% 50%)' ||
    elementStyle.transform == 'scale(0)' ||
    element.hasAttribute('hidden')
  ) {
    return false;
  }

  const rect = element.getBoundingClientRect();

  //Overlapping strict check
  const baseElementLeft = rect.left;
  const baseElementTop = rect.top;

  const elementFromStartingPoint = document.elementFromPoint(
    baseElementLeft,
    baseElementTop,
  );

  if (
    elementFromStartingPoint != null &&
    !element.isSameNode(elementFromStartingPoint)
  ) {
    const elementZIndex = elementStyle.zIndex;
    const elementOverlappingZIndex = window.getComputedStyle(
      elementFromStartingPoint,
    ).zIndex;
    if (Number(elementZIndex) < Number(elementOverlappingZIndex)) {
      return false;
    }

    if (elementZIndex === '' && elementOverlappingZIndex === '') {
      /**
          If two positioned elements overlap without a z-index specified, the element 
    positioned last in the HTML code will be shown on top 
          **/
      if (
        element.compareDocumentPosition(elementFromStartingPoint) &
        Node.DOCUMENT_POSITION_FOLLOWING
      ) {
        return false;
      }
    }
  }

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

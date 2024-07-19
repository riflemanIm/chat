import { ChatRoom, ContactGather, GroupGather } from '../types';
export declare function isEmpty(value: unknown): boolean;
export declare function isContainStr(str1: string, str2: string): boolean;
/**
 * check URL
 * @param text
 */
export declare function isUrl(text: string): boolean;
/**
 * Формитирование времени сообщения
 * @param time
 */
export declare function formatTime(time: Date | string | undefined, format?: string): string | null;
/**
 * Раскрыть содержимое
 * @param content - данные в строке
 */
export declare function getFileMeta(content: string): {
    date: string;
    userId: string;
    size: string;
    name: string;
};
export declare function getImageMeta(content: string): {
    date: string;
    userId: string;
    width: string;
    height: string;
};
export declare function splitFileName(name: string): {
    name: string;
    ext: string;
};
export declare const getChatId: (chat: ChatRoom | null) => string | null;
export declare const getChatName: (chat: ChatRoom) => string;
export declare const allMessCount: (chats: GroupGather | ContactGather) => any;
export declare const chatRoomComparer: (a: ChatRoom, b: ChatRoom) => number;
export declare const getParam: (param: string) => string | null;
export declare const combineURLs: (baseURL: string, relativeURL: string, queryParams?: Record<string, string> | undefined) => string;

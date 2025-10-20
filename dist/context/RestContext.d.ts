import { AxiosInstance } from 'axios';
import { default as React } from 'react';
import { Contact, Group } from '../types';
export interface IRestContext {
    apiUrl: string;
    pageSize: number;
    fetch: AxiosInstance | null;
    getPrivateMessages: (chat: Contact, options?: {
        search?: string;
        reset?: boolean;
        callback?: () => void;
        shouldIgnore?: () => boolean;
    }) => Promise<void>;
    getGroupMessages: (chat: Group, options?: {
        reset?: boolean;
        shouldIgnore?: () => boolean;
    }) => Promise<void>;
    getUserByMmk: (mmkId: string | null, guid: string | null) => Promise<number | undefined>;
}
export declare const RestContext: React.Context<IRestContext>;
type RestProviderProps = {
    chatBaseURLApi: string;
    pageSize: number;
    children: React.JSX.Element;
    baseUrl: string;
};
export declare function clearLocalStorage(): void;
export declare function getRefreshToken(authToken: string, refreshToken: string, baseUrl: string): Promise<void>;
export declare const RestProvider: React.FC<RestProviderProps>;
export {};
//# sourceMappingURL=RestContext.d.ts.map
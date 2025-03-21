import React from 'react';
import { AxiosInstance } from 'axios';
import { Contact, Group } from '../types';
export interface IRestContext {
    apiUrl: string;
    pageSize: number;
    fetch: AxiosInstance | null;
    getPrivateMessages: (chat: Contact) => Promise<void>;
    getGroupMessages: (chat: Group) => Promise<void>;
    getUserByMmk: (mmkId: string | null, guid: string | null) => Promise<number | undefined>;
}
export declare const RestContext: React.Context<IRestContext>;
declare type RestProviderProps = {
    baseURLApi: string;
    pageSize: number;
    children: React.JSX.Element;
};
export declare function clearLocalStorage(): void;
export declare const signOut: () => Promise<void>;
export declare const getRefreshToken: (authToken: string, refreshToken: string, dispatch: any) => Promise<void>;
export declare const RestProvider: React.FC<RestProviderProps>;
export {};

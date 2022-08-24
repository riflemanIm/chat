import React from 'react';
import { AxiosInstance } from 'axios';
import { Contact, Group, User } from '../types';
export interface IRestContext {
    apiUrl: string;
    pageSize: number;
    fetch: AxiosInstance | null;
    getPrivateMessages: (chat: Contact) => Promise<void>;
    getGroupMessages: (chat: Group) => Promise<void>;
    getUserByMmk: (mmkId: string) => Promise<User | undefined>;
}
export declare const RestContext: React.Context<IRestContext>;
declare type RestProviderProps = {
    baseURLApi: string;
    pageSize: number;
    children: JSX.Element;
};
export declare const RestProvider: React.FC<RestProviderProps>;
export {};

import React, { createContext, useCallback, useContext } from 'react';
import { ChatContext, ChatDispatch } from './ChatContext';
import axios, { AxiosError, AxiosInstance } from 'axios';
import {
  Contact,
  Group,
  PagingResponse,
  PrivateMessage,
} from '../types';

export interface IRestContext {
  apiUrl: string;
  pageSize: number;
  fetch: AxiosInstance | null;
  getPrivateMessages: (chat: Contact) => Promise<void>;
  getGroupMessages: (chat: Group) => Promise<void>;
  getUserByMmk: (
    mmkId: string | null,
    guid: string | null,
  ) => Promise<number | undefined>;
}
const initialContext = {} as IRestContext;

export const RestContext: React.Context<IRestContext> = createContext(
  initialContext,
);

type RestProviderProps = {
  baseURLApi: string;
  pageSize: number;
  children: JSX.Element;
};

export function clearLocalStorage() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  localStorage.removeItem('doctor');
  localStorage.removeItem('chatUser');
}
export const signOut = async () => {
  try {
    await axios.post('auth/logout');
  } catch (error) {
    console.log('ERROR Logout', error);
  }

  clearLocalStorage();
  window.location.href = '/';
};

export const getRefreshToken = async (
  authToken: string,
  refreshToken: string,
  dispatch: ChatDispatch,
) => {
  try {
    const { data } = await axios.post('auth/refreshToken', {
      authToken,
      refreshToken,
    });
    localStorage.setItem('authToken', data?.authToken);
    localStorage.setItem('refreshToken', data?.refreshToken);
    window.location.href = '/';
  } catch (error) {
    console.log('ERROR RefreshToken', error);
    dispatch({ type: 'CLEAR_USER' });
    signOut();
  }
};
export const RestProvider: React.FC<RestProviderProps> = ({
  baseURLApi,
  pageSize,
  children,
}: RestProviderProps) => {
  const { state, dispatch } = useContext(ChatContext);
  const errorInterceptor = (error: AxiosError) => {
    if (error.response != null && error.response.status === 401) {
      getRefreshToken(state.token, state.refreshToken, dispatch);
    }
  };

  const fetch: AxiosInstance = axios.create({
    timeout: 60000, // Таймаут минута
    baseURL: baseURLApi,
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Authorization: `Bearer ${state.token}`,
    },
    withCredentials: false,
  });

  fetch.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      console.log('ERROR AxiosError');
      errorInterceptor(error);
      return Promise.reject(error);
    },
  );

  const getPrivateMessages = useCallback(
    async (chat: Contact, callback?: () => void) => {
      const contactId = chat.userId;
      const current = chat.messages?.length;
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const { data } = await fetch.get('/contact/messages', {
          params: {
            contactId,
            current,
            pageSize,
          },
        });

        if (data) {
          dispatch({
            type: 'ADD_PRIVATE_MESSAGES',
            payload: {
              pageSize,
              contactId,
              messages: data as PrivateMessage[],
            },
          });
          if (callback) {
            callback();
          }
        }
      } catch (error) {
        const err = error as AxiosError;
        dispatch({ type: 'SET_ERROR', payload: err.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch],
  );

  const getGroupMessages = useCallback(
    async (chat: Group) => {
      const { groupId } = chat;
      const current = chat.messages?.length;
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const { data }: { data: PagingResponse } = await fetch.get(
          '/group/messages',
          {
            params: {
              groupId,
              current,
              pageSize,
            },
          },
        );
        if (data) {
          dispatch({
            type: 'ADD_GROUP_MESSAGES',
            payload: {
              pageSize,
              groupId,
              ...data,
            },
          });
        }
      } catch (error) {
        const err = error as AxiosError;
        dispatch({ type: 'SET_ERROR', payload: err.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch],
  );

  const getUserByMmk = async (
    mmkId: string | null,
    guid: string | null,
  ) => {
    try {
      const { data }: { data: number } = await fetch.get(
        '/contact/find',
        {
          params: {
            mmkId,
            guid,
          },
        },
      );
      if (data != null) {
        return data;
      }
    } catch (error) {
      console.log('err getUserByMmk', error);
    }
  };

  return (
    <RestContext.Provider
      value={{
        apiUrl: baseURLApi,
        pageSize,
        fetch,
        getPrivateMessages,
        getGroupMessages,
        getUserByMmk,
      }}
    >
      {children}
    </RestContext.Provider>
  );
};

import axios, { AxiosError, AxiosInstance } from "axios";
import React, { createContext, useCallback, useContext, useMemo } from "react";
import { Contact, Group, PagingResponse, PrivateMessage } from "../types";
import { ChatContext, ChatDispatch } from "./ChatContext";

export interface IRestContext {
  apiUrl: string;
  pageSize: number;
  fetch: AxiosInstance | null;
  getPrivateMessages: (chat: Contact) => Promise<void>;
  getGroupMessages: (chat: Group) => Promise<void>;
  getUserByMmk: (
    mmkId: string | null,
    guid: string | null
  ) => Promise<number | undefined>;
}
const initialContext = {} as IRestContext;

export const RestContext: React.Context<IRestContext> =
  createContext(initialContext);

type RestProviderProps = {
  chatBaseURLApi: string;
  pageSize: number;
  children: React.JSX.Element;
  baseUrl: string;
};

export function clearLocalStorage() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  localStorage.removeItem("doctor");
  localStorage.removeItem("chatUser");
}

export async function getRefreshToken(
  authToken: string,
  refreshToken: string,
  baseUrl: string
) {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  try {
    const { data } = await axios.post(`${baseUrl}/auth/refreshToken`, {
      authToken,
      refreshToken,
    });
    localStorage.setItem("authToken", data?.authToken);
    localStorage.setItem("refreshToken", data?.refreshToken);
  } catch (error) {
    console.log("ERROR RefreshToken", error);
  }
  window.location.reload();
}

export const RestProvider: React.FC<RestProviderProps> = ({
  chatBaseURLApi,
  pageSize,
  children,
  baseUrl,
}: RestProviderProps) => {
  const { state, dispatch } = useContext(ChatContext);
  const errorInterceptor = (error: AxiosError) => {
    if (
      state.token &&
      error.response != null &&
      error.response.status === 401
    ) {
      getRefreshToken(state.token, state.refreshToken, baseUrl);
    }
  };

  const fetch: AxiosInstance = axios.create({
    timeout: 60000, // Таймаут минута
    baseURL: chatBaseURLApi,
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Authorization: `Bearer ${state.token}`,
    },
    withCredentials: false,
  });

  fetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log("ERROR AxiosError");
      errorInterceptor(error);
      return Promise.reject(error);
    }
  );

  const getPrivateMessages = useCallback(
    async (chat: Contact, callback?: () => void) => {
      const contactId = chat.userId;
      const current = chat.messages?.length;
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const { data } = await fetch.get("/contact/messages", {
          params: {
            contactId,
            current,
            pageSize,
          },
        });

        if (data) {
          dispatch({
            type: "ADD_PRIVATE_MESSAGES",
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
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const getGroupMessages = useCallback(
    async (chat: Group) => {
      const { groupId } = chat;
      const current = chat.messages?.length;
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const { data }: { data: PagingResponse } = await fetch.get(
          "/group/messages",
          {
            params: {
              groupId,
              current,
              pageSize,
            },
          }
        );
        if (data) {
          dispatch({
            type: "ADD_GROUP_MESSAGES",
            payload: {
              pageSize,
              groupId,
              ...data,
            },
          });
        }
      } catch (error) {
        const err = error as AxiosError;
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const getUserByMmk = async (mmkId: string | null, guid: string | null) => {
    try {
      const { data }: { data: number } = await fetch.get("/contact/find", {
        params: {
          mmkId,
          guid,
        },
      });
      if (data != null) {
        return data;
      }
    } catch (error) {
      console.log("err getUserByMmk", error);
    }
  };

  const value = useMemo(
    () => ({
      apiUrl: chatBaseURLApi,
      pageSize,
      fetch,
      getPrivateMessages,
      getGroupMessages,
      getUserByMmk,
    }),
    [chatBaseURLApi, pageSize]
  );

  return <RestContext.Provider value={value}>{children}</RestContext.Provider>;
};

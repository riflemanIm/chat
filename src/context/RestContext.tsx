import axios, { AxiosError, AxiosInstance } from "axios";
import React, { createContext, useCallback, useContext, useMemo } from "react";
import { Contact, Group, PagingResponse, PrivateMessage } from "../types";
import { ChatContext } from "./ChatContext";

export interface IRestContext {
  apiUrl: string;
  pageSize: number;
  fetch: AxiosInstance | null;
  getPrivateMessages: (
    chat: Contact,
    options?: {
      search?: string;
      reset?: boolean;
      callback?: () => void;
      shouldIgnore?: () => boolean;
    }
  ) => Promise<void>;
  getGroupMessages: (
    chat: Group,
    options?: { reset?: boolean; shouldIgnore?: () => boolean }
  ) => Promise<void>;
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

  const errorInterceptor = useCallback(
    (error: AxiosError) => {
      if (
        state.token &&
        error.response != null &&
        error.response.status === 401
      ) {
        getRefreshToken(state.token, state.refreshToken, baseUrl);
      }
    },
    [baseUrl, state.refreshToken, state.token]
  );

  const fetch = useMemo<AxiosInstance>(() => {
    const instance = axios.create({
      timeout: 60000, // Таймаут минута
      baseURL: chatBaseURLApi,
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Authorization: `Bearer ${state.token}`,
      },
      withCredentials: false,
    });

    instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.log("ERROR AxiosError");
        errorInterceptor(error);
        return Promise.reject(error);
      }
    );

    return instance;
  }, [chatBaseURLApi, errorInterceptor, state.token]);

  const getPrivateMessages = useCallback(
    async (
      chat: Contact,
      options?: { search?: string; reset?: boolean; callback?: () => void }
    ) => {
      const contactId = chat.userId;
      const current = options?.reset ? 0 : chat.messages?.length;
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        //console.log("/contact/messages");
        const { data } = await fetch.get("/contact/messages", {
          params: {
            contactId,
            current,
            pageSize,
            search: options?.search,
          },
        });

        if (data) {
          if (!options?.shouldIgnore?.()) {
            dispatch({
              type: "ADD_PRIVATE_MESSAGES",
              payload: {
                pageSize,
                contactId,
                messages: data as PrivateMessage[],
                reset: options?.reset ?? false,
              },
            });
          }
          if (options?.callback) {
            options.callback();
          }
        }
      } catch (error) {
        const err = error as AxiosError;
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch, fetch, pageSize]
  );

  const getGroupMessages = useCallback(
    async (
      chat: Group,
      options?: { reset?: boolean; shouldIgnore?: () => boolean }
    ) => {
      const { groupId } = chat;
      const current = options?.reset ? 0 : chat.messages?.length;
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
          if (!options?.shouldIgnore?.()) {
            dispatch({
              type: "ADD_GROUP_MESSAGES",
              payload: {
                pageSize,
                groupId,
                ...data,
                reset: options?.reset ?? false,
              },
            });
          }
        }
      } catch (error) {
        const err = error as AxiosError;
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch, fetch, pageSize]
  );

  const getUserByMmk = useCallback(
    async (mmkId: string | null, guid: string | null) => {
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
    },
    [fetch]
  );

  const value = useMemo(
    () => ({
      apiUrl: chatBaseURLApi,
      pageSize,
      fetch,
      getPrivateMessages,
      getGroupMessages,
      getUserByMmk,
    }),
    [
      chatBaseURLApi,
      pageSize,
      fetch,
      getPrivateMessages,
      getGroupMessages,
      getUserByMmk,
    ]
  );

  return <RestContext.Provider value={value}>{children}</RestContext.Provider>;
};

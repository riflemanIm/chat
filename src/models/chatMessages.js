import get from "lodash/get";
import qs from "qs";
import debugConsole from "../utils/debugConsole";
import * as request from "../utils/request";
import {
  fetchChatMessagesSuccess,
  fetchChatMessagesError,
  sendChatMessageSuccess,
  sendChatMessageError,
  uploadFileToChatMessageSuccess,
  uploadFileToChatMessageError,
} from "../redux/actions/chatMessages";
import { getCookie } from "../utils/cookies";

// const url = 'chats/9416695019/messages';

class ChatMessages {
  get = (payload) =>
    request
      .get({
        url: "chats/9416695019/messages",
        params: payload,
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then(
        (response) =>
          // const normalizedData = this.normalizer(response.data);
          fetchChatMessagesSuccess(response.data)
        // return setDoctor(normalizedData);
      )
      .catch((error) => {
        const errorAlertText = get(
          error,
          "response.data.Message",
          "Не удалось получить данные о враче"
        );
        return fetchChatMessagesError(errorAlertText);
      });

  send = (payload) => {
    debugConsole.log("send ==", payload);
    return request
      .post({
        url: "chats/9416695019/send",
        data: payload,
      })
      .then(
        (response) =>
          // const normalizedData = this.normalizer(response.data);
          sendChatMessageSuccess(response.data)
        // return setDoctor(normalizedData);
      )
      .catch((error) => {
        const errorAlertText = get(
          error,
          "response.data.Message",
          "Не удалось получить данные о враче"
        );
        return sendChatMessageError(errorAlertText);
      });
  };

  upload = (payload) => {
    debugConsole.log("upload", payload.get("file"));
    const params = qs.parse(window.location.search.substring(1));
    return request
      .post({
        url: `chats/9416695019/upload?userId=${params.user || 1}&user=user ${
          params.user || 1
        }`,
        data: payload,
      })
      .then(
        (response) =>
          // const normalizedData = this.normalizer(response.data);
          uploadFileToChatMessageSuccess(response.data)
        // return setDoctor(normalizedData);
      )
      .catch((error) => {
        const errorAlertText = get(
          error,
          "response.data.Message",
          "Не удалось получить данные о враче"
        );
        return uploadFileToChatMessageError(errorAlertText);
      });
  };
}

export default new ChatMessages();

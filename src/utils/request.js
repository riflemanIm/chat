import axios from "axios";
// import qs from 'qs';
// import debugConsole from '../utils/debugConsole';
import { store } from "../redux/store";
import { login } from "../redux/actions/user";
import { getCookie } from "./cookies";
import { API_URL } from "../config";

const checkAuth = (response) => {
  response
    .then((resp) => resp)
    .catch((error) => {
      if (error && error.response && error.response.status === 401) {
        store.dispatch(login());
      }
    });
};

export const get = ({ url, params }) => {
  const response = axios.get(API_URL + url, {
    headers: {
      Authorization: `Bearer ${getCookie("access_token")}`,
    },
    params,
  });
  checkAuth(response);
  return response;
};

export const post = ({ url, data, onUploadProgress, headers = {} }) => {
  const response = axios({
    method: "post",
    url: API_URL + url,
    data,
    headers: {
      // ...headers,
      Authorization: `Bearer ${getCookie("access_token")}`,
    },
    onUploadProgress: (event) => {
      if (typeof onUploadProgress === "function") onUploadProgress(event);
    },
    responseType: "json",
  });
  checkAuth(response);
  return response;
};

export default {
  get,
  post,
};

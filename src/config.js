// globals __DEV__

import { getLang } from "./utils/lang";
import moment from "moment";
import("moment/locale/ru").then(() => moment.locale(getLang()));

export const isDev = true;
const api_host = "api.mediadoc.fr";
//const api_port = isDev ? ":4000" : "";
const api_protocol = "https";
const api_ws_protocol = "wss";

export const WS_URL = `${api_ws_protocol}://${api_host}/api/websocket/`;
export const API_URL = `${api_protocol}://${api_host}/api/v1/`;
export const trueConfUrl = "https://videoconf.mediadoc.fr";

export const dateFormat = "D MMMM";
export const hoursFormat = "HH";
export const minutesFormat = "mm";

export const AUTH_STATUS_UNKOWN = "AUTH_UNKOWN";
export const AUTH_WAITING = "AUTH_WAITING";
export const AUTH_STATUS_SUCCESS = "AUTH_SUCCESS";
export const AUTH_STATUS_FAILED = "AUTH_FAILED";

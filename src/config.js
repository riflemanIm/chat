/* globals __DEV__ */

import { getLang } from './utils/lang';
import moment from 'moment';
import(`moment/locale/${process.env.app_lang || 'ru'}`)
    .then(() => moment.locale(getLang()));

export const isDev = process.env.mode !== 'production';
const api_host = process.env.app_host || '';
const api_port = isDev ? process.env.app_port || ':4000' : '';
const api_protocol = process.env.app_ssl === 'true' ? 'https' : 'http';
const api_ws_protocol = process.env.app_ssl === 'true' ? 'wss' : 'ws';

export const WS_URL = `${api_ws_protocol}://${api_host}/api/websocket/`;
export const API_URL = `${api_protocol}://${api_host}/api/v1/`;
export const trueConfUrl = `https://${process.env.trueconf_host}`;

export const dateFormat = 'D MMMM';
export const hoursFormat = 'HH';
export const minutesFormat = 'mm';

export const AUTH_STATUS_UNKOWN = 'AUTH_UNKOWN';
export const AUTH_WAITING = 'AUTH_WAITING';
export const AUTH_STATUS_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_STATUS_FAILED = 'AUTH_FAILED';

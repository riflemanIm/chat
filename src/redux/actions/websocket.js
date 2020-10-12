import { createAction } from 'redux-actions';

export const CONNECT_TO_WEB_SOCKET = 'CONNECT_TO_WEB_SOCKET';
export const connectToWebSocket = createAction(CONNECT_TO_WEB_SOCKET);

export const CONNECT_TO_WEB_SOCKET_SUCCESS = 'CONNECT_TO_WEB_SOCKET_SUCCESS';
export const connectToWebSocketSuccess = createAction(CONNECT_TO_WEB_SOCKET_SUCCESS);

export const CONNECT_TO_WEB_SOCKET_ERROR = 'CONNECT_TO_WEB_SOCKET_ERROR';
export const connectToWebSocketError = createAction(CONNECT_TO_WEB_SOCKET_ERROR);

export const WEBSOCKET_CONNECTED = 'WEBSOCKET_CONNECTED';
export const WebSocketConnected = createAction(WEBSOCKET_CONNECTED);

export const CONFIG_WEBSOCKET = 'CONFIG_WEBSOCKET';
export const configWebsocket = createAction(CONFIG_WEBSOCKET);

export const WEBSOCKET_SEND_MESSAGE = 'WEBSOCKET_SEND_MESSAGE';
export const WebSocketSetMessage = createAction(WEBSOCKET_SEND_MESSAGE);

import { combineEpics, ofType } from 'redux-observable';
import { mapTo, switchMap } from 'rxjs/operators';
import { WS_URL, API_URL } from '../../config';
import WsConsumer from '../../models/wsConsumer';
import { getCookie } from '../../utils/cookies';
import qs from 'qs';

import {
    CONNECT_TO_WEB_SOCKET, connectToWebSocketSuccess, connectToWebSocketError,
    CONNECT_TO_WEB_SOCKET_SUCCESS, CONNECT_TO_WEB_SOCKET_ERROR,
    WebSocketConnected, WEBSOCKET_CONNECTED,
    configWebsocket, CONFIG_WEBSOCKET,
} from '../actions/websocket';

import { fetchChatMessagesSuccess, markMessages } from '../actions/chatMessages';
import { fetchChatRoomsSuccess } from '../actions/chatRooms';
import { setActive } from '../actions/app';
import { store } from '../store';
import { checkCallStatusSuccess, updateVideoUrl } from "../actions/call";

let requestId = 0;

const connectToWebsocketEpic = (action$) => action$.pipe(
    ofType(CONNECT_TO_WEB_SOCKET),
    mapTo((() => {
        const params = qs.parse(window.location.search.substring(1));
        const wsClient = new WsConsumer({
            ws_url: WS_URL,
            api_url: API_URL,
            access_token: getCookie('access_token'),
            target_token: params.target_token,
            debug: true,
        });

        wsClient.on('connected', () => {
            wsClient.getMessages({ targetToken: params.target_token });
            // wsClient.deleteMessages(['5e4c302de63e502ac44e82d2', '5e4c2e5afb9e3e471c3bb8d5'])

            // wsClient.setConferenceActive({ requestId });
            // wsClient.getConferenceStatus({ requestId });

            wsClient.getConferenceUrl();

            // setInterval(() => {
            //     requestId++;
            //     wsClient.getConferenceStatus({ requestId });
            // }, 10000);

            // setInterval(() => {
            //     wsClient.setConferenceActive({ requestId });
            // }, 10000);
        });

        wsClient.on('reconnected', () => {
            wsClient.getMessages({ targetToken: params.target_token });
            // wsClient.deleteMessages(['5e4c302de63e502ac44e82d2', '5e4c2e5afb9e3e471c3bb8d5'])
        });

        wsClient.on('messagesReceived', (data) => {
            // console.log('messagesReceived', data)
            const userId = store.getState().user.userId;
            const message = data.messages.find(m => m.status !== 'read' && m.userId !== userId);
            if (typeof message !== 'undefined') {
                wsClient.markMessagesAsRead(message.id);
            }
            store.dispatch(fetchChatMessagesSuccess({ data: { messages: data.messages } }));
        });

        wsClient.on('messagesMarked', (data) => {
            store.dispatch(markMessages(data.messages));
            // wsClient.getMessages();
        });

        wsClient.on('chatActivated', (data) => {
//             console.log('chatActivated', data);
            store.dispatch(setActive());
        });

        wsClient.on('messageSent', (data) => {
            // console.log('messageSent', data);
            wsClient.getMessages({ targetToken: params.target_token });
        });

        wsClient.on('messagesDeleted', (data) => {
            // console.log('messagesDeleted', data);
            wsClient.getMessages({ targetToken: params.target_token });
        });

        wsClient.on('conferenceStatusUpdated', (data) => {
            // console.log('conferenceStatusUpdated', data);
            store.dispatch(checkCallStatusSuccess(data.status))
            // wsClient.getMessages();
        });

        wsClient.on('conferenceUrlUpdated', (data) => {
            console.log('conferenceUrlUpdated', data);
            store.dispatch(updateVideoUrl(data.url))
            // wsClient.getMessages();
        });

        wsClient.on('chatRoomsReceived', (data) => {
            // console.log('chatRoomsReceived', data);
            store.dispatch(fetchChatRoomsSuccess(data.chatRooms))
            // wsClient.getMessages();
        });

        return connectToWebSocketSuccess(wsClient);
    })()),
);

const configWebsocketEpic = (action$) => action$.pipe(
    ofType(CONFIG_WEBSOCKET),
    mapTo((() => WebSocketConnected())()),
);

const connectToWebsockeSuccesstEpic = (action$) => action$.pipe(
    ofType(CONNECT_TO_WEB_SOCKET_SUCCESS),
    mapTo((() => WebSocketConnected())()),
);

export const websocketEpics = combineEpics(
    connectToWebsocketEpic,
    connectToWebsockeSuccesstEpic,
    configWebsocketEpic,
);

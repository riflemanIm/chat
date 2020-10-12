import { combineEpics } from 'redux-observable';

import { websocketEpics } from './websocket';
import { cabinetEpic } from './chatRooms';
import { chatUsersEpic } from './chatUsers';
import { chatMessagesEpic } from './chatMessages';
import { userEpics } from './user';
import { mediaEpics } from './media';
import { callEpics } from './call';

export default combineEpics(
    websocketEpics,
    userEpics,
    chatUsersEpic,
    cabinetEpic,
    chatMessagesEpic,
    mediaEpics,
    callEpics,
);

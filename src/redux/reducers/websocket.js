import {
    CONNECT_TO_WEB_SOCKET_SUCCESS,
} from '../actions/app';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case CONNECT_TO_WEB_SOCKET_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

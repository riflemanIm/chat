import {
    FETCH_CHAT_USERS_SUCCESS,
} from '../actions/chatUsers';

const initialState = [];

export default function (state = initialState, { type, payload }) {
    switch (type) {
    case FETCH_CHAT_USERS_SUCCESS: {
        const { users = [] } = payload;
        return [...users];
    }
    default:
        return state;
    }
}

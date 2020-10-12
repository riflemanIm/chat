import qs from 'qs';
import {
    FETCH_CHAT_ROOMS_SUCCESS, FETCH_CHAT_ROOMS_ERROR
} from '../actions/chatRooms';

const initialState = {
    list: [],
    isLoaded: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
    case FETCH_CHAT_ROOMS_SUCCESS: {
        const params = qs.parse(window.location.search.substring(1));
        return {
            isLoaded: true,
            list: payload.map((item) => ({
                ...item,
                active: params.target_token === item.targetToken
            }))
        }
    }
    case FETCH_CHAT_ROOMS_ERROR: {
        return {
            isLoaded: true,
            list: []
        };
    }
    default:
        return state;
    }
}

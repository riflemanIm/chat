import get from 'lodash/get';
import * as request from '../utils/request';
import { getCookie } from '../utils/cookies';

const url = 'chats/users';

class ChatUsers {
    get = (payload) => (
        request
            .get({
                url,
                params: payload,
                headers: {
                    Authorization: `Bearer ${getCookie('access_token')}`,
                },
            })
            .then((response) => response.data)
            .catch((error) => get(
                error,
                'response.data.Message',
                'Не удалось получить список пациентов',
            ))
    )
}

export default new ChatUsers();

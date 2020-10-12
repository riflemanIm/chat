import get from 'lodash/get';
import * as request from '../utils/request';

const url = 'all';

class App {
    get = (payload) => (
        request
            .get({
                url,
                params: payload,
            })
            .then((response) => response.data)
            .catch((error) => get(
                error,
                'response.data.Message',
                'Не удалось получить общие данные',
            ))
    )
}

export default new App();

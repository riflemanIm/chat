import get from 'lodash/get';
import * as request from '../utils/request';
// import { catchError } from '../redux/actions/app';
// import { fetchCabinetError, fetchCabinetSuccess, setCabinet } from '../redux/actions/cabinet';

const url = 'cabinet';

class Cabinet {
    get = (payload) => (
        request
            .get({
                url: '/getCabinet/44',
                params: payload,
            })
            .then((response) => {
                const normalizedData = this.normalizer(response.data);
                // fetchCabinetSuccess(normalizedData);
                // setCabinet(normalizedData);
            })
            .catch((error) => {
                const errorAlertText = get(
                    error,
                    'response.data.Message',
                    'Не удалось получить данные кабинета',
                );
                // return catchError(error.message);
                // return fetchCabinetError(errorAlertText);
            })
    )

    normalizer = (data) => ({
        ...data,
        number: data.id,
    })
}

export default new Cabinet();

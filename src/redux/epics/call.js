import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import * as request from '../../utils/request';
import {
    REFRESH_VIDEO_URL, refreshVideoUrlSuccess, refreshVideoUrlError,
    CHECK_CALL_STATUS, checkCallStatusSuccess, checkCallStatusError
} from '../actions/call';

const refreshVideoUrlEpic = (action$) => action$.pipe(
    ofType(REFRESH_VIDEO_URL),
    switchMap(
        ({ payload }) => request
            .get({
                url: 'widget/refresh/',
            })
            .then((response) => typeof response.data.url !== 'undefined' ? refreshVideoUrlSuccess(response.data.url) : refreshVideoUrlError('Не удалось обновить url видеоконференции'))
            .catch(() => refreshVideoUrlError('Не удалось обновить url видеоконференции'))
    ),
);

const checkCallStatusEpic = (action$) => action$.pipe(
    ofType(CHECK_CALL_STATUS),
    switchMap(
        ({ payload }) => request
            .get({
                url: 'call/status/',
            })
            .then((response) => typeof response.data.status !== 'undefined' ? checkCallStatusSuccess(response.data.status) : refreshVideoUrlError('Не удалось обновить url видеоконференции'))
            .catch((error) => {
                let status = 400;
                if (error.response && error.response.status) {
                    status = error.response.status;
                }

                return checkCallStatusError({ text: 'Не удалось получить статус конференции', status } )
            })
    ),
);

export const callEpics = combineEpics(
    refreshVideoUrlEpic,
    checkCallStatusEpic,
);

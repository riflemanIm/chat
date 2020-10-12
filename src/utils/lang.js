import qs from 'qs';
import { langs } from '../constants';

export const getLocaleName = (name) => {
    const locale = getLang();

    if (typeof langs[locale] === 'undefined') {
        return '-';
    }

    if (typeof langs[locale][name] !== 'undefined') {
        return langs[locale][name];
    }

    return '-';
}

export const getLang = () => {
    const params = qs.parse(window.location.search.substring(1));
    if (typeof params.lang === 'string' && ['ru', 'en', 'fr'].includes(params.lang)) {
        return params.lang;
    }
    return process.env.app_lang || 'ru';
}

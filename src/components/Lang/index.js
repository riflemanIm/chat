import React, { useCallback } from 'react';
import { getLang } from '../../utils/lang';
import qs from 'qs';
import './index.css';

export default () => {
    const onChange = useCallback((event) => {
        const params = qs.parse(window.location.search.substring(1));
        params.lang = event.target.value;
        location.href = `${location.origin}${location.pathname}?${Object.keys(params).map(p => `${p}=${params[p]}`).join('&')}`;
    }, []);

    return (
        <select className="lang" onChange={onChange}>
            <option value="ru" selected={getLang() === 'ru'}>RU</option>
            <option value="en" selected={getLang() === 'en'}>EN</option>
            <option value="fr" selected={getLang() === 'fr'}>FR</option>
        </select>
    );
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import ru from './ru.json';

import LanguageDetector from 'i18next-browser-languagedetector';
//import config from '../config';

//console.log('chatResources', chatResources);
const getLang = () => {
  return 'ru';
  // const user = localStorage.getItem('user');
  // if (!user) return 'ru';
  // const { lang } = JSON.parse(user);
  // return lang;
};

const lang = getLang();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translations: ru },
      en: { translations: en },
      fr: { translations: fr },
    },
    lng: lang,
    load: 'languageOnly',
    fallbackLng: lang,
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    //    keySeparator: false, // we use content as keys

    // interpolation: {
    //   escapeValue: false, // not needed for react!!
    //   formatSeparator: lang === "ru" ? " " : ",",
    // },

    lowerCaseLng: true,
  });

export default i18n;

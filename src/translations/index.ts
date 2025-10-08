import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const defaultConfig = {
  resources: {},
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init(defaultConfig).catch((error) => {
    if (typeof console !== "undefined" && console.warn) {
      console.warn("[translations] Failed to initialise i18next", error);
    }
  });
}

export default i18n;

import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "en",
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        hello: "Welcome",
        coords: "{{lat}}, {{lng}}",
      },
    },
  },
});

export default i18n;

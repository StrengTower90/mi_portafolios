import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(HttpBackend) //Load translation from /public
    .use(LanguageDetector) //Detect user language
    .use(initReactI18next) //Pass to react-i18next
    .init({
    fallbackLng: "es",
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: "/mi_portafolios/locales/{{lng}}/translation.json", // ✅ Asegura que este path sea correcto
    },
  });

  export default i18n;

import "i18next";

// import all namespaces (for the default language, only)
import ptBRTranslation from '../i18n/locales/pt-br'
import enUSTranslation from '../i18n/locales/en-us'

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ptBR";
    resources: {
      ptBR: typeof ptBRTranslation;
      enUS: typeof enUSTranslation;
    };
  }
}
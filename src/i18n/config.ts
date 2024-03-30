import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBRTranslation from './locales/pt-br'
import enUSTranslation from './locales/en-us'

i18n.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  lng: 'ptBR',
  resources: {
    ptBR: {
      translations: ptBRTranslation
    },
    enUS: {
      translations: enUSTranslation
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['ptBr', 'enUS'];

export default i18n;
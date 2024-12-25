import ruJSON from '../../locales/ru.json'
import enJSON from '../../locales/en.json'
import esJSON from '../../locales/es.json'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const languages = [
  {
    label: 'Русский',
    value: 'ru',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Español',
    value: 'es',
  },
]

export const LanguageTypes = ['ru', 'en', 'es'] as const

export type LanguageType = (typeof LanguageTypes)[number]

const language =
  localStorage && localStorage.getItem('language')
    ? JSON.parse(localStorage.getItem('language') ?? '')
    : undefined

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: { translation: enJSON },
    ru: { translation: ruJSON },
    es: { translation: esJSON },
  },

  lng:
    language?.language && language.language.length > 0
      ? language?.language
      : 'en',
  fallbackLng: 'en',
})

export default i18n

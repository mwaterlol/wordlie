import { LanguageType } from '@/configs/i18n'
import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'

export const languageStore = persistentAtom<{ language: LanguageType }>(
  'language',
  { language: 'en' },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
)

export const useLaunguageStore = () => {
  const language = useStore(languageStore)

  const setLanguage = (value: LanguageType) => {
    languageStore.set({ language: value })
  }
  return { language, setLanguage }
}

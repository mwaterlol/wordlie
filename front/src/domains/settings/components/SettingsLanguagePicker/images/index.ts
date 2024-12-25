import { LanguageType } from '@/configs/i18n'
import IconEnglish from './english.svg?react'
import IconRussian from './russian.svg?react'
import IconSpanish from './spanish.svg?react'
import { FunctionComponent, SVGProps } from 'react'

export default {
  ru: IconRussian,
  en: IconEnglish,
  es: IconSpanish,
} as Record<
  LanguageType,
  FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string
    }
  >
>

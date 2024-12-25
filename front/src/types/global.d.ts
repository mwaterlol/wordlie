export {}

declare global {
  interface Window {
    Telegram: { WebApp: TelegramWebApp }
  }
}

export interface TelegramWebApp {
  BackButton: any
  initData: string
  initDataUnsafe: object
  version: string
  platform: string
  themeParams: object
  isExpanded: boolean
  colorScheme: string
  headerColor: string
  backgroundColor: string
  isClosingConfirmationEnabled: boolean
  setHeaderColor: (string) => void
  setBackgroundColor: (string) => void
}

declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

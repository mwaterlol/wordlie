import { HelmetProvider } from 'react-helmet-async'

import { QueryProvider } from './query'
import { MantineProvider } from './mantine'

import { useTelegramInit } from '@/hooks'

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  useTelegramInit()
  return (
    <HelmetProvider>
      <QueryProvider>
        <MantineProvider>{children}</MantineProvider>
      </QueryProvider>
    </HelmetProvider>
  )
}

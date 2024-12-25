import { theme } from '@/_libs/mantine'
import { MantineProvider as MantineProviderMain } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { DatesProvider } from '@mantine/dates'
import { useTranslation } from 'react-i18next'

export const MantineProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { i18n } = useTranslation()
  return (
    <MantineProviderMain withGlobalStyles withNormalizeCSS theme={theme}>
      <DatesProvider
        settings={{
          locale: i18n.language === 'es' ? 'es-us' : i18n.language,
          firstDayOfWeek: 0,
          weekendDays: [0],
        }}
      >
        <ModalsProvider
          modalProps={{
            padding: 'md',
            radius: 'md',
            overlayProps: {
              opacity: 0.55,
              blur: 3,
            },
          }}
        >
          <Notifications position={'top-center'} limit={1} maw="fit-content" />
          {children}
        </ModalsProvider>
      </DatesProvider>
    </MantineProviderMain>
  )
}

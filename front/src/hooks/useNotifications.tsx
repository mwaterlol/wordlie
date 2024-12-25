import { notifications } from '@mantine/notifications'

import { ShowNotification, NotificationType } from '../types'
import { Ban, CircleAlert, CircleCheckBig, Gem, Info } from 'lucide-react'
import { Flex, Text, useMantineTheme } from '@mantine/core'

export const useNotifications = () => {
  const theme = useMantineTheme()
  const getColorAndIcon = (type: NotificationType) => {
    switch (type) {
      case 'SUCCESS':
        return {
          color: 'green',
          icon: <CircleCheckBig size={16} color="green" />,
        }
      case 'INFO':
        return {
          color: 'blue',
          icon: <Info size={16} color={theme.colors.blue[5]} />,
        }
      case 'ERROR':
        return { color: 'red', icon: <Ban size={16} color="red" /> }
      case 'WARNING':
        return {
          color: 'yellow',
          icon: <CircleAlert size={16} color="yellow" />,
        }
      default:
        break
    }
  }

  const showNotification = (payload: ShowNotification) => {
    const { type, ...props } = payload

    const { color, icon } = getColorAndIcon(type) ?? {}
    notifications.show({
      color,
      icon,
      message: null,
      withCloseButton: false,
      autoClose: 3000,
      children: 'sdfsdf',
      ...props,
      sx: {
        borderRadius: 8,
        '.mantine-Notification-icon': {
          maxHeight: 16,
          maxWidth: 16,
          background: 'transparent',
        },
        '.mantine-Notification-title': {
          fontWeight: 400,
          textWrap: 'wrap',
        },
        '.mantine-Notification-root': {},
        '&': {
          maxWidth: 'fit-content',
          margin: '0 auto',
        },
      },
    })
  }

  const showCoinsIncomeNotification = (ammount: number) => {
    notifications.show({
      message: null,
      autoClose: 4000,
      withCloseButton: false,

      title: (
        <Flex gap={10} align="center">
          <Gem size={24} />
          <Text weight={700} size={16}>
            {ammount}
          </Text>
        </Flex>
      ),
      radius: 'xl',
      sx: (theme) => ({
        '.mantine-Notification-icon': {
          maxHeight: 0,
          maxWidth: 0,
        },
        '.mantine-Notification-title': {
          maxWidth: 'fit-content',
        },
        '.mantine-Notification-root': { maxWidth: 'fit-content', height: 42 },
        '&': {
          maxWidth: 'fit-content',
          margin: '0 auto',
          background: theme.colors.violet[8],
        },
        '&::before': { display: 'none' },
      }),
    })
  }

  return {
    showNotification,
    showCoinsIncomeNotification,
  }
}

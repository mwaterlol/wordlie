import { NotificationsProps } from '@mantine/notifications'

const notificationTypes = ['INFO', 'WARNING', 'SUCCESS', 'ERROR'] as const

export type NotificationType = (typeof notificationTypes)[number]

export type ShowNotification = Omit<NotificationsProps, 'message'> & {
  message?: React.ReactNode
  type: NotificationType
}

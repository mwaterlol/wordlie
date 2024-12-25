import {
  Drawer as MantineDrawer,
  Stack,
  Flex,
  Title,
  CloseButton,
} from '@mantine/core'
import { DrawerProps } from './types'

export const Drawer = ({
  withCloseButton,
  sx,
  size,
  position,
  children,
  header,
  footer,
  title,
  close,
  onClose,
  borderTopColor,
  needShadow = false,
  ...props
}: DrawerProps) => {
  return (
    <MantineDrawer
      position={position ?? 'bottom'}
      withCloseButton={false}
      size={size ?? 'xs'}
      sx={() => ({
        '.mantine-Paper-root': {
          borderRadius: '12px 12px 0 0',
        },
        '.mantine-Drawer-body': {
          minHeight: '100%',
        },
        ...(sx as any),
      })}
      onClose={onClose}
      {...props}
    >
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          {title && (
            <Title order={3} sx={{ flexGrow: 1 }}>
              {title}
            </Title>
          )}
          {withCloseButton && (
            <CloseButton
              size={'md'}
              onClick={() => {
                if (close) {
                  close()
                }
                if (onClose) {
                  onClose()
                }
              }}
            />
          )}
        </Flex>
        <Stack sx={{ flexGrow: 1, minHeight: '100%' }}>{children}</Stack>
      </Flex>
    </MantineDrawer>
  )
}

export default Drawer

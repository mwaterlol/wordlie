import { Flex, Stack, Text } from '@mantine/core'
import { InfoLineProps } from './types'

export const InfoLine = ({ icon: Icon, children, label }: InfoLineProps) => {
  return (
    <Flex gap={16} align="center" sx={{ flexGrow: 1 }}>
      {Icon && <Icon color={'white'} size={24} strokeWidth={1} />}
      <Stack spacing={0}>
        <Text
          color="dark.2"
          size="xs"
          sx={{ whiteSpace: 'nowrap', flexGrow: 1 }}
        >
          {label}
        </Text>
        {children}
      </Stack>
    </Flex>
  )
}

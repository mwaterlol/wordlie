import { Flex, Skeleton, Text } from '@mantine/core'
import { GemCardProps } from './types'
import { Gem } from 'lucide-react'

export const GemCard = ({ isPlus, isLoading, amount }: GemCardProps) => {
  return (
    <Skeleton
      visible={isLoading}
      h={24}
      w={isLoading ? undefined : 'fit-content'}
    >
      <Flex
        h={24}
        align="center"
        bg="violet.8"
        w="fit-content"
        px={7}
        gap={3.29}
        sx={{ borderRadius: 8 }}
      >
        {isPlus && <Text size="xs">+</Text>}
        <Gem size={14.5} />
        <Text size="xs">{amount}</Text>
      </Flex>
    </Skeleton>
  )
}

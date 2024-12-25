import { queryClient } from '@/_core/api'
import { queries } from '@/_services'
import { PlatformInfo } from '@/types'
import { platformStore } from './useGetPlatformInfo'

export const useFetchPlatform = () => {
  const fetchPlatform = async () => {
    try {
      await queryClient.fetchQuery<PlatformInfo>(queries.platform.getInfo())
      const data = await queryClient.fetchQuery<PlatformInfo>({
        ...queries.platform.getInfo(),
        staleTime: 100000,
        retry: 3,
      })

      platformStore.set({ platform: data })
    } catch {
      platformStore.set({ platform: undefined })
    }
  }
  return { fetchPlatform }
}

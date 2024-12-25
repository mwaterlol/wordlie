import { queries } from '@/_services'
import { PlatformInfo } from '@/types'
import { persistentAtom } from '@nanostores/persistent'
// import { useStore } from '@nanostores/react'
import { useQuery } from '@tanstack/react-query'
// import { useFetchPlatform } from './useFetchPlatform'

export const platformStore = persistentAtom<{ platform?: PlatformInfo }>(
  'platform',
  { platform: undefined },
  { encode: JSON.stringify, decode: JSON.parse }
)
export const useGetPlatformInfo = <T = PlatformInfo>() => {
  // const platform = useStore(platformStore)

  // const { fetchPlatform } = useFetchPlatform()
  // if (platform.platform) {
  //   return { isLoading: false, data: platform.platform, isError: false }
  // }
  // fetchPlatform()
  return useQuery<T>({
    ...queries.platform.getInfo(),
  })
}

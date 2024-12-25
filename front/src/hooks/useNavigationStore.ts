import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'

export const navigationStore = persistentAtom<{
  shown: boolean
}>(
  'pricesDrawer',
  { shown: true },
  { encode: JSON.stringify, decode: JSON.parse }
)

export const useNavigationStore = () => {
  const state = useStore(navigationStore)
  const setState = (val: boolean) => {
    navigationStore.set({ shown: val })
  }

  return { state, setState }
}

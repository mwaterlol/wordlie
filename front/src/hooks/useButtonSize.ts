import { useViewport } from '@telegram-apps/sdk-react'

const BUTTON_MD_BREAKPOINT = 350
const BUTTON_SM_BREAKPOINT = 295

export const useButtonSize = () => {
  const vp = useViewport()

  let size: 'sm' | 'md' | 'lg' = 'lg' // Default to 'lg'

  if ((vp?.width ?? 0) < BUTTON_SM_BREAKPOINT) {
    size = 'sm'
  } else if ((vp?.width ?? 0) < BUTTON_MD_BREAKPOINT) {
    size = 'md'
  }

  return { size }
}

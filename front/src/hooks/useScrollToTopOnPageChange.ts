import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigationStore } from './useNavigationStore'

export const useScrollToTopOnPageChange = () => {
  const { pathname } = useLocation()

  const { setState } = useNavigationStore()
  useEffect(() => {
    window.scrollTo(0, 0)
    setState(true)
  }, [pathname])
}

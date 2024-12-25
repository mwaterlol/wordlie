import { initViewport } from '@telegram-apps/sdk-react'
import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'

export const useDimensions = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [viewport] = initViewport()

  const getVp = async () => {
    const vp = await viewport
    setWindowWidth(vp.width)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    getVp()
  }, [viewport, window.innerHeight, WebApp.viewportHeight])

  return [windowWidth, windowHeight]
}

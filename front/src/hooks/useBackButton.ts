import { initBackButton } from '@telegram-apps/sdk-react'

export const useBackButton = () => {
  const [backButton] = initBackButton()

  const show = () => {
    backButton.show()
  }

  const onBackButtonClick = (func: VoidFunction) => {
    backButton.on('click', () => {
      func()
    })
  }
  const hide = () => {
    backButton.hide()
  }

  return { show, hide, onBackButtonClick }
}

import { modals } from '@mantine/modals'

import { OpenConfirmModal, OpenContentModal } from '../types'

export const useModals = () => {
  const openConfirmModal = (payload: OpenConfirmModal) => {
    modals.openConfirmModal({
      withCloseButton: false,
      centered: true,
      ...payload,
    })
  }

  const openContentModal = (payload: OpenContentModal) => {
    modals.open({
      centered: true,
      ...payload,
    })
  }

  const closeModal = (modalId: string) => {
    modals.close(modalId)
  }

  const closeAll = () => {
    modals.closeAll()
  }

  return {
    openConfirmModal,
    openContentModal,
    closeModal,
    closeAll,
  }
}

import { createQueryKeys } from '@lukemorales/query-key-factory'

export const platformQueryKeys = createQueryKeys('platform', {
  getInfo: () => [{ path: '/info' }],
})

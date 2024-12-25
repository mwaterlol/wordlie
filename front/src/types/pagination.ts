import { z } from 'zod'

export type PaginationType = {
  take: number
  skip: number
}

export const PaginationQueryParamsSchema = z.object({
  take: z.number(),
  skip: z.number(),
})

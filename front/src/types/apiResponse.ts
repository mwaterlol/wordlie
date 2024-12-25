export type ApiResponseList<T> = {
  data: T[]
  total: number
}

export type ApiActionWithCoinsChange<T> = {
  availableCoins: number
  data: T
}

export type ApiError = {
  response: { data: { errors: { code: number; message: string }[] } }
}

export type ApiFetchOptions = RequestInit & {
    url: string
    params?: Record<string, string | number | boolean | undefined | null>
    data?: Record<string, any>
    // isAuth?: boolean
    // isLogout?: boolean
}

export type ApiFetchResult<T> =
    | {
          error: ApiError
          data?: never
      }
    | {
          error?: never
          data: T
      }

export interface ApiError extends Error {
    code: number
    error: string
}

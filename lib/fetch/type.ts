export type ApiFetchOptions = RequestInit & {
    url: string
    params?: Record<string, string | number | boolean | undefined | null>
    data?: Record<string, any>
    // isAuth?: boolean
    // isLogout?: boolean
}

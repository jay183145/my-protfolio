interface ApiFetchOptions extends RequestInit {
    url: string
    params?: Record<string, string | number | boolean | undefined | null>
    data?: Record<string, any>
    isSign?: boolean // 是否需要簽名，沒有簽名的api才能被fetch cache
    isAuth?: boolean
    isLogout?: boolean
}

type ApiFetchResult<T> = {
    error: ApiError
    data: T
}

import { API_URL } from "../constant/env"

/** 發送請求
 * @param {ApiFetchOptions} options 請求選項
 * @returns {Promise<ApiFetchResult<T>>} 請求結果，error有資料代表請求失敗
 */
export default async function apiFetch<T>(options: ApiFetchOptions): Promise<ApiFetchResult<T>> {
    if (!API_URL) throw new Error("API_URL is not set")

    const request = await requestInterceptor(options)
    const response = await fetch(API_URL + request.url, request.init)

    return response.json()
}

/** 預處理fetch請求資料
 * @param {ApiFetchOptions} options 請求選項
 * @returns {Promise<ApiRequest>} 請求資料
 */
async function requestInterceptor(options: ApiFetchOptions): Promise<{ url: string; init: RequestInit }> {
    const { url, params, data, ...init } = options
    const finalUrl = new URL(url, API_URL)

    // Handle query parameters
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                finalUrl.searchParams.set(key, String(value))
            }
        })
    }

    // Set default headers
    const headers = new Headers(init.headers)
    headers.set("Content-Type", "application/json")

    return {
        url: finalUrl.pathname + finalUrl.search,
        init: {
            ...init,
            headers,
            body: data ? JSON.stringify(data) : undefined,
        },
    }
}

import { isServer } from "../constant/common"
import { API_URL } from "../constant/env"
import { ApiError, ApiFetchOptions, ApiFetchResult } from "./type"

export default async function apiFetch<T>(options: ApiFetchOptions): Promise<ApiFetchResult<T>> {
    const request = await requestInterceptor(options)

    // 發送請求
    const result = await fetch(API_URL + request.url, request.init)
        .then(responseInterceptor<T>)
        .catch((e: ApiError) => errorInterceptor(e, options))

    return result
}

export async function requestInterceptor(options: ApiFetchOptions): Promise<{ url: string; init: RequestInit }> {
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

    // Set authorization header
    if (isServer) {
        const { cookies } = await import("next/headers")
        const authToken = cookies().get("token=")
        if (authToken) {
            headers.set("Authorization", `Bearer ${authToken.value}`)
        }
    } else {
        const authToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1]
        if (authToken) {
            headers.set("Authorization", `Bearer ${authToken}`)
        }
    }

    return {
        url: finalUrl.pathname + finalUrl.search,
        init: {
            ...init,
            headers,
            body: data ? JSON.stringify(data) : undefined,
        },
    }
}

async function responseInterceptor<T>(res: Response): Promise<{ data: T }> {
    const result: T = await res.json()
    if (!res.ok) throw result
    return { data: result }
}

async function errorInterceptor(error: ApiError, options: ApiFetchOptions): Promise<{ error: ApiError }> {
    if (isServer) console.log("fetch error", { error, options })

    return { error }
}

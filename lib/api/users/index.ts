import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function registerUser(user: T.User) {
    return apiFetch<T.UserData>({ url: "/register", method: "POST", data: user })
}

export async function loginUser(userLogin: T.UserLogin) {
    return apiFetch<T.UserLoginResponse>({ url: "/login", method: "POST", data: userLogin })
}

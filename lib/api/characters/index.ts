import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function getUserCharacter() {
    return apiFetch<T.Character[]>({ url: "/characters", method: "GET" })
}

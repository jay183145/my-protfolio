import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function getUserCharacter() {
    return apiFetch<T.Character[]>({ url: "/characters", method: "GET" })
}

export async function createCharacter(createCharacter: T.CreateCharacter) {
    return apiFetch<T.Character[]>({ url: "/characters", method: "POST", data: createCharacter })
}

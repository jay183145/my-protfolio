import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function getCharacters() {
    return apiFetch<T.Character[]>({ url: "/characters", method: "GET" })
}

export async function getCharacterById(id: string) {
    return apiFetch<T.Character>({ url: `/characters/${id}`, method: "GET" })
}

export async function createCharacter(character: T.Character) {
    return apiFetch<T.Character>({ url: "/characters", method: "POST", data: character })
}

export async function updateCharacter(id: string, character: T.Character) {
    return apiFetch<T.Character>({ url: `/characters/${id}`, method: "PUT", data: character })
}

export async function deleteCharacter(id: string) {
    return apiFetch<T.Character>({ url: `/characters/${id}`, method: "DELETE" })
}

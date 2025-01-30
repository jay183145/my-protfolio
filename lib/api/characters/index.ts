import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function getCharacters() {
    return apiFetch<T.DefaultCharacter[]>({ url: "/defaultCharacters", method: "GET" })
}

export async function getCharacterById(id: string) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/${id}`, method: "GET" })
}

export async function getCharacterByClass(characterClass: string) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/class/${characterClass}`, method: "GET" })
}

export async function createCharacter(character: T.DefaultCharacter) {
    return apiFetch<T.DefaultCharacter>({ url: "/defaultCharacters", method: "POST", data: character })
}

export async function updateCharacter(id: string, character: T.DefaultCharacter) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/${id}`, method: "PUT", data: character })
}

export async function deleteCharacter(id: string) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/${id}`, method: "DELETE" })
}

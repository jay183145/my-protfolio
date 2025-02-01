import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function getDefaultCharacters() {
    return apiFetch<T.DefaultCharacter[]>({ url: "/defaultCharacters", method: "GET" })
}

export async function getDefaultCharacterById(id: string) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/${id}`, method: "GET" })
}

export async function getDefaultCharacterByClass(characterClass: string) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/class/${characterClass}`, method: "GET" })
}

export async function createDefaultCharacter(character: T.DefaultCharacter) {
    return apiFetch<T.DefaultCharacter>({ url: "/defaultCharacters", method: "POST", data: character })
}

export async function updateDefaultCharacter(id: string, character: T.DefaultCharacter) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/${id}`, method: "PUT", data: character })
}

export async function deleteDefaultCharacter(id: string) {
    return apiFetch<T.DefaultCharacter>({ url: `/defaultCharacters/${id}`, method: "DELETE" })
}

import apiFetch from "@/lib/fetch"
import * as T from "./type"

export async function getPlayers() {
    return apiFetch<T.Player[]>({ url: "/players", method: "GET" })
}

export async function getPlayerById(id: string) {
    return apiFetch<T.Player>({ url: `/players/${id}`, method: "GET" })
}

export async function createPlayer(player: T.Player) {
    return apiFetch<T.Player>({ url: "/players", method: "POST", data: player })
}

export async function updatePlayer(id: string, player: T.Player) {
    return apiFetch<T.Player>({ url: `/players/${id}`, method: "PUT", data: player })
}

export async function deletePlayer(id: string) {
    return apiFetch<T.Player>({ url: `/players/${id}`, method: "DELETE" })
}

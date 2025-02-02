"use client"

import { getUserCharacter } from "@/lib/api/characters"
import { Character } from "@/lib/api/characters/type"
import React, { useEffect, useState } from "react"

function UserPage() {
    const [characters, setCharacters] = useState<Character[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCharacters = async () => {
            const { data, error } = await getUserCharacter()
            if (error) {
                setError(error.error)
            } else {
                setCharacters(data)
            }
        }
        fetchCharacters()
    }, [])

    return (
        <div className="flex h-full max-h-screen min-h-screen w-full flex-col items-center justify-center">
            <div className="flex w-[300px] flex-col gap-4">
                <h1 className="text-2xl font-bold">Create an Character!</h1>
                {error && <p className="text-red-500">{error}</p>}
                {characters &&
                    characters.map((character) => (
                        <div key={character.owner}>
                            <h2>{character.name}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default UserPage

"use client"

import React, { useEffect, useState } from "react"
import CharacterCard from "@/app/character-select/character-card"
import { IoChevronBack } from "react-icons/io5"
import { useRouter } from "next/navigation"
import { Character } from "@/lib/api/characters/type"
import { getCharacters } from "@/lib/api/characters"

function CharacterSelect() {
    const router = useRouter()
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        async function apiGetCharacters() {
            try {
                const response = await getCharacters()
                console.log(response)
                setCharacters(response)
            } catch (error) {
                console.error(error)
            }
        }
        apiGetCharacters()
    }, [])

    const handleBackClick = () => {
        router.back()
    }

    return (
        <div className="flex h-full max-h-screen w-full flex-col items-center justify-center px-10 py-5">
            <div className="relative flex w-full max-w-screen-lg items-center justify-center">
                <IoChevronBack onClick={handleBackClick} className="absolute left-0 top-6 h-6 w-6 text-white" />
                <h1 className="w-[220px] text-center text-4xl font-bold text-white">Select Your Character</h1>
            </div>

            <div className="mt-5 grid w-full max-w-xs grid-cols-1 gap-6 overflow-auto px-3 pb-5 md:max-w-screen-lg md:grid-cols-3">
                {characters.map((character) => (
                    <CharacterCard key={character._id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default CharacterSelect

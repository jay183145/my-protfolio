"use client"

import React, { useEffect, useState } from "react"
import CharacterCard from "@/app/character-select/components/character-card"
import { IoChevronBack } from "react-icons/io5"
import { useRouter } from "next/navigation"
import { DefaultCharacter } from "@/lib/api/defaultCharacters/type"
import { getDefaultCharacters } from "@/lib/api/defaultCharacters"

function CharacterSelect() {
    const router = useRouter()
    const [characters, setCharacters] = useState<DefaultCharacter[]>([])

    useEffect(() => {
        async function apiGetCharacters() {
            const { data, error } = await getDefaultCharacters()
            if (error) {
                console.error(error)
            } else {
                setCharacters(data)
            }
        }
        apiGetCharacters()
    }, [])

    const handleBackClick = () => {
        router.back()
    }

    return (
        <>
            <div className="relative flex w-full max-w-screen-lg items-center justify-center">
                <IoChevronBack
                    onClick={handleBackClick}
                    className="absolute left-0 top-6 h-6 w-6 text-white hover:cursor-pointer"
                />
                <h1 className="w-[220px] text-center text-4xl font-bold text-white">Select Your Character</h1>
            </div>
            <div className="mt-5 grid w-full max-w-xs grid-cols-1 gap-6 overflow-auto px-3 pb-5 md:max-w-screen-lg md:grid-cols-3">
                {characters.map((character) => (
                    <CharacterCard key={character._id} character={character} />
                ))}
            </div>
        </>
    )
}

export default CharacterSelect

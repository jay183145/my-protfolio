import React from "react"
import CharacterCard from "@/app/character-select/charater-card"

export type Character = {
    id: number
    name: string
    description: string
    image: string
}

const characters: Character[] = [
    {
        id: 1,
        name: "Warrior",
        description: "Strong and brave fighter.",
        image: "/warrior.webp",
    },
    {
        id: 2,
        name: "Mage",
        description: "Master of magical spells.",
        image: "/mage.webp",
    },
    {
        id: 3,
        name: "Archer",
        description: "Precise and quick with the bow.",
        image: "/archer.webp",
    },
]

function CharacterSelect() {
    return (
        <div className="flex h-full max-h-screen w-full flex-col items-center p-6">
            <h1 className="mb-2 w-[220px] text-center text-4xl font-bold text-white">Select Your Character</h1>
            <div className="grid grid-cols-1 gap-6 overflow-auto py-6 md:grid-cols-3">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default CharacterSelect

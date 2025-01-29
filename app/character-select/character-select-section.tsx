import React from "react"
import CharacterCard from "@/app/character-select/character-card"

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
        image: "/character/warrior.webp",
    },
    {
        id: 2,
        name: "Mage",
        description: "Master of magical spells.",
        image: "/character/mage.webp",
    },
    {
        id: 3,
        name: "Archer",
        description: "Precise and quick with the bow.",
        image: "/character/archer.webp",
    },
    {
        id: 4,
        name: "Paladin",
        description: "Righteous defender clad in gleaming armor.",
        image: "/character/paladin.webp",
    },
    {
        id: 5,
        name: "Assassin",
        description: "Stealthy rogue, deadly with concealed blades.",
        image: "/character/assassin.webp",
    },
    {
        id: 6,
        name: "Bard",
        description: "Wielder of music and magic for support and disruption.",
        image: "/character/bard.webp",
    },
    {
        id: 7,
        name: "Druid",
        description: "Guardian of nature with shapeshifting powers.",
        image: "/character/druid.webp",
    },
    {
        id: 8,
        name: "Necromancer",
        description: "Dark conjurer who commands undead forces.",
        image: "/character/necromancer.webp",
    },
    {
        id: 9,
        name: "Monk",
        description: "Disciplined martial artist balanced in mind and body.",
        image: "/character/monk.webp",
    },
    {
        id: 10,
        name: "Samurai",
        description: "Swift swordsman guided by honor and tradition.",
        image: "/character/samurai.webp",
    },
    {
        id: 11,
        name: "Beastmaster",
        description: "Tamer of wild creatures, forging strong bonds with animals.",
        image: "/character/beastmaster.webp",
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

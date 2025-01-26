import React from "react"
import Card from "@/components/ui/card"

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
    <div className="max-w-4xl w-full p-6">
      <h1 className="text-4xl text-white font-bold text-center mb-8">
        Select Your Character
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {characters.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default CharacterSelect

import CharacterSelect from "@/components/character-select"
import React from "react"

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CharacterSelect />
    </div>
  )
}

export default HomePage

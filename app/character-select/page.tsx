import CharacterSelect from "@/app/character-select/components/character-select-section"
import React from "react"

const CharacterSelectPage: React.FC = () => {
    return (
        <div className="flex h-full max-h-screen w-full flex-col items-center justify-center px-10 py-5">
            <CharacterSelect />
        </div>
    )
}

export default CharacterSelectPage

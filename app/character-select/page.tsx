import CharacterSelect from "@/app/character-select/components/character-select-section"
import React, { Suspense } from "react"
import ScreenLoading from "../lodaing"

const CharacterSelectPage: React.FC = () => {
    return (
        <Suspense fallback={<ScreenLoading />}>
            <div className="flex h-full max-h-screen w-full flex-col items-center justify-center px-10 py-5">
                <CharacterSelect />
            </div>
        </Suspense>
    )
}

export default CharacterSelectPage

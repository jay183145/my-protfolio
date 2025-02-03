import React from "react"
import { useRouter } from "next/navigation"
import { FaPlus } from "react-icons/fa"

function EmptySlot() {
    const router = useRouter()
    const handleCharacterSelect = () => {
        router.push("/character-select")
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-md font-semibold text-white">New Character</div>
            <button
                onClick={handleCharacterSelect}
                className="flex h-[350px] w-[220px] flex-col items-center justify-center gap-2 rounded-md border-2 border-neutral-500 bg-neutral-700 p-4"
            >
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-600">
                    <FaPlus className="text-4xl" />
                </div>
            </button>
        </div>
    )
}

export default EmptySlot

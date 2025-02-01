"use client"

import React from "react"
import { useRouter } from "next/navigation"

function NoCharacter() {
    const router = useRouter()
    const handleCreateCharacter = () => {
        router.push("/register")
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
                <div className="mx-2">Create one now!</div>
                <div className="flex items-center justify-end">
                    <button
                        onClick={handleCreateCharacter}
                        className="font-bold underline hover:cursor-pointer hover:text-neutral-500"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoCharacter

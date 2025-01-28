"use client"

import React from "react"
import Button from "../ui/button"
import { useRouter } from "next/navigation"

function NoCharacter() {
    const router = useRouter()
    const handleCreateCharacter = () => {
        router.push("/character-select")
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Not have a character yet?</h1>
            <div className="">Creat one now!</div>
            <Button variant="primary" className="w-full" onClick={handleCreateCharacter}>
                Create
            </Button>
        </div>
    )
}

export default NoCharacter

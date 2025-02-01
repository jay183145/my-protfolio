"use client"

import React from "react"
import Button from "../ui/button"
import { useRouter } from "next/navigation"

function NoCharacter() {
    const router = useRouter()
    const handleCreateCharacter = () => {
        router.push("/register")
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="">Create one now!</div>
            <div className="mx-2">
                <Button variant="primary" size="xs" className="w-full" onClick={handleCreateCharacter}>
                    Create
                </Button>
            </div>
        </div>
    )
}

export default NoCharacter

/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import cn from "@/lib/cn"
import Button from "@/components/ui/button"
import { Character } from "@/lib/api/characters/type"
import CharacterAttribute from "@/components/ui/modal/character-attribute"

interface CardProps {
    className?: string
    character: Character
}

export default function Card({ className, character }: CardProps) {
    const [src, setSrc] = useState(character.image)
    const [isShowCharacterAttributeModal, setIsShowCharacterAttributeModal] = useState(false)
    const handleBtnClick = (name: string) => {
        setIsShowCharacterAttributeModal(true)
        console.log(name)
    }

    return (
        <>
            <div
                className={cn(
                    "flex w-full flex-col justify-between rounded-lg border-2 border-white bg-white p-3 shadow-lg",
                    className,
                )}
            >
                <div className="mb-2 flex flex-col overflow-y-auto">
                    <div className="mb-2 text-center text-xl font-semibold text-black">{character.characterClass}</div>
                    <div className="flex items-center justify-center py-2">
                        <img
                            src={src}
                            alt={character.characterClass}
                            width={100}
                            height={100}
                            className="rounded-full"
                            onError={() => {
                                setSrc("/character/rookie.webp")
                            }}
                        />
                    </div>
                    <div className="text-center text-sm text-gray-700">{character.description}</div>
                </div>

                <Button variant="primary" className="w-full" onClick={() => handleBtnClick(character.characterClass)}>
                    Choose {character.characterClass}
                </Button>
            </div>
            {isShowCharacterAttributeModal && (
                <CharacterAttribute
                    setIsShowCharacterAttributeModal={setIsShowCharacterAttributeModal}
                    character={character}
                />
            )}
        </>
    )
}

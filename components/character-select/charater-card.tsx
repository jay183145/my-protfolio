"use client"

import React, { useState } from "react"
import cn from "@/lib/cn"
import Button from "@/components/ui/button"
import { Character } from "@/components/character-select"
import Image from "next/image"
import CharacterAttribute from "../ui/modal/charater-attribute"

interface CardProps {
  className?: string
  character: Character
}

export default function Card({ className, character }: CardProps) {
  const [isShowCharacterAttributeModal, setIsShowCharacterAttributeModal] =
    useState(false)
  const handleBtnClick = (name: string) => {
    setIsShowCharacterAttributeModal(true)
  }

  return (
    <>
    <div
      className={cn(
        "flex flex-col justify-between bg-white border-2 p-3 border-white shadow-lg rounded-lg",
        className
      )}
    >
      <div className="flex flex-col overflow-y-auto mb-2">
        <div className="text-xl text-black font-semibold mb-2 text-center">
          {character.name}
        </div>
        <div className="flex justify-center items-center py-2">
          <Image
            src={character.image}
            alt={character.name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="text-sm text-gray-700 text-center">
          {character.description}
        </div>
      </div>

      <Button
        variant="primary"
        className="w-full"
        onClick={() => handleBtnClick(character.name)}
      >
        Choose {character.name}
      </Button>
      </div>
      <CharacterAttribute
        isShowCharacterAttributeModal={isShowCharacterAttributeModal}
        setIsShowCharacterAttributeModal={setIsShowCharacterAttributeModal}
        character={character}
      />
    </>
  )
}

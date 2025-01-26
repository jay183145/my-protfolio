import React from "react"
import cn from "@/lib/cn"
import Button from "@/components/ui/button"
import { Character } from "@/components/character-select"
interface CardProps {
  className?: string
  character: Character
}

export default function Card({ className, character }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between bg-white border-2 p-3 border-white shadow-lg rounded-lg",
        className
      )}
    >
      <div className="flex flex-col overflow-y-auto mb-2">
        <div className="text-xl text-black font-semibold mb-2">
          {character.name}
        </div>
        <div className="text-sm text-gray-700">{character.description}</div>
      </div>

      <div className="">
        <Button variant="primary" className="w-full">
          Choose {character.name}
        </Button>
      </div>
    </div>
  )
}

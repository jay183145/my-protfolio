import { Character } from "@/lib/api/characters/type"
import React from "react"
import Image from "next/image"
import { FaHeart } from "react-icons/fa"
import { GiSpiralBottle } from "react-icons/gi"
import { PiSwordDuotone } from "react-icons/pi"
import { TbShieldCheckeredFilled } from "react-icons/tb"
import { PiCoinsFill } from "react-icons/pi"

type CharacterSlotProps = {
    character: Character
}
function CharacterSlot({ character }: CharacterSlotProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-md font-semibold text-white">{character.name}</div>
            <div className="flex flex-col items-center rounded-lg bg-neutral-600 p-2">
                <div className="py-3">
                    <Image
                        className="h-32 w-32"
                        src={character.image}
                        alt={character.characterClass}
                        width={250}
                        height={250}
                    />
                </div>
                <div className="p-3">
                    <div className="flex w-[180px] flex-col items-start justify-between rounded-lg border border-neutral-600 bg-neutral-900 py-3 pl-5 pr-8">
                        <div className="flex items-center justify-between">
                            <FaHeart className="mr-2 text-base font-normal text-red-500" />
                            <span className="mr-3 text-base font-normal text-neutral-50">HP:</span>
                            <div className="text-base font-normal text-neutral-50">{character.hp}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <GiSpiralBottle className="mr-2 text-base font-normal text-blue-500" />
                            <span className="mr-3 text-base font-normal text-neutral-50">MP:</span>
                            <div className="text-base font-normal text-neutral-50">{character.mp}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <PiSwordDuotone className="mr-2 text-base font-normal text-white" />
                            <span className="mr-3 text-base font-normal text-neutral-50">Attack:</span>
                            <div className="text-base font-normal text-neutral-50">{character.attack}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <TbShieldCheckeredFilled className="mr-2 text-base font-normal text-white" />
                            <span className="mr-3 text-base font-normal text-neutral-50">Defense:</span>
                            <div className="text-base font-normal text-neutral-50">{character.defense}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <PiCoinsFill className="mr-2 text-base font-normal text-yellow-500" />
                            <span className="mr-3 text-base font-normal text-neutral-50">Gold:</span>
                            <div className="text-base font-normal text-neutral-50">{character.gold}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterSlot

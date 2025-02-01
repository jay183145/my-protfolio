import React from "react"
import BaseModal from "."
import { DefaultCharacter } from "@/lib/api/defaultCharacters/type"
import Image from "next/image"
import { RxCross2 } from "react-icons/rx"
import { BiPlusMedical } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { GiSpiralBottle } from "react-icons/gi"
import { PiSwordDuotone } from "react-icons/pi"
import { TbShieldCheckeredFilled } from "react-icons/tb"
import { PiCoinsFill } from "react-icons/pi"
import Button from "@/components/ui/button"

type CharacterAttributeProps = {
    setIsShowCharacterAttributeModal: React.Dispatch<React.SetStateAction<boolean>>
    character: DefaultCharacter
}

function CharacterAttribute({ setIsShowCharacterAttributeModal, character }: CharacterAttributeProps) {
    return (
        <BaseModal onClick={() => setIsShowCharacterAttributeModal(false)}>
            <div className="absolute left-1/2 top-1/2 flex w-full max-w-xs -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-neutral-200">
                <div className="flex w-full items-center justify-between rounded-t-2xl bg-neutral-500 px-4 py-3">
                    <BiPlusMedical className="invisible text-xl" />
                    <span className="text-center text-xl font-bold">{character.characterClass}</span>
                    <RxCross2
                        className="cursor-pointer text-xl"
                        onClick={() => setIsShowCharacterAttributeModal(false)}
                    />
                </div>
                <div className="py-3">
                    <Image
                        className="h-32 w-32"
                        src={character.image}
                        alt={character.characterClass}
                        width={250}
                        height={250}
                    />
                </div>
                <div className="text-md font-semibold text-neutral-800">Character Ability Points</div>
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
                <div className="mb-8 mt-3 w-[200px]">
                    <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => setIsShowCharacterAttributeModal(false)}
                    >
                        <span>Choose</span>
                    </Button>
                </div>
            </div>
        </BaseModal>
    )
}

export default CharacterAttribute

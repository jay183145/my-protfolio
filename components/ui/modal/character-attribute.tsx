import React, { useEffect, useState } from "react"
import BaseModal from "."
import { Character } from "@/lib/api/characters/type"
import Image from "next/image"
import { RxCross2 } from "react-icons/rx"
import { BiPlusMedical } from "react-icons/bi"
import { getPlayers } from "@/lib/api/players"
import { Player } from "@/lib/api/players/type"

type CharacterAttributeProps = {
    setIsShowCharacterAttributeModal: React.Dispatch<React.SetStateAction<boolean>>
    character: Character
}

function CharacterAttribute({ setIsShowCharacterAttributeModal, character }: CharacterAttributeProps) {
    const [characterAttribute, setCharacterAttribute] = useState<Player[]>()
    const [loading, setLoading] = useState<boolean>(true)

    // Fetch all players from the API
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await getPlayers()
                console.log(response)
                setCharacterAttribute(response)
            } catch (err: any) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPlayers()
    }, [])

    return (
        <BaseModal onClick={() => setIsShowCharacterAttributeModal(false)}>
            <div className="absolute left-1/2 top-1/2 flex h-full max-h-[90%] w-full max-w-xs -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-neutral-700 md:max-w-xl">
                <div className="flex w-full items-center justify-between rounded-t-2xl bg-neutral-800 px-4 py-3">
                    <BiPlusMedical className="invisible text-xl" />
                    <span className="text-center text-xl font-bold">{character.name}</span>
                    <RxCross2
                        className="cursor-pointer text-xl"
                        onClick={() => setIsShowCharacterAttributeModal(false)}
                    />
                </div>
                <div className="py-3">
                    <Image className="h-32 w-32" src={character.image} alt={character.name} width={250} height={250} />
                </div>
                <div className="text-sm font-medium text-neutral-400">Allocate Ability Points</div>
                <div className="p-3">
                    {!loading &&
                        characterAttribute?.map((player) => (
                            <div
                                key={player._id}
                                className="flex items-center justify-between rounded-lg border border-neutral-600 bg-neutral-900 p-3"
                            >
                                <div className="text-base font-normal text-neutral-50">{player.name}</div>
                            </div>
                        ))}
                </div>
            </div>
        </BaseModal>
    )
}

export default CharacterAttribute

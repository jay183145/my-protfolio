"use client"

import { getUserCharacter } from "@/lib/api/characters"
import { Character } from "@/lib/api/characters/type"
import React, { Suspense, useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { useRouter } from "next/navigation"
import CharacterSlot from "./components/character-slot"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import Button from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ScreenLoading from "../lodaing"
import CommingSoon from "@/components/ui/modal/comming-soon"

function UserPage() {
    const router = useRouter()
    const [characters, setCharacters] = useState<Character[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isShowCommingSoon, setIsShowCommingSoon] = useState(false)

    useEffect(() => {
        const fetchCharacters = async () => {
            const { data, error } = await getUserCharacter()
            if (error) {
                setError(error.error)
            } else {
                setCharacters(data)
            }
        }
        fetchCharacters()
    }, [])

    const handleCharacterSelect = () => {
        router.push("/character-select")
    }

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : (characters?.length ?? 1) - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (characters && prev < characters.length - 1 ? prev + 1 : 0))
    }

    const handleStart = () => {
        setIsShowCommingSoon(true)
    }

    return (
        <div className="flex h-full max-h-screen min-h-screen w-full flex-col items-center justify-center">
            <div className="flex w-[300px] flex-col gap-4">
                <div className="relative flex flex-col items-center justify-center gap-4">
                    <Link href="/" className="absolute left-0 top-2">
                        <IoChevronBackOutline />
                    </Link>
                    <h1 className="text-2xl font-bold">Character List</h1>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {characters && characters.length === 0 && (
                    <div className="flex w-full flex-col items-center justify-center">
                        <h1 className="mb-5 p-5 text-2xl font-bold">Create a Character!</h1>
                        <button
                            onClick={handleCharacterSelect}
                            className="flex h-[350px] w-[250px] flex-col items-center justify-center gap-2 rounded-md border-2 border-neutral-500 bg-neutral-700 p-4"
                        >
                            <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-600">
                                <FaPlus className="text-4xl" />
                            </div>
                        </button>
                    </div>
                )}
                <Suspense fallback={<ScreenLoading />}>
                    {characters && characters.length > 0 && (
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-5">
                                <button
                                    onClick={handlePrevious}
                                    className="relative mr-2 flex rounded-md pr-2 hover:bg-neutral-600"
                                >
                                    <IoChevronBackOutline className="text-2xl" />
                                    <IoChevronBackOutline className="absolute left-2 top-0 text-2xl" />
                                </button>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CharacterSlot character={characters[currentIndex]} />
                                    </motion.div>
                                </AnimatePresence>
                                <button
                                    onClick={handleNext}
                                    className="relative ml-2 flex rounded-md pl-2 hover:bg-neutral-600"
                                >
                                    <IoChevronForwardOutline className="text-2xl" />
                                    <IoChevronForwardOutline className="absolute right-2 top-0 text-2xl" />
                                </button>
                            </div>
                            <span>
                                {currentIndex + 1} / {characters.length}
                            </span>
                            <Button className="w-full" onClick={handleStart}>
                                Start
                            </Button>
                        </div>
                    )}
                    <CommingSoon isShow={isShowCommingSoon} setIsShow={setIsShowCommingSoon} />
                </Suspense>
            </div>
        </div>
    )
}

export default UserPage

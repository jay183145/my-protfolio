"use client"

import { getUserCharacter } from "@/lib/api/characters"
import { Character } from "@/lib/api/characters/type"
import React, { Suspense, useEffect, useState } from "react"

import CharacterSlot from "./components/character-slot"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import Button from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ScreenLoading from "../lodaing"
import CommingSoon from "@/components/ui/modal/comming-soon"
import EmptySlot from "./components/empty-slot"
import { useRouter } from "next/navigation"

function UserPage() {
    const router = useRouter()
    const [characters, setCharacters] = useState<Character[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isShowCommingSoon, setIsShowCommingSoon] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true)
            const { data, error } = await getUserCharacter()
            if (error) {
                setError(error.error)
            } else {
                setCharacters(data)
            }
            setLoading(false)
        }
        fetchCharacters()
    }, [])

    const handlePrevious = () => {
        setCurrentIndex((prev) => (characters ? (prev > 0 ? prev - 1 : characters.length) : 0))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (characters ? (prev < characters.length ? prev + 1 : 0) : 0))
    }

    const handleStart = () => {
        setIsShowCommingSoon(true)
    }
    const handleCreate = () => {
        router.push("/character-select")
    }

    return (
        <div className="flex h-full max-h-screen min-h-screen w-full flex-col items-center justify-center">
            {loading && <ScreenLoading />}
            {!loading && (
                <div className="flex flex-col gap-4">
                    <div className="relative flex flex-col items-center justify-center gap-4">
                        <Link href="/" className="absolute left-0 top-2">
                            <IoChevronBackOutline />
                        </Link>
                        <h1 className="text-2xl font-bold">Character List</h1>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {characters && characters.length === 0 && <EmptySlot />}
                    {characters && characters.length > 0 && (
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-5">
                                {/* 上個角色箭頭 */}
                                <button
                                    onClick={handlePrevious}
                                    className="relative mr-2 flex rounded-md pr-2 hover:bg-neutral-600"
                                >
                                    <IoChevronBackOutline className="text-2xl" />
                                    <IoChevronBackOutline className="absolute left-2 top-0 text-2xl" />
                                </button>
                                {/* 角色空格 */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {currentIndex === characters.length ? (
                                            <EmptySlot />
                                        ) : (
                                            <CharacterSlot character={characters[currentIndex]} />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                                {/* 下個角色箭頭 */}
                                <button
                                    onClick={handleNext}
                                    className="relative ml-2 flex rounded-md pl-2 hover:bg-neutral-600"
                                >
                                    <IoChevronForwardOutline className="text-2xl" />
                                    <IoChevronForwardOutline className="absolute right-2 top-0 text-2xl" />
                                </button>
                            </div>
                            {currentIndex !== characters.length && (
                                <div className="text-md font-semibold text-white">
                                    {`${currentIndex + 1}`} / {characters.length}
                                </div>
                            )}
                            {currentIndex === characters.length && (
                                <div className="text-md font-semibold text-white">NEW</div>
                            )}

                            {currentIndex !== characters.length && (
                                <Button className="w-full" onClick={handleStart}>
                                    Start
                                </Button>
                            )}
                            {currentIndex === characters.length && (
                                <Button className="w-full" onClick={handleCreate}>
                                    Create
                                </Button>
                            )}
                        </div>
                    )}
                    <CommingSoon isShow={isShowCommingSoon} setIsShow={setIsShowCommingSoon} />
                </div>
            )}
        </div>
    )
}

export default UserPage

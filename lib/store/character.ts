/* eslint-disable no-unused-vars */
import { Character } from "@/lib/api/characters/type"
import { create } from "zustand"

type CharacterStore = {
    character: Character | null
    setCharacter: (character: Character) => void
}

export const useCharacterStore = create<CharacterStore>((set) => ({
    character: null,
    setCharacter: (character: Character) => set({ character }),
}))

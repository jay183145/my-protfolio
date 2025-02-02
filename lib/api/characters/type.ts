export type Character = {
    _id: string
    owner: string
    name: string
    level: number
    experience: number
    hp: number
    mp: number
    attack: number
    defense: number
    gold: number
    inventory: string[]
    characterClass: string
    description: string
    image: string
}

export type CreateCharacter = {
    name: string
    characterClass: string
}

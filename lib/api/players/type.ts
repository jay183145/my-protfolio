export interface Player {
    _id: string
    type: "Warrior" | "Mage" | "Archer"
    name: string
    level: number
    experience: number
    hp: number
    mp: number
    attack: number
    defense: number
    gold: number
    inventory: string[]
}

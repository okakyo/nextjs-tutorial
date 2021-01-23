import { createContext } from "react"

export type UserType = {
    id:string
    name?:string
    email?:string
    thumbnail?:string
}

export type GlobalStateType = {
    account:UserType | null
}

const globalState:GlobalStateType = {
    account: null,
}
export const GlobalState = createContext(globalState)

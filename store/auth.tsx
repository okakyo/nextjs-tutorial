import { Auth } from "@/libs/firebase/plugin";
import { createContext, useEffect, useState,useContext} from "react"
import {UserType} from "./user"
import {SignInWithGoogle,SignOut} from "@/libs/firebase"

export type AuthStateType = {
    account?:UserType |null,
    signOut?:Function,
    signIn?:Function,
    error?:string
}

export type AuthAction ={
    type: "Signin" |"Signout"
}
const globalState:AuthStateType = {
    account: null,
    error:""
  }

export const  authReducer = (state:AuthStateType, action: AuthAction)=>{
    switch(action.type){
        case "Signin":
            const user = SignInWithGoogle()
            return {

            }
        case "Signout":
        default:
            return state
    }
}


export const AuthContext = createContext<AuthStateType>(globalState);

export const AuthProvider =(props)=>{
    const context = useContext(AuthContext);
    const [account, setAccount] = useState<UserType>(null)

    useEffect(()=>{
        Auth.onAuthStateChanged(user=>{
            if(user){
                const setAccountData:UserType = {
                    id: user.uid,
                    name:user.displayName,
                    email:user.email,
                    thumbnail:user.photoURL
                }
                setAccount(setAccountData)
            }
        })
    })
    
    return (
    <AuthContext.Provider value={{...context,account:account}}>
        {props.children}
    </AuthContext.Provider>
    )
}


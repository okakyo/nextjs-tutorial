
import { createContext, FC, useEffect, useState } from "react";
import {Auth,GoogleProvider,User} from "./plugin";
import Router from "next/router";
type AuthContextProps = {
    currentUser:User|null|undefined
}

export const AuthContext =createContext<AuthContextProps>({currentUser:undefined})


// Provider 周りを実装
export const AuthProvider:FC = ({children}) =>{
    const [currentUser,setCurrentUser] = useState<User|null|undefined>(undefined)

    // NOTE: この部分は、[currentUser] が空になったときに実行される

    useEffect(()=>{
        Auth.onAuthStateChanged((user)=>{
            setCurrentUser(user);
        })
    },[currentUser])
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const SignIn = async ()=>{
    
    try {
        await Auth.signInWithPopup(GoogleProvider);
        Router.push("/")
    } catch(e){
        alert(e.message);
    }
}

export const Signout = async () =>{
    try {
        await Auth.signOut()
        Router.push("/");
    } catch(e){
        alert(e.message)
    }
}
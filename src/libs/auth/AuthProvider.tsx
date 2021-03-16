
import { createContext, FC, useEffect, useState } from "react";
import {Auth,GoogleProvider,User} from "./plugin";
import Router from "next/router";
import nookies from "nookies";
type AuthContextProps = {
    currentUser:User|null|undefined
}

export const AuthContext =createContext<AuthContextProps>({currentUser:undefined})


// Provider 周りを実装
export const AuthProvider:FC = ({children}) =>{
    const cookieKey ='jwtToken'
    const interval = 10*60*1000;
    const [currentUser,setCurrentUser] = useState<User|null|undefined>(undefined)

    // NOTE: この部分は、[currentUser] が空になったときに実行される

    useEffect(()=>{
        Auth.onIdTokenChanged(async (user)=>{
            setCurrentUser(user);
            nookies.destroy(null,cookieKey);
            if(!user){
                return
            }
            const token = await user.getIdToken();
            nookies.set(undefined,cookieKey,token,{})
        })
    },[currentUser])
     useEffect(() => {
        const handler = setInterval(async () => {
        const user = Auth.currentUser;
        if (user) {
            await user.getIdToken(true);
        }
        }, interval);
        return () => clearInterval(handler);
    }, []);
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
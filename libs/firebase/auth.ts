import {Auth, GoogleProvider} from "./plugin";

export const SignInWithGoogle= async ()=>{
    try {
        const user = await Auth.signInWithPopup(GoogleProvider);
        return {
            status:"ok",
            data:user
        }
    } catch(e){
        return {
            status:"error",
            message:e.message

        }
    }
};
export const SignOut =  async ()=>{
    try {
       await Auth.signOut();
    } catch(e){
        return {
            status:"error",
            message:e.message

        }
    }
};

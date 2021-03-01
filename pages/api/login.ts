import {initAuth}from "../../libs"

export default async  (req,res) =>{
    
    try {
        await initAuth.handleLogin(req,res)
    } catch(e){
        console.error(e);
        res.status(e.status || 500).end(e.message);
    }

    res.json()
}
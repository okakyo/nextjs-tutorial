import {} from "next";

// NextJS の

const PrivateRouter = [
    '/user*',
    ''
]

const isPrivate = (router:string)=>{
    return router;
}
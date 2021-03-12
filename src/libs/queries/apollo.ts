import {ApolloClient,InMemoryCache} from "@apollo/client";

export const client=new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri:"http://api:3000/graphql",
    credentials: 'same-origin',
    
    cache: new InMemoryCache()
})

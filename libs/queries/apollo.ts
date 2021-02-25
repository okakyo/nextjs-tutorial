import {ApolloClient,InMemoryCache,HttpLink} from "@apollo/client";
import { window } from "@ungap/global-this";
import { useMemo } from "react";

export const client=new ApolloClient({
        uri:"http://localhost:3000/graphql",
        cache: new InMemoryCache()
    })

import {ApolloClient,HttpLink,InMemoryCache} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import nookies from "nookies";

export const client = new ApolloClient({
  uri:"http://api:3000/graphql",
  cache: new InMemoryCache()
})
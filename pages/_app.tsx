import {ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/libs/queries";
import { MainLayout } from "@/components/organisms/layouts";
import  "./global.style.css";
import { useEffect } from "react";
import { useFetchUser, UserProvider } from "@/libs";

function MyApp({ Component, pageProps,router }) {
  
  // Todo : ここでログインしているかどうかのチェックを行う
  const {user,loading} = useFetchUser()
  
  return (
      <ChakraProvider>
        <CSSReset/>
        <UserProvider value={user,loading}>
          <ApolloProvider client={client}>
            <TheHeader/>
            <main >
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>

            </main>
        </ApolloProvider>
        </UserProvider>
        
    </ChakraProvider>
  )
}

export default MyApp
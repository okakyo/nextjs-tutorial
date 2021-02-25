import { Box, ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers";
import { AuthProvider } from "@/store/auth";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/libs/queries";
import { gql, useQuery } from "@apollo/client";
import { MainLayout } from "@/components/organisms/layouts";


function MyApp({ Component, pageProps }) {
  
  // Todo : ここでログインしているかどうかのチェックを行う
  return (
      <ChakraProvider>
        <CSSReset/>
        <ApolloProvider client={client}>
          <AuthProvider>
            <TheHeader/>
            <main>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </main>
          </AuthProvider>
        </ApolloProvider>
    </ChakraProvider>
    
  )
}

export default MyApp
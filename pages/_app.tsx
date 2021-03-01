import {ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/libs/queries";
import { MainLayout } from "@/components/organisms/layouts";
import  "./global.style.css";


function MyApp({ Component, pageProps,router }) {
  
  // Todo : ここでログインしているかどうかのチェックを行う
  
  return (
      <ChakraProvider>
        <CSSReset/>
          <ApolloProvider client={client}>
            <TheHeader/>
            <main >
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>

            </main>
        </ApolloProvider>
        
    </ChakraProvider>
  )
}

export default MyApp
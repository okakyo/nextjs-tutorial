import {ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/molecules/headers";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/libs/queries";
import { MainLayout } from "@/components/organisms/layouts";
import {AuthProvider} from "@/libs"
function MyApp({ Component, pageProps}) {
  return (
      <ChakraProvider>
        <CSSReset/>
        <AuthProvider>
          <ApolloProvider client={client}>
            <TheHeader/>
            <main >
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>

            </main>
        </ApolloProvider>
        </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
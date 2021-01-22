import '../styles/globals.css'
import { ChakraProvider, CSSReset, Flex} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers/TheHeader";
import { MainLayout } from '@/components/organisms/layouts/MainLayout';
function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <TheHeader/>
      <CSSReset/>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      
      

    </ChakraProvider>
  )
}

export default MyApp
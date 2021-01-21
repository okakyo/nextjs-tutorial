import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers/TheHeader";
function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <TheHeader/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
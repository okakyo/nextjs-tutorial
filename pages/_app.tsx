import { Box, ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers";
function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <TheHeader/>
      <CSSReset/>
      <Box  w="100%" p="3" bg="#F5F5F5" h="90vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
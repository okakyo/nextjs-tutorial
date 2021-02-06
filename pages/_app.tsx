import { Box, ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers";
import { AuthProvider } from "@/store/auth";

function MyApp({ Component, pageProps }) {
  
  // Todo : ここでログインしているかどうかのチェックを行う
  
  return (
      <ChakraProvider>
        <CSSReset/>
        <AuthProvider>
        <TheHeader/>
          <Box  w="100%" p="3" bg="#F5F5F5" h="90vh">
            <Component {...pageProps} />
          </Box>
       </AuthProvider>
    </ChakraProvider>
    
  )
}

export default MyApp
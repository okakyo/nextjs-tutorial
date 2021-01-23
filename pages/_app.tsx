import { Box, ChakraProvider, CSSReset} from "@chakra-ui/react"
import {TheHeader} from "@/components/organisms/headers";
import {useContext} from "react";
import {GlobalState} from  "@/states";
function MyApp({ Component, pageProps }) {

  // Todo : ここでログインしているかどうかのチェックを行う
  const state = useContext(GlobalState);
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
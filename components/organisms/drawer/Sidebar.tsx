import {Box} from "@chakra-ui/react";
import NextLink from "next/link";
export const Sidebar = ()=>{
    
    return (
        <>
        <Box 
            position="sticky"
            p={3}
            width={["0","0","20%","20%","15%"]}
            height="90vh"
          >
            <Box
              top={3}
              position="sticky"
              >
                { [1, 2, 3, 4, 5].map((number)=>(
                  <Box _hover={{bg:"#bfbfbf"}} _active={{bg:"blue" }} key={number.toString()} rounded="md" maxW="sm" p="3">
                    <h2>
                    <NextLink passHref href="/user">
                      サンプル
                    </NextLink>
                    </h2>
                  </Box>
                  ))}
            </Box>
          </Box>
        </>
    )
}
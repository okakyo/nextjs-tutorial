import { Box, Container, LinkBox, LinkOverlay } from "@chakra-ui/react";
import {FC} from "react";
import NextLink from "next/link";
import Link from "next/link";

export const MainLayout:FC = ({children})=>{
    
    const router = [
    {   
        to:"/",
        name:"ホーム",
        icon:"home"
    },
    {
        to:"/tasks",
        name:"タスク",
        icon:"dictionary"
    },{
        to:"/user",
        name:"アカウント",
        icon:"account"

    }]
    return (
        <Box
          m={3}
          display="flex"
          position="-webkit-sticky"
        >
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
                { router.map((router,key)=>(
                <NextLink  href={router.to} passHref key={key}>
                    <Box _hover={{bg:"#bfbfbf"}} _active={{bg:"blue" }} key={key} rounded="md" maxW="sm" p="3">
                        {router.name}
                    </Box>
                </NextLink>
                  ))}
            </Box>
          </Box>
          <Container 
            height="90vh"
            p={3} 
            maxW="container.xl"
          >
            {children}
        </Container>
        </Box>
        
          
     
    )
}
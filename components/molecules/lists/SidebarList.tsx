import { Box } from "@chakra-ui/react";
import { VoidFunctionComponent } from "react";
import NextLink from "next/link"


export const SidebarList:VoidFunctionComponent =()=>{
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
        <>
        <Box
            display={{ base: 'none', md: 'block' }}
            position="sticky"
            p={3}
            bg="#ffffff"
            width={["0","0","30%","25%","20%"]}
            height="90vh"
          >
            <Box
              top={3}
              position="sticky"
              >
                { router.map((router,key)=>(
                <NextLink  href={router.to} passHref key={key}>
                    <Box _hover={{bg:"#f2f2f2"}} _active={{bg:"blue" }} key={key} rounded="sm" maxW="sm" p="3" my={2}>
                        {router.name}
                    </Box>
                </NextLink>
                  ))}
            </Box>
          </Box>
        </>
    )
}
import { Box, Link } from "@chakra-ui/react";
import { VoidFunctionComponent } from "react";
import NextLink from "next/link"
import { useRouter } from "next/router";
import { background } from "@chakra-ui/styled-system";

export const SidebarList:VoidFunctionComponent =()=>{
    const router = useRouter();
    

    const sidebarLinks = [
    {   
        to:"/home",
        name:"ホーム",
        icon:"home"
    },
    {
        to:"/tasks",
        name:"タスク",
        icon:"dictionary"
    },{
        to:"/users",
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
            width={["0","0","25%","20%","15%"]}
            height="90vh"
          >
            <Box
              top={3}
              position="sticky"
              >
                { sidebarLinks.map((sidebar,key)=>(
                <NextLink   href={sidebar.to}  key={key} passHref>
                    <Box  
                        key={key}  
                        rounded="md" 
                        maxW="sm" p="3"
                        my={2} 
                        fontWeight={
                            router.pathname ===sidebar.to&&"semibold"
                        }
                        color={
                            router.pathname===sidebar.to&&"teal.400"
                        }
                        bg={
                            router.pathname===sidebar.to&&"green.50"
                        }
                        _hover ={{
                            backgroundColor:"green.100"
                        }}  
                        
                    >
                     {sidebar.name}
                    </Box>
                    
                </NextLink>
                  ))}
                  </Box>
                  </Box>
                </>
    )
}
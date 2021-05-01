import { Container, Flex } from "@chakra-ui/react";

import {SidebarList} from "@/components/molecules/lists/SidebarList"
import {useRouter} from "next/router";

export const MainLayout = ({children})=>{
    const router = useRouter()
    const {userId,taskId} = router.query;
    return (
      <Flex
        bg='#f6f6f6'
        justify="center"
        display="flex"
        position="-webkit-sticky">
        {userId&&!taskId&&<SidebarList />}
        <Container 
          height="90vh"
          p={3} 
          maxW="container.lg">
          {children}
        </Container>
      </Flex>
    )
}

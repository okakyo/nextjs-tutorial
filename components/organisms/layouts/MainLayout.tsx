import { Container, Flex } from "@chakra-ui/react";
import {FC} from "react";
import {SidebarList} from "@/components/molecules/lists/SidebarList"
export const MainLayout:FC = ({children})=>{
    
    return (
        <Flex
          bg='#f6f6f6'
          justify="center"
          display="flex"
          position="-webkit-sticky"
        >
          <SidebarList/>
          <Container 
            height="90vh"
            p={3} 
            maxW="container.lg"
          >
              {children}
        </Container>
        </Flex>
    )
}

import { Box, Flex } from "@chakra-ui/react";
import {FC} from "react";

export const MainLayout:FC = ({children})=>{
    
    return (
        <Flex justify="center" p={3}>
            <Box  w={["100%","90%","80%"]}>
                {children}
            </Box>
            
        </Flex>
    )
}
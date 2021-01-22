import { Box, Flex } from "@chakra-ui/react";
import {FC} from "react";

export const MainLayout:FC = ({children})=>{
    
    return (
        <Flex justify="center" p={1}>
            <Box  w={["100%","80%"]}>
                {children}
            </Box>
            
        </Flex>
    )
}
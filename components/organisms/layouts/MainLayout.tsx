import { Box } from "@chakra-ui/react";
import {FC} from "react";

export const MainLayout:FC = ({children})=>{
    
    return (
        <Box w="100%" p={1} m={3}>
            
            {children}
        </Box>
    )
}
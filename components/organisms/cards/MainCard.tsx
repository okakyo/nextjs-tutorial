import {FC} from "react"
import {Box} from "@chakra-ui/react";
export const MainCard:FC=({children})=>{
    return (
        <Box  borderWidth="1px" borderRadius="md" overflow="hidden" p={3}>
            {children}
        </Box>
    )
}
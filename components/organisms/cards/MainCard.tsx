import {FC} from "react"
import {Box} from "@chakra-ui/react";
export const MainCard:FC=({children})=>{
    return (
        <Box width="sm" maxW="md" borderWidth="1px" borderRadius="md" overflow="hidden">
            サンプル
            {children}
        </Box>
    )
}
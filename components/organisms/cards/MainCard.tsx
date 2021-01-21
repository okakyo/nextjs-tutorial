import { FunctionComponent} from "react"
import {Box} from "@chakra-ui/react";
export const MainCard:FunctionComponent=({children})=>{
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden">
            サンプル
            {children}
        </Box>
    )
}
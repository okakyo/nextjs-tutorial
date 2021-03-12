import {FC} from "react"
import {Box} from "@chakra-ui/react";
export const ImgCard:FC=({children})=>{
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden">
            サンプル
            {children}
        </Box>
    )
}


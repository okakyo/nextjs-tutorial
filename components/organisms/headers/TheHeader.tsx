import{ FunctionComponent } from "react";
import { Box, Flex } from "@chakra-ui/react";

export const TheHeader:FunctionComponent = ()=>{
    return (
    <>
        <Flex 
            as="nav" 
            align="center"
            justify="space-between"
            padding="1.5rem"
            bg="teal.500"
            color="white"
        >
        <Box>

        </Box> 
        </Flex>
        
    </>)
}
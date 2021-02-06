import{ FC, useContext } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { AuthContext } from "@/store";

export const TheHeader:FC= ()=>{
    const context = useContext(AuthContext);
    const account = context.account
    return (
    <>
        <Flex 
            as="nav" 
            align="center"
            justify="space-between"
            padding="0.5rem"
            bg="teal.500"
            color="white"
        >
        <Box p="2">
            <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer/>
        <Box>
            {!account?
                <Button colorScheme="teal">
                    Log in
                </Button>:
                // この部分は User の Icon を表示させる
                <Button colorScheme="teal" mr="4">
                    Log Out
                </Button>
            }
        </Box>
        </Flex>
    </>)
}
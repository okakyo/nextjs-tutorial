import{ FC, useState } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

export const TheHeader:FC= ()=>{
    const [isLogin,useIsLogin] = useState(false);
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
            {!isLogin?
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
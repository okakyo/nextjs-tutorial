import{ useContext,  VFC } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import NextLink from 'next/link';
import { SignIn,AuthContext, Signout } from "@/libs";



export const TheHeader:VFC= ()=>{
    const state = useContext(AuthContext)
    const currentUser =state.currentUser;

    return (
    <>
        <Flex 
            as="nav" 
            align="center"
            justify="space-between"
            padding="0.5rem"
            bg="teal.400"
            color="white"
        >
        <Box p={2}>
            <Heading size="md">
                <NextLink href="/home">
                    Chakra App
                </NextLink>
            </Heading>
        </Box>
        <Spacer/>
        <Box p={2}>
            {currentUser?
            <Button bgColor="teal.400" onClick={()=>Signout()}>
                Log Out
            </Button>:
            <Button bgColor="teal.400" onClick={()=>SignIn()}>
                Log In
            </Button>
            }
        </Box>
        </Flex>
    </>)
}
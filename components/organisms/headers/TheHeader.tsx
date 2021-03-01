import{ VFC } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import NextLink from 'next/link';
export const TheHeader:VFC= ()=>{
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
            <Heading size="md">
                <NextLink href="/">
                    Chakra App
                </NextLink>
        </Heading>
        </Box>
        <Spacer/>
        <Box>
            <NextLink href="/api/login">
                Log in
            </NextLink>
               
        </Box>
        </Flex>
    </>)
}
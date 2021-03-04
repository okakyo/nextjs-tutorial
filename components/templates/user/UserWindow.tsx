import { Avatar, Box, Button, Heading, Spacer, Stack,Text } from "@chakra-ui/react";
import {FC} from "react";
export const UserWindow:FC=({user}:any)=>{

    return (
        <>
           <Box p={5} bg="white">
           <Stack
              direction={{ base: 'column', md: 'row' }}
              >
            <Avatar ml={5} size="xl" justify={"center"}/>

            <Box pl={5} pt={1}  ml={5}  width="100%">
              <Heading size='lg' fontFamily="bold">
                {user.name}
              </Heading>
              <Text width="60%" p={2}>
                {user.introduction}
              </Text>
            </Box>
            <Spacer/>
            <Button>編集</Button>
          </Stack>
        </Box>
        </>
    );
}
import { Avatar, Box, Button, Heading, Spacer, Stack,Text } from "@chakra-ui/react";
import {FC} from "react";

interface UserProps {
    user:{
        id:string|number
        name?:string,
        email?:string
        introduction?:string
    }
}

export const UserWindow:FC<UserProps>=({user})=>{

    return (
        <>
           <Box p={5} bg="white">
           <Stack
              direction={{ base: 'column', md: 'row' }}
              >
            <Avatar ml={5} size="xl" justify={"center"}/>

            <Box pl={5} pt={1}  ml={5}  width="100%">
              <Heading size='md' fontFamily="bold">
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
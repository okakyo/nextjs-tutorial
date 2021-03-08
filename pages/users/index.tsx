import { Box, Image,Flex,Heading,Text,Button,Avatar, Grid, GridItem, Spacer, Stack} from '@chakra-ui/react'
import Head from 'next/head'
import {gql,useQuery} from "@apollo/client";
import {client } from "@/libs/queries/apollo";
import { UserWindow } from '@/components/templates/user';
export default function UserTopPage({userData}) {
  const user= userData.user
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserWindow user={user}/>
         
    </>
  )
}

export const  getServerSideProps= async ()=>{

  const getQuery = {query:gql`
    {
        user(email:"0622okakyo@gmail.com"){
            id
            name
            email
            introduction
        }
    }
  `}

  const {data} = await client.query(getQuery);
  return {
    props:{
      userData:data
    }
  }
  
}



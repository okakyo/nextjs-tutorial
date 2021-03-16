import { Box, Image,Flex,Heading,Text,Button,Avatar, Grid, GridItem, Spacer, Stack} from '@chakra-ui/react'
import Head from 'next/head'
import {gql,useQuery} from "@apollo/client";
import { UserWindow } from '@/components/templates/user';
import { useContext } from 'react';
import { AuthContext } from '@/libs';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
export default function UserTopPage() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </>
  )
}




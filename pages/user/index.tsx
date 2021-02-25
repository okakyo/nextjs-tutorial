import { Box, Container, Grid, GridItem, SimpleGrid} from '@chakra-ui/react'
import Head from 'next/head'
import {MainCard} from "@/components/organisms/cards";
import { MainLayout } from '@/components/organisms/layouts';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <SimpleGrid columns={[1,2,3,4]} spacing={10}>
          { [1, 2, 3, 4, 5,6].map((number,index)=>(
          <MainCard key={index}>サンプル</MainCard>)
          )}
        </SimpleGrid>
    </div>
  )
}

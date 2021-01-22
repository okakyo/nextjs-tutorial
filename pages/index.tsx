import { Box, Container, Grid, GridItem, SimpleGrid} from '@chakra-ui/react'
import Head from 'next/head'
import {MainCard} from "@/components/organisms/cards/MainCard";
import { MainLayout } from '@/components/organisms/layouts/MainLayout';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <SimpleGrid columns={[1,2,3,4]} spacing={10}>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
          
        </MainLayout>
        <Grid>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </Grid>      
        
        
      </main>
     
    </div>
  )
}

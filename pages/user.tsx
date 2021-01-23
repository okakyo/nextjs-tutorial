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
          
          <SimpleGrid columns={[1,2,3]} spacing={10}>
          { [1, 2, 3, 4, 5,6].map(()=>(
          <MainCard>サンプル</MainCard>)
          )}

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

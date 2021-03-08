import { Box, Container, LinkBox, LinkOverlay, List, ListItem, SimpleGrid} from '@chakra-ui/react'
import Head from 'next/head'
import {MainCard} from "@/components/organisms/cards";

export default function HomePage() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <SimpleGrid columns={[1,1,2,3,4]} spacing={10}>
          { [1, 2, 3, 4, 5,6,4,5,5,5,5,5,5,5].map((number,key)=>(
          <MainCard key={key}>
            サンプル
          </MainCard>
          ))}
        </SimpleGrid>
    </div>
  )
}

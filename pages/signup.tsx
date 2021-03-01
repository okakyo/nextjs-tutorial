import { Box, Container, LinkBox, LinkOverlay, List, ListItem, SimpleGrid} from '@chakra-ui/react'
import Head from 'next/head'
import {MainCard} from "@/components/organisms/cards";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <MainCard >
            アカウントの登録
          </MainCard>
    </div>
  )
}

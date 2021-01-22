import { Box} from '@chakra-ui/react'
import Head from 'next/head'
import {MainCard} from "@/components/organisms/cards/MainCard";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       
            <Box w="100%" h="10" bg="blue.500" p="3"/>
          
       </main>
     
    </div>
  )
}

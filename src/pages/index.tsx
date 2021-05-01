import { SimpleGrid} from "@chakra-ui/react"
import Head from 'next/head'
import {MainCard} from "@/components/organisms/cards";


// TODO : ここをLPにする
export default function TopPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid columns={[1,1,2,3,4]} spacing={10}>
          
        <MainCard>
          サンプル カード
        </MainCard>

      </SimpleGrid>
    </div>
  )
}


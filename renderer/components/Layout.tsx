import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from './Header'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'HOTEL' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Grid
      templateAreas={`"logo header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'200px 1fr'}
      minHeight={"100vh"}
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem textAlign={"center"} pt={1} bg='green.600' area={'logo'}>
        <Logo />
      </GridItem>
      <GridItem pt={"1"} pr={"2"} bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='2' bg='green.900' area={'nav'}>
        <Sidebar />
      </GridItem>
      <GridItem pl='2' bg='white' area={'main'}>
        {children}
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer>
      </GridItem>
    </Grid> 
  </div>
)

export default Layout

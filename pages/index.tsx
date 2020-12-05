import React from 'react'
import Head from 'next/head'
import Page from '../components/pages'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Drama Button</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Page />
      </main>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>Meet the Artist - Loafsprout</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <Navbar/>
      </main>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { getAllWorks } from '../lib/notion'
import styles from '../styles/Works.module.css'
import Navbar from './navbar'


export const getStaticProps = async () => {
  const data = await getAllWorks()

  return {
    props: {
      works: data,
    },
    revalidate: 60
  };
}

export default function Works({works}) {
  return (
    <>
      <Head>
        <title>Works - Loafsprout</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <Navbar/>
      <h1>Works</h1>
        {works.map((wrk,index)=>(
          <div key={index}>
            <Link href={`works/${wrk.slug}`}>{wrk.title}</Link>
          </div>
        ))}
      </main>
    </>
  )
}
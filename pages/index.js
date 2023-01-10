import Head from 'next/head'
import Link from 'next/link'
import { getAllWorks, getLanding, getSection } from '../lib/notion'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'

export const getStaticProps = async () => {
  const hero = await getLanding()
  const section = await getSection()

  return {
    props: {
      hero: hero,
      section: section
    },
    revalidate: 60
  };
}

export default function Home({...props}) {
  return (
    <>
      <Head>
        <title>Loafsprout - Art Portfolio</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <header className={styles.header}>
          <img src={props.hero.cover}/>
          <div className={styles.content}>
            <h1>{props.hero.title}</h1>
            <p>{props.hero.description}</p>
            <Link href='/works' class="button">See my work</Link>
          </div>
        </header>
        <section className={styles.section}>
          <div>
            <h2>{props.section.title}</h2>
            <p>{props.section.description}</p>
          </div>
          <img src={props.section.cover}/>
        </section>
      </main>
    </>
  )
}
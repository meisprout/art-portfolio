import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
        <Image loader={() => props.hero.cover} src={props.hero.cover} layout="fill" objectFit="cover" loading='lazy'/>
          <div className={styles.heading}>
            <h1>{props.hero.title}</h1>
            <p>{props.hero.description}</p>
            <Link href='/works' class="button purple-btn">See my work</Link>
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>{props.section.title}</h2>
            <p>{props.section.description}</p>
            <Link href='/commissions' class="button white-btn">See commission details</Link>
          </div>
          <div className={styles.container}>
            <Image loader={() => props.section.cover} src={props.section.cover} layout="fill" objectFit="cover" loading='lazy'/>
          </div>
          
        </section>
      </main>
    </>
  )
}
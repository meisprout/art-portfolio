import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { getAbout, getAboutPage, getAllContact } from '../lib/notion'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/About.module.css'

export const getStaticProps = async () => {
  const about = await getAboutPage()
  const aboutHeading = await getAbout()
  const contact = await getAllContact()

  return {
    props: {
      about: about,
      heading: aboutHeading,
      contact: contact,
    },
    revalidate: 60
  };
}

export default function About({...props}) {
  return (
    <>
      <Head>
        <title>Meet the Artist - Loafsprout</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar/>

      <main className={styles.main}>

        <div className={styles.container}>
          <img src={props.heading.properties.Image.files[0].file.url} alt="art of girl with short dark hair and yellow shirt"/>
        </div>

        <article className={styles.content}>
          <h1>{props.heading.properties.Name.title[0].plain_text}</h1>
          <ReactMarkdown>{props.about.markdown}</ReactMarkdown>
        </article>

      </main>
      
      <Footer data={props.contact}/>
    </>
  )
}

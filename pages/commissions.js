import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { getAllContact, getRates } from "../lib/notion"
import styles from '../styles/Commissions.module.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export const getStaticProps = async () => {
  const rates = await getRates()
  const contact = await getAllContact()

  return {
    props: {
      rates: rates,
      contact: contact
    },
    revalidate: 60
  };
}

export default function Commissions({...props}) {
  return (
    <>
      <Head>
        <title>Commission Info - Loafsprout</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
      <h1>Commission Info</h1>
      <section className={styles.ratesection}>
        {
          props.rates.map((rts, index)=>(
            <div key={index} className={styles.rates}>
            <div className={styles.container}>
            <Image loader={() => rts.sample} src={rts.sample} layout="fill" objectFit="cover" loading='lazy'/>
            </div>
              <div className={styles.ratestext}>
                <h2>{rts.name}</h2>
                <p>{rts.pesos} PHP</p>
              </div>
              
            </div>
          ))
        }
      </section>
      
      
      </main>
      <Footer data={props.contact}/>
    </>
  )
}

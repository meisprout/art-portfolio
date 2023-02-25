import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { getAddtlFees, getAllContact, getPayInfo, getRates } from "../lib/notion"
import styles from '../styles/Commissions.module.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ReactMarkdown from 'react-markdown'

export const getStaticProps = async () => {
  const rates = await getRates()
  const contact = await getAllContact()
  const addfees = await getAddtlFees()
  const payinfo = await getPayInfo()

  return {
    props: {
      rates: rates,
      contact: contact,
      addfees: addfees,
      payinfo:payinfo
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
        <section>
          <h2>Rates</h2>
          <div className={styles.ratecontainer}>
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
            </div>
        </section>

        <section className={styles.addfees}>
          <h2>Additional Fees</h2>
          <div className={styles.addfeescontainer}>
          {
              props.addfees.map((add, index)=>(
                <div key={index} className={styles.addfeesinfo}>
                <h3>{add.name}</h3>
                      <span className={styles.addfeeprice}>{add.pesos}</span>
                      <p>{add.notes}</p>
                </div>
              ))
            }
          </div>
            
        </section>

        <section className={styles.payinfo}>
          <h2>Payment Information</h2>
          
          <ReactMarkdown>{props.payinfo.markdown}</ReactMarkdown>
        </section>
      
      </main>
      <Footer data={props.contact}/>
    </>
  )
}

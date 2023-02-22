import Head from 'next/head'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import { getAllWorks, getSinglePost, getAllContact } from "../../lib/notion"
import styles from '../../styles/Works.module.css'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export const getStaticPaths = async () => {
    const posts = await getAllWorks();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
  
    return {
      paths,
      fallback: "blocking",
    };
  };

export const getStaticProps = async ({ params }) => {
    const works = await getSinglePost(params.slug)
    const contact = await getAllContact()
   
   return {
      props: {
        works:works,
        contact: contact
      },
      revalidate: 60
    };
};

const Works = ({...props}) => {
   return (
    <>
      <Head>
        <title>{props.works.metadata.title} | Loafsprout</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1>{props.works.metadata.title}</h1>
        <div className={styles.works}>
          <ReactMarkdown>{props.works.markdown}</ReactMarkdown>
        </div>
      </main>
      <Footer data={props.contact}/>
    </>
  )
}

export default Works;
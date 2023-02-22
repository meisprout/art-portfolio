import Head from 'next/head'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import { getAllWorks, getSinglePost } from "../../lib/notion"
import styles from '../../styles/Works.module.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

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
   
   return {
      props: {
        works,
      },
      revalidate: 60
    };
};

const Works = ({works}) => {
   return (
    <>
      <Head>
        <title>{works.metadata.title} | Loafsprout</title>
        <meta name="description" content="Loafsprout is a Filipino artist who specializes in semi-realistic portraits."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1>{works.metadata.title}</h1>
        <div className={styles.works}>
          <ReactMarkdown>{works.markdown}</ReactMarkdown>
        </div>
      </main>
    </>
  )
}

export default Works;
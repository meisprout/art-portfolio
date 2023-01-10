import React from 'react';
import ReactMarkdown from 'react-markdown'
import { getAllWorks, getSinglePost } from "../../lib/notion"
import styles from '../../styles/Works.module.css'
import Navbar from '../navbar'

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
      <Navbar/>
      <div  className={styles.works}>
        <ReactMarkdown>{works.markdown}</ReactMarkdown>
      </div>
    </>
  )
}

export default Works;
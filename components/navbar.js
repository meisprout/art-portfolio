import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { getAllWorks } from '../lib/notion';
import Image from 'next/image';

export const getStaticProps = async () => {
  const data = await getAllWorks()

  return {
    props: {
      works: data,
    },
    revalidate: 60
  };
}

export default function Navbar() {
    
    return (
      <nav className={styles.nav}>
        <Link href="/"><Image src="/logo.svg" alt="logo of loafsprout" className={styles.logo} width={200} height={100}></Image></Link>
        <ul>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/commissions">Commission Info</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
    )
  }
  
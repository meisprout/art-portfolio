import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { getAllWorks } from '../lib/notion';

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
  const [display, defDisplay]=useState(false);

  const openDisplay=()=>{
    defDisplay(!display);
  }
  const closeDisplay=()=>{
    defDisplay(false);
  }

    return (
      <nav className={styles.nav}>
        <Link href="/"><img src="/logo.svg" className={styles.logo}></img></Link>
        <ul>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/commissions">Commission Info</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
    )
  }
  
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [display, defDisplay]=useState(false);

  const openDisplay=()=>{
    defDisplay(!display);
  }

    return (
      <nav className={styles.nav}>
        <Link href="/"><img src="/logo.svg" className={styles.logo}></img></Link>
        <ul>
            <li onMouseOver={openDisplay}><Link href="/works">Works</Link></li>
              {
                display ? 
                <div className={styles.dropdown}>
                  <Link href="/works/personal-works">Personal Works</Link>
                  <Link href="/works/commission-works">Commissions</Link>
                </div>
              : null
              }
            <li><Link href="/commissions">Commission Info</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
    )
  }
  
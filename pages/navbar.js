import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
      <nav>
        <ul className={styles.nav}>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/commissions">Commission Info</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
    )
  }
  
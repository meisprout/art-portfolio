import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer({data}) {
    return (
       <div className={styles.main}>
            <Link href="/"><img src="/logo.svg" className={styles.logo}></img></Link>
            
            <ul className={styles.linkset}>
            <li><Link href="/works">Works</Link></li>
              <li><Link href="/commissions">Commission Info</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>

            <ul className={styles.linkset}>
            {
              data.slice(0,1).map((ctc, index)=>(
                <li key={index}><Link title="loafsprout@gmail.com" href={`mailto:${ctc.link}`}>{ctc.account}</Link></li>
              ))
            }
            {
              data.slice(1).map((ctc, index)=>(
                <li key={index}><Link href={`${ctc.link}`}>{ctc.account}</Link></li>
              ))
            }
              
            </ul>
        </div>
      )
  }
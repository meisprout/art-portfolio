import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer({data}) {
    return (
       <div className={styles.main}>
        <div className={styles.maininfo}>
        <div className={styles.container}>
          <Link href="/"><Image src="/logo.svg" alt="logo of loafsprout" className={styles.logo} layout="fill" objectFit="contain"></Image></Link>
        </div>
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
            
        <p>© Loafsprout 2023. All rights reserved.</p>
      </div>
      )
  }
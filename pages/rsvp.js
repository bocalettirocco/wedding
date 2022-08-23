import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function RSVP() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Erin & Mario</title>
          <meta name="description" content="Erin & Mario wedding" />
          <link rel="icon" href="/pigs.png" />
        </Head>
  
        <main className={styles.main}>
          <div className={styles.headerimage}>
            <Image src="/flowers.png" layout="fill"/>
          </div>
          <h1 className={styles.title}>
            RSVP
          </h1>
          <p className={styles.text}>
            Please click
            <Link href="https://withjoy.com/erin-and-mario/rsvp">
              <a> here </a>
            </Link>
            to RSVP.
          </p>       
        </main>
      </div>
    )
  }

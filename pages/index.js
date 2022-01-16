import Bubbles from '../components/bubbles'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erin & Mario</title>
        <meta name="description" content="Erin & Mario wedding" />
        <link rel="icon" href="/pigs.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Erin & Mario
        </h1>
        <p className={styles.text}>October 8, 2022</p>
        <div className={styles.container}>
          <div className={styles.topcontainer}> 
            <Image src="/pigs.png" layout="fill"/>
          </div>
          <Bubbles/>  
        </div>
      </main>
    </div>
  )
}

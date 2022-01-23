import Head from 'next/head'
import ChurchMap from '../components/churchmap'
import Image from 'next/image'
import Link from 'next/link'
import ReceptionMap from '../components/receptionmap'

import styles from '../styles/Home.module.css'

export default function Info() {
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
          Info
        </h1>
        <h2 className={styles.subtitle}>Ceremony</h2>
        <p className={styles.text}>1:00 pm to 2:00 pm</p>
        <p className={styles.text}>Our ceremony will be a full Catholic mass. St. Rita offers plenty of safe street parking as well as off-street parking in their school lot.</p>
        <ChurchMap/>
        <p className={styles.address}>St. Rita Catholic Church</p>
        <p className={styles.address}>2729 Lowerline Street, New Orleans, LA, USA</p>

        <p className={styles.text}>
            {' '}
            <Link href="https://google.com">
              <a>Add Event To Calendar</a>
            </Link>
          </p>

        <h2 className={styles.subtitle}>Reception</h2>
        <p className={styles.text}>2:00 pm to 5:00 pm</p>
        <p className={styles.text}>We can't wait for you to experience Paradigm Gardens! It's a beautiful working garden with herbs, veggies, flowers, butterflies, and pigmy goats. (Yes, you read that right.) The food will feature fresh ingredients from the garden cooked on their wood-fire oven and grill. Parking at Paradigm is all off street.</p>
        <ReceptionMap/>
        <p className={styles.address}>Paradigm Gardens</p>
        <p className={styles.address}>1131 S South Rampart Street, New Orleans, LA, USA</p> 
        <p className={styles.text}>
            {' '}
            <Link href="https://google.com">
              <a>Add Event To Calendar</a>
            </Link>
          </p>
      </main>
    </div>
  )
}
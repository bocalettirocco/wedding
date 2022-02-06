import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function FAQs() {
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
          FAQs
        </h1>
        <h2 className={styles.subtitle}>Can I bring a date?</h2>
        <p className={styles.text}>Please check your invitation.</p>
        <h2 className={styles.subtitle}>Are kids welcome?</h2>
        <p className={styles.text}>As much as we love your little ones, we will only be including children who are in the wedding party.</p>
        <h2 className={styles.subtitle}>Is it okay to take pictures during the wedding?</h2>
        <p className={styles.text}>Please refrain from taking pictures during the ceremony itself. We promise we'll share our photos with you after the fact! However, we hope you do take pictures during the reception and would love it if you shared them with us.</p>
        <h2 className={styles.subtitle}>Is the wedding indoors or outdoors?</h2>
        <p className={styles.text}>Our wedding ceremony is indoors, but the reception will be completely outdoors.</p>
        <h2 className={styles.subtitle}>What should I wear?</h2>
        <p className={styles.text}>Dress is cocktail attire.</p>
        <h2 className={styles.subtitle}>What kind of shoes should I wear?</h2>
        <p className={styles.text}>Calling all ladies! Our reception venue is entirely grass, and we want you to be comfortable walking around and exploring the garden. We do not recommend wearing stiletto heels. Instead, we suggest wearing chunky heels, wedges, or flats.</p>
        <h2 className={styles.subtitle}>Whom should I reach out to with questions?</h2>
        <p className={styles.text}>You can email us at erin.bocaletti@gmail.com or shoot us a text.</p>
      </main>
    </div>
  )
}
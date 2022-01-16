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
        <h2 className={styles.subtitle}>When is the RSVP deadline?</h2>
        <p className={styles.text}> Please RSVP by September 15th so we can have an accurate headcount.</p>
        <h2 className={styles.subtitle}>Can I bring a date?</h2>
        <p className={styles.text}> Please check your invite for your +1.</p>
        <h2 className={styles.subtitle}>Are kids welcome?</h2>
        <p className={styles.text}> As much as we love your little ones, we will only be including children who are in the wedding party.</p>
        <h2 className={styles.subtitle}>Is it okay to take pictures during the wedding?</h2>
        <p className={styles.text}> Please refrain from taking photos during the ceremony itself. We promise we'll share our pictures with you after the fact! However, we would love for you to take photos during the reception and share them with us and on social media.</p>
        <h2 className={styles.subtitle}>Is the wedding indoors or outdoors?</h2>
        <p className={styles.text}> Our wedding ceremony is indoors, but the reception will be completely outdoors in the beautiful and unique Paradigm Gardens. A portion of the garden will be tented.</p>
        <h2 className={styles.subtitle}>What should I wear?</h2>
        <p className={styles.text}> Dress is cocktail attire.</p>
        <h2 className={styles.subtitle}>What kind of shoes should I wear?</h2>
        <p className={styles.text}> Calling all ladies! We do not recommend wearing stiletto heels. Our reception venue is entirely grass, and we want you to be comfortable walking around and exploring the garden. Instead, we suggest wearing chunky heels, wedges, or flats. We don't want you to ruin any nice shoes or break any ankles. :)</p>
        <h2 className={styles.subtitle}>What will the weather be like?</h2>
        <p className={styles.text}> October is beautiful in New Orleans! Fall is mild here. You can typically expect temperatures around 70° Fahrenheit.</p>
        <h2 className={styles.subtitle}>Where should I park?</h2>
        <p className={styles.text}> Please see the Ceremony and Reception sections above for parking info for each location. We encourage you to use Uber or Lyft so you can enjoy the bar during the reception. We want everyone to have fun and be safe.</p>
        <h2 className={styles.subtitle}>Whom should I reach out to with questions?</h2>
        <p className={styles.text}> You can email us at erin.bocaletti@gmail.com or shoot us a text.</p>
      </main>
    </div>
  )
}
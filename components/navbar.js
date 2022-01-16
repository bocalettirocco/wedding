import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (

        <div className={styles.container}>
            <div className={styles.inner}>
            <Link href="/">
                <a className={styles.text}>Home</a>
            </Link>
            </div>
            <div className={styles.inner}>
            <Link href="/info">
                <a className={styles.text}>Info</a>
            </Link>
            </div>
            <div className={styles.inner}>
            <Link href="/rsvp">
                <a className={styles.text}>RSVP</a>
            </Link>
            </div>
            <div className={styles.inner}>
            <Link href="/registry">
                <a className={styles.text}>Registry</a>
            </Link>
            </div>
            <div className={styles.inner}>
            <Link href="/faqs">
                <a className={styles.text}>FAQs</a>
            </Link>
            </div>
        </div>
    )
}
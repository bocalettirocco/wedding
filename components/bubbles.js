import Bubble from './bubble'
import styles from '../styles/Bubble.module.css'

export default function Bubbles() {
    let rows = [];

    for (let i = 0; i < 54; i++) {
        rows.push(<Bubble key={i}/>)
    }

    return(
        <div className={styles.container}>{rows}<p>Click to pop!</p></div>
      )
}


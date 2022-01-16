import styles from '../styles/Bubble.module.css';
import { useState } from 'react';
import audio from '../public/pop.mp3'

export default function Bubble() {
    const [popped,setPopped] = useState(0)

    const pop = () => {
        new Audio(audio).play()
        setPopped(true)
    }
  

    if (popped > 0) {
        return(
            <div className={styles.poppedwrap}>
            <div className={styles.popped}></div>
            </div>
          )
    } else {
        return(
            <div className={styles.wrap}>
            <div className={styles.bubble} onClick={() => pop() }></div>
            </div>
          )
    }
}
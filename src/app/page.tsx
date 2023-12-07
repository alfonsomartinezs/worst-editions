import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className={styles.title}>
      <span className={styles.the}>THE</span>
      <span className={`${styles.squishyLetter} ${styles.w}`}>W</span>
      {/* <span className={`${styles.squishyLetter} ${styles.o}`}>O</span> */}
      <span className={`${styles.squishyLetter} ${styles.o}`}>O</span>
      <span className={`${styles.squishyLetter} ${styles.r}`}>R</span>
      <span className={`${styles.squishyLetter} ${styles.s}`}>S</span>
      <span className={`${styles.squishyLetter} ${styles.t}`}>T</span>
      
      <span className={styles.fullWord}>EDI<wbr/>TIO<wbr/>NS</span>
      </h1>
    </main>
  )
}

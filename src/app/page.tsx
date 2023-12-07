import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className={styles.title}>
      <span className={styles.the}>THE</span>
      <span className={styles.worst}>WO<wbr/>R<wbr/>S<wbr/>T</span>
      {/* <span className={styles.squishyLetter}>E</span>
      <span className={styles.squishyLetter}>D</span>
      <span className={styles.squishyLetter}>I</span>
      <span className={styles.squishyLetter}>T</span>
      <span className={styles.squishyLetter}>I</span>
      <span className={styles.squishyLetter}>O</span>
      <span className={styles.squishyLetter}>N</span>
      <span className={styles.squishyLetter}>S</span> */}
      <span className={styles.editions}>E<wbr/>DI<wbr/>TI<wbr/>ONS</span>      
      </h1>
      <p>Are a collection of my unedited and unplaytested games, notes, and generators, shared online as a way to combat debilitating perfectionism.</p><p> Early Release Beta pre Alpha. Just vibes. The worst. It can only get better from here.</p>
      <ul className={styles.navList}>
        <li><Link href="/games">Games</Link></li>
        <li><Link href="/notes">Notes</Link></li>
        <li><Link href="generators">Generators</Link></li>
      </ul>
    </main>
  )
}

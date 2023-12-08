import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import BlogPostLink from './components/BlogPostLink/BlogPostLink'

export default function Home() {
  return (
    <main className={`${styles.main} feature`}>
     <h1 className={styles.title}>
      <span className={styles.the}>THE</span>
      <span className={styles.worst}>WO<wbr/>R<wbr/>S<wbr/>T</span>
      <span className={styles.editions}>E<wbr/>DI<wbr/>TI<wbr/>ONS</span>      
      </h1>
      <p>Are a collection of my unedited and unplaytested tabletop roleplaying games, notes, and generators, shared online as a way to combat debilitating perfectionism.</p><p> Early Release Beta pre Alpha. Just vibes. The worst. It can only get better from here.</p>
      <section className={styles.blogPostSection}>
        <ul className={styles.blogPostList}>
          <li><BlogPostLink name="Drift RPG" type="games"/></li>
          <li><BlogPostLink name="Dead Man's Hand RPG" type="games"/></li>
        </ul>
      </section>
    </main>
  )
}

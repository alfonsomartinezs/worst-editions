import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Worst Editions',
  description: 'Just the Worst',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className={`${styles.article} full-width grid-content`}>
      {children}
    </article>
  )
}

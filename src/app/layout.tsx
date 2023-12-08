import type { Metadata } from 'next'
import './globals.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Worst Editions',
  description: 'poorly made fun stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${styles.main} grid-content`}>{children}</body>
    </html>
  )
}

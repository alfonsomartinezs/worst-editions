import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

interface BlogPostLinkTypes {
  name: string,
  type: string
}

const slugify = (text:string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

const BlogPostLink = ({name,type}:BlogPostLinkTypes) => {
  const nameSlug = slugify(name)
  return (
    <Link href={`posts/${type}/${nameSlug}`} className={styles.blogPostLink}>
      <span>{name}</span>
      <span>{type}</span>
    </Link>
  )
}

export default BlogPostLink
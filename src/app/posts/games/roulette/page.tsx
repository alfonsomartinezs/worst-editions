import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Link href= '/'>Back</Link> 
      <h1>Roulette</h1>
      <p>A few years ago a friend and I made <Link href="https://shrikefound.itch.io/roulette">Roulette</Link>, a heist game based on Lasers and Feelings</p>
      </>
  )
}

export default page
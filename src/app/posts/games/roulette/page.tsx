import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Link href='/'>Back</Link>
      <p>A few years ago a friend and I made <Link href="https://shrikefound.itch.io/roulette">Roulette</Link>, a heist game based on Lasers and Feelings. Here are the rules.</p>
      <h1>Roulette</h1>
      <p>This is a casino heist game for 2-4 players.</p>
      <p>The objects) to be heisted is determined by the players.</p>
      <p>The protections set in place are determined by the GM.</p>
      <h2>The Job</h2>
      <p>The game is played over 18 scenes, during which the players need to achieve group and individual goals that will move the plot forward and get them closer to completing their heist. Goals could be disabling security systems, discerning a password, or even providing a smooth getaway.
        Scenes should typically be framed around the strengths and weaknesses of the characters) in the scene. Be sure to guide players by providing possible options, but be open to creative solutions.
      </p>
      <p>When failure happens, describe how it went wrong but also provide them with new ways of getting what they want. Failure in the LAST scene is the most consequential but not necessarily a failure of the heist. It just means that the individual couldn't get away and got compromised.
        If a single player escapes with the objective(s), mission success.
      </p>
      <h2>The Crew</h2>
      <p>Choose a unique role for your character and choose 3-4 items from your respective GEAR bag.
        Each character has a NUMBER score next to them. See Rolling the Dice bellow for details.</p>
      <h4>The Spider (5)</h4>
      <p>[Lockpicks, Blueprints, Grappling hook, Stethoscope, Fingerprint dust, Ball bearings]</p>
      <h4>The Fox (4)</h4>
      <p>[Little black book, Laptop, Keycard, Baton, Pocket mirror, Change of clothes]</p>
      <h4>The Badger (3)</h4>
      <p>[Silenced pistol, Bag, Smoke bomb, C4, Getaway vehicle, Night vision goggles]</p>
      <h2>Rolling the Dice</h2>
      <p><strong>When you do something risky</strong>, choose RED or BLACK and roll 3d6 to find out how it goes.</p>
      <ul>
        <li>RED actions require quick thinking, hot tempers, and flare.</li>
        <li>BLACK actions require forethought, patience, and finesse.</li>
      </ul>
      <p>If you're rolling for a RED action, any die that is OVER your number is a success.</p>
      <p>-If you're rolling for a BLACK action, any die that is UNDER your number is a success.</p>
      <p>For every GEAR the character rolling discards, they can add or subtract 1 from the NUMBER score.</p>
      <table className="wrap breakout">
        <tbody>
          <tr>
            <td>O Successes</td><td>The GM narrates the outcome of the roll.</td>
          </tr>
          <tr>
            <td>1 Success</td><td>You make it, but just. The GM narrates the outcome with a condition of your choice.</td>
          </tr>
          <tr>
            <td>2 Successes</td><td>You succeed! You narrate the outcome, with a condition decided by the GM</td>
          </tr>
          <tr>
            <td>3 Successes</td><td>Complete success! You narrate the outcome.</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default page
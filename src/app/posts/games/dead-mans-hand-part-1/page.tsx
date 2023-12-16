import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Link href= '/'>Back</Link> 
      <h1>Dead Man's Hand</h1>
      <p>This year for NaNoWriMo I tried to create an RPG. I came up with <strong>Dead Man's Hand</strong>, a weird west RPG where you flip cards instead of rolling dice and use FATE-inspired aspects to modify your result of attributes or skills.</p>
      <p> I've played <em>Through the Breach</em>, a tabletop RPG made by the same folks who did <em>Malifaux</em>. I'm a fan of the world building, but a lot of mechanics were brought from the skirmish game that make the RPG feel clunky and slow. Dead Man's Hand takes inspiration from the setting but uses simpler game mechanics for a more pulpy tone.</p>

      <h2>Core Mechanics</h2>
      <p>
        Like Through the Breach, Dead Man's Hand (DMH) is played using cards. When making a move, a player draws a card from the deck and adds the appropriate move modifier. Under certain circumstances, they may be able to draw more than one card and choose whichever they prefer.
      </p>
      <h3>The Flip</h3>
      <p>
        The result of your flip determines the outcome:
      </p>
      <ul>
        <li><strong>5 or less </strong> is a miss (things get worse or turn out bad).</li>
        <li><strong>6 to 9 </strong>is a partial success (some good with a complication).</li>
        <li><strong>11 to 13</strong> is a complete success (you do it without issue).</li>
        <li><strong>14 or more</strong> is a critical success (you do it with an added benefit).</li>
      </ul>
      <h3>Advantage and Disadvantage</h3>
      <p>Sometimes you might have advantage, which means you flip an extra card choose which to use. Likewise, you might have disadvantage, which means you flip an extra card and take the lowest value card.</p>

      <p>You flip with advantage or disadvantage whenever the GM or a circumstance tells you to.</p>

      <p>Advantage and disadvantage cancel each other out, so if you have equal advantages and disadvantages, you roll at neither. If you have a net number of advantages or disadvantages, you flip an extra number of cards equal to that number but no more than three.</p>

      <p>Advantage and disadvantage really stack the deck one way or another. For relatively mundane booms and busts, consider rewarding a +1 or -1 to the total instead.</p>
      <h3>Aspects</h3>
      <p>
        Aspects define your character and grant you a positive or negative modifier according to their potency when they're relevant. An <strong>Educated</strong> aspect would grant a character a bonus when investigating a murder scene at the manor, while a <strong>Mighty</strong> aspect would grant its bonus when trying to throw a ruffian out of the saloon.
      </p>
      <p>As Aspects grow in potency, they also grow in specificity. Someone who's Educated would get a +1 bonus, while someone who's had the privilege of being <strong>Educated by the Governer's School of Sleuthing</strong> would bring their +2 to bear. An increase in an Aspect's focus also means that its full potency is not as broadly applicable. An Aspect's potency can also be a hindrance. a <strong>Stoic</strong> gunslinger might do well under pressure but would get a -1 modifier to charm the lord of a manor.
      </p>
      <h3>Creating a Character</h3>
      <p>Creating your character is simple. At each step you'll be determining a core aspect of your character. All together, they form your character's core concept. It'll look a little like this:</p>
      <code className='breakout'>
        [<strong>CHARACTER NAME</strong>] is a [<strong>ADJECTIVE</strong>] [<strong>NOUN</strong>] [<strong>TROUBLE</strong>]. They used to be [<strong>BACKGROUND</strong>] but now they [<strong>VERB</strong>] in order to [<strong>GOAL</strong>].
      </code>
      <p>the mathmaticians among us will count 6 core aspects:</p>
      <ol>
        <li>ADJECTIVE</li>
        <li>NOUN</li>
        <li>TROUBLE</li>
        <li>BACKGROUND</li>
        <li>VERB</li>
        <li>GOAL</li>
      </ol>

      <p>For each aspect, you can either decide on a phrase or word yourself, choose an aspect from the lists provided, or flip for an aspect by following the instructions for each section below.</p>

      <h4>Adjectives</h4>
      <p>Adjectives describe your character's demeanor or general outlook. At character creation you can pick one defining adjective. Either decide on a fitting one yourself or flip a card and consult the table using both the card value and suit color.</p>
      <table className="table col-3">
        <thead>
          <tr>
            <th>Value</th>
            <th className="bg-red">Red Suit</th>
            <th> Black Suit</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Charming</td><td>Stoic</td></tr>
          <tr><td>2</td><td>Witty</td><td>Pragmatic</td></tr>
          <tr><td>3</td><td>Educated</td><td>Rugged</td></tr>
          <tr><td>4</td><td>Tenacious</td><td>Stealthy</td></tr>
          <tr><td>5</td><td>Graceful</td><td>Curious</td></tr>
          <tr><td>6</td><td>Mighty</td><td>Resourceful</td></tr>
          <tr><td>7</td><td>Tough</td><td>Vigilant</td></tr>
          <tr><td>8</td><td>Quick</td><td>Patient</td></tr>
          <tr><td>9</td><td>Cultured</td><td>Violent</td></tr>
          <tr><td>10</td><td>Lawful</td><td>Outlaw</td></tr>
          <tr><td>11</td><td>Augmented</td><td>Weird</td></tr>
          <tr><td>12</td><td>Zealous</td><td>Apostate</td></tr>
          <tr><td>13</td><td>Industrious</td><td>Opulent</td></tr>
        </tbody>
      </table>
      <h4>NOUNS</h4>
      <p>a Noun is your character's profession or role. Its makes up your character's main skills and knowledges.</p>
      <table  className="table col-2">
        <thead>
          <tr>
            <th>Value</th>
            <th>Noun</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Academic</td></tr>
          <tr><td>2</td><td>Bureaucrat</td></tr>
          <tr><td>3</td><td>Collaborator</td></tr>
          <tr><td>4</td><td>Criminal</td></tr>
          <tr><td>5</td><td>Drudge</td></tr>
          <tr><td>6</td><td>Graverobber</td></tr>
          <tr><td>7</td><td>Gunfighter</td></tr>
          <tr><td>8</td><td>Mage</td></tr>
          <tr><td>9</td><td>Mercenary</td></tr>
          <tr><td>10</td><td>Performer</td></tr>
          <tr><td>11</td><td>Pioneer</td></tr>
          <tr><td>12</td><td>Tinkerer</td></tr>
          <tr><td>13</td><td>Wastrel</td></tr>
        </tbody>
      </table>

      <h4>Troubles</h4>
      <p>Troubles complicate your character's life and oppose progress towards their goal. This could be a self-caused trouble (e.g. a Gambling Addiction) or an outside force (e.g. pursued by the law). You can come up with your own trouble or flip a card and refer to the table below.</p>
      <table  className="table col-2">
        <thead>
          <tr>
            <th>Value</th>
            <th>Trouble</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Haunted Past</td></tr>
          <tr><td>2</td><td>Pursued By the Law</td></tr>
          <tr><td>3</td><td>Lost Love</td></tr>
          <tr><td>4</td><td>Bad Reputation</td></tr>
          <tr><td>5</td><td>Afraid of the Dark</td></tr>
          <tr><td>6</td><td>Gambling Addiction</td></tr>
          <tr><td>7</td><td>Substance Abuse</td></tr>
          <tr><td>8</td><td>Old Injury</td></tr>
          <tr><td>9</td><td>Loneliness</td></tr>
          <tr><td>10</td><td>Blood Sickness</td></tr>
          <tr><td>11</td><td>Hot Temper</td></tr>
          <tr><td>12</td><td>Cowardly</td></tr>
          <tr><td>13</td><td>More of an Indoor Person</td></tr>
        </tbody>
      </table>


      <h4>Backgrounds</h4>
      <p>Backgrounds are what your character did or what the circumstances of their lives were like before they became what they are today.</p>
      <table  className="table col-2">
        <thead>
          <tr>
            <th>Value</th>
            <th>Background</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Archeologist</td></tr>
          <tr><td>2</td><td>Artist</td></tr>
          <tr><td>3</td><td>Blacksmith</td></tr>
          <tr><td>4</td><td>Cartographer</td></tr>
          <tr><td>5</td><td>Bookbinder</td></tr>
          <tr><td>6</td><td>Constable</td></tr>
          <tr><td>7</td><td>Enforcer</td></tr>
          <tr><td>8</td><td>Harlot</td></tr>
          <tr><td>9</td><td>Engineer</td></tr>
          <tr><td>10</td><td>Doctor</td></tr>
          <tr><td>11</td><td>Laborer</td></tr>
          <tr><td>12</td><td>Politician</td></tr>
          <tr><td>13</td><td>Sailor</td></tr>
        </tbody>
      </table>
      <h4>Verbs</h4>
      <table  className="table col-3 breakout">
        <thead>
          <tr>
            <th>Value</th>
            <th className="bg-red">Red Suit</th>
            <th> Black Suit</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Speaks for the Flame</td><td>Worships December</td></tr>
          <tr><td>2</td><td>Employs Smoke and Mirrors</td><td>Lives in the Shadows</td></tr>
          <tr><td>3</td><td>Invents Machinery</td><td>Makes things Explode</td></tr>
          <tr><td>4</td><td>Tames the Wild</td><td>Leads the Pack</td></tr>
          <tr><td>5</td><td>Hunts the Undead</td><td>Talks to the Dead</td></tr>
          <tr><td>6</td><td>Gambles with Their Life</td><td>Reads the Future</td></tr>
          <tr><td>7</td><td>Propagandizes</td><td>Seduces</td></tr>
          <tr><td>8</td><td>Sings like an Angel</td><td>Plays Like the Devil</td></tr>
          <tr><td>9</td><td>Dabbles in the Occult</td><td>Exorcises Witches</td></tr>
          <tr><td>10</td><td>Guards the Breaches</td><td>Lets Nightmares In</td></tr>
          <tr><td>11</td><td>Replaces flesh with Steel</td><td>Shapes their Flesh</td></tr>
          <tr><td>12</td><td>Saws bones and Stitches Flesh</td><td>Works Miracles</td></tr>
          <tr><td>13</td><td>Seeks Revenge</td><td>Wields Black Blood</td></tr>
        </tbody>
      </table>
      <h4>Goals</h4>
      <p>Goals are what your character is working towards. They are a source of strength and direction</p>
      <table  className="table col-2">
        <thead>
          <tr>
            <th>Value</th>
            <th>Goal</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Take down the Guild</td></tr>
          <tr><td>2</td><td>Find their missing love</td></tr>
          <tr><td>3</td><td>Seek Redemption</td></tr>
          <tr><td>4</td><td>Become a Legend</td></tr>
          <tr><td>5</td><td>Build a Community</td></tr>
          <tr><td>6</td><td>Revenge</td></tr>
          <tr><td>7</td><td>Uncover the Truth</td></tr>
          <tr><td>8</td><td>Reach the Pinnacle of their Craft</td></tr>
          <tr><td>9</td><td>Shelter the Innocent</td></tr>
          <tr><td>10</td><td>Keep the Peace</td></tr>
          <tr><td>11</td><td>Obey the Law</td></tr>
          <tr><td>12</td><td>Restore Justice</td></tr>
          <tr><td>13</td><td>Sow Chaos</td></tr>
        </tbody>
      </table>
      </>
  )
}

export default page































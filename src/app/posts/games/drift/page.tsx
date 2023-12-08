import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Link href= '/'>Back</Link> 
      <h1>Drift</h1>
      <blockquote>
        <p>“The heart of man is very much like the sea, it has its storms, it has its tides and in its depths it has its pearls too”</p>
        <p>- Vincent van Gogh</p>
      </blockquote>
      <section>
        <p>I originally designed this game as a challenge to myself. I wanted to create an RPG that:</p>
        <ul>
          <li>Could fit neatly in my wallet</li>
          <li>Could be played with just two people</li>
          <li>Could be taught in less than 5 minutes</li>
          <li>Could be played in less than an hour, preferably 30 minutes or less.</li>
        </ul>
          <p>Lastly, I wanted it to feel the way the Old man and the Sea felt to me -- that is: epic, contemplative, and a bit pretentious.</p>
        <p>The result is <strong>Drift</strong>. It's a mini RPG with a simple token based core mechanic inspired by <a href="https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea" target="_blank">The Old Man and the Sea</a> and <a href="https://buriedwithoutceremony.com/belonging" target="_blank">Belonging Outside Belonging</a> games. It is meant to be played by 2 people in 15-30 minute sessions with an emphasis on thoughtful, cooperative storytelling. </p>
        <p>Unlike traditional RPGs where one player determines the story's truth, both players take turns controlling the narrative. The Sea is guided by Sea moves, a list of actions they can take in order to threaten, challenge, and inspire the sailor. The Sailor has a list of Sailor moves, actions that they can take at any time to gain a heading, develop the world outside the sea, and problem solve.</p>
        <p>Additionally, the players share a limited number of tokens that can be used to activate a <strong>Strong Move</strong>, an action that conclusively determines the truth of a world. Each player can ask for a token by using a <strong>Weak Move</strong>, an action that puts their character in a vulnerable position.</p>
        <p>I quickly gave up on the idea of fitting the rules on a single "credit card" and instead resolved to fit the rules on two credit-card-sized pamphlets: one for the Sailor and one for the Sea. This let me be a bit artsy and add some quotes to set the mood.</p>
      </section>
      <h2>The Sailor Card</h2>
      <blockquote>
        <p>“I may not be as stong as I think, but I know many tricks and I have resolution.”</p>
        <p>- Ernest Hemingway</p>
      </blockquote>
      <p>Together with the sea, you tell the story of a sailor traveling through the sea. The other player is the sea. You are the sailor.</p>
      <p><strong>You are</strong> Young/Old/Middling sailor with a Fresh/Tattooed/Motherly/Leathery face.</p>
      <p><strong>You know</strong> your ship and how to sail her. You also know something about <em>(choose 2)</em>: Knots, Repairs, Navigation, Birds, Fighting, Fishing, Prayer, Stitching, Reading</p>
      <p>As you use your moves, describe the actions you take, the emotions you feel, The things you see, and the things you tell yourself. </p>
      <h3>Sailor Moves</h3>
      <p>Unless a Strong/Weak move is more appropriate, you can do the following at any time without losing a token:</p>
      <ul>
        <li>Make use of what you know.</li>
        <li>Read the clouds and gain your heading.</li>
        <li>Take action, leaving yourself vulnerable.</li>
        <li>Listen to the radio.</li>
      </ul>
      <h3>Strong Moves (lose a token)</h3>
      <p>You can do any of the following by losing a token:</p>
      <ul>
        <li>Find something that was once lost.</li>
        <li>Harm or Scare Something.</li>
        <li>Get out of Harm's Way.</li>
        <li>Use what you have to fix something broken.</li>
      </ul>
      <h3>Weak Moves (gain a token)</h3>
      <p>You can do any of the following to gain a token.</p>
      <ul>
        <li>Break or Run out of something you need.</li>
        <li>Give in to a distraction or temptation.</li>
        <li>Console yourself or another.</li>
        <li>Lose your radio.</li>
      </ul>
      <h2>The Sea Card</h2>
      <p>Together with the sailor, you tell the story of a sailor traveling through the sea. The other player is the sailor. You are the sea.</p>
      <p>You are older than myth and have many faces. As you use your moves, communicate through visions, colors, smells, and the creatures that live in your depths. Describe how the sea reacts to the sailor’s actions. Make things happen. Ask how the sailor reacts to your actions. Move and give and take as the sailor journeys. At the end of the story, bring them home -- or don't.</p>
      <p><strong>Collect some tokens</strong>, about 5.</p>
      <p>Whenever the Sailor's actions align with a Strong or Weak move, they must gain/lose a token. If they cannot, they should use a Sailor Move. You do NOT need to gain/lose tokens to use any of your moves.</p>
      <h3>Sea Moves (lose nothing)</h3>
      <ul>
        <li>Show signs of a coming storm.</li>    
        <li>Present a treasure at a risk</li>   
        <li>Reveal the dangers beneath your waves</li>    
        <li>Offer warmth, food or shelter.</li>   
      </ul>
      <ul>
        <li>Threaten to take something precious.</li>
        <li>Remind them of their limits.</li>
        <li>Fill their eyes, mouth, and lungs with salt.</li>
        <li>Change the weather, change your faces.</li>
      </ul>
      <ul>
        <li>Take or break something vulnerable.</li>
        <li>Wound them.</li>
        <li>Bring them to land.</li>
      </ul>
      
      </>
  )
}

export default page
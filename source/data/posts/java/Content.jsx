import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/java";

export default function Content(props) {
  return (
    <div>
      <p>Late last year, my dad left home early on a crisp fall morning.  He was driving to the DMV to take a motorcycle liscense test.</p>
      <p>He wasn't having a midlife crisis.  He hadn't bought a jet black, macho-American Harley, and there was no patched-up leather jacket to go with said motorcycle.</p>
      <p>Instead, my dad was about to buy and drive at 150cc motor scooter around town.</p>
      <p className="quote">That 150cc scooter became not the first, not the second, but the third motorscooter parked in our family's garage.</p>
      <p>Needless to say, I have a decent amount of moped skills in my repotoir (<em>nbd, nbd</em>).  With designated scooter lanes on large streets and scooter-width margins on the side of jam-packed roads, Java was a perfect place to put these skills into practice.</p>
      <figure>
        <ResponsiveImg
          alt="Scooter Art"
          className="width--50"
          imgRootPath={imgBasePath}
          imgPrefix="scooter1"
        />
        <ResponsiveImg
          alt="Feminist Scooter Art"
          className="width--50"
          imgRootPath={imgBasePath}
          imgPrefix="scooter2"
        />
        <figcaption className="caption">Indonesia Scooter Art. Image 2 is totally unrealistic as girls are expected to have their kness covered in public.</figcaption>
      </figure>
      <p>I've spend the last two weeks in Java very happily taking trains, planes, cars, and scooters around the island.  The people here are friendly, smiling umpropmted at everyone.  To tourism has been reqarding, if slightly disorganized.  Almost most important for a backpacker, the prices in Java have been cheap.</p>
      <h3>People & Culture</h3>
      <blockquote className="quote">More than 90% of people in Java are muslim.</blockquote>
      <p>This stat meant a few things to become landing in Java.</p>
      <ol>
        <li>It would be inappropriate for a woman (me) to wear shorts or have my shoulders uncovered.  This is despite the 90 deg F (32 deg C) heat.<br /><em>Pro Tip: The Jogjakarta street markets (pronounced yogyakarta) are a great place to pick up cheap, light material pants or skirts.</em></li>
        <li>Expect an early morning wake up call with the call to prayer anywhere between 4am - 6am.<br /><em>What I didn't expect were the wild roosters in several towns, such as Borobudur.  These roosters would wake up with the call to prayer and wouldn't shut up afterwards.</em>
          <figure>
            <ResponsiveImg
              alt="Chicken or minerat"
              imgRootPath={imgBasePath}
              imgPrefix="chicken"
            />
          </figure>
        </li>
        <li>I was going to stand out.</li>
      </ol>
      <p>It wasn't just that I didn't plan on wearing a hijab (unecessary for tourists in Java).  It was that I am a very pale (<em>thanks London</em>), blue eyed girl.</p>
      <p>Once or twice a day, people asked to take pictures with me.  This demographic of picture-takes ranged from whole families to middle school girls, to middle aged women.</p>
      <p>There are various explanations you can read about tourist snaps online.  My favorite explanation references Indonesia as one of the most active nations on social media, with users wanting to portray themselves with interesting or different groups of people.</p>
      <p>Everyone who did ask for a photo with me (with one exception) was very friendly, always smiling and thanking me afterwards.  This friendliness is something to be expected from the people here</p>
      <p>Java is a tourist island, so there will be people, especially taxi drivers (<em>Taxi: loose term for a range of car, scooter, and bike transport</em>) asking if you need or want something on almost every street corner.</p>
      <blockquote className="quote"> For the most part though, these people will respect a no, and will offer sincere help or directions if needed.</blockquote>
      <p>It is not common here for a girl to be traveling alone.  I couldn't tell you the number of times I've been asked where my boyfriend is, & the subsequent proposals that come with.</p>
      <blockquote>Shoutout to the middle aged Chinese men who gave me their #s and excitedly offered to find me a husband within the week. <em>I politely declined.</em></blockquote>
      <p>Beyond light chatting however, conversations with locals got hard.  I speak very little Bahasa Indonesia.</p>
      <p><em>My vocabulary consists of the words for <strong>thankyou</strong>, <strong>chicken</strong>, and <strong>caution/danger</strong>.</em></p>
      <p>While the majority of Javanese people speak basic English, anything beyond common phrases may not be understoond, grammer isn't always spoken correctly, and the accent was difficult for me to understand.  Consequently, I spent most of my time socializing with other travels, rather than locals.</p>
      <h3>Tourism</h3>
    </div>
  )
}
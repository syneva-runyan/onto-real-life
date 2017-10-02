import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";
const imgBasePath = "../assets/img/blogs/cambodia";

export default function Content(props) {
  return (
    <div>
      <p>
        I've been gone from home for two years, and have been constantly
        traveling for five months. Sooner or later, I was bound to hit a slump.
        Towards the end of my time in Taiwan, I can't even count the times I
        flipped through old photos of home.
      </p>
      <p>
        Cambodia was the perfect place for me to go to get out of that slump.
        The country is tragic but always smiling. It's dirty in some places, but
        always beautiful. Being there helped reinvigorate my love of traveling.
      </p>
      <figure>
        <ResponsiveImg
          alt="Hindu Temple Ruins"
          imgRootPath={imgBasePath}
          imgPrefix="hinduTempleRuins"
        />
        <figcaption className="caption">
          How could you not fall in love with a place like this?
        </figcaption>
      </figure>
      <h3>History</h3>
      <h4>Khmer Rouge</h4>
      <p>
        On a day to day basis, I try to believe in the best of people. When
        confronted with realities like the recent Cambodian Genocide however,
        that optimistic output is hard to hold onto.
      </p>
      <figure className="width--50 sm-width--100 align-left margin--right">
        <ResponsiveImg
          alt="Collection of skulls"
          imgRootPath={imgBasePath}
          imgPrefix="killingFields"
        />
        <figcaption className="caption">
          Skulls gathered from the Killing Fields outside of Phnom Pehn.
        </figcaption>
      </figure>
      <p>
        Between 1975 and 1979, a convoluted communist monster, Pol Pot, spread
        his diluted ideology across Cambodia.
      </p>
      <p>
        Normal Cambodians, people like you and me, were brainwashed to embrace
        the disgusting and inhumane ideas of the Khmer Rouge.
      </p>
      <p>
        These brainwashed individuals went on to kill over a quarter of the
        Cambodian population, somewhere between 1.3-3 million people.
      </p>
      <p>
        These were not merciful killings. At the Killing Field outside of Phnom
        Pen you can see a tree with small indents on it's trunk. The indents
        came from babies being literally pounded to death against the tree.
      </p>
      <p>
        In a gross miscarriage of justice, Pol Pot, the aforementioned
        convoluted communist monster, died a relatively peaceful death in 1998
        while under house arrest. He was surrounded by a loving family.
      </p>
      <p>
        How can anyone believe in the best of humanity when there are stories
        like this at various times of our history in various places around the
        world?
      </p>
      <p>
        The best response I can think of when confronted with such gruesome
        realities is to talk about them, spreading education with the optimist
        hope that humanity can learn and grow from these experiences.
      </p>
      <br />
      <h4>Khmer Empire</h4>
      <p>
        Centuries before Pol Pot came into the world, the Khmer people ruled
        most of South East Asia, and made Angkor, a city outside of modern day
        Siem Reap, their capital.
      </p>
      <p>
        Angkor is a UNESCO world heritage site and one of my favorite places
        I've even visited.
      </p>
      <p>
        The Angkorian reign lasted from between AD 802 and the late 14th
        century. There are over 1,000 temples spread out over an area of over
        390 square miles (1,000 sq km).
      </p>
      <figure>
        <ResponsiveImg
          alt="Bayon Temple"
          imgRootPath={imgBasePath}
          imgPrefix="faceTemple"
        />
        <figcaption className="caption">
          Bayon, one of the more popular temples in the Angkor complex.
        </figcaption>
      </figure>
      <p>
        Combinations of Hindu and Buddhist imagery and architecture from
        different time periods give each temple a unique character.
      </p>
      <p>
        Despite the differences, the intricacies of the artwork and the beauty
        of the ruins are consistent throughout.
      </p>
      <figure>
        <ResponsiveImg
          className="width--33 sm-width--100"
          alt="temple rubble"
          imgRootPath={imgBasePath}
          imgPrefix="templeRubble"
        />
        <ResponsiveImg
          className="width--33 sm-width--50"
          alt="temple rubble"
          imgRootPath={imgBasePath}
          imgPrefix="templeHallway"
        />
        <ResponsiveImg
          className="width--33 sm-width--50"
          alt="temple rubble"
          imgRootPath={imgBasePath}
          imgPrefix="templePillar"
        />
      </figure>
      <p>
        There are{" "}
        <a href="https://en.wikipedia.org/wiki/Angkor" target="blank">
          several theories
        </a>{" "}
        about why and how the Khmer empire declined. Especially when compared to
        the Greeks or Romans, there are very few historical accounts about the
        Khmer empire. The stories that are recorded primary come from stone
        inscriptions found inside temples, and a sparingly few accounts from
        foreign visitors. Because "only the gods had a right to residences made
        of stone," the majority of said stone inscriptions paint a religious
        history, leaving other aspects of the empire's existence in question.
      </p>
      <h3>Culture</h3>
      <blockquote>
        <strong>Tuk Tuk Driver</strong> <em>driving up: </em>I know where you're
        going!<br />
        <strong>Response: </strong> You do? Where?<br />
        <strong>Tuk Tuk Driver: </strong> You're going on a tuk tuk ride!
      </blockquote>
      <p>
        Cambodia is one of the poorest countries in the world, with a majority
        of its citizens living on less than $1usd a day (<a
          href="https://www.timetravelturtle.com/is-cambodia-a-third-world-country/"
          target="blank"
        >
          source
        </a>). Despite this lack of wealth, the Cambodia people were some of the
        happiest <em>(and funniest)</em> people I've met while traveling.
      </p>
      <figure className="width--33 sm-width--50 align-left margin--right">
        <ResponsiveImg
          alt="Rice Paper"
          imgRootPath={imgBasePath}
          imgPrefix="ricePaper"
        />
        <figcaption className="caption">
          Rice paper, used for food like spring rolls.
        </figcaption>
      </figure>
      <p>
        One a bike tour from Battambang, I went through villages where families
        made their living from traditional hand crafts, such as rice paper
        making. In the rice paper "shop," two women worked for something like 8
        hours a day, 7 days a week, making maybe $15usd a day, using the money
        to support their families.
      </p>
      <p>
        In a house down the road, a young woman and mother of 4 mother hand made
        sheets of banana paper, making ~$25usd/day. Her husband looked after a
        small farm that they used not to plant and sell crops, but to grow their
        own food.
      </p>
      <blockquote>
        Interestingly fact, my tour guide mentioned that people had tried to
        make machines that would help speed up the banana paper making process,
        but the bananas were too small and slippery for the machines to work
        well.
      </blockquote>
      <p>
        On a boat ride from Battambang to Siem Reap, I got to see another
        version of countryside life.
      </p>
      <figure className="width--50 sm-width--100 align-right margin--left">
        <ResponsiveImg
          alt="Houses on the Water"
          imgRootPath={imgBasePath}
          imgPrefix="stiltedHouse"
        />
      </figure>
      <p>
        Houses, schools, restaurants, temples... all of the buildings you'd see
        in a typical village were built on stilted platforms on the water.
        There's a really great article on these floating villages written on
        another travel blog{" "}
        <a
          href="https://travelfreak.net/chongknease-floating-village-poverty-in-siem-reap-cambodia/"
          target="blank"
        >
          here,
        </a>{" "}
        which lists more facts about the villages than I learned on my visit.
      </p>
      <blockquote>
        The fact that astounded me most about these villages is that "the
        village[s] ha[ve] greater access to electronics like cell phones than
        they d[o] to clean water." (<a
          href="https://travelfreak.net/chongknease-floating-village-poverty-in-siem-reap-cambodia/"
          target="blank"
        >
          source
        </a>).
      </blockquote>
      <p>
        So yes, really cool to see, but also really important to see in the
        right light.
      </p>
      <p>
        Despite their poverty, the sense of community in Cambodia, at least from
        what I saw outside the cities, is incredibly strong. People are close
        knit and generous, and almost everyone you'll meet will greet you with a
        smile.
      </p>
      <hr />
      <p>
        What a beautiful, tragic, optimistic place. Traveling in Cambodia is a
        fantastic experience for so many reasons. Highest among these reasons
        are the fantastic history and culture.
      </p>
      <hr />
      <h4>Other Notes:</h4>
      <ul>
        <li>
          The 7 hour boat ride from Battambang to Siem Reap, even though I was
          worried about getting sea sick and even though it rained for part, was
          one of my favorite things in Cambodia.
        </li>
        <li>
          SO to Luke, Jack, and all the German girls I got to meet and do things
          with in Siem Reap{" "}
          <em>side note - $1 and $0.50 beers are dangerous.</em>
        </li>
        <li>
          SO to Charlotte and Stephen (and Kyle) for being awesome and for being
          brave enough to try all the food. Still super impressed.
        </li>
      </ul>
    </div>
  );
}

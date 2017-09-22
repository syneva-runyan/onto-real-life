import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/taiwan";

export default function Content(props) {
  return (
    <div>
      <blockquote>
        Beautiful scenery, brilliant history, coastal biking, bubble tea, and
        night markets (each with better food than the last).
      </blockquote>
      <p>
        Each of these aspects of Taiwan make the island a brilliant holiday
        destination.
      </p>
      <figure>
        <ResponsiveImg
          alt="Taipei City Gate"
          imgRootPath={imgBasePath}
          imgPrefix="cityGate"
        />
        <figcaption className="caption">Ancient city gate in Taipei</figcaption>
      </figure>
      <p>
        The land mass of Taiwan covers barely over 13,000 square miles. In that
        area there are no big-name attractions that have captured social media's
        attention.
      </p>
      <p>
        The prices in Taiwan, while inexpensive compared to the US or Australia,
        are slightly higher than its South East Asian neighbors.
      </p>
      <figure>
        <ResponsiveImg
          alt="Taipei City Park"
          imgRootPath={imgBasePath}
          imgPrefix="park"
        />
        <figcaption className="caption">
          One of the many green spaces in Taipei
        </figcaption>
      </figure>
      <p>
        Both of these points keep Taiwan off most travelers' radars. This lack
        of overblown tourism though, contributes to the island's charm.
      </p>
      <p>
        Culturally fascinating and aesthetically stunning, Taiwan is a hidden
        travel gem.
      </p>
      <h3>Culture</h3>
      <p>
        In addition to having a history of aboriginal tribes on the island,
        Taiwan was once a Dutch colony, became a haven for fleeing Ming Dynasty
        loyalists, was taken over by the Qing dynasty, and ruled by the Japanese
        prior and throughout WWII before becoming a part of China in 1945. There
        have been a series of power transitions inside the country since.
      </p>
      <p>
        Today, Taiwan is a recognized by a majority of countries as a self
        governing province of China, although if you speak to any younger
        Taiwanese, you'll notice an open minded Western attitude that
        distinguishes the Taiwanese from the Chinese.
      </p>
      <blockquote>
        The relationship between Taiwan and mainland China is somewhat
        precarious, and politically{" "}
        <a
          target="blank"
          href="https://www.cfr.org/backgrounder/china-taiwan-relations"
        >
          fascinating to learn about.
        </a>
      </blockquote>
      <h4>Aborigines</h4>
      <p>
        Despite a history of aboriginal oppression, the indigenous cultures and
        traditions are increasingly celebrated on the island.
      </p>
      <p>
        There are several places on the island that are good bases for learning
        more about the indigenous people and culture. This includes a prehistory
        museum in Taitung and a Formosan Cultural Village next to Sun Moon Lake.
      </p>
      <figure className="alignLeft margin--right width--30 sm-width--100">
        <ResponsiveImg
          alt="Owl souvenirs"
          imgRootPath={imgBasePath}
          imgPrefix="owl"
        />
        <figcaption className="caption">
          Stores and stores full of owls. Picture courtesy{" "}
          <a
            target="blank"
            href="http://cavinteo.blogspot.com/2014/05/day-two-cingjing-sun-moon-lake-and-ita.html"
          >
            Entree Kibbles
          </a>
        </figcaption>
      </figure>
      <p>
        At Sun Moon Lake, you'll notice stores and stores full of owl souvenirs.
        Owls are an indigenous symbol of guardianship. The story goes...
      </p>
      <blockquote>
        Generations ago, a young Thao (<em>Aboriginal tribe</em>) girl became
        pregnant out of wedlock. She ran away into the woods in shame. Later,
        when men went to search for her, she was gone, but there was a beautiful
        owl in her place. From that point on, owls seen over pregnant woman's
        houses were said to be the spirit of the young girl, sent to protect
        them.
      </blockquote>
      <p>
        Aboriginal art collectives and ceramics workshops can also be found
        throughout the island.
      </p>
      <h4>Chinese Influence</h4>
      <p>
        While the presence of aboriginal culture is ever increasing, it is
        heavily outweighed by Chinese culture and traditions on the island.
      </p>
      <p>
        The soft glow of red lanterns, elaborate temples, and delicious
        dumplings are omnipresent.
      </p>
      <figure className="alignLeft margin--right width--40 sm-width--100">
        <ResponsiveImg
          alt="Juifen Lanterns"
          imgRootPath={imgBasePath}
          imgPrefix="juifen"
        />
      </figure>
      <p>
        The streets of Juifen in the North exemplify the windey streets and
        glowing lanterns I have always pictured belonging in Asian villages.
      </p>
      <blockquote>
        The Japanese director Hayao Miyazaki apparently agrees. The town was
        used as an inspiration for the Ghost Town in his movie{" "}
        <em>Spirited Away.</em>
      </blockquote>
      <p>
        Lungshan temple in Taipei is just one of many elaborate and peaceful
        temples around the island.
      </p>
      <figure>
        <ResponsiveImg
          alt="Scenes from Lungshan"
          imgRootPath={imgBasePath}
          imgPrefix="lungshan"
        />
        <figcaption className="caption">Scenes from Lungshan</figcaption>
      </figure>
      <p>
        One of my favorite religious items I saw while traveling was a giant
        statue of the Chinese deity Guangong outside of Juifen (see below).
      </p>
      <p>
        Want a cheap, delicious dinner? You can find Chinese-like-style dumpling
        restaurants or stands on almost every corner of every city.
      </p>
      <br />
      <figure>
        <ResponsiveImg
          alt="Large Guangong Statue in Juifen"
          imgRootPath={imgBasePath}
          imgPrefix="oldMan"
        />
      </figure>
      <h4>Culinary Culture</h4>
      <p>
        The culinary tastes of Taiwan expands so much further than
        Chinese-influenced dishes.
      </p>
      <figure className="width--50 sm-width--50 align-left margin--right">
        <ResponsiveImg
          alt="Stinky Tofu"
          imgRootPath={imgBasePath}
          imgPrefix="stinkyTofu"
        />
      </figure>
      <p>
        Chinese, Japanese, and Aboriginal influences come together, resulting in
        dishes like Beef Noodle Soup, Red Yeast Meatballs, Sweet Taro Soup, and
        oyster omelets.
      </p>
      <p>
        "Stinky" tofu has earned a reputation in Taiwanese night markets. I'd
        describe the smell like a mix a Body Odor and Puke, but I didn't notice
        much of a taste, good or bad.
      </p>
      <br />
      <h4>City Life</h4>
      <p>It's so easy to fall in love with Taipei's skyline.</p>
      <figure className="width--50 sm-width--100 align-left margin--right">
        <ResponsiveImg
          alt="Taipei 101 at Sunset"
          imgRootPath={imgBasePath}
          imgPrefix="taipei101"
        />
      </figure>
      <blockquote>
        The sunset I watched from Elephant Mountain belongs at the end of a
        Nicholas Sparks movie.
      </blockquote>
      <p>
        Diving in between the buildings, night markets are full of energy,
        delicious, cheap food, and an upbeat rhythm of life.
      </p>
      <p>The energy carries over to interesting cafes and people.</p>
      <p>
        There are cafes in Taipei where you can get your face printed on a cup
        of coffee.
      </p>
      <p>
        I saw a cat with his own QR code being carried around Ximending in
        Taipei.
      </p>
      <blockquote>
        If you see a stroller on the street, it's just as likely to have a
        little white dog sitting inside it as a baby.
      </blockquote>
      <p>
        The subway and bus systems around cities were extremely organized and
        easy to use.
      </p>
      <p>
        Altogether, the culture of Taiwanese cities is eclectic, uniquely
        beautiful, and exciting.
      </p>
      <figure>
        <ResponsiveImg
          className="width--50 align-left"
          alt="Cat with QR Code"
          imgRootPath={imgBasePath}
          imgPrefix="qrCat"
        />
        <ResponsiveImg
          className="width--50 align-left"
          alt="Selfie Coffee"
          imgRootPath={imgBasePath}
          imgPrefix="selfieCoffee"
        />
        <figcaption className="caption">
          Cat and Coffee, respecfully.
        </figcaption>
      </figure>
      <h3>Aesthetic Beauty</h3>
      <p>
        From brilliantly white beaches to towering mountains and gorges, Taiwan
        has it all.
      </p>
      <p>
        The Zhulia Old Trail in Taroko Gorge is one of my favorite hikes of all
        time.
      </p>
      <figure>
        <ResponsiveImg
          className="width--50 align-left"
          alt="Takoro Rope Bridge"
          imgRootPath={imgBasePath}
          imgPrefix="ropeBridge"
        />
        <ResponsiveImg
          className="width--50 align-left"
          alt="Zhulia Old Trail"
          imgRootPath={imgBasePath}
          imgPrefix="zhulia"
        />
        <figcaption className="caption">Taroko Gorge Scenes</figcaption>
      </figure>
      <p>
        The scenic east coast in perfect for a several day biking expedition
        between Hualien and Taitung{" "}
        <em>*Disclaimer - We drove. SO and thankyou again Aaron!</em>
      </p>
      <figure className="width--50 sm-width--100 align-left margin--right">
        <ResponsiveImg
          alt="East Coast"
          imgRootPath={imgBasePath}
          imgPrefix="bridge"
        />
        <figcaption className="caption">East Coast Scenes</figcaption>
      </figure>
      <p>
        Uncrowded sandy beaches and warm water make Taiwan a perfect surfer
        haven. <em>Disclaimer - I can't surf.</em>
      </p>
      <p>
        For more extreme adventurers, the Yushan mountain in the middle of
        Taiwan has an elevation of 12,966 ft, and can involve between 10-16
        hours of hiking.{" "}
        <em>
          Discaimer - I didn't climb this. What did I even do with my time in
          Taiwan again?
        </em>
      </p>
      <br />
      <h4>The Beautiful Island</h4>
      <p>
        Taiwan is a perfect island for both cultural and outdoor adventures.
        Taipei is the first city I've been to on this trip that I actually felt
        like I could live in.{" "}
        <em>Chinese defffinnnattteellyy needs some work though.</em>
      </p>
      <p>
        It's only a matter of time before more people discover this Beautiful
        Island.
      </p>
      <p>
        <em>*Cue beautiful sunset from Elephant Mountain*</em>
      </p>
      <figure>
        <ResponsiveImg
          alt="Sunset view from Elephant Mountain"
          imgRootPath={imgBasePath}
          imgPrefix="taipei101Sunset"
        />
      </figure>
      <hr />
      <h4>Other Notes</h4>
      <ul>
        <li>
          <strong>Beautiful Island - </strong>I reference Taiwan as the
          Beautiful island several times in this post and in the tagline.{" "}
          <em>Beautiful Island</em> comes the Portugese word <em>Formosa,</em>{" "}
          which is a name that gave to Taiwan in the colonial days.
        </li>
        <li>
          <strong>Shongshan Culture Park - </strong> Really awesome creative
          market in Taipei not to be missed by anyone who appreciates crafting
          and culture.
        </li>
        <li>
          <strong>Bubble tea</strong> was invented in Taiwan. Add that to your
          list of reasons-to-visit.
        </li>
        <li>
          <strong>Communication - </strong>Chinese is spoken by most people
          around this island, although many younger people will be happy to help
          with English translations are directions if needed. Google translate
          also helps, but is less reliable than having a human being to help.{" "}
          <em>
            Fun fact, according to my Google Translate App, there are ancient
            unicorn remain lying in a cemetary outside of Dulan.
          </em>
        </li>
        <li>
          Thank you Laurie for being an awesome travel buddy, follow her travel
          adventures on instagram <a>here.</a>
        </li>
        <li>
          Thank you Michael for being an awesome host in Taipei and an awesome
          person in general!
        </li>
        <li>
          Can I just bring up how awesome the <strong>Night Markets</strong> are
          again?
        </li>
      </ul>
    </div>
  );
}

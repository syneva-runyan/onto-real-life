import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/australiaDarwinToPerthExperience";

export default function Content(props) {
  return (
    <div>
      <p>
        Images of the Northern Territory and Western Australia are what come to
        mind when you think of the traditional Australian Outback.
      </p>
      <figure>
        <ResponsiveImg
          alt="Kimberleys scenery"
          imgRootPath={imgBasePath}
          imgPrefix="scenery"
        />
      </figure>
      <blockquote>
        Red Dirt coats your feet and body within five minutes of stepping
        outside. Kangaroos hop around expansive grass fields early mornings and
        sunset. Everyone wears hats to keep the glaring sun off their face and
        out of their eyes.
      </blockquote>
      <p>
        In my several week trip from Darwin to Broome to Perth, I saw animals
        that surprised me, didn't see some animals I expected, did some
        fantastic hiking, and collected personal impressions of Darwin to Perth
        travel.
      </p>
      <h4>Animals</h4>
      <div style={{ display: "inline-block" }}>
        <div className="align-left width--50 sm-width--100">
          <p>
            <strong>Animals I didn't see on my trip:</strong>
          </p>
          <ul>
            <li>Large Kangaroos (They live out east)</li>
            <li>Crocodiles (Out of season)</li>
            <li>Snakes (Out of season)</li>
            <li>
              Spiders that could eat me alive (Just because I didn't see them
              doesn't mean they weren't there)
            </li>
            <li>Quokkas (See pic below. didn't have enough time)</li>
            <li>Sea Cows (Tour didn't include activity to see them.)</li>
          </ul>
        </div>
        <div className="align-left width--50 sm-width--100">
          <p>
            <strong>Animals I did see on my trip:</strong>
          </p>
          <ul>
            <li>Medium Sized Kangaroos/Wombats</li>
            <li>Emus</li>
            <li>
              <strike>Koa</strike>las (Only counting half because I had to go to
              a specific rehomed colony. Koalas live further east)
            </li>
            <li>
              BATS. Specifically a colony of one hundred thousand Red Flying
              Foxes.
            </li>
            <li>
              Camels (What? Where did they come from? <em>see below</em>)
            </li>
            <li>Octopus</li>
            <li>Dolphins</li>
          </ul>
        </div>
      </div>
      <hr />
      <figure className="margin--right width--25 align-left">
        <ResponsiveImg
          alt="Quokka"
          imgRootPath={imgBasePath}
          imgPrefix="quokka"
        />
        <figcaption className="caption">
          These little fellows (quokkas) live on an island called Rottness
          outside of Perth
        </figcaption>
      </figure>
      <blockquote>
        The season you visit Australia heavily impacts the animals you see
        there.
      </blockquote>
      <p>
        That being said, there are plenty of opportunities to see most animals
        year round. Take for instance, the crocodiles. Kakadu national park, a
        several day trip done from Darwin, has wild crocodiles swimming around
        it's rivers year round.
      </p>
      <br />
      <figure className="align-left width--25 margin--right sm-width--100">
        <ResponsiveImg
          alt="Happily holding a baby kangaroo"
          imgRootPath={imgBasePath}
          imgPrefix="kangaroo"
        />
        <figcaption className="caption">
          Tired of driving, tired of sleeping in a cold tent, tired of not
          having showers; holding a baby kangaroo still made me smile.
        </figcaption>
      </figure>
      <p>
        Even though I didn't see large kangaroos hopping around, I did get to
        hold a joey at a Kangaroo rescue in Kununurra.
      </p>
      <blockquote>
        <em>Side note - </em>The first Kangaroo most tourists will see in
        Australia will be roadkill. These dead kangaroos will sometimes have
        joeys left alive inside their pouches. Wildlife havens, like the one I
        visited in Kununurra, help take care of these orphaned joeys.
      </blockquote>
      <p>
        Koalas aren't native to the West Coast, but I went to see some chilling
        at a wildlife park (Yanchep) outside of Perth.
      </p>
      <p>
        If you want to see a particular Australian animal in this section of the
        country, you most likely can.
      </p>
      <p>
        While I <em>enjoyed</em> seeing the kangaroos and koalas, the flying fox
        colony at Katherine's Gorge (outside of Darwin) <em>fascinated</em> me.
        I started a 5 min walk from the visitor center at Katherine's gorge to a
        river cruise expecting nothing.
      </p>
      <p>
        The first thing that hit me was the sickly sweet smell of bat poop,
        followed quickly by high pitched shrieking. Looking up in the trees, I
        realized what I had mistaken for black fruits were large bats.
      </p>
      <figure>
        <ResponsiveImg alt="Bats" imgRootPath={imgBasePath} imgPrefix="bats" />
        <figcaption className="caption">
          Hundreds of thousands of bats
        </figcaption>
      </figure>
      <p>
        The colony at Katherine's Gorge is seasonal, and there are "only" a few
        hundred thousand in the area. These flying foxes can live in colonies of
        up to one million.
      </p>
      <p>
        The bats in Katherine are native to Australia, and my surprise at seeing
        them came from a lack of knowledge. It was more understandable for me to
        be shocked at the presence of camels on the west coast.
      </p>
      <p>
        Camels were imported to the Australian Outback in the 19th century from
        Arabia, India, and Afghanistan to help with ranching/farm work. After
        their work was finished, several thousand were released to the wild, and
        Australia is now home to the world's largest camel herd{" "}
        <a href="http://www.bbc.com/news/magazine-22522695" target="blank">
          (source).
        </a>
      </p>
      <p>
        In much of the outback, these camels are pests. In Broome, however,
        groups of camels are used as a tourist attraction. At sunset, trains of
        camels carry tourist across the beach in front of red sunsets.
      </p>
      <figure>
        <ResponsiveImg
          alt="camels at sunset"
          imgRootPath={imgBasePath}
          imgPrefix="camels"
        />
      </figure>
      <p>
        Going beyond the beach into the water, there's a whole different,
        exciting collection of wildlife. In the right season, you can see whale
        sharks, hump back whales, turtles, octopus, Nemos, Doris... the list
        goes on.
      </p>
      <figure>
        <ResponsiveImg
          alt="Dolphon"
          imgRootPath={imgBasePath}
          imgPrefix="dolphin"
        />
        <figcaption className="caption">
          Feeding dolphins at Monkey Mia
        </figcaption>
      </figure>
      <p>
        In summation, Australian wildlife between Darwin and Perth exceeds
        expectation on water and on land.
      </p>
      <h4>Hiking</h4>
      <p>
        Whereas east Australia is known for beautiful beaches, west Australia is
        known for camping and hiking in beautiful national parks.
      </p>
      <figure>
        <ResponsiveImg
          alt="Katherine's Gorge"
          className="width--50 align-left sm-width--100"
          imgRootPath={imgBasePath}
          imgPrefix="katherinesGorge"
        />
        <ResponsiveImg
          alt="Keep National Park"
          className="width--50 align-right sm-width--100"
          imgRootPath={imgBasePath}
          imgPrefix="keep"
        />
        <figcaption className="caption">
          <em>First Img: </em>Katherine's Gorge;{" "}
          <em>Second Img: Keep National Park</em>
        </figcaption>
      </figure>
      <p>
        In additional to national parks, there are also short hikes that can be
        done from roadhouses or random pull offs between Darwin and Broome.
      </p>
      <blockquote>
        <em>
          <strong>Roadhouse: </strong>
        </em>{" "}
        It's more than just a gas station with a restaurant. It's most likely a
        convenience store, has its own branding (get yer hats, koozies, and
        tshirts), and may be the only bit of gathered civilization for hundreds
        of km around.
      </blockquote>
      <figure className="width--40 align-left sm-width--100 margin--right">
        <ResponsiveImg
          alt="Victoria Roadhouse Hike"
          imgRootPath={imgBasePath}
          imgPrefix="victoria"
        />
        <figcaption className="caption">
          A short hike next to Victoria Roadhouse
        </figcaption>
      </figure>
      <figure className="width--25 align-right sm-width--50 margin--left">
        <ResponsiveImg
          alt="Balboa tree"
          imgRootPath={imgBasePath}
          imgPrefix="balboa"
        />
      </figure>
      <p>
        The Kimberleys, a section of Australia in the north west of the country,
        is a particularly interesting section to drive and hike through. The
        landscape here is riddled with Balboa trees, large flat plains, and
        towering plateaus of red dirt.
      </p>
      <p>
        If I lived in the Kimberleys growing up, I may have believed in Ents{" "}
        <em>(See tree picture)</em>
      </p>
      <p>
        Heading down the west coast, fantastic hiking continues. There are
        gorges, waterfalls, and natural rock formations in abundance.
      </p>
      <p>
        Karijini specifically, one of the national parks between Broome and
        Perth, has "spider walks" and pools you have to swim through to reach
        the end of certain hiking trails.
      </p>
      <p>
        The ocean begins playing a larger role in the natural beauty of the
        landscape as you get closer to Perth.
      </p>
      <figure>
        <ResponsiveImg
          alt="Ocean and Rocks"
          imgRootPath={imgBasePath}
          imgPrefix="oceanRocks"
        />
      </figure>
      <figure className="align-left width--30 margin--right sm-width--50">
        <ResponsiveImg
          alt="Sand Dollar on Sand"
          imgRootPath={imgBasePath}
          imgPrefix="beachFeels"
        />
      </figure>
      <p>
        Tangentially related to hiking by means of sport, the snorkeling in this
        section of Australia is world renown. Some people argue (<em>Ahem tourism agents</em>)
        that the snorkeling on the Ningaloo Reef in Western Australia is a more
        beautiful and better experience than on the Great Barrier Reef.
      </p>
      <p>
        Shark Bay, an area slightly closer to Perth than Broome, is a World
        Heritage Site. It's home to sea cows, dolphins, turtles, migrating whale
        sharks, and fascinating{" "}
        <a href="https://en.wikipedia.org/wiki/Stromatolite" target="blank">
          stromatolites
        </a>.
      </p>
      <br />
      <h4>Thoughts: Driving, the Bush, and Aborigines</h4>
      <p>
        Animals and outdoor sports are the glamorous parts of a road trip from
        Darwin to Perth.
      </p>
      <p>
        There is also the less glamorous, hours-upon-hours of driving from
        small-collection-of-houses A to small-collection-of-houses B involved. (<em>Refraining from deeming these small settlements towns</em>){" "}
      </p>
      <blockquote>
        Driving the section from Darwin to Broome, I entertained myself by
        sampling a different pre-packaged ice coffee at each roadhouse stop.{" "}
        <em>(Barista Bros was the winning brand)</em>
      </blockquote>
      <figure>
        <ResponsiveImg
          alt="Coffee"
          imgRootPath={imgBasePath}
          imgPrefix="coffee"
        />
        <figcaption className="caption">
          When you spend hours and hours in a car every day, it's the little
          things in life that keep you sane.
        </figcaption>
      </figure>
      <figure className="width--30 margin--left align-right sm-width--100">
        <ResponsiveImg
          alt="Dry Earth"
          imgRootPath={imgBasePath}
          imgPrefix="dryEart"
        />
      </figure>
      <p>
        The bush blends into green, red, and yellow blurs that fly by unnoticed
        after hours of mindless driving.
      </p>
      <p>
        The aboriginal people who lived in this part of Australia however,
        learned how to make the red earth and dry bush home.
      </p>
      <p>
        There are handfuls of different tribes, each with unique cultures and
        traditions, between Darwin and Perth.
      </p>
      <blockquote>
        I got the impression that many "white" people in Australia know as much
        of aboriginal culture as Americans know about Native American culture:
        very little.
      </blockquote>
      <p>
        There's a societal gap between Aborigines and Anglo Europeans, with
        Aborigines having a shorter life span, lower health standards, and
        harsher lifestyles.
      </p>
      <p>
        I also heard and participated in conversations where Aborigines were
        cast as characters with limited work ethic and sometimes violent or rude
        tendencies.
      </p>
      <p>
        From what I gather, there are people (Anglo European and Aboriginal)
        working hard to change these perceptions/realities.
      </p>
      <p>
        I'd love to learn more about the Aboriginal cultures and people, and
        hope that soon in the near future knowledge about and appreciation for
        their cultures will become more widespread and accessible to people
        traveling through their ancient, historic countryside.
      </p>
      <hr />
      <p>
        A trip from Darwin to Perth is drastically different than a trip on the
        Australian East coast. The animals and experiences had are entirely
        season dependent, but the outdoor sport (weather dependent) is
        guaranteed to be amazing. I'd love to hear anyone else's impressions of
        a similar trip to see if my experiences and thoughts aligned with
        theirs.
      </p>
      <hr />
      <h4>Of Interest:</h4>
      <ul>
        <li>
          <strong>Red Dirt </strong> - In the month I was traveling from Darwin
          to Perth, I never felt clean. I'd shower, and five minutes later would
          have a fresh coat of red dirt covering my feet, if not my arms and
          legs as well. If you didn't know any better, you might have actually
          mistaken me for "tan."
        </li>
        <li>
          <strong>Practical advice</strong> for a trip from Darwin to Perth can
          be found <a href="/posts/australiaDarwinToPerth">here.</a>
        </li>
        <li>
          <strong>The Bungle Bungles</strong> - One of my favorite national
          parks on the trip. A very Dr. Suess-esque name for a Dr. Suess-esque
          place.
          <figure>
            <ResponsiveImg
              alt="Bungle Bungles"
              imgRootPath={imgBasePath}
              imgPrefix="bungleBungles"
            />
            <figcaption className="caption">The Bungle Bungles</figcaption>
          </figure>
        </li>
        <li>
          <strong>Broome</strong> - Beach town with cute shops and a magnetic
          vibe that pulls people into a laidback, lazy lifestyle.
          <figure>
            <ResponsiveImg
              alt="Broome"
              imgRootPath={imgBasePath}
              imgPrefix="broome"
            />
            <figcaption className="caption">
              Gantheaume Point, Broome
            </figcaption>
          </figure>
        </li>
        <li>
          <strong>Karijini</strong> - A "bloody marvelous" national park,
          mentioned in the hiking section above.
          <figure>
            <ResponsiveImg
              alt="Karjini"
              className="width--50 align-left sm-width--100"
              imgRootPath={imgBasePath}
              imgPrefix="karijini"
            />
            <ResponsiveImg
              alt="Karjini"
              className="width--50 align-left sm-width--100"
              imgRootPath={imgBasePath}
              imgPrefix="karijiniSteps"
            />
            <ResponsiveImg
              alt="Karjini"
              imgRootPath={imgBasePath}
              imgPrefix="steps"
            />
          </figure>
        </li>
      </ul>
    </div>
  );
}

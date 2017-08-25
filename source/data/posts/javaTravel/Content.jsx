import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/javaTravel";

export default function Content(props) {
  return (
    <div>
      <p>
        When I went to Java, I was extremely disappointed in the credible (if
        existant) information online about tourism.
      </p>
      <p>This is my small contribution to help improve the situation.</p>
      <p>
        I highly recomend the <em>Lonely Planet</em> Indonesia guide book, and{" "}
        <a href="https://www.bemytravelmuse.com/" target="blank">
          Be My Travel Muse's posts
        </a>{" "}
        on Indonesia when planning a trip.
      </p>
      <h3>Jakarta</h3>
      <blockquote>
        <strong>Travel Tip: </strong> The traffic in Jakarta is terrifying for
        Western pedestrians to face. There are no respected crosswalks. Stop
        lights are not always respected. Worst of all, there is NEVER EVER a
        break in traffic. The flow of cars, scooters, and buses is perpetual.<br />
        <br />
        <strong>So how do you cross the road in Jakarata?</strong> You hold your
        breath, put your hand out to stop traffic, and you go. If you have
        enough confidence here, the traffic parts like the Red Sea around you.{" "}
        <em>Still keep your eyes open for the occassional rougue scooter.</em>
      </blockquote>
      <p>
        Alot of resources online will suggest you skip this city if you're
        visiting on a time-limited visa, and I agree. Why? Simply because there
        are so many better places to see in Indonesia.
      </p>
      <p>
        If you do end up going however, I can recomend visiting the Antique
        Market and Taman Mini Indonesia Indah.
      </p>
      <h4>Antique Market</h4>
      <p>
        Full of antiques (and junk) from all over Indonesia, not just Java.
        While small in comparison to markets in other cities, you can easily
        spend an hour or two walking down the small street of stalls here.
      </p>
      <p>
        Haggle hard for everything, and ask multiple stall keeper for their
        prices of specific items before buying anything. Their quotes can widely
        vary.
      </p>
      <p>
        Finally, know the customs rule of counties you're visiting after
        Indonesia, as you may not be able to bring everything home with you.
      </p>
      <figure>
        <ResponsiveImg
          className="width--50 sm-width--100"
          alt="Antique market masks"
          imgRootPath={imgBasePath}
          imgPrefix="masks"
        />
        <ResponsiveImg
          className="width--50 sm-width--100"
          alt="Anitque market scuba gear"
          imgRootPath={imgBasePath}
          imgPrefix="scuba"
        />
      </figure>
      <h4>Taman Mini Indonesia Indah</h4>
      <p>
        This attraction is pretty far outside of central Jakarata, not in miles,
        but in travel time. It took me nearly two hours in a cab to get here in
        traffic. If you go, make sure not to travel during rush hour.
        Futhermore, even though the park is open late, all of the attractions
        and exhibits close earlier (before sunset), and it is not a particularly
        safe place to walk around in after dark.
      </p>
      <p>
        Each island/culture in Indonesia is represented in the area with a
        visiting area and exhibit. These areas are large and spread out. A good
        way to see all of them is by getting a trustworthy taxi driver to stop
        by each of the locations and wait for you at stops. If you plan on
        walking, start in the morning and plan several hours to make your way
        around the areas.
      </p>
      <figure>
        <ResponsiveImg
          className="width--33 sm-width--50"
          alt="House in Taman Mini"
          imgRootPath={imgBasePath}
          imgPrefix="miniHouse1"
        />
        <ResponsiveImg
          className="width--33 sm-width--50"
          alt="House in Taman Mini"
          imgRootPath={imgBasePath}
          imgPrefix="miniHouse2"
        />
        <ResponsiveImg
          className="width--33 sm-width--100"
          alt="Elephant statue in Taman Mini"
          imgRootPath={imgBasePath}
          imgPrefix="miniElephant"
        />
      </figure>
      <h3>Yogyakarta</h3>
      <p>
        Pronounce Jogjakarta, and commonly refered to just as Yogya (pronounced
        Jogja). Yogya is a fairly interesting city that comes with numerous day
        tripping options, the most popular ones including:
      </p>
      <blockquote>
        <strong>Scooter Tour from Yogya</strong>
        <br />
        <br />
        <em>Day One: </em>Leave your backpack with reception in your hotel or
        hostel in Yogyakarta and pack an overnight bag. Rent a scooter in the
        morning, and drive out to see the Prambanan Complex. From there drive
        out to Borobudur to spend the evening/night. <br />
        <br />
        <em>Day Two: </em>Get up early to view the sunrise from Punthuk Setumbu
        hill. Afterwards, scooter around to Borobudur and other sites in the
        area such as the Chicken church and local artist shops.<br />
        Drive out to New Selo in the afternoon (~1 hour) and find a homestay
        once there near Mt. Merapi's trail entrance.<br />
        <br />
        <em>Day Three: </em> Wake up early to hike Mt. Merapi with or without a
        guide organized through your homestay. Scooter back into Yogya that
        afternoon.
      </blockquote>
      <br />
      <p>
        <strong>Borobudur: </strong> A Buddhist temple famous for it's "Nirvana
        sunrise."
      </p>
      <p>
        <a
          href="https://www.nomadicmatt.com/travel-blogs/unusual-place-of-the-month-borobudur/"
          target="blank"
        >
          Nomatic Matt's article
        </a>{" "}
        on the temple is a good resource for people wanting to know more about
        temple visits.
      </p>
      <p>
        It was a cloudy morning when I went to visit. I wasn't able to see the
        sunrise and regretted buying an early entrance pass. These types of
        mornings are common, with beautiful sunrises being a somewhat rare
        occassion. There were also too many tourists to find a seat almost at
        the top of the temple when I went for sunrise.
      </p>
      <p>
        I'd recomend going to Punthuk Setumbu hill if you want to see sunrise, a
        nearby place with a equally stunning view, much cheaper entrance price,
        and fewer tourists.
      </p>
      <p>
        If you want to save money on a tour, rent a scooter from Yogya to get
        there and back. Renting a scooter also enabled me to check out a handful
        of smaller temples in the area, the famed Chicken Church, and a famously
        cheap Luwak coffee shop.{" "}
        <a
          href="http://www.yogya-backpacker.com/see-do-7-things-to-see-do-in-around-borobudur-you-never-knew-existed/"
          target="blank"
        >
          Information resource here.
        </a>
      </p>
      <figure>
        <ResponsiveImg
          alt="Borobudur"
          imgRootPath={imgBasePath}
          imgPrefix="borobudur2"
        />
      </figure>
      <br />
      <p>
        <strong>Prambanan Complex:</strong> A Temple Complex/World Heritage site
        on the outskirts of Yogya. The complex is famous for having both
        Buddhist and Hindu temples in the area, and there is a famous Javanese
        ballet that is held after sunset some evenings. If you go, don't leave
        before checking out the Sewu Temple. It is much less crowded that the
        Prambanan temple, and still very interesting and beautiful.
      </p>
      <p>
        Some blogs I read recommended renting a bicycle to get here, but if you
        choose to do so, know that there will be car and scooter traffic when
        you get close to the complex.
      </p>
      <figure>
        <ResponsiveImg
          className="width--50 sm-width--100"
          alt="Prambanan temple"
          imgRootPath={imgBasePath}
          imgPrefix="prambanan"
        />
        <ResponsiveImg
          className="width--50 sm-width--100"
          alt="Sewu temple"
          imgRootPath={imgBasePath}
          imgPrefix="Sewu"
        />
        <figcaption className="caption">
          <em>First image: </em> Hindu Prambanan Temple. <em>Second image: </em>{" "}
          Buddhist Sewu temple. Less crowded, equally interesting.
        </figcaption>
      </figure>
      <p>
        <strong>Mt. Merapi: </strong>Fancy a challenging sunrise hike? I came
        down the food poisoning the night before climbing, so wasn't able to go,
        but The hike up this volcano was highly recommended.
      </p>
      <p>
        Mt. Marapi is scooter accessible from Yogya, although be prepared for
        some bumpy riding towards the end. (~1.5 or 2 hour ride. 1 hour from
        Borobudur)
      </p>
      <p>
        You do not need a guide to do this hike, but if you plan to go for
        sunrise without one, pick a homestay near the trail's starting point.
        You'll have more luck looking for a homestay in person than trying to
        book ahead of time online.
      </p>
      <figure className="width--25 align-left margin--right sm-width--50">
        <ResponsiveImg
          alt="Jomblang Light"
          imgRootPath={imgBasePath}
          imgPrefix="jomblangLight"
        />
      </figure>
      <p>
        <strong>Jomblang Cave: </strong>Unless you're a photographer who really
        wants a picture here, don't bother going. For my trip to the cave, I
        spent over an hour waiting in line to abseil into the cave, spent 45 min
        in the cave, and then waited over and hour to be pulled back out. This
        made for a frustrating experience.
      </p>
      <p>
        If you do decide the instagram is worth having, despite what your read
        online, you do not need to go with an official tour group from Yogya to
        get into the cave. The cave is findable on Google Maps, and any driver
        can follow signs to the cave entrance once near. Expect an incredibly
        bumpy last 20 minutes on the rocky dirt road leading up to the cave.
      </p>
      <p>
        You need to be at the cave before 10am to secure a spot for the official
        cave tours, which cost 450,000 rupiah (~$33usd) and is the only way to
        legally access the cave.
      </p>
      <p>
        The "tour" will only take the first 25 groups who arrive to the cave,
        but there is no limit on group size. If you are unlucky, like me, you
        may have multiple groups of 5+ people, making for a large and slow
        moving tour group.<br />
      </p>
      <figure>
        <ResponsiveImg
          alt="Inside Jomblang Cave"
          imgRootPath={imgBasePath}
          imgPrefix="jomblangEntrance"
        />
        <figcaption className="caption">Entrance of Jomblang cave</figcaption>
      </figure>
      <h4>Mt. Bromo/Ijen</h4>
      <p>
        Mt. Bromo and Ijen are two not to be missed volcanos in Eastern Java.
      </p>
      <p>
        When visiting these sites from Jogja, it's cheaper and less stressful to
        book one of the package transport tours (excludes guides into the parks)
        than to try traveling on your own between places.
      </p>
      <p>
        If you do decide to travel on your own (like I did), getting off the
        train station in Probolinggo after dark (as it most likely will be) can
        be disorienting. There where no car taxis to be found, and if you are
        arriving from the 9am train from Jogja like I did, there will be no more
        bus services running.
      </p>
      <p>
        In contrast, people who had booked travel could get off the train and
        hop directly onto a waiting mini bus to Cemoro Lawang, the start point
        for Mt. Bromo visits.
      </p>
      <figure>
        <ResponsiveImg
          alt="Mt. Bromo at Sunrise"
          imgRootPath={imgBasePath}
          imgPrefix="mtBromoCloser"
        />
        <figcaption className="caption">
          Still can't get over how fake this place looked.
        </figcaption>
      </figure>
      <p>
        Still getting over being sick, I opted to take a tour from Probolinggo
        itself, which saved me bus trips to/from Cemoro Lawang and an extra
        day/night of travel time, plus the hostel that would have gone with it.
        I talked to other travelers who chose to do the same from slightly
        further away in Surabaya.
      </p>
      <p>
        The train ride from Probolinggo to Banyuwangi, the less touristy of two
        starting points to Ijen, is very simple.
      </p>
      <figure className="width--50 align-left margin--right">
        <ResponsiveImg
          alt="Wearing a gas mask at Ijen"
          imgRootPath={imgBasePath}
          imgPrefix="gasMask"
        />
        <figcaption className="caption">
          Wear a gas mask at Ijen. It's fun and makes a difference when near the
          strongest Sulphur fumes in the crater.
        </figcaption>
      </figure>
      <p>
        Once there, even though it's fairly easy to organize your own transport
        and walk Ijen's crater without a tour, I only had to pay $25usd for
        transport, a guide, entrance fee to the park, and a gas mask (highly
        recommended), all organized through my homestay. The company was also
        willing to drop guests off at the ferry to Bali at no extra cost after
        the tour.
      </p>
      <p>
        When the $25usd price was quoted to me, I agreed immediately, since this
        was so much cheaper than the $75usd I had paid for my Mt. Bromo tour.
        The man organizing the tour looked surprised when I said yes
        immediately, making me think I could and should have haggled the price
        down to something even cheaper.
      </p>
      <p>
        At this point in your trip, if coming from Borobudur, Merapi, and Mt.
        Bromo, you may be tired of sunrise tours. If that is the case, don't
        flake out on this last one. The sunrise here was the most beautiful of
        all of the sunrises I watched while on Java. If you only want to pick
        one sunrise tour to do, pick this one.
      </p>
      <br />
      <figure>
        <ResponsiveImg
          alt="Sunrise at Ijen"
          imgRootPath={imgBasePath}
          imgPrefix="ijenSunrise"
        />
        <figcaption className="caption">Don't skip sunrise at Ijen.</figcaption>
      </figure>
    </div>
  );
}

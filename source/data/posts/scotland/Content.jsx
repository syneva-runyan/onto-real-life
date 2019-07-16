import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";
const imgBasePath = "../assets/img/blogs/scotland";


export default function Content(props) {
  return (
    <div>
      <p>Scotland is a country romantized by so many.  How could it not be with shows like "Outlander" and "Reign"? Even the remote parts of Scotland, such as the Shetland islands, are starting to gain public attention with the novels and TV shows like "Shetland".</p>
      <p>On top of popular media, somewhere around 20 to 25 million Americans are estimated to be of Scottish decent (<a href="https://en.wikipedia.org/wiki/Scottish_Americans">wiki source</a>).  That's exponentially more than the number people actually living in Scotland (somewhere near 5.5 million).</p>
      <p>Nearly <a href="https://www.visitscotland.org/news/2018/office-for-national-statistics-overseas-travel-tourism">3.4 million overseas tourists visited Scotland in 2018</a>.  My boyfriend and I added 2 onto the 2019 statistic, enjoying the outdoors, drinking Scotch, and learning about the history of Scotland and its isles.</p>
      <blockquote>Congratulations Erin and Chelsea, whose wedding (One of the most beautiful, unique, and fierce weddings I've even been fortunate enough to attend) was the main purpose of our trip.  #oliveOyle</blockquote>
      <p>At ~4,413 ft, Ben Nevis is the tallest peak in the UK (<a href="https://www.visitscotland.com/see-do/iconic-scotland/ben-nevis/#article-page-3">src</a>). The fastest time on record for a trip to the summit and back is 1hr and 25 min.</p>
      <figure className="width--33 align-right margin--left sm-width--100">
        <ResponsiveImg
          alt="Ben Nevis Trail"
          imgRootPath={imgBasePath}
          imgPrefix="quaterUp"
        />
        <figcaption className="caption">
          A quater of the way up to Ben Nevis Summit
        </figcaption>
      </figure>
      <p>At around 1 hr and 25min, we were just past a quarter of the up the trail to the summit. I was out of breadth and focusing a large amount of mental energy into watching my feet.  My clumsiness and lack of situation awareness don't quite mix well with steep drops and loose rock trails.</p> 
      <p>Every once in awhile however, I'd look up from my feet, admiring the increasingly beautiful views, and the view really were beautiful.  I had expected green rolling <strong>hills</strong>, much like what you'll see in the Scottish highlands.  My association between "UK" and "mountains" has always been loose, like a shoelace that's ready to untie itself at any moment.  Instead of hills however, I saw green <strong>peaks</strong>, like honest to goodness mountain peaks. </p>
      <figure>
        <ResponsiveImg
          className="width--33 align--left sm-width--100"
          alt="Scotch on the mountain top"
          imgRootPath={imgBasePath}
          imgPrefix="benNevisKilt"
        />
        <ResponsiveImg
          className="width--33 align--left sm-width--100"
          alt="Ben Nevis Summit"
          imgRootPath={imgBasePath}
          imgPrefix="mountains"
        />
        <ResponsiveImg
          className="width--33 align--left sm-width--100"
          alt="Scotch on the mountain top"
          imgRootPath={imgBasePath}
          imgPrefix="benNevisScotch"
        />
        <figcaption className="caption">
          Views from the Summit
        </figcaption>
      </figure>
      <p>These views were even more special, because, for once in Scotland's long history, there was a sunny day. It's never sunny in Scotland, and if we had summited even 30 min after we did, clouds would have obscured most if not all of the summit's views.</p>
      <blockquote>Unverifed stat from a fellow hiker - you'll only see an unobscured view from the summit 10 days out of the year.</blockquote>
      <p>Even without the views, the sense of accomplishment upon reaching the highest summit in the UK would have been worth the trip, screaming knees be damned.</p>
      <p>More famously beautiful parts of Scotland are the Scottish isles.  There are too many isles to be visited in one trip.  Given our interest in history and keenness to avoid over crowded tourist stops (ahem, the isle of Skye in the summer), we ended up visiting Orkney, a collection of isles off the north coast of Scotland.</p>
      <figure className="align--left margin--right width--50 sm-width--100">
        <ResponsiveImg 
          alt="Scotch on the mountain top"
          imgRootPath={imgBasePath}
          imgPrefix="stones"
        />
        <figcaption className="caption">
          A sheep casually laying against a 5,000 year old stone.
        </figcaption>
      </figure>
      <p>These mostly rural isles boasts an impressive collection of pre-historical ruins, including the best preserved prehistorical village in Europe, standing stones older than Stonehenge, and from more recent times, Viking ruins and graffiti.</p>
      <p>Given my name and heritage, I'm biased to Viking-related anything.</p>
      <p>Maeshowe, a historical site found in Orkney, hosts 30 separate Viking inscriptions (<i>ahem, pieces of graffiti</i>).  Like any good little feminist, my favorite was the inscription  carved by a Viking woman. The inscription is one of the two discovered Viking runes known to have been carved by a woman.</p>
      <br/>
      <blockquote>
        The thousand year old rune complains that "<i>Men just aren't as manly as they used to be.</i>"
      </blockquote>
      <figure>
        <ResponsiveImg 
         className="align--left width--50 sm-width--100"
          alt="Stones of Stenness"
          imgRootPath={imgBasePath}
          imgPrefix="stones2"
        />
        <ResponsiveImg 
          className="align--left width--50 sm-width--100"
          alt="Ring of Brodgar"
          imgRootPath={imgBasePath}
          imgPrefix="ring"
        />
        <ResponsiveImg 
          className="align--left width--50 sm-width--100"
          alt="Prehistoric Village"
          imgRootPath={imgBasePath}
          imgPrefix="village"
        />
        <ResponsiveImg 
          className="align--left width--50 sm-width--100"
          alt="View from the ferry"
          imgRootPath={imgBasePath}
          imgPrefix="isleViews"
        />
        <figcaption className="caption">
          Orkney highlights
        </figcaption>
      </figure>
      <p>In addition to its history, Orkney is known for Highland Park whiskey, which features a "Viking soul".  Orkney also has its own brewery and gin distillery.  All of this makes the Orkney isles a fantastic place to visit.</p>
      <p>Segwaying off of the Highland Park Distillery, our visit to Scotland wouldn't have been complete without visiting <strike>one</strike> several scotch distilleries.</p>
      <figure className="width--33 align--left margin--right sm-width--50">
        <ResponsiveImg
          alt="Tomatin Barrels"
          imgRootPath={imgBasePath}
          imgPrefix="barrel"
        />
        <figcaption className="caption">
          Barrels at the Tomatin distillery.
        </figcaption>
      </figure>
      <p>Scotch Whiskey tourism is a <a target="blank" href="https://www.scotch-whisky.org.uk/newsroom/scotch-whisky-tourism-enjoys-best-year-ever/">rapidly growing industry</a>.  From the history of 'illegal' (non-taxed) whisky making to the requirement that each distillery must have unique stills, there are a lot of interesting facts to learn and a lot of incredible scotch to sample in the country.</p>
      <p>These isn't enough space on this blog to cover all the history, beauty, and attractions of Scotland.  Or rather I could, but I'd lose you all less than halfway through that 100 page post.  Instead, I'll leave you all with my impression that Scotland deserves the romantism directed towards it. I highly recommend a visit to the Highlands, the isles, and any other part of the country to anyone (<i>just make sure to visit in the summer if you plan spending time outside, not during the dastardly awful winter months</i>).</p>
      <figure>
        <ResponsiveImg
          alt="Scottish Castle"
          imgRootPath={imgBasePath}
          imgPrefix="castle"
        />
        <figcaption className="caption">
          Romanticism deserved.
        </figcaption>
      </figure>
      <hr/>
      <h4>Other Notes</h4>
      <ul>
        <li>Can't emphasize enough how beautiful Chelsea and Erin's wedding was, and how fortunate I was to go.</li>
        <li>These is exactly 1 castle in all of North America. Scotland has us beat by literly hundreds.</li>
        <li>Roads are tiny and driving there is stressful, but made it so much easier to get around the country. That being said, avoid Europcar.  I've relearned this lesson twice now.</li>
        <li>Can't recomend The Malt Room in Inverness enough for any Scotch lovers.</li>
        <li>If you like history, do yourself a favor and look into the history/drama of Scotish independence. <strike>Even</strike> Especially if that education comes from <i>Outlander,</i> the history is fascinating, hearbreaking, and uplifting all at once.</li>
      </ul>
    </div>
  );
}

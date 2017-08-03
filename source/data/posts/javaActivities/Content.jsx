import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/java";

export default function Content(props) {
  return (
    <div>
     <p>Yogya is a fairly interesting city that comes with numerous day tripping option, the most popular ones including:</p>
      <ul>
        <li><strong>Borobudur: </strong> A Buddhist temple famous for it's "Nirvana sunrise."  It was a cloudy morning when I went, and I wasn't able to see the sunrise.  Apparently these mornings are common, with the beautiful sunrises being a rare occassion.  There were also too many tourists to even find a seat almost at the top of the temple.  I'd recomend going to Punthuk Setumbu hill, a nearby place with a equally stunning view, much cheaper entrance price, and fewer tourists.      
          <figure>
            <ResponsiveImg
              alt="Borobudur"
              imgRootPath={imgBasePath}
              imgPrefix="borobudur"
            />
          </figure>
        </li>
        <li>
          <strong>Prambanan Complex:</strong> A Temple Complex/World Heritage site on the outskirts of Yogya.  The complex is famous for having both Budhist and Hindu temples in the area, and there is a famous Javanese ballet performance that is preformed after sunset some evenings.  If you go, don't leave before checking out the Sewu Temple.  It is much less crowded that the Prambanan temple, and still very interesting and beautiful.
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
            <figcaption className="caption"><em>First image: </em> Hindu Prambanan Temple.  <em>Second image: </em> Buddhist Sewu temple.  Less crowded, equally interesting.</figcaption>
          </figure>
        </li>
        <li>
          <strong>Mt. Mareapi: </strong>Fancy a challenging sunrise hike?  I came down the food poisoning the night before climbing, so wasn't able to go, but The hike up this volcanoe was highly recomended.
        </li>
      </ul>
    </div>
  )
}
import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/indonesiaTravelThoughts";

export default function Content(props) {
  return (
    <div>
        <p>The world doesn't need another post from a white girl who went to Ubud for a Yoga Retreat <em>(which was great btw, highly recomend.  Shout out to Chantel and Andrea for being some of the sweetest and most fun people I've met traveling)</em>.<br/><br/>  Instead, I've put together this.</p>
        <ol>
             <li>
                <strong>Q. How many people does it take to ship a package in Indonesia?</strong><br/>
                <p>Let's count!</p>
                <blockquote>(1) First off, there's <strong>me</strong>, a confused western tourist trying to understand why the post office in Flores doesn't have boxes and where I can find one.</blockquote>
                <p>(2) Next, there's the <strong>helpful, loitering taxi driver</strong>, who wants to know where I'm from, if I need a ride, and why I'm looking at my phone so confused.</p>
                <p>(6) Que entrance of <strong>four of taxi driver's friends</strong>. They're intriged by the confused white girl, pointing at Google Translate on her phone. <em>(Turns out "carton" is the Indonesia word for "box")</em></p>
                <p>(7) The <strong>vape shop owner</strong> comes through with a carton for me!</p>
                <p>(9) <strong>Two cachiers</strong> at a nearby corner store let me use their masking tape when I can't find any to buy on the shelves.  They also give me a new box, because it turns out the vape box is too small.</p>
                <p>(11) Finally, the <strong>post office attendant and his manager</strong> who take my package, and on my request, dig through a large stack of papers to find a US Declarations form.</p>
                <blockquote>That makes <strong>11 people</strong>! <em>To be see if the package makes it home or not...</em></blockquote><br/>
            </li>
            <li>
                <strong>Q. Why are you so <strike>white</strike> red?</strong><br/>
                <blockquote>A crew memeber on a 3D/2N boat journey I went on had met black people from Atlanta, and wanted to know why I was from there, but white.</blockquote>
                <p>This question really suprised me, and I fumbled an answer on how my great grandparents and their grandparents lived somewhere without much sun.  I wish I had done this question more justice, but I'm still not sure what is the best way to answer.</p>
                <figure className="align-left width--30 sm-width--50 margin--right">
                    <ResponsiveImg 
                        alt="Covering up with a towel"
                        imgRootPath={imgBasePath}
                        imgPrefix="towel"
                    />
                    <figcaption className="caption">I still managed to burn.</figcaption>
                </figure>
                <p>A day into the boat journey, concern over my white-ness was replaced by concern over my red-ness.  I was so sunburned that the dive master on the boat, on his own volition, went into a village and bought me sunscreen.
                Never mind that fact that I <em>had</em> actually put on sunscreen every two hours the first day.</p>
                <blockquote>By the end of 3 days on the boat, I had gone through a whole bottle of sunblock and resorted to laying underneath a towel when on deck.</blockquote><br/>
            </li>
            <li>
                <strong>Q. Why are you crying?</strong>
                <br />
                <p>If being sunburned wasn't bad enough, it turns out I'm allergic to the sunscreen I bought in Bali. I start crying if it gets into my eyes, which funny enough, happens alot when you're chilling on and diving off a boat.</p><br/>
                <p>Will be exclusively purchasing hypoallegenic sunscreen from now on.
                </p><br/>
            </li>
            <li>
                <strong>Q. What is a fairy peacock?</strong><br/>
                <p>Great question, ask Google.</p>
                <figure className="align-right width--30 sm-width--100 margin--left">
                    <ResponsiveImg 
                        alt="Google mistranlate"
                        imgRootPath={imgBasePath}
                        imgPrefix="fairyPeacock"
                    />
                </figure>
                <p>SO to Live Google Translate for being awesome.  I used Google Translate to ask for medicine when I came down with some sort of food poisoning.  I used it to ask what was in my food at a sketchy cafe after getting better.  Finally, I used Google Translate to have "normal" conversations with other travels when we didn't speak to the same language.</p>
                <p>Specifically in the conversation screenshotted here, I spent an evening talking to a group of Chinese men whose English, although better than my Chinese, wasn't at a conversational level.</p>
                <p>Despite what it looks like, we were not talking about fairies or peacocks.<br /></p>
            </li>
            <li>
                <strong>Statement</strong>
                <p>Breaking format here for to post a video of footage I took in Indonesia.</p>
                <p>Song choice (<em>Despacito, Luis Fonsi ft. Daddy Yankee</em>) is attributed to the fact that I heard <em>Despacito</em> no fewer than <strong>a hundred times</strong> every single freaking day while traveling Indonesia.</p>
                <p>I used to really enjoy making/editing videos, but didn't keep up with the hobby after moving to London. Maybe I'll pick it back up again when I'm done traveling.</p>
                <div style={{"paddingTop": "57%", "width": "100%", "position": "relative"}}>
                    <iframe style={{"position": "absolute", "top": "0"}} width="100%" height="100%" src="https://www.youtube.com/embed/gGWdjRa9hlY" frameBorder="0" allowFullScreen></iframe>
                </div>
            </li>
        </ol>
    </div>
  )
}

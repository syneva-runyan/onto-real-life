import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/ifYouDontLeaveHere";

export default function Content(props) {
  return (
    <div>
        <p>In the precendented times of 2017, I wrote a statement of purpose for my application to Georgia Tech's Online Masters of Compuer Science program.  The statement centered around remote technology's ability to attack the lack of opportunities accessible to people who don't live in the first world.</p>
        <p>Fast forward to 2020 where remote working is a way of life my statement of purpose seems more relevant than when I wrote it.</p>
        <hr/>
        <p className="postContent__sectionTitle">From my statement</p>
        <figure className="align-right width--30 sm-width--100 margin--left">
            <ResponsiveImg
              alt="A Komodo Dragon"
              imgRootPath={imgBasePath}
              imgPrefix="dragon"
            />
            <figcaption className="caption">
              A Komodo Dragon
            </figcaption>
          </figure>
       <p>
        <strong> “If you don’t leave here, you will never be nothing,”</strong> Ken yelled at Rick when Rick took a job on his home island, Flores, Indonesia.
        </p>
        <p>
        Rick was my tour guide while visiting Flores, Indonesia. Ken is his brother.</p>
        <p>The remote location of Flores leads to limited opportunities, which Ken sees as an insurmountable problem, the only solution being to <strong>uproot their lives and physically move.</strong></p>
        <p>This problem does not have to be insurmountable. 
        </p>
        <br/>
        <blockquote>
            Technology, by bridging physical and cyber spaces, has potential to alleviate the gap between physical location and opportunities.
        </blockquote>
        <hr/>
        <p className="postContent__sectionTitle">2020 Reflection</p>
        <p>A recent <a href="https://www.pwc.com/gx/en/ceo-agenda/ceo-panel-survey-emerge-stronger.pdf" target="_blank" rel="noopener noreferrer">PwC Survey</a> interviewed 669 CEOs, 78% who believe that remote work is here to stay.</p>
        <p>With this transition to a more remote-friendly workforce, opportunities will become available to the daughter who moved back home to take care of her sick mother, to the grandparent who wants to live closer to their grandchildren, to Rick, who lives on a remote island.</p>
        <p>That's great! Should we celebrate? Not quite yet.</p>
        <p><strong>The digital divide</strong> will still prevent equal access to these opportunies.</p>
        <hr/>
        <p className="postContent__sectionTitle">From my statement</p>
        <p>
         Take for instance, offline and online functionality of apps. What are the best ways to optimize delivery of content across poor connections? What is the best experience for an individual using an app where wifi is unreliable, cutting out unpredictably every few hours? 
        </p>
        <hr/>
        <p className="postContent__sectionTitle">2020 Reflection</p>
        <p>
          Realistically, we're years away from properly addressing the digital divide.  But now that problems like instable wifi connections have directly impacted a larger portion of the population, I'm optimistic that individuals will began to asking questions like these more and more.
        </p>
        <p>
          Once more people start asking these questions, what thoughts will be inspired?
        </p>
        <hr/>
        <p className="postContent__sectionTitle">From my statement</p>
        <figure className="align-left width--30 sm-width--100 margin--right">
            <ResponsiveImg
              alt="Delivery drone"
              imgRootPath={imgBasePath}
              imgPrefix="deliveryDrone"
            />
            <figcaption className="caption">
              A delivery drone bringing a package to an elementary school in an Indonesian farming village in West Java. <a href="https://asia.nikkei.com/Business/China-tech/JD.com-and-Alibaba-export-AI-and-robot-logistics-expertise" target="_blank" rel="noopener noreferrer">src</a>
            </figcaption>
          </figure>
        <p>
        I want to work with creative teams who propose unapologetically innovative ideas, like using robotic surrogates to educate children in third world countries on malnutrition.
        </p>
        <p>
        Working in a corporation with the right resources and mission, I want to steer a department in a direction that is good for the corporation, good for the consumer, and good for the world.
        </p>
        <p>
        Think, for instance, of the <a href="https://www.theverge.com/ces/2017/1/3/14128510/withings-loreal-smart-wifi-hair-brush-announcedces-2017" target="_blank" >wifi enabled hair brushes</a> previewed at the Consumer Electronics Show. While at first glance, this product seems ridiculous, imagine a company like Dove sponsoring the product. With one developed version of the product, they could offer suggestions for hair care products. With another version, they could check for and help prevent lice outbreaks in third world countries. 
        </p>
        <hr/>
        <p className="postContent__sectionTitle">2020 Reflection</p>
        <p>Working from home is very very different from working in a third world country... but empathy is a powerful emotion.</p>
        <p>If a seed of empathy is planted for people who live on the other side of the digital divide, and if that seed is watered (even just with a drop of water) every day, questions will turned into opinions, will turn into action.</p> 
        <hr/>
        <p className="postContent__sectionTitle">From my statement</p>
        <blockquote>
        One of the most beautiful roles technology can have in someone’s life is to act as an enabler – an enabler to learning, an enabler to social interactions, and an enabler to being your best self, regardless of age, socio-economic class, or physical location.
        <strong>
        You can be everything with technology, without physically leaving “here.”
        </strong>
        </blockquote>
        <hr/>
        <p className="postContent__sectionTitle">Reflection</p>
        <p>In 2017, the potential for remote technology that I saw seemed decades away. But
        maybe <em>something</em> good has come out of 2020.  Maybe we've accelerated the trajectory for the impact remote technology will have on the world.</p> 
    </div>
  );
}

import React from "react";
import { ResponsiveImg } from "../../../js/components/Global";

const imgBasePath = "../assets/img/blogs/australiaDarwinToPerth";

export default function Content(props) {
  return (
    <div>
      <p>
        Driving from Perth to Darwin or Darwin to Perth is a common path tourist
        take to see Australia's West Coast and the Kimberleys{" "}
        <em>
          (a sparsely settled northern regions full of Baobab trees and red
          dirt).
        </em>
      </p>
      <figure>
        <ResponsiveImg
          alt="Broome Viewpoint"
          imgRootPath={imgBasePath}
          imgPrefix="broomeViewPoint"
        />
        <figcaption className="caption">
          Viewpoint at Broome's Gantheaume Point
        </figcaption>
      </figure>
      <blockquote>
        If you're doing either of these routes, bring a large book, download a
        crapton of music and movies, and get ready for lots and lots of driving.
      </blockquote>
      <p>
        When planning, allot enough time for and choose stop points before
        leaving on your trip.
      </p>
      <blockquote>
        There's very limited wifi or cell service, and you're less likely to run
        into backpackers (other than ones you're traveling with) while on this
        route than in Darwin, Broome, or Perth. Planning-as-you-go won't work
        well.
      </blockquote>
      <figure className="width--50 align-left margin--right sm-width--100">
        <ResponsiveImg
          alt="Broome Viewpoint"
          imgRootPath={imgBasePath}
          imgPrefix="camperVan"
        />
        <figcaption className="caption">Camper Van</figcaption>
      </figure>
      <p>
        Depending on money/time/confidence in driving you have, there are a few
        different options on these routes.
      </p>
      <ul>
        <li>
          <strong>Renting a car/camper van - </strong>Split between a group of
          people and camping along the way, this can be one of the cheapest
          options. If you're starting your trip from a hostel in Darwin, Perth,
          or Broome, there will most likely be other people looking to share a
          rental car/trip. Conversely, as a solo traveler, because of the cost
          of the rental car, this can end up being a more expensive option.
          Either way there's the risk of missing some of the best sights and
          hikes along the way if you don't plan well enough ahead.{" "}
          <strong>
            Make sure to get a 4W drive for the Kimberleys portion of the trip.
          </strong>
        </li>
        <li>
          <strong>Car relocation - </strong>Rather than paying a full cost for a
          one way rental, you can look into transferring rental cars from one
          city to the next with certain rental companies. A huggeee con of this
          would be an ungenerous time limit placed on your trip by the rental
          company. If you go with this option, you may be spending all of your
          time driving rather than getting to enjoy anything on the way.
        </li>
        <li>
          <strong>Tour Group - </strong>One of the more expensive options, but
          there are heavy pros, including someone else doing the driving,
          someone else doing the planning, and meeting great people in the tour
          group. A con here would be less flexibility to spend more/less time in
          places as you want.
        </li>
      </ul>
      <figure>
        <ResponsiveImg alt="Tent" imgRootPath={imgBasePath} imgPrefix="camp" />
      </figure>
      <p>
        While there are some, don't expect to see many hotels or hostels between
        "cities". Bringing a tent or camper van is the cheapest, and in my
        opinion, one of the best, ways to sleep during the trip.
      </p>
      <h4>Traveling Mentality</h4>
      <p>
        One of the hardest parts I had with this trip was trying not to fall
        into the "I-just-want-to-get-to-_____" trap.
      </p>
      <blockquote>
        The trip is supposed to be an opportunity to see things, not a mission
        to get from Point A to Point B.
      </blockquote>
      <p>
        Planning stops ahead of time and looking forward to certain attractions
        or hikes can help combat this.
      </p>
      <h4>Other Notes</h4>
      <ul>
        <li>
          <strong>When to Go</strong> - Choose when you take this trip
          carefully. Going at the wrong time will limit your activities and
          experiences drastically.
        </li>
        <figure className="align-right margin--left width--30 sm-width--100">
          <ResponsiveImg
            alt="Gas Station"
            imgRootPath={imgBasePath}
            imgPrefix="gasStation"
          />
        </figure>
        <li>
          <strong>Gas Stations</strong> - Stop at every petrol station you pass
          unless you are confident that there will be another one soon.
          Oftentimes, there won't be.
        </li>
        <li>
          <strong>Telkomsel</strong> - As of writing, the best phone company for
          getting service on the West Coast and the Kimberleys.
        </li>
        <li>
          <strong> Must see POI Darwin to Broome</strong> - Katherine's Gorge,
          Purnululu National Park (including the Bungle Bungles), and Keep
          National Park. Gibb's River Road attractions are also a must.
        </li>
        <li>
          <strong>Must see POI Broome to Perth</strong> - Karajini, Coral Bay,
          Shark Bay (Monkey Mia), and Kalbarri National Park
        </li>
      </ul>
      <figure>
        <ResponsiveImg
          alt="Dusty Road"
          imgRootPath={imgBasePath}
          imgPrefix="carDirt"
        />
      </figure>
    </div>
  );
}

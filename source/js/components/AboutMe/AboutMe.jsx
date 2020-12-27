import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <p>
          I&apos;m a front end developer and CS grad student. I love traveling
          and in general trying new things. Interested in why
          I love these things? Checkout my article
          <Link to={"/posts/seeTheWorld"}> here.</Link>
        </p>
        <p>
          I was raised in Peachtree City, Georgia US of A. I am a Georgia Tech
          Alum & (current grad student now) (<em>To Hell with Georgia</em>). I
          spent a year and a half in London, traveled around SE asia for 6
          months, and still can&apos;t tell English accents from Australian.
        </p>
        <h2>Travel Wish List</h2>
        <ul className="aboutMe__list">
          <li>South Africa</li>
          <li>Machu Pichu</li>
          <li>Northern Vietnam (via motorbike)</li>
          <li>Bora Bora (must stay in raft house on the water)</li>
          <li>Glacier National Park, Montana USA</li>
        </ul>
        <p>Hit me up if you&apos;d like to go any of these places with me!</p>
      </div>
    );
  }
}

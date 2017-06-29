import React, { Component } from "react";
import { Link } from "react-router";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <p>
          I'm currently on a six month Hiatus from work, traveling around New
          Zealand, Indonesia, and Australia. For those who are interested in
          why, checkout my article
          <Link to={"/posts/seeTheWorld"}> here.</Link>
        </p>
        <p>
          In another life, I'm a developer (mostly javsacript). I was raised in
          Peachtree City, Georgia US of A. I am a Georgia Tech Alum (<em>To Hell with Georgia</em>).
          I spent the past year and a half in London, but still can't tell
          English accents from Australian.
        </p>
        <h2>Travel Wish List</h2>
        <ul>
          <li>South Africa</li>
          <li>Machu Pichu</li>
          <li>Thailand</li>
          <li>Bora Bora (must stay in raft house on the water)</li>
          <li>Glacier National Park, Montana USA</li>
        </ul>
        <p>Hit me up if you'd like to go any of these places with me!</p>
      </div>
    );
  }
}

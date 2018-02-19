import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <p>
        I&apos;m currently on a six month Hiatus from work, traveling around
        New Zealand, Indonesia, and Australia. For those who are interested in
        why, checkout my article
        <Link to={"/posts/seeTheWorld"}> here.</Link>
      </p>
      <p>
        In another life, I&apos;m a developer (mostly javsacript). I was
        raised in Peachtree City, Georgia US of A. I am a Georgia Tech Alum (<em>To Hell with Georgia</em>).
        I spent the past year and a half in London, but still can&apos;t tell
        English accents from Australian.
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

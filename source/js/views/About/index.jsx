import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <h2>About</h2>

        <hr />
        <p>Face spinner!</p>
        <p>Put stuff like I'm a young professional (developer in another life) who loves to spend my free time traveling.</p>
        <p>Currently on a 6 month hiatus from work, some boring stats for those of you who might be interested:</p>
        <ul>
          <li>Money put away for each month</li>
          <li>Plan for returning</li>
          <li>Why? See Goal:See The World</li>
        </ul>
        <p>Travel Wish List:</p>
        <ul>
          <li>South Africa</li>
          <li>Machu Pichu</li>
          <li>Thailand</li>
          <li>Bora Bora (must stay in raft houses on the water)</li>
          <li>Glacier national park</li>
        </ul>
        <p>Hit me up if you're interested in going any of these places!</p>
      </div>
    );
  }
}

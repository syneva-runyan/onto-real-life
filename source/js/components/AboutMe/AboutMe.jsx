import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AboutMe extends Component {

  render() {
    return (
      <div className='aboutMe'>
        <p>I'm currently on a six month Hiatus from work, traveling around New Zealand, Indonesia, and Australia. For those who are interested in why, checkout my article
            <Link to={"/posts/seeTheWorld"}> here.</Link>
        </p>
        <p>In another life, I'm a developer (mostly javsacript).  I was raised in Peachtree City, Georgia US of A.  I am a Georgia Tech Alum (<em>To Hell with Georgia!</em>).  I spent the past year and a half in London, but still can't tell English accents from Australian.</p>
        <h2>Am I crazy...</h2>
        <p>..for taking time off a job that supported me well, that I <em>enjoyed</em>?  Yes, I think I might be crazy, but not for that reason.</p>
        <p>I read an opinion recently where someone called long term traveling "dumb", saying it makes so much more sense to travel with PTO and work holidays.  While that person is entitled to their opinion, I'd like to speak a little on behalf of mine.</p>
        <p>There are alot of real-world skills people gain while traveling. Budgeting is one example.  I have a set amount of money to spend each month, with a built in buffer.  If I stay within my budget, I won't be flat broke when I make it home. Every week I plan on sitting down and going over my finances.</p>
        <blockquote>While traveling for holiday or weekends, I was never able to fully disconnect from work.</blockquote> 
        <p>There was always a time card I fogot to fill in, or an email I composed in my head over vacation, making it perfect to send when I was back.  A month into my trip, I still find myself wondering about how my work team is getting along, but long term travel is giving me permission to forget about that team and my time cards, and focus on me.</p>
        <p>I wasn't happy on my last work project, and needed a change.  I love what I do, I love coming up against challenges, and I love the satisfaction that comes with overcoming an insurmountable problem.  But there were alot of things that frustrated me.  I knew I needed a change, and what better way to make a change than moving across the world? I'm kidding a bit here.  There will be changes I make when I go back to work, but smaller ones, ones that I have time to think over and gain fresh enthusiasm for.  Or maybe I will just move here and never come back, who knows :)</p>
        <p>There's my brief overview of why I think long term travel was the right choice for me.  I'd love to be challenged or questioned on any of these points, so please send me a note with your thoughts!</p>
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

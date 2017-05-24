import React, { Component } from 'react';
import { Spinner } from '../../components/Spinner';
import { AboutMe } from '../../components/AboutMe';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <h2>About</h2>

        <hr />
        <blockquote>Hi! My name is Syneva. It's pronounced like Geneva (Switzerland) but with an S.</blockquote>
        <Spinner />
        <AboutMe />
      </div>
    );
  }
}

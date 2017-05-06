import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
        <Link to={ routeCodes.ABOUT }>
          About
        </Link>
        <IndexLink to={ routeCodes.BLOG_POSTS }>
          Blog Posts
        </IndexLink>
        <Link to='404'>
          404
        </Link>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, About, BlogPosts, NotFound } from './views';

const publicPath = '/';

export const routeCodes = {
  ABOUT: `${ publicPath }about`,
  BLOG_POSTS: `${ publicPath }blog`,
  PHOTO_MAP: `${ publicPath }photos`,
  CONTACT: `${ publicPath }contact`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ BlogPosts } />
          <Route path={ routeCodes.ABOUT } component={ About } />
          <Route path={ routeCodes.BLOG_POSTS } component={ BlogPosts } />
          <Route path={ routeCodes.PHOTO_MAP } component={ BlogPosts } />
          <Route path={ routeCodes.CONTACT } component={ BlogPosts } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}

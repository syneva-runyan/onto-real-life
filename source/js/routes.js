import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, About, BlogPosts, Contact, NotFound } from './views';

const publicPath = '/';

export const routeCodes = {
  ABOUT: `${ publicPath }about`,
  POSTS:`${ publicPath }posts/(:postId)`,
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
          <Route path={ routeCodes.POSTS } component={ BlogPosts } />
          <Route path={ routeCodes.PHOTO_MAP } component={ NotFound } />
          <Route path={ routeCodes.CONTACT } component={ Contact } />
          <Route path='*' component={ BlogPosts } />
        </Route>
      </Router>
    );
  }
}

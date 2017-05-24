import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, About, BlogPost, PostCollection, NotFound } from './views';

const publicPath = '/';

export const routeCodes = {
  ABOUT: `${ publicPath }about`,
  POST_COLLECTION: `${ publicPath }posts`,
  POSTS:`${ publicPath }post/:postId`,
  PHOTO_MAP: `${ publicPath }photos`,
  CONTACT: `${ publicPath }contact`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ PostCollection } />
          <Route path={ routeCodes.ABOUT } component={ About } />
          <Route path={ routeCodes.POSTS } component={ BlogPosts } />
          <Route path={ routeCodes.PHOTO_MAP } component={ NotFound } />
          <Route path={ routeCodes.CONTACT } component={ NotFound } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}

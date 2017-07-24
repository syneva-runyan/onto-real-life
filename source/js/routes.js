import React, { Component } from "react";
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, Route, Switch } from "react-router-dom";
import { About, BlogPosts, Contact, NotFound } from "./views";

const publicPath = "/";

export const routeCodes = {
  ABOUT: `${publicPath}about`,
  POSTS: `${publicPath}posts/(:postId)`,
  PHOTO_MAP: `${publicPath}photos`,
  CONTACT: `${publicPath}contact`,
  HOME: publicPath,
};

module.exports = (locals) => {
  return (
    <StaticRouter location={locals.path} context={{}} >
        <Switch>
            <Route path={routeCodes.ABOUT} component={About} />
            <Route component={BlogPosts} />
        </Switch>
    </StaticRouter>
  )
};
            // <Route path={routeCodes.POSTS} component={BlogPosts} />
            // <Route path={routeCodes.PHOTO_MAP} component={NotFound} />
            // <Route path={routeCodes.CONTACT} component={Contact} />*/}

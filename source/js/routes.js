import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { About, BlogPosts, Contact, NotFound } from "./views";

const publicPath = "/";

export const routeCodes = {
  ABOUT: `${publicPath}about`,
  POSTS: `${publicPath}posts/(:postId)`,
  PHOTO_MAP: `${publicPath}photos`,
  CONTACT: `${publicPath}contact`,
  HOME: publicPath,
};

export const  routes = (locals) => {
  return (
      <Switch>
          <Route path={routeCodes.ABOUT} component={About} />
          <Route component={BlogPosts} />
      </Switch>
  )
};
            // <Route path={routeCodes.POSTS} component={BlogPosts} />
            // <Route path={routeCodes.PHOTO_MAP} component={NotFound} />
            // <Route path={routeCodes.CONTACT} component={Contact} />*/}

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { About, BlogPosts, Contact, NotFound } from "./views";

const publicPath = "/";

export const routeCodes = {
  ABOUT: `${publicPath}about`,
  POSTS: `${publicPath}posts`,
  PHOTO_MAP: `${publicPath}photos`,
  CONTACT: `${publicPath}contact`,
  HOME: publicPath,
};

export default function Routes(props) {
  return (
      <Switch>
          <Route exact path={publicPath} component={BlogPosts} />
          <Route path={routeCodes.ABOUT} component={About} />
          <Route path={routeCodes.POSTS} component={BlogPosts} />
          <Route path={routeCodes.PHOTO_MAP} component={NotFound} />
          <Route path={routeCodes.CONTACT} component={Contact} />
          <Route component={BlogPosts} />
      </Switch>
  )
};

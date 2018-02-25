import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, BlogPosts, Contact, Photos } from "./views";

const publicPath = "/";

export const routeCodes = {
  ABOUT: `${publicPath}about`,
  POSTS: `${publicPath}posts`,
  PHOTO_MAP: `${publicPath}photos`,
  CONTACT: `${publicPath}contact`,
  HOME: publicPath,
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path={publicPath} component={BlogPosts} />
      <Route path={routeCodes.ABOUT} component={About} />
      <Route
        path={routeCodes.POSTS}
        component={BlogPosts}
        onEnter={window.scroll(0, 0)}
      />
      <Route path={routeCodes.PHOTO_MAP} component={Photos} />
      <Route path={routeCodes.CONTACT} component={Contact} />
      <Route component={BlogPosts} />
    </Switch>
  );
}

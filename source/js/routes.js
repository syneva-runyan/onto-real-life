import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
const About = lazy(()=> import("./views/About/index.jsx"));
const BlogPosts = lazy(()=> import("./views/BlogPosts/index.js"));
const Contact = lazy(()=> import("./views/Contact/index.js"));
const Photos = lazy(()=> import("./views/Photos/index.js"));

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
    <Suspense fallback={<div>Page is Loading...</div>}>
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
    </Suspense>
  );
}

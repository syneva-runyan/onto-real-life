// index.js
// Determine if dev or prod env,
// load server || build static pages as appropriate.
import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';
import { createBrowserHistory, createMemoryHistory } from "history";

import { App } from "./views";
import { routes } from './routes';

// Load SCSS
import "../scss/app.scss";

if (global && typeof global.document !== 'undefined') {
  const history = createBrowserHistory();
  const rootEl = global.document.getElementById('app');
  ReactDOM.render(
      <BrowserRouter history={history} >
            <App />
      </BrowserRouter>
    , rootEl);
}

// For static page rendering,
// ensure that base path for all assets
// is set correctly.
const calcRelativeBase = (path) => {
  let base = '';

  // do not set base
  // for main index
  if (path === "/") {
    return null
  }

  let subfolders = (path.match(/\//g) || []).length;

  for(let i = 0; i < subfolders; i++) {
    base += "../";
  }
  return base;
}


/**
* Function exported for use by
* static-site-generator-webpack-plugin
*
* Render static HTML for a provided path
* as defined per StaticSiteGeneratorPlugin's config
* @param {object} data - Object passed in StaticSiteGeneratorPlugin & general webpack data 
*/
export default (data) => {
  // Assets defined in webpack config
  const history = createMemoryHistory();
  const assets = Object.keys(data.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));
  const devOptions = {
    options: null
  };
  // Get base path for assets relative to 
  // main index location
  const base = calcRelativeBase(data.path);
  const context = {};

  // Render html appropriate for path
  var html = ReactDOMServer.renderToStaticMarkup(
      (
        <StaticRouter location={data.path} context={context} history={history} >
            <App>
              {routes(context)}
            </App>
        </StaticRouter>
    ), data);

  return data.template({ css, js, base, html, htmlWebpackPlugin: devOptions});
}

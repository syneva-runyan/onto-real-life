import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactDOM } from 'react-dom'
import ReactDOMServer from 'react-dom/server';

import { App } from "./views";
import routes from './routes';

// Load SCSS
import "../scss/app.scss";


// if (typeof document != 'undefined') {
//   ReactDOM.render(
//     <BrowserRouter>{routes}</BrowserRouter>,
//     document.getElementById('#app')
//   )
// }

if (typeof global.document !== 'undefined') {
  const rootEl = global.document.getElementById('outlay');
  React.render(
    <App />,
    rootEl,
  );
}

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

export default (data) => {
  const assets = Object.keys(data.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));
  const base = calcRelativeBase(data.path);

  var html = ReactDOMServer.renderToStaticMarkup(
      (<App>
        {routes(data)}
      </App>
    ), data);

  return data.template({ css, js, base, html});
}

/**
 * This function is the global export that static-render-webpack-plugin uses
 */
/* Exported static site renderer */
/*export default (locals, callback) => {
    var html = ReactDOMServer.renderToStaticMarkup(
      (<Html>
        {routes(locals)}
      </Html>
    ), locals);
    callback(null, html)
}*/
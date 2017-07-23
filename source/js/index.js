import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ReactDOM } from 'react-dom'
import ReactDOMServer from 'react-dom/server';
import routes from './routes';

const Html = props =>
(<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Onto Real life" />
    <meta property="og:description" content="Going places and taking pictures." />
    <meta property="og:image" content="http://ontoreallife.com/assets/img/blogs/newZealandSouth/lakeMatheson.jpg" />
    <title>Onto real life</title>
  </head>
  <body>
    <div id="app">
        {props.children}
    </div>
    <script src="/app.js"></script>
  </body>
</html>);

if (typeof document != 'undefined') {
  ReactDOM.render(
    <BrowserRouter>{routes}</BrowserRouter>,
    document.getElementById('#app')
  )
}

/**
 * This function is the global export that static-render-webpack-plugin uses
 */
/* Exported static site renderer */
export default (locals, callback) => {
    var html = ReactDOMServer.renderToStaticMarkup(
      (<Html>
        {routes(locals)}
      </Html>
    ), locals);
    callback(null, html)
}
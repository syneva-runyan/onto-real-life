import React from "react";
import { Router } from "react-router";
import { renderToStaticMarkup } from "react-dom";

import routes from "routes";


// Load SCSS
import "../scss/app.scss";

// Render it to DOM
module.exports = function render(locals, callback) {
    Router.run(routes, )
}

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'routes';

// Load SCSS
import '../scss/app.scss';

// Render it to DOM
ReactDOM.render(
    <Routes />,
  document.getElementById('root')
);

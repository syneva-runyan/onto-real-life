import React, { Component } from "react";
import PropTypes from "prop-types";

import { Header } from "../../components/Global";
// import Routes from "../../routes";

const propTypes = {
  location: PropTypes.object,
};

const defaultProps = {
  location: {
    pathname: "",
  },
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/*<div className="Page">
          <Routes />
        </div>
        <Footer /> */}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

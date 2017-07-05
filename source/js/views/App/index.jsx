import React, { Component } from "react";
import PropTypes from "prop-types";

import { Header } from "../../components/Global";

const propTypes = {
  location: PropTypes.object
};

const defaultProps = {
  location: {
    pathname: ""
  }
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Header location={this.props.location} />
        <div className="Page">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Menu from "./Menu";

const propTypes = {
  location: PropTypes.object,
};

const defaultProps = {
  location: {
    pathname: "",
  },
};

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__lead">
          <span className="header__logo" />
          <Title />
          <span id="headerBorder" className="header__border" />
        </div>
        <Menu pathname={this.props.location.pathname} />
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

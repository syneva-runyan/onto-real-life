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
        <div className="header__box">
          <div className="header__section">
            <span className="header__logo" />
            <Title />
          </div>
          <div className="header__section header__section--lg">
            <Menu />
          </div>
        </div>
        <span id="headerBorder" className="header__border" />
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

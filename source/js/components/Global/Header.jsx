import React, { Component, createHook } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Menu from "./Menu";
import { debounce } from "lodash";

const propTypes = {
  location: PropTypes.object,
};

const defaultProps = {
  location: {
    pathname: "",
  },
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileScrollInit()
    this.state = {
      mobileShift: false
    }
  }

  mobileScrollInit() {
    window.addEventListener('scroll', debounce(this.checkForScroll))
  }

  checkForScroll = () => {
    if(document.documentElement.scrollTop > 0 && !this.state.mobileShift) {
      this.setState({ mobileShift: true});
    } else if (document.documentElement.scrollTop == 0 && this.state.mobileShift) {
      this.setState({ mobileShift: false});
    }
  }
  render() {
    return (
      <div className="header">
        <div className="header__box">
          <div className="header__section">
            <span className="header__logo" />
            <Title mobileShift={this.state.mobileShift} />
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

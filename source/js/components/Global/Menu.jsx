import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { routeCodes } from "../../routes";

const propTypes = {};

const defaultProps = {};

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      opened: false,
    };

    this.boundMenuToggle = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.listenForAltInteraction(!this.state.opened);
    this.setState({
      opened: !this.state.opened,
    });
  }

  listenForAltInteraction(shouldAdd) {
    if (shouldAdd) {
      // close menu on alternative interaction with page
      document.addEventListener("click", this.boundMenuToggle);
      return;
    }
    document.removeEventListener("click", this.boundMenuToggle);
  }

  postRouteAdjustments(postPath) {
    return postPath.replace("/(:postId)", "");
  }

  render() {
    const menuClassNames = this.state.opened
      ? "menu__nav menu--opened"
      : "menu__nav";

      return (<p>PLACEHOLDER</p>)
    /*return (
      <div className="menu">
        <button className="menu__cta" onClick={this.boundMenuToggle}>
          Menu
        </button>
        <nav className={menuClassNames}>
          <li className={`menu__item ${routeCodes.ABOUT}`}>
            <Link
              activeClassName="selected"
              to={routeCodes.ABOUT}
              onClick={this.boundMenuToggle}
            >
              About
            </Link>
          </li>
          <li className={`menu__item ${routeCodes.POSTS}`}>
            <Link
              activeClassName="selected"
              to={this.postRouteAdjustments(routeCodes.POSTS)}
              onClick={this.boundMenuToggle}
            >
              Blog Posts
            </Link>
          </li>
          <li className={`menu__item ${routeCodes.PHOTO_MAP}`}>
            <Link
              activeClassName="selected"
              to={routeCodes.PHOTO_MAP}
              onClick={this.boundMenuToggle}
            >
              Photo Map
            </Link>
          </li>
          <li className={`menu__item ${routeCodes.CONTACT}`}>
            <Link
              activeClassName="selected"
              to={routeCodes.CONTACT}
              onClick={this.boundMenuToggle}
            >
              Contact
            </Link>
          </li>
        </nav>
      </div>
    );*/
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

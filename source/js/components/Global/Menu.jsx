import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { routeCodes } from "../../routes";

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

    return (
      <div className="menu">
        <button className="menu__cta" onClick={this.boundMenuToggle}>
          Menu
        </button>
        <nav className={menuClassNames}>
          <li className={`menu__item ${routeCodes.ABOUT}`}>
            <NavLink
              activeClassName="selected"
              to={routeCodes.ABOUT}
              onClick={this.boundMenuToggle}
            >
              About
            </NavLink>
          </li>
          <li className={`menu__item ${routeCodes.POSTS}`}>
            <NavLink
              exact
              activeClassName="selected"
              to={this.postRouteAdjustments(routeCodes.POSTS)}
              onClick={this.boundMenuToggle}
            >
              Blog Posts
            </NavLink>
          </li>
          <li className={`menu__item ${routeCodes.PHOTO_MAP}`}>
            <NavLink
              activeClassName="selected"
              to={routeCodes.PHOTO_MAP}
              onClick={this.boundMenuToggle}
            >
              Photo Map
            </NavLink>
          </li>
          <li className={`menu__item ${routeCodes.CONTACT}`}>
            <NavLink
              activeClassName="selected"
              to={routeCodes.CONTACT}
              onClick={this.boundMenuToggle}
            >
              Contact
            </NavLink>
          </li>
        </nav>
      </div>
    );
  }
}

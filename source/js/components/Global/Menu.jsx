import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { routeCodes } from "../../routes";

const propTypes = {
  pathname: PropTypes.string,
};

const defaultProps = {
  pathname: "",
};

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      opened: false,
    };

    this.boundMenuToggle = this.toggleMenu.bind(this);
  }

  menuItemClass(linkTo, currentPath) {
    return linkTo === currentPath ? "menu__item selected" : "menu__item";
  }

  toggleMenu() {
    this.setState({
      opened: !this.state.opened,
    });
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
          <li
            className={this.menuItemClass(
              routeCodes.ABOUT,
              this.props.pathname,
            )}
          >
            <Link to={routeCodes.ABOUT} onClick={this.boundMenuToggle}>
              About
            </Link>
          </li>
          <li
            className={this.menuItemClass(
              this.postRouteAdjustments(routeCodes.POSTS),
              this.props.pathname,
            )}
          >
            <Link
              to={this.postRouteAdjustments(routeCodes.POSTS)}
              onClick={this.boundMenuToggle}
            >
              Blog Posts
            </Link>
          </li>
          <li
            className={this.menuItemClass(
              routeCodes.PHOTO_MAP,
              this.props.pathname,
            )}
          >
            <Link to={routeCodes.PHOTO_MAP} onClick={this.boundMenuToggle}>
              Photo Map
            </Link>
          </li>
          <li
            className={this.menuItemClass(
              routeCodes.CONTACT,
              this.props.pathname,
            )}
          >
            <Link to={routeCodes.CONTACT} onClick={this.boundMenuToggle}>
              Contact
            </Link>
          </li>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

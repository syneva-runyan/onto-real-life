import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      opened: false
    }

    this.boundMenuToggle = this.toggleMenu.bind(this);
  }

  menuItemClass(linkTo, currentPath) {
    return linkTo === currentPath ? 'menu__item selected' : 'menu__item';
  }

  toggleMenu() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    const menuClassNames = this.state.opened ? 'menu menu--opened' : 'menu';
    return (
      <nav className={menuClassNames}>
        <li className={this.menuItemClass(routeCodes.ABOUT, this.props.pathname)}>
          <Link
            to={routeCodes.ABOUT}
            onClick={this.boundMenuToggle}
          >
          About
        </Link>
        </li>
        <li className={this.menuItemClass(routeCodes.BLOG_POSTS, this.props.pathname)}>
          <Link
            to={routeCodes.BLOG_POSTS}
            onClick={this.boundMenuToggle}
          >
            Blog Posts
          </Link>
        </li>
        <li className={this.menuItemClass(routeCodes.PHOTO_MAP, this.props.pathname)}>
          <Link
            to={routeCodes.PHOTO_MAP}
            onClick={this.boundMenuToggle}
          >
            Photo Map
          </Link>
        </li>
        <li className={this.menuItemClass(routeCodes.CONTACT, this.props.pathname)}>
          <Link
            to={routeCodes.CONTACT}
            onClick={this.boundMenuToggle}
          >
            Contact
          </Link>
        </li>
      </nav>
    );
  }
}

import React, { useEffect, useState } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import { routeCodes } from "../../routes";
import { SearchPosts } from "../../components/SearchPosts";

export default function Menu() {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    if (opened) {
      // close menu on alternative interaction with page
      document.addEventListener("click", toggleMenu);
    } else {
      document.removeEventListener("click", toggleMenu);
    }
    return () => document.removeEventListener("click", toggleMenu);
  }, [opened, toggleMenu]);

  const postRouteAdjustments = (postPath) => {
    return postPath.replace("/(:postId)", "");
  };

    return (
      <div className="menu">
        <button className="menu__cta" onClick={toggleMenu}>
          Menu
        </button>
        <div className="menu__search">
          <SearchPosts />
        </div>
        <nav className={cx({
          "menu__nav": true,
          "menu--opened": opened,
        })}>
          <li className={`menu__item ${routeCodes.ABOUT}`}>
            <NavLink
              activeClassName="selected"
              to={routeCodes.ABOUT}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className={`menu__item ${routeCodes.POSTS}`}>
            <NavLink
              exact
              activeClassName="selected"
              to={postRouteAdjustments(routeCodes.POSTS)}
              onClick={toggleMenu}
            >
              Blog Posts
            </NavLink>
          </li>
          <li className={`menu__item ${routeCodes.PHOTO_MAP}`}>
            <NavLink
              activeClassName="selected"
              to={routeCodes.PHOTO_MAP}
              onClick={toggleMenu}
            >
              Photo Map
            </NavLink>
          </li>
          <li className={`menu__item ${routeCodes.CONTACT}`}>
            <NavLink
              activeClassName="selected"
              to={routeCodes.CONTACT}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </nav>
      </div>
    );
  }

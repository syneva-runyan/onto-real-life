import React, { Component } from "react";
import { Link } from "react-router";
import { routeCodes } from "../../routes";

export default class Title extends Component {
  render() {
    return (
      <Link className="title" to={routeCodes.HOME}>
        <span className="title__block">
          <span>On</span>
          <br />
          <span>To</span>
        </span>
        <bold className="title__text">
          R<span className="title--desktop">EAL</span>
        </bold>
        <span className="title__text">
          L<span className="title--desktop">IFE</span>
        </span>
      </Link>
    );
  }
}

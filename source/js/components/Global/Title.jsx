import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { routeCodes } from "../../routes";


const defaultProps = {
  mobileShift: false
};

const propTypes = {
  mobileShift: PropTypes.bool
};

export default class Title extends Component {
  render() {
    return (
      <Link className={`title ${this.props.mobileShift ? 'title--subtle' : ''}`} to={routeCodes.HOME}>
        <span className="title__block">
          <span>On</span>
          <br />
          <span>To</span>
        </span>
        <strong className="title__text">
          R<span className="title--desktop">EAL</span>
        </strong>
        <span className="title__text">
          L<span className="title--desktop">IFE</span>
        </span>
      </Link>
    );
  }
}

Title.defaulProps = defaultProps;
Title.propTypes = propTypes;

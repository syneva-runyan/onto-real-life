import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

const defaultProps = {
  next: null,
  prev: null,
};

export default class PostContextNav extends Component {
  render() {
    return (
      <div className="postContextNav">
        <p>
          This class should allow users to navigate to next and previous posts.
        </p>
      </div>
    );
  }
}

PostContextNav.propTypes = propTypes;
PostContextNav.defaultProps = defaultProps;

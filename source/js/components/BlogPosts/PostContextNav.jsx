import React, { Component } from "react";
import Link from "react-router";
import PropTypes from "prop-types";

const propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

const defaultProps = {
  next: null,
  prev: null,
};

export default function PostContextNav(props) {
  renderCTA = function(id, title, tagLine) {
    return (
      <Link to={`./${id}`}>
        {title}:{" "}
        {tagLine
          ? <em>
              : {tagLine}
            </em>
          : null}
      </Link>
    );
  };

  return (
    <div className="postContextNav">
      <p>
        {this.props.prev
          ? <p>
              Previous:{" "}
              {this.renderCTA(
                props.prev.id,
                props.prev.title,
                props.prev.tagLine,
              )}
            </p>
          : null}
        {this.props.next
          ? <p>
              Next:{" "}
              {this.renderCTA(
                props.next.id,
                props.next.title,
                props.next.tagLine,
              )}
            </p>
          : null}
      </p>
    </div>
  );
}

PostContextNav.propTypes = propTypes;
PostContextNav.defaultProps = defaultProps;

import React, { Component } from "react";
import { Link } from "react-router";
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
  const renderCTA = function(id, cta, title, tagLine, classNames) {
    return (
      <Link className={`btn postContextNav_cta ${classNames}`}>
        <strong>
          {cta}
        </strong>
        {title}
        {tagLine
          ? <em>
              : {tagLine}{" "}
            </em>
          : null}
      </Link>
    );
  };

  return (
    <div className="postContextNav">
      {props.prev
        ? renderCTA(
            props.prev.id,
            "Previous:  ",
            props.prev.title,
            props.prev.tagLine,
          )
        : null}
      {props.next
        ? renderCTA(
            props.next.id,
            "Next:  ",
            props.next.title,
            props.next.tagLine,
          )
        : null}
    </div>
  );
}

PostContextNav.propTypes = propTypes;
PostContextNav.defaultProps = defaultProps;

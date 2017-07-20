import React from "react";
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
  const renderCTA = function(id, cta, title, tagLine, arrowDirection) {
    return (
      <Link
        to={`/posts/${id}`}
        className={`btn postContextNav_cta postContextNav_cta--${arrowDirection} btn_arrow btn_arrow--${arrowDirection}`}
      >
        <strong>
          {cta}
        </strong>
        {title}
        {tagLine
          ? <em data-selector="postContextNav_tagline">
              : {tagLine}{" "}
            </em>
          : null}
      </Link>
    );
  };

  return (
    <div className="postContextNav">
      {props.next
        ? renderCTA(
            props.next.id,
            "Next:  ",
            props.next.title,
            props.next.tagLine,
            "right",
          )
        : null}
      {props.prev
        ? renderCTA(
            props.prev.id,
            "Previous:  ",
            props.prev.title,
            props.prev.tagLine,
            "left",
          )
        : null}
    </div>
  );
}

PostContextNav.propTypes = propTypes;
PostContextNav.defaultProps = defaultProps;

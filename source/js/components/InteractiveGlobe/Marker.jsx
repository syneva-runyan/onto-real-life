import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  isPost: false,
  tagline: "Welcome to my Hometown, the ATL",
  onClick: () => {},
  title: "",
};
const propTypes = {
  isPost: PropTypes.bool,
  tagline: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default function Marker(props) {
  return (
    <div className="marker">
      <h2 className="marker__title">{props.title}</h2>
      <p>{props.tagline}</p>
      {props.isPost ? <a data-test="marker-blog-cta">Read the Blog</a> : null }
      <button role="button" onClick={props.onClick} className="marker__galleryCta" data-test="marker-photos-cta">
        See Pictures <span className="marker__arrow">&rsaquo;</span>
      </button>
    </div>
  );
}

Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

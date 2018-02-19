import React from "react";
import PropTypes from "react-proptypes";

const defaultProps = {
    isPost: false,
    tagline: "Welcome to my Hometown, the ATL",
    onClick: () => {}
};
const propTypes = {
    isPost: PropTypes.bool,
    tagline: PropTypes.string,
    onClick: PropTypes.func,
};

export default function Marker(props) {
  return (
    <div className="marker">
      <p>Welcome to My Hometown, the ATL</p>
      {props.isPost ? <a data-test="marker-blog-cta">Read the Blog</a> : null }
      <a role="button" onClick={props.onClick} className="marker__galleryCta" data-test="marker-photos-cta">
        See Pictures <span className="marker__arrow">&rsaquo;</span>
      </a>
    </div>
  );
}

Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

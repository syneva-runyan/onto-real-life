import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  isBlogPost: false,
  tagline: "Welcome to my Hometown, the ATL",
  onClick: () => {},
  title: "",
  onClose: () => {},
};
const propTypes = {
  isBlogPost: PropTypes.bool,
  tagline: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default function Marker(props) {
  return (
    <div className="marker">
      <button className="we-pp-close" onClick={props.onClose}/>
      <h2 className="marker__title">{props.title}</h2>
      <p>{props.tagline}</p>
      {props.isBlogPost ? <a data-test="marker-blog-cta" className="btn" href={`posts/${props.id}`}>Read the Blog</a> : null }
      <button role="button" onClick={props.onClick} className="marker__galleryCta btn" data-test="marker-photos-cta">
        See Pictures
      </button>
    </div>
  );
}

Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;

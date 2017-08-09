import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    src: PropTypes.string,
    controls: PropTypes.bool
};

const defafultProps = {
    src: "",
    controls: true
}

export default function Video(props) {
    return (
      <video className="video" src={props.src} controls={props.controls} />
    );
}

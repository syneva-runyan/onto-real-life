import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel } from "../Carousel";

const propTypes = {
  closeGallery: PropTypes.func,
};
const defaultProps = {
  closeGallery: () => {},
};

export default class PhotoGallery extends Component {
  render() {
    return (
      <div className="photoGallery">
        <Carousel>
          <p>Gallery Will Go Here</p>
          <p>Gallery Will Go Here</p>
        </Carousel>
        <button
          onClick={this.props.closeGallery}
          data-test="photo-gallery-close"
        >
          Close
        </button>
      </div>
    );
  }
}

PhotoGallery.propTypes = propTypes;
PhotoGallery.defaultProps = defaultProps;

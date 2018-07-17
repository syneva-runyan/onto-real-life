import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel } from "../Carousel";
import { Modal } from '../Global';

const propTypes = {
  closeGallery: PropTypes.func,
  photos: PropTypes.array,
};
const defaultProps = {
  closeGallery: () => {},
  photos: [],
};

export default class PhotoGallery extends Component {
  renderCarouselSlides = () => {
    return this.props.photos.map(photoSrc => <img  onClick={e => e.stopPropagation()}key={photoSrc} src={photoSrc} /> )
  }
  render() {
    return (
      <Modal className="photoGallery" onClose={this.props.closeGallery}>
      <Carousel slides={this.renderCarouselSlides()} allowNavigation autoMove={false} />
    </Modal>
    );
  }
}

PhotoGallery.propTypes = propTypes;
PhotoGallery.defaultProps = defaultProps;

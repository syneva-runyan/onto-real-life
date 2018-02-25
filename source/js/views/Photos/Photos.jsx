import React, { Component } from "react";
import { Globe } from "../../components/InteractiveGlobe";
import { PhotoGallery } from "../../components/PhotoGallery";

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  toggleGallery() {
    this.setState({
      showGallery: !this.state.showGallery,
    });
  }
  render() {
    return (
      <div className="Page__content">
        <p>
          Click, rotate, and zoom the globe below to find then browse pictures
        </p>
        <Globe onMarkerClick={this.toggleGallery} />
        {this.state.showGallery
          ? <PhotoGallery closeGallery={this.toggleGallery} />
          : null}
      </div>
    );
  }
}

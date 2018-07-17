import React, { Component } from "react";
import { Globe, GlobeSettings } from "../../components/InteractiveGlobe";
import { PhotoGallery } from "../../components/PhotoGallery";
import markerData from "../../../data/photos/photgallerydata";
 

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,
      autoSpin: true,
      photos: [],
    };
  }
  toggleGallery = (markerIndex) => {
    this.setState({
      showGallery: !this.state.showGallery,
      photos: !this.state.showGallery ? markerData.markerData[markerIndex].photos || [] : [],
    });
  }
  toggleSpin = () => {
    this.setState({
      autoSpin: !this.state.autoSpin
    })
  }

  render() {
    return (
      <div className="Page__content">
        <div>
          <p>
            Click, rotate, and zoom the globe below to find then browse pictures
          </p>
          <GlobeSettings toggleSpin={this.toggleSpin} autoSpin={this.state.autoSpin}/>
        </div>
        <Globe onMarkerClick={this.toggleGallery} autoSpin={this.state.autoSpin} />
        {this.state.showGallery
          ? <PhotoGallery closeGallery={this.toggleGallery} photos={this.state.photos} />
          : null}
      </div>
    );
  }
}

/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import debounce from 'debounce';
import Marker from "./Marker";

import markerData from "../../../data/photos/photgallerydata";

const propTypes = {
  onMarkerClick: PropTypes.func,
};

const defaultProps = {
  onMarkerClick: () => {},
};

export default class Globe extends Component {
  constructor(props) {
    super(props);

    this.markerData = markerData;
    this.el = null;
    this.earth = null;

    this.handleMove = debounce(this.handleMove, 10);

    this.isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
  }
  componentDidMount() {
    this.createGlobe();
    this.placeMarkers();

    if(this.isMobile) {
      this.addMobileInteractions();
    }
  }

  addMobileInteractions() {
    const earth = document.getElementById('earth_div');
    this.canvas = earth.getElementsByTagName("canvas")[0];
    this.canvasWidth = this.canvas.offsetWidth;
    this.canvasHeight = this.canvas.offsetHeight;
    this.canvas.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.canvas.addEventListener("touchmove", this.handleMove.bind(this), false);
    // TODO consider adding momentum spin at touchend
  }

  handleStart(e) {
    this.startTouchX = e.touches[0].clientX;
    this.startTouchY = e.touches[0].clientY;
  }
  
  // TODO fix vertical flipping of globe
  handleMove(e) {
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    const earthCenter = this.earth.getCenter();
    const xChange = earthCenter[1] + (((this.startTouchX - touchX)/this.canvasWidth) * 7) % 180;
    const yChange = earthCenter[0] - (((this.startTouchY - touchY)/this.canvasHeight) * 7) % 180;
    this.earth.setView([yChange, xChange]);
  }

  createGlobe() {
    var options = { zoom: 1.5, position: [47.19537,8.524404] };
    if(this.isMobile) {
      // disable 3rd party dragging on mobile
      options.dragging = false;
    }
    var earth = new WE.map('earth_div', options); 
    var map = WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', options); 
    map.addTo(earth);
    this.earth = earth;
  }

  placeMarkers() {
    // for markes in some loaded json file
    const options = { zoom: 1.5, position: [47.19537, 8.524404] };
    this.createMarkers(options, this.markerData);
  }

  createMarkers(options, markerCollection) {
    markerCollection.markerData.forEach(markerInfo => {
      const marker = WE.marker([
        markerInfo.geoLocation.lat,
        markerInfo.geoLocation.lng,
      ]).addTo(this.earth);
      window[`loadMarkerContent${markerInfo.id}`] = this.renderMarker(
        markerInfo,
      ).bind(this);
      marker.element.onclick = this.renderMarker(markerInfo).bind(this);
      marker.bindPopup(`<div class="globe__marker">
<<<<<<< HEAD
        <div class="globe__markerImgContainer">
          <img class="globe__markerImg" id="${markerInfo.id}--img" src="${markerInfo.photos[0]}">
        </div>
          <div id="marker--${markerInfo.id}" class="globe__markerContent"/>
=======
        <img class="globe__markerImg" id="${markerInfo.id}--img" onload="loadMarkerContent${markerInfo.id}()" src="${markerInfo
        .photos[0]}" width="100" height="132">
        <div id="marker--${markerInfo.id}" class="globe__markerContent"/>
>>>>>>> 096d78304a7c78d7ea22dd181826e3c29aa0e80a
      </div>`);
    });
  }

  renderMarker(marker) {
    return function() {
      const el = document.getElementById(`marker--${marker.id}`);
      if (el && el.children.length === 0) {
        ReactDOM.render(
          <Marker
            onClick={this && this.props.onMarkerClick}
            tagline={marker.tagline}
            title={marker.location}
          />,
          el,
        );
      }
    };
  }

  render() {
    const backgroundStyles = {
      backgroundSize: "cover",
      width: "100%",
      height: window.innerHeight * 0.65,
      border: "1 px solid gray",
      padding: "2px",
    };
    return (
      <div
        style={{ position: "relative", boxShadow: "0px 0px 1px 1px #173b71ad" }}
      >
        <div
          style={{
            ...backgroundStyles,
            filter: "blur(2px)",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            backgroundImage: `url("assets/img/aeronautical-map.jpg")`,
          }}
        />
        <div
          id="earth_div"
          style={{
            ...backgroundStyles,
            backgroundColor: "#173b71ad",
          }}
        />
      </div>
    );
  }
}

Globe.propTypes = propTypes;
Globe.defaultProps = defaultProps;

/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import debounce from "debounce";
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

    this.isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }
  componentDidMount() {
    this.createGlobe();
    this.placeMarkers();

    if (this.isMobile) {
      this.addMobileInteractions();
    }

    if(this.props.autoSpin) {
      this.spinEarth();
    } else {
      this.stopSpinningEarth();
    }

    this.panToFix()
  }

  componentDidUpdate() {
    if(this.props.autoSpin) {
      this.spinEarth();
    } else {
      this.stopSpinningEarth();
    }
  }

  panToFix() {
    // TEMP FIX FOR BUG: [https://github.com/webglearth/webglearth2/issues/83]
    this.earth.panTo = function(center, opt_opts) { if (!center.length) center = [center['lat'], center['lng']]; opt_opts = opt_opts || {}; this.flyTo(center[0], center[1], undefined, undefined, 0, 0, opt_opts['duration']) };
  }

  isMarkerOpen(marker = {}) {
    if(marker.element) {
      const popup = marker.element.getElementsByClassName('we-pp')[0];
      return popup && popup.style.visibility === 'visible' || false;
    }

    return false;
  }

  spinEarth() {
    if(!this.spinningEarth && !this.isMarkerOpen(this.openMarker)) {
      var before = null;
      const animate = (now) => {
        if(this.earth) {
          var c = this.earth.getPosition();
          var elapsed = before? now - before: 0;
          before = now;
          this.earth.setCenter([c[0], c[1] + 0.1*(elapsed/20)]);
          this.spinningEarth = requestAnimationFrame(animate);
        }
      }

      this.spinningEarth = requestAnimationFrame(animate);
    }
  }

  stopSpinningEarth() {
    if(this.spinningEarth) {
      window.cancelAnimationFrame(this.spinningEarth);
      this.spinningEarth = undefined;
    }
  }

  addMobileInteractions() {
    const earth = document.getElementById("earth_div");
    this.canvas = earth.getElementsByTagName("canvas")[0];
    this.canvasWidth = this.canvas.offsetWidth;
    this.canvasHeight = this.canvas.offsetHeight;
    this.canvas.addEventListener(
      "touchstart",
      this.handleStart.bind(this),
      false,
    );
    this.canvas.addEventListener(
      "touchmove",
      this.handleMove.bind(this),
      false,
    );
    this.canvas.addEventListener("touchend", this.handleEnd.bind(this), false);
    // TODO consider adding momentum spin at touchend
  }

  handleStart(e) {
    e.stopPropagation();
    e.preventDefault();
    const earthCenter = this.earth.getCenter();
    this.startTouchX = e.touches[0].clientX;
    this.startTouchY = e.touches[0].clientY;
    this.startEarthX = earthCenter[1];
    this.startEarthY = earthCenter[0];
    this.startTouchTime = e.timestamp;
  }

  handleEnd() {
    // const endTouch = e.timestamp;
    // const touchDuration = endTouch - this.startTouchTime;
    // const earthCenter = this.earth.getCenter();
    // const changeX = earthCenter[1] - this.startEarthX;
    // const changeY = earthCenter[0] - this.startEarthY;
    // go an extra portion of the totla change
    // or order to implement a pseudo momentum,
    // with the portion traveling in this section
    // being defined by the speed
    // the user was spinning.
    // this.earth.panTo([newX, newY]);
  }

  // TODO fix vertical flipping of globe
  handleMove(e) {
    e.preventDefault();
    e.stopPropagation();
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    const earthCenter = this.earth.getCenter();
    const newX =
      earthCenter[1] + (this.startTouchX - touchX) / this.canvasWidth * 7 % 180;
    const newY =
      earthCenter[0] -
      (this.startTouchY - touchY) / this.canvasHeight * 7 % 180;
    this.earth.setView([newY, newX]);
  }

  createGlobe() {
    const options = { zoom: 1.5, position: [47.19537, 8.524404] };
    if (this.isMobile) {
      // disable 3rd party dragging on mobile
      options.dragging = false;
    }
    const earth = new WE.map("earth_div", options);
    const map = WE.tileLayer(
      "http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg",
      options,
    );
    map.addTo(earth);
    this.earth = earth;
  }

  placeMarkers() {
    // for markes in some loaded json file
    const options = { zoom: 1.5, position: [47.19537, 8.524404] };
    this.createMarkers(options, this.markerData);
  }

  createMarkers(options, markerCollection) {
    markerCollection.markerData.forEach((markerInfo, markerIndex) => {
      if(markerInfo.geoLocation && markerInfo.geoLocation.lat && markerInfo.geoLocation.lng) {
        const marker = WE.marker([
          markerInfo.geoLocation.lat,
          markerInfo.geoLocation.lng,
        ]).addTo(this.earth);
        window[`loadMarkerContent${markerInfo.id}`] = this.renderMarker(
          markerInfo,
          marker,
          markerIndex
        ).bind(this);
        marker.element.onclick = this.renderMarker(markerInfo, marker, markerIndex).bind(this);
        marker.bindPopup(`<div class="globe__marker marker">
          <div class="globe__markerImgContainer">
            <img class="globe__markerImg" id="${markerInfo.id}--img" src="${markerInfo
          .photos[0]}">
          </div>
            <div id="marker--${markerInfo.id}" class="globe__markerContent"/>
        </div>`);
      }
    });
  }

  onMarkerClick(markerIndex) {
    return () => {
      this.props.onMarkerClick(markerIndex);
    }
  }

  renderMarker(marker, markerObj, markerIndex) {
    return function() {
      // close any other open marker
      if(this.openMarker && this.openMarker !== markerObj) {
        this.openMarker.closePopup();
      }

      // keep track of open markers
      this.openMarker = markerObj;

      this.stopSpinningEarth();
      this.earth.panTo([
        marker.geoLocation.lat + 30,
        marker.geoLocation.lng,
      ], { duration: 1.5});

      const el = document.getElementById(`marker--${marker.id}`);
      if (el && el.children.length === 0) {
        ReactDOM.render(
          <Marker
            onClick={this && this.onMarkerClick(markerIndex)}
            title={marker.location}
            {...marker}
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
           // backgroundImage: `url("assets/img/aeronautical-map.jpg")`,
          }}
        />
        <div
          id="earth_div"
          style={{
            ...backgroundStyles,
            backgroundColor: "rgb(0, 0, 29)",
          }}
        />
      </div>
    );
  }
}

Globe.propTypes = propTypes;
Globe.defaultProps = defaultProps;

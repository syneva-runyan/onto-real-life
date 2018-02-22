import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Marker from "./Marker";

import markerData from '../../../data/photos/photgallerydata';

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
  }
  componentDidMount() {
    this.createGlobe();
    this.placeMarkers();
  }

  createGlobe() {
    var options = { zoom: 1.5, position: [47.19537,8.524404] };
    var earth = new WE.map('earth_div', options); 
    var map = WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', options); 
    map.addTo(earth);
    this.earth = earth;
  }

  placeMarkers() {
    // for markes in some loaded json file
    var options = { zoom: 1.5, position: [47.19537,8.524404] };
    this.createMarkers(options, this.markerData);
  }

  createMarkers(options, markerData) {
    markerData.markerData.forEach(markerInfo => {
      var marker = WE.marker([markerInfo.geoLocation.lat, markerInfo.geoLocation.lng]).addTo(this.earth);
      window[`loadMarkerContent${markerInfo.id}`] = this.renderMarker(markerInfo).bind(this);
      marker.bindPopup(`<div class="globe__marker">
        <img class="globe__markerImg" src="http://www.petsworld.in/blog/wp-content/uploads/2015/03/How-To-Make-Your-Puppy-Gain-Weight.jpg" onload="loadMarkerContent${markerInfo.id}()" width="100" height="132">
        <div id="marker--${markerInfo.id}" class="globe__markerContent"/>
      </div>`);
    });
  }

  renderMarker(marker) {
    return function() {
      const el = document.getElementById(`marker--${marker.id}`);

      if(el) {
        ReactDOM.render(<Marker
          onClick={this.props.onMarkerClick}
          tagline={marker.tagline}
          title={marker.title}
          />, el);
        } else {
          console.log("I need to figure out what to do here");
        }
    }
  }

  render() {
    const backgroundStyles= {
      "backgroundSize": 'cover',
      "width" : "100%",
      "height": window.innerHeight*0.65,
      "border": "1 px solid gray",
      "padding":"2px",
    };
    return (
      <div style={{"position": "relative", "boxShadow": "0px 0px 1px 1px #173b71ad"}}>
          <div 
            style={{
              ...backgroundStyles,
              filter: "blur(2px)",
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              "backgroundImage": `url("assets/img/aeronautical-map.jpg")`,
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

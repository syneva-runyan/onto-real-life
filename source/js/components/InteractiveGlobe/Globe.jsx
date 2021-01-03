/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "debounce";

const loadCesium = async ()=> { 
  const content = await import("cesium/Cesium");
  return content;
};

import markerData from "../../../data/photos/photgallerydata.js";

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
  async init() {
    window.Cesium = await loadCesium();
    if (!Cesium) {
      console.warn("Issues loading Cesium");
      return;
    }
    this.createGlobe();
    this.placeMarkers();
    // TODO re add spinning
    // if(this.props.autoSpin) {
    //   this.spinEarth();
    // } else {
    //   this.stopSpinningEarth();
    // }
  }

  componentDidMount() {
   this.init();
  }

  // componentDidUpdate() {
  //   if(this.props.autoSpin) {
  //     this.spinEarth();
  //   } else {
  //     this.stopSpinningEarth();
  //   }
  // }

  isMarkerOpen() {
    const popup = document.getElementsByClassName('cesium-infoBox-visible"')[0];
    return popup || false;
  }

  spinEarth() {
    if(!this.spinningEarth && !this.isMarkerOpen(this.openMarker)) {
      var before = null;
      const animate = (now) => {
        if(this.earth) {
          var c = this.earth.camera.position;
          var elapsed = before? now - before: 0;
          before = now;
          this.earth.camera.flyTo({
            destination: Cesium.Rectangle.fromDegrees(c.x + 0.1*(elapsed/20), c.y)
          });
          setTimeout(() => {
            this.spinningEarth = requestAnimationFrame(animate);
          }, 500);
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

  createGlobe() {
    const options = {
      animation: true,
      baseLayerPicker: false,
      sceneModePicker: false,
      homeButton: false,
      geocoder: false,
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=Uki1TJXtQzc8y1292iLl',
        tileWidth: 512,
        tileHeight: 512,
        credit: new Cesium.Credit("\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e", true)
      })
    };
    const earth = new Cesium.Viewer("earth_div", options);
    earth.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(47.19537, 8.524404, 8000000)
    });
    this.earth = earth;
  }

  placeMarkers() {
    var source = new Cesium.GeoJsonDataSource("locations");
    this.earth.dataSources.add(source);
    const cleanedData = this.markerData.markerData.map((data, idx) => {
      const popup = {
        ...data.properties,
        description: this.createPopup(data, idx)
      };
      return {
        geometry: {
          ...data.geometry,
          type: "Point",
        },
        properties: popup,
        id: data.id
      }
    })

    // LOAD DATA TO MAP
    source.load({
      type: "FeatureCollection",
      crs: {
          type: "name",
          properties: {
              name: "urn:ogc:def:crs:OGC:1.3:CRS84"
          }
      },
      features: cleanedData
    });
  }

  createPopup(markerInfo, markerIdx) {
    let markup =  `...${markerInfo.tagline}.`;
    if(markerInfo.isBlogPost) {
      markup += `  <a href='posts/${markerInfo.id}' target="_blank" rel="noopener noreferrer">Read the blog.</a>`;
    }

    window.top[`fn_otrl_${markerInfo.id}`] = () => {
      this.props.onMarkerClick(markerIdx);
    };
    const btnStyle = "background-color: #046; color: white; padding: 7px 12px; border: 0;";
    markup += `<br/><br/><button onclick="window.top.fn_otrl_${markerInfo.id}()" style="${btnStyle}">See the photos</button>`;
    return markup;
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

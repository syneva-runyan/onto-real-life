import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  images: PropTypes.array,
};

const defaultProps = {
  images: [
    "assets/img/about-me/face0.png",
    "assets/img/about-me/face1.png",
    "assets/img/about-me/face2.png",
    "assets/img/about-me/face3.png",
  ],
};

const cubeClass = "cube";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    if (props.images.length !== 4) {
      throw new Error("You must provide exactly 4 images to the face spinner");
    }

    this.state = {
      topCubeSide: Math.floor(Math.random(0) * 4),
      middleCubeSide: Math.floor(Math.random(0) * 4),
      bottomCubeSide: Math.floor(Math.random(0) * 4),
    };

    this.boundSpinCube = this.spinCube.bind(this);
  }

  renderSide(sideCount, image) {
    return (
      <div
        className={sideCount}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    );
  }

  renderSquareSides(side, images, sideToShow) {
    return (
      <div
        className={`${cubeClass} animateEx show-${sideToShow} ${side}`}
        data-sideShow={`${sideToShow}`}
      >
        {this.renderSide("zero", images[0])}
        {this.renderSide("first", images[1])}
        {this.renderSide("second", images[2])}
        {this.renderSide("third", images[3])}
      </div>
    );
  }

  determineNextSide(currentSide) {
    return (currentSide + 1) % 4;
  }

  setOrientation(cube, previousOrientation, nextOrientation) {
    cube.classList.remove(`show-${previousOrientation}`);
    cube.classList.add(`show-${nextOrientation}`);
    cube.setAttribute("data-sideShow", nextOrientation);
  }

  spinCube(e) {
    const target = e.target;
    const cube = target.nextSibling;

    const currentOrientation = cube.getAttribute("data-sideShow");
    const nextOrientation = this.determineNextSide(
      parseInt(currentOrientation),
    );

    this.setOrientation(cube, currentOrientation, nextOrientation);
  }

  render() {
    return (
      <div className="spinner">
        <div className="spinner__instructions">
          <p>Click a Cube To Spin</p>
        </div>
        <div className="spinner__block">
          <div className="click-trigger top" onClick={this.boundSpinCube} />
          {this.renderSquareSides(
            "top",
            this.props.images,
            this.state.topCubeSide,
          )}
          <div className="click-trigger middle" onClick={this.boundSpinCube} />
          {this.renderSquareSides(
            "middle",
            this.props.images,
            this.state.middleCubeSide,
          )}
          <div className="click-trigger bottom" onClick={this.boundSpinCube} />
          {this.renderSquareSides(
            "bottom",
            this.props.images,
            this.state.bottomCubeSide,
          )}
        </div>
      </div>
    );
  }
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

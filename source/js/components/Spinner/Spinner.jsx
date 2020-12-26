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

  // TODO make these changes with state
  // instead of adding and removing classes.
  setOrientation(cube, previousOrientation, nextOrientation) {
    cube.classList.remove(`show-${previousOrientation}`);
    cube.classList.add(`show-${nextOrientation}`);
    cube.setAttribute("data-side-show", nextOrientation);
  }

  determineNextSide(currentSide) {
    return (currentSide + 1) % 4;
  }

  spinCube(e) {
    const target = e.target;
    const cube = target.nextSibling;

    let currentOrientation = cube.getAttribute("data-side-show");
    currentOrientation = parseInt(currentOrientation, 10);
    const nextOrientation = this.determineNextSide(currentOrientation);

    this.setOrientation(cube, currentOrientation, nextOrientation);
  }

  renderSquareSides(side, images, sideToShow) {
    return (
      <div
        className={`${cubeClass} animateEx show-${sideToShow} ${side}`}
        data-side-show={`${sideToShow}`}
      >
        {this.renderSide("zero", images[0])}
        {this.renderSide("first", images[1])}
        {this.renderSide("second", images[2])}
        {this.renderSide("third", images[3])}
      </div>
    );
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

  render() {
    return (
      <div className="spinner">
        <div className="spinner__instructions">
          <p>Click a Cube To Spin</p>
        </div>
        <div className="spinner__block">
          <button className="click-trigger top" onClick={this.boundSpinCube} />
          {this.renderSquareSides(
            "top",
            this.props.images,
            this.state.topCubeSide,
          )}
          <button
            className="click-trigger middle"
            onClick={this.boundSpinCube}
          />
          {this.renderSquareSides(
            "middle",
            this.props.images,
            this.state.middleCubeSide,
          )}
          <button
            className="click-trigger bottom"
            onClick={this.boundSpinCube}
          />
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

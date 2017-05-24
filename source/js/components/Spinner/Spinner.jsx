import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        Spinner Goes Here
      </div>
    );
  }
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;


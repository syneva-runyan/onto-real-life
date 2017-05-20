import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class BlogPost extends Component {
  render() {
    return (
      <div className='header'>
        <h5>00 Month, 0000</h5>
        <h1>Title Goes here</h1>
        <h3>Tagline goes here</h3>
        <p>Blog Post Content Goes Here</p>
      </div>
    );
  }
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

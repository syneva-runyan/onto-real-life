import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  imgPreviewPath: PropTypes.string,
};

const defaultProps = {
  title: 'Post Title',
  tagLine: 'Post tagline',
  imgPreviewPath: 'assets/img/blogs/barcelona/preview.jpg',
};

export default class PostPreviewer extends Component {
  render() {
    return (
      <Link
        className='postPreviewer'
        style={ { backgroundImage: `src("${ this.props.imgPreviewPath }") ` } }
      >
        <h3>{ this.props.title }</h3>
        <h4>{ this.props.tagLine }</h4>
      </Link>
    );
  }
}

PostPreviewer.propTypes = propTypes;
PostPreviewer.defaultProps = defaultProps;


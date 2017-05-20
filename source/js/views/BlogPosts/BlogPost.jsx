import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostTitle } from '../../components/BlogPosts';

const propTypes = {};

const defaultProps = {};

export default class BlogPost extends Component {
  render() {
    return (
      <div className='header'>
        <PostTitle />
        <p>Blog Post Content Goes Here</p>
      </div>
    );
  }
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

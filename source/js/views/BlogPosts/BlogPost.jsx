import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostTitle } from '../../components/BlogPosts';
import postCatalog from '../../../data/posts';

const propTypes = {};

const defaultProps = {};

export default class BlogPost extends Component {
  render() {
    const post = postCatalog[this.props.params.postId];
  
    return (
      <div className='header'>
        <PostTitle
          title={ post.title }
          datePublished={ post.datePublished }
          tagLine={ post.tagLine }
         />
        <p>Blog Post Content Goes Here</p>
      </div>
    );
  }
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

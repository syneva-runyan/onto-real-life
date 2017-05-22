import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostTitle, PostContent } from '../../components/BlogPosts';
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
        <PostContent postId={this.props.params.postId} />
      </div>
    );
  }
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

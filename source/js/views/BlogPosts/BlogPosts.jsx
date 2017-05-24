import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostTitle, PostContent } from '../../components/BlogPosts';
import postCatalog from '../../../data/posts';
import PostCollection from './PostCollection';

const assetBasePath = './assets/img/blogs';

const propTypes = {};

const defaultProps = {};

export default class BlogPosts extends Component {
  renderCollection(assetBasePath) {
    return <PostCollection assetBasePath={ assetBasePath } />
  }

  renderPost(props, assetBasePath) {
    return (
    <div className='header'>
      <PostTitle
        title={ post.title }
        datePublished={ post.datePublished }
        tagLine={ post.tagLine }
        img = { `${ assetBasePath }/${ postId }` }
        />
      <PostContent postId={this.props.params.postId} />
    </div>
    );
  }
  
  render() {
    const post = postCatalog[this.props.params.postId];

    return (!post) ? renderPost(props, assetBasePath) : renderCollection(assetBasePath); 
  }
}

BlogPosts.propTypes = propTypes;
BlogPosts.defaultProps = defaultProps;

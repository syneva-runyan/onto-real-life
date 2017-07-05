import React, { Component } from "react";
import PropTypes from "prop-types";
import { PostTitle, PostContent } from "../../components/BlogPosts";
import postCatalog from "../../../data/posts";
import PostCollection from "./PostCollection";

const assetBasePath = "/assets/img/blogs";

const propTypes = {
  params: PropTypes.object,
};

const defaultProps = {
  params: null,
};

export default class BlogPosts extends Component {
  renderCollection(assetBase) {
    return <PostCollection assetBasePath={assetBase} />;
  }

  renderPost(post, postId, assetBase) {
    return (
      <div>
        <PostTitle
          title={post.title}
          datePublished={post.datePublished}
          tagLine={post.tagLine}
          imgPath={`${assetBase}/${postId}`}
        />
        <PostContent postId={postId} />
      </div>
    );
  }

  render() {
    const post = postCatalog[this.props.params.postId];
    return post
      ? this.renderPost(post, this.props.params.postId, assetBasePath)
      : this.renderCollection(assetBasePath);
  }
}

BlogPosts.propTypes = propTypes;
BlogPosts.defaultProps = defaultProps;

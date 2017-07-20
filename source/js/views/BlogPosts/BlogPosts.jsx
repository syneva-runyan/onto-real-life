import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  PostTitle,
  PostContent,
  PostContextNav,
} from "../../components/BlogPosts";
import postCatalog from "../../../data/posts";
import PostCollection from "./PostCollection";

const assetBasePath = "/assets/img/blogs";

const propTypes = {
  params: PropTypes.object,
};

const defaultProps = {
  params: {
    postId: null,
  },
};

export default class BlogPosts extends Component {
  getPostContext(collection, postId) {
    const postContext = {
      next: null,
      prev: null,
    };

    Object.keys(collection).forEach((item, index) => {
      if (item === postId) {
        const entriesArray = Object.entries(collection);
        postContext.next =
          (entriesArray[index - 1] && entriesArray[index - 1][1]) || null;
        postContext.prev =
          (entriesArray[index + 1] && entriesArray[index + 1][1]) || null;
      }
    });

    return postContext;
  }

  renderPost(post, postId, assetBase, postContext) {
    return (
      <div>
        <PostTitle
          title={post.title}
          datePublished={post.datePublished}
          tagLine={post.tagLine}
          imgPath={`${assetBase}/${postId}`}
        />
        <PostContent postId={postId} />
        <hr />
        <PostContextNav {...postContext} />
      </div>
    );
  }

  renderCollection(assetBase) {
    return <PostCollection assetBasePath={assetBase} />;
  }

  render() {
    const post = postCatalog[this.props.params.postId];

    if (post) {
      const postContext = this.getPostContext(
        postCatalog,
        this.props.params.postId,
      );

      return this.renderPost(
        post,
        this.props.params.postId,
        assetBasePath,
        postContext,
      );
    }

    return this.renderCollection(assetBasePath);
  }
}

BlogPosts.propTypes = propTypes;
BlogPosts.defaultProps = defaultProps;

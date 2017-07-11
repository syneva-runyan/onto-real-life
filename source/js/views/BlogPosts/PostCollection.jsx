import React, { Component } from "react";
import PropTypes from "prop-types";
import { PostPreviewer } from "../../components/BlogPosts";
import postCatalog from "../../../data/posts";

const propTypes = {
  assetBasePath: PropTypes.string,
};

const defaultProps = {
  assetBasePath: "/assets/img/blogs",
};

export default class BlogPosts extends Component {
  previewGallery(catalog, assetBasePath) {
    return Object.keys(catalog).map(item => {
      const itemContent = catalog[item];
      return (
        <PostPreviewer
          postId={itemContent.id}
          key={`post-${itemContent.id}`}
          title={itemContent.title}
          tagLine={itemContent.tagLine}
          assetPath={`${assetBasePath}/${itemContent.id}`}
        />
      );
    });
  }
  render() {
    return (
      <div className="blogPosts">
        <h2>Blog Posts</h2>
        <hr className="blogPosts__divider" />
        <div className="blogPosts__gallery">
          {this.previewGallery(postCatalog, this.props.assetBasePath)}
        </div>
      </div>
    );
  }
}

BlogPosts.propTypes = propTypes;
BlogPosts.defaultProps = defaultProps;

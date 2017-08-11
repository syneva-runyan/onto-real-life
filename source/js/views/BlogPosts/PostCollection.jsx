import React, { Component } from "react";
import PropTypes from "prop-types";
import { PostPreviewer } from "../../components/BlogPosts";

const propTypes = {
  assetBase: PropTypes.string,
  postCatalog: PropTypes.object,
};

const defaultProps = {
  assetBase: "/assets/img/blogs",
  postCatalog: {},
};

export default class PostCollection extends Component {
  previewGallery(catalog, assetBase) {
    return Object.keys(catalog).map(item => {
      const itemContent = catalog[item];
      return (
        <PostPreviewer
          postId={itemContent.id}
          key={`post-${itemContent.id}`}
          title={itemContent.title}
          tagLine={itemContent.tagLine}
          assetPath={`${assetBase}/${itemContent.id}`}
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
          {this.previewGallery(this.props.postCatalog, this.props.assetBase)}
        </div>
      </div>
    );
  }
}

PostCollection.propTypes = propTypes;
PostCollection.defaultProps = defaultProps;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { PostPreviewer } from "../../components/BlogPosts";
import { Carousel } from "../../components/Carousel";

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
    const gallery = [];
    catalog.forEach(post => {
      gallery.push(
        <PostPreviewer
          postId={post.id}
          key={`post-${post.id}`}
          title={post.title}
          tagLine={post.tagLine}
          assetPath={`${assetBase}/${post.id}`}
        />
      );
    });

    return gallery;
  }
  render() {
    console.log(this.props.postCatalog);
    const blogPostPreviews = this.previewGallery(
      this.props.postCatalog,
      this.props.assetBase,
    );
    return (
      <div className="blogPosts">
        <Carousel slides={blogPostPreviews} />
        <div className="blogPosts__gallery">
          {blogPostPreviews}
        </div>
      </div>
    );
  }
}

PostCollection.propTypes = propTypes;
PostCollection.defaultProps = defaultProps;

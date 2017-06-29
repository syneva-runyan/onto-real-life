import React, { Component } from "react";
import { PostPreviewer } from "../../components/BlogPosts";
import postCatalog from "../../../data/posts";

export default class BlogPosts extends Component {
  previewGallery(catalog, assetBasePath) {
    const gallery = [];

    for (let item in catalog) {
      const itemContent = catalog[item];
      gallery.push(
        <PostPreviewer
          postId={item}
          key={`post-${item}`}
          title={itemContent.title}
          tagLine={itemContent.tagLine}
          assetPath={`${assetBasePath}/${item}`}
        />
      );
    }

    return gallery;
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

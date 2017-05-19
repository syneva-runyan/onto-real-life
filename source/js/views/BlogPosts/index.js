import React, { Component } from 'react';
import { PostPreviewer } from '../../components/BlogPosts';
import postCatalog from '../../../data/posts';

const imgPreviewBase = './assets/img/blogs';

export default class BlogPosts extends Component {
  previewGallery(catalog) {
    const gallery = [];

    for (let item in catalog) {
      const itemContent = catalog[item];
      gallery.push(
        <PostPreviewer
          key={ `post-${ item }` }
          title={ itemContent.title }
          tagLine={ itemContent.tagLine }
          assetPath={ `${ imgPreviewBase }/${ item }` }
        />);
    }

    return gallery;
  }
  render() {
    return (
      <div className='blogPosts'>
        <h2>Blog Posts</h2>
        <hr className="blogPosts__divider" />
        <div className='blogPosts__gallery'>
          {this.previewGallery(postCatalog)}
        </div>
      </div>
    );
  }
}

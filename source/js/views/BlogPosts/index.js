import React, { Component } from 'react';
import { PostPreviewer } from '../../components/BlogPosts';
import postCatalog from '../../../data/posts';

const imgPreviewBase = './assets/img/blogs/';

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
          imgPreviewPath={ `${ imgPreviewBase }/${ item }/preiview.jpg` }
        />);
    }

    return gallery;
  }
  render() {
    return (
      <div className='BlogPosts'>
        <h2>Blog Posts</h2>
        <hr />
        {this.previewGallery(postCatalog)}
      </div>
    );
  }
}

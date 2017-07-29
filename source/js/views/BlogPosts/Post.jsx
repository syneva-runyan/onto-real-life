import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  PostTitle,
  PostContent,
  PostContextNav,
} from "../../components/BlogPosts";

const propTypes = {
  assetBase: PropTypes.string,
  postCatalog: PropTypes.object,
  match: PropTypes.object
};

const defaultProps = {
    assetBase: "/assets/img/blogs",
    postCatalog: {},
    match: {
        params: {
            postId: null
        }
    }
};

export default class Post extends Component {
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


  render() {
      const postId = this.props.match.params.postId;
      const post = this.props.postCatalog[postId];

      if (!post) {
          return <p>Post Not Found</p>
      }
      const postContext = this.getPostContext(this.props.postCatalog, postId);
     
      return (
        <div>
            <PostTitle
                title={post.title}
                datePublished={post.datePublished}
                tagLine={post.tagLine}
                imgPath={`${this.props.assetBase}/${postId}`}
            />
            <PostContent postId={postId} component={post.component} />
            <hr />
            <PostContextNav {...postContext} />
        </div>
        );
    }
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

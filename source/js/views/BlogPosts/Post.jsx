import React, { Component, Suspense } from "react";
import PropTypes from "prop-types";
import {
  PostTitle,
  PostContent,
  PostContextNav,
} from "../../components/BlogPosts";

const propTypes = {
  assetBase: PropTypes.string,
  postCatalog: PropTypes.object,
  match: PropTypes.object,
};

const defaultProps = {
  assetBase: "/assets/img/blogs",
  postCatalog: {},
  match: {
    params: {
      postId: null,
    },
  },
};

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    const post = this.props.postCatalog.get(postId);
    post && this.setPostContent(post);
  }
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

  async setPostContent(postInfo) {
    const postContent = await postInfo.component();
    this.setState({ postContent });
  }

  render() {
    const postId = this.props.match.params.postId;
    const post = this.props.postCatalog.get(postId);

    if (!post) {
      return <p>Post Not Found</p>;
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
        <PostContent postId={postId} component={this.state.postContent} />
        <hr />
        <PostContextNav {...postContext} />
      </div>
    );
  }
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { postCatalog } from "../../../data/posts";
import Post from "./Post";
import PostCollection from "./PostCollection";
import { routeCodes } from "../../routes";

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
  constructor(props) {
    super(props);

    this.postCollection = this.renderCollection(assetBasePath);
    this.post = this.renderPost(assetBasePath);
  }
  renderPost(assetBase) {
    return props =>
      <Post assetBase={assetBase} postCatalog={postCatalog} {...props} />;
  }

  renderCollection(assetBase) {
    return () =>
      <PostCollection assetBase={assetBase} postCatalog={postCatalog} />;
  }

  render() {
    return (
      <Switch>
        <Route path={`${routeCodes.POSTS}/:postId`} render={this.post} />
        <Route render={this.postCollection} />
      </Switch>
    );
  }
}

BlogPosts.propTypes = propTypes;
BlogPosts.defaultProps = defaultProps;

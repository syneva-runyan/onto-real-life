import React, { Component } from "react";
import PropTypes from "prop-types";
import PostHelper from "../../utils/post-helper";
// TODO move not found msg to component instead of view
import { NotFound } from "../../views";

// const FroalaEditor = require("react-froala-wysiwyg");

// Require Editor JS files.
require("froala-editor/js/froala_editor.pkgd.min.js");
// Require Editor CSS files.
require("froala-editor/css/froala_style.min.css");
require("froala-editor/css/froala_editor.pkgd.min.css");

// Require Font Awesome.
require("font-awesome/css/font-awesome.css");

const propTypes = {
  postId: PropTypes.string,
  content: PropTypes.func,
};

const defaultProps = {
  postId: null,
  content: NotFound,
};

export default class PostContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: false,
      config: {},
    };

    this.boundSavePost = this.savePost.bind(this);
  }

  savePost() {
    PostHelper.savePost(this.state.postId, this.state.content);
  }

  render() {
    return (
      <div className="postContent">
        {/*
        <div className="editor">
          <FroalaEditor
            tag='textarea'
            model={this.state.content}
            config={this.config}
          />
          <button onClick={this.boundSavePost}>Save</button>
        </div> */}
        <this.props.content />
      </div>
    );
  }
}

PostContent.propTypes = propTypes;
PostContent.defaultProps = defaultProps;

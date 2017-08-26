import React, { Component } from "react";
import PropTypes from "prop-types";
import PostHelper from "../../utils/post-helper";
import { NotFound } from "../Global";

// const FroalaEditor = require("react-froala-wysiwyg");
// const FroalaEditorView = require("react-froala-wysiwyg/FroalaEditorView");

// Require Editor JS files.
// require("froala-editor/js/froala_editor.pkgd.min.js");
// Require Editor CSS files.
// require("froala-editor/css/froala_style.min.css");
// require("froala-editor/css/froala_editor.pkgd.min.css");

// Require Font Awesome.
// require("font-awesome/css/font-awesome.css");








const propTypes = {
  postId: PropTypes.string,
  component: PropTypes.func,
};

const defaultProps = {
  postId: null,
  component: NotFound,
};

export default class PostContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: false,
      config: {},
      postId: props.postId,
    };

    this.boundSavePost = this.savePost.bind(this);
  }

  savePost() {
    PostHelper.savePost(this.state.postId, this.state.content);
  }

  // TODO look into tree shaking img resources within foala editor view.
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
        {/* <FroalaEditorView model={this.state.content} />*/}
        <this.props.component />
      </div>
    );
  }
}

PostContent.propTypes = propTypes;
PostContent.defaultProps = defaultProps;

import React, { Component } from "react";
import PropTypes from "prop-types";
import PostHelper from "../../utils/post-helper";

// const FroalaEditor = require("react-froala-wysiwyg");
const FroalaEditorView = require("react-froala-wysiwyg/FroalaEditorView");

// Require Editor JS files.
require("froala-editor/js/froala_editor.pkgd.min.js");
// Require Editor CSS files.
require("froala-editor/css/froala_style.min.css");
require("froala-editor/css/froala_editor.pkgd.min.css");

// Require Font Awesome.
require("font-awesome/css/font-awesome.css");

const propTypes = {
  postId: PropTypes.string,
};

const defaultProps = {
  postId: null,
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
    this.boundSetPostContent = this.setPostContent.bind(this);
  }

  componentDidMount() {
    PostHelper.getPost(this.state.postId, this.boundSetPostContent);
  }

  componentWillReceiveProps(props) {
    if (props.postId !== this.state.postId) {
      window.scrollTo(0, 0);
      PostHelper.getPost(this.props.postId, this.boundSetPostContent);
    }
  }

  // TODO post GET failures
  setPostContent(postContent) {
    this.setState({
      content: postContent,
    });
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
        <FroalaEditorView model={this.state.content} />
      </div>
    );
  }
}

PostContent.propTypes = propTypes;
PostContent.defaultProps = defaultProps;

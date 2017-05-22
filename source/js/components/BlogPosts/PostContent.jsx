import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostHelper from '../../utils/post-helper';

// Require Editor JS files.
require("froala-editor/js/froala_editor.pkgd.min.js");
// Require Editor CSS files.
require("froala-editor/css/froala_style.min.css");
require("froala-editor/css/froala_editor.pkgd.min.css");

// Require Font Awesome.
require('font-awesome/css/font-awesome.css');

var FroalaEditor = require('react-froala-wysiwyg');
var FroalaEditorView = require('react-froala-wysiwyg/FroalaEditorView');


const propTypes = {};

const defaultProps = {};

export default class PostContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: false,
      config: {},
    };

    this.boundSavePost = this.savePost.bind(this);
  }

  componentDidMount() {
    PostHelper.getPost(this.props.postId, this.setPostContent.bind(this));
  }

  //TODO post GET failures
  setPostContent(postContent) {
    this.setState({
      content: postContent, 
    });
  }

  savePost() {
    PostHelper.savePost(this.props.postId, this.state.content);
  }

  render() {
    return (
      <div className="postContent">
        {   /* 
        <div className="editor">
          <FroalaEditor
            tag='textarea'
            model={this.state.content}
            config={this.config}
          />
          <button onClick={this.boundSavePost}>Save</button>
        </div> */ }
        <FroalaEditorView model={this.state.content} />
      </div>
    );
  }
}

PostContent.propTypes = propTypes;
PostContent.defaultProps = defaultProps;

import React, { Component, useState, useEffect } from "react";
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

export default function Post(props) {
    const [postId, setPostId] = useState(null);
    const [postContent, setPostContent] = useState();
    const [postContext, setPostContext] = useState(null);
    const [post, setPost] = useState(null);

    useEffect(() => {
      setupPost();
      scrollToTop();
    }, [props.match.params.postId]);
  
    useEffect(() => {
      setupPost();
    }, []);
  
  const setupPost = () => {
    const postId = props.match.params.postId;
      setPostId(postId);
      const post = props.postCatalog.get(postId);
      setPost(post);
      post && getPostContent(post);
      post && getPostContext(props.postCatalog, postId);

  }

  const scrollToTop = () => {
    window.scrollTo(0,0);
  }
  const getPostContext = (postMap, postId) => {
    const postContext = {
      next: null,
      prev: null,
    };

    const collection = Object.fromEntries(postMap);
    Object.keys(collection).forEach((item, index) => {
      if (item === postId) {
        const entriesArray = Object.entries(collection);
        postContext.next =
          (entriesArray[index - 1] && entriesArray[index - 1][1]) || null;
        postContext.prev =
          (entriesArray[index + 1] && entriesArray[index + 1][1]) || null;
      }
    });

    setPostContext(postContext);
  }

  const getPostContent = async (postInfo) => {
    const postContent = await postInfo.component();
    setPostContent(postContent);
  }

  if (post == null) {
    return <p>Post Not Found</p>;
  }
  return (
    <div>
      <PostTitle
        title={post.title}
        datePublished={post.datePublished}
        tagLine={post.tagLine}
        imgPath={`${props.assetBase}/${postId}`}
      />
      <PostContent postId={postId} component={postContent} />
      <hr />
      <PostContextNav {...postContext} />
    </div>
  );
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

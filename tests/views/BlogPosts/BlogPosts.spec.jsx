import React from "react";
import { BlogPosts } from "../../../source/js/views/BlogPosts/index.js";
import {
  PostTitle,
  PostContent
} from "../../../source/js/components/BlogPosts";
import PostCollection from "../../../source/js/views/BlogPosts/PostCollection";
import postCatalog from "../../../source/data/posts";
import { shallow } from "enzyme";

jest.mock("../../../source/data/posts");

describe("BlogPosts", () => {
  let component;

  beforeEach(() => {
    component = shallow(<BlogPosts />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
  it("should render blog post collection if not provided a postId", () => {
    const postCollection = component.find(PostCollection);
    expect(postCollection.length).toEqual(1);
  });
  it("should render blog post title and content iff proved postId", () => {
    const postParams = {
      postId: "mockedPost"
    };
    component = shallow(<BlogPosts params={postParams} />);

    const blogPostTitle = component.find(PostTitle);
    const blogPostContent = component.find(PostContent);

    expect(blogPostContent.length).toEqual(1);
    expect(blogPostTitle.length).toEqual(1);
  });
});
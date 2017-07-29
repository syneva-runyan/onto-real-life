import React from "react";
import { BlogPosts } from "../../../source/js/views/BlogPosts/index.js";
import { PostCollection, Post } from "../../../source/js/views/BlogPosts";
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
 
  it("should render PostCollection with renderCollection's closure", () => {
    const collectionRenderFn = component.instance().renderCollection("someBasePath");
    const postCollection = collectionRenderFn();
    const renderedCollection = shallow(postCollection);
    const collection = renderedCollection.find(PostCollection);

    expect(collection.root.length).toEqual(1);
  });

  it("should render post with renderPost's closure", () => {
    const postRenderFn = component.instance().renderPost("someBasePath");
    const postRenderer = postRenderFn();
    const renderedCollection = shallow(postRenderer);
    const post = renderedCollection.find(Post);

    expect(post.root.length).toEqual(1);
  });
});

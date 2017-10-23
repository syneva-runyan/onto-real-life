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

  it("should hold a copy of a PostCollection on the state", () => {
    const postCollectionFn = component.instance().renderCollection("somebase");
    const postCollection = postCollectionFn("somebase");

    expect(postCollection.type).toEqual(PostCollection);
  });

  it("should render post with renderPost's closure", () => {
    const postRenderFn = component.instance().renderPost("someBasePath");
    const post = postRenderFn("somebase");

    expect(post.type).toEqual(Post);
  });
});

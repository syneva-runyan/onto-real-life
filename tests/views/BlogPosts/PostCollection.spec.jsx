import React from "react";
import PostCollection from "../../../source/js/views/BlogPosts/PostCollection";
import { PostPreviewer } from "../../../source/js/components/BlogPosts";
import postCatalog from "../../../source/data/posts";
import { shallow } from "enzyme";

jest.mock("../../../source/data/posts");

describe("Post Collection", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostCollection />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
  it("should render blog post preview for each blog post available", () => {
    // See mocked blog posts under source/data/__mocks__
    const postPreviewers = component.find(PostPreviewer);
    expect(postPreviewers.length).toEqual(2);
  });
});

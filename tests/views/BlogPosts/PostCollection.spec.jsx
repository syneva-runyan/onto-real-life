import React from "react";
import PostCollection from "../../../source/js/views/BlogPosts/PostCollection";
import { PostPreviewer } from "../../../source/js/components/BlogPosts";
import postCatalogMock from "../../../source/data/posts/__mocks__";
import { shallow } from "enzyme";

describe("Post Collection", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostCollection postCatalog={postCatalogMock} />);
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

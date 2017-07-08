import React from "react";
import { BlogPosts } from "../../source/js/views/BlogPosts/index.js";
import { shallow } from "enzyme";

describe("BlogPosts", () => {
  let component;

  beforeEach(() => {
    component = shallow(<BlogPosts />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

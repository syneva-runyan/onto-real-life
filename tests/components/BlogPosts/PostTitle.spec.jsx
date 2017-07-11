import React from "react";
import PostTitle from "../../../source/js/components/BlogPosts/PostTitle";
import { shallow } from "enzyme";

describe("Post Title", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostTitle />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });

  it("should display tagline iff one is provided", () => {
    expect(component.find(".postTitle__tagLine").length).toEqual(0);

    component = shallow(<PostTitle tagLine="tagLine" />);
    expect(component.find(".postTitle__tagLine").length).toEqual(1);
  });
});

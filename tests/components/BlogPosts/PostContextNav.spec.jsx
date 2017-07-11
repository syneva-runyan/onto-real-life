import React from "react";
import PostContextNav from "../../../source/js/components/BlogPosts/PostContextNav";
import { shallow } from "enzyme";

describe("Post Context Nav", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostContextNav />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

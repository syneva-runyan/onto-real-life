import React from "react";
import PostPreviewer from "../../../source/js/components/BlogPosts/PostPreviewer";
import { shallow } from "enzyme";

describe("Post Previewer", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostPreviewer />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
  it("should render tagline iff provided tagline prop", () => {
    expect(component.find(".postPreviewer__tagline").length).toEqual(0);

    component = shallow(<PostPreviewer tagLine="tagline" />);
    expect(component.find(".postPreviewer__tagline").length).toEqual(1);
  });
});

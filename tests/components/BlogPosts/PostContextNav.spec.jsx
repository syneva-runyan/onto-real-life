import React from "react";
import PostContextNav from "../../../source/js/components/BlogPosts/PostContextNav";
import { shallow } from "enzyme";

describe("Post Context Nav", () => {
  let component;
  const entryDetails = {
    id: "id",
    title: "title",
    tagLine: "tagLine",
  };

  beforeEach(() => {
    component = shallow(<PostContextNav />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
  it("should render a next btn iff provided next post", () => {
    let nextBtn = component.find(".postContextNav--next");
    expect(nextBtn.length).toEqual(0);

    component = shallow(<PostcontextNav next={entryDetails} />);
    nextBtn = component.find(".postContextNav--next");
    expect(nextBtn.length).toEqual(1);
  });
  it("should render a previous btn iff provided previous post", () => {
    let prevBtn = component.find(".postContextNav--next");
    expect(prevBtn.length).toEqual(0);

    component = shallow(<PostcontextNav next={entryDetails} />);
    prevBtn = component.find(".postContextNav--next");

    expect(prevBtn.length).toEqual(1);
  });
});

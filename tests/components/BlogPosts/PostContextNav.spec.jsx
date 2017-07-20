import React from "react";
import { Link } from "react-router";
import { PostContextNav } from "../../../source/js/components/BlogPosts";
import { shallow } from "enzyme";

describe("Post Context Nav", () => {
  let component;
  const entryDetails = {
    id: "id",
    title: "title",
    tagLine: "tagLine",
  };

  const entryDetails1 = {
    id: "id",
    title: "title",
  };

  beforeEach(() => {
    component = shallow(<PostContextNav />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
  it("should render a next btn iff provided next post", () => {
    let nextBtn = component.find(".btn_arrow--right");
    expect(nextBtn.length).toEqual(0);

    component = shallow(<PostContextNav next={entryDetails} />);
    nextBtn = component.find(".btn_arrow--right");
    expect(nextBtn.length).toEqual(1);
  });
  it("should render a previous btn iff provided previous post", () => {
    let prevBtn = component.find(".btn_arrow--left");
    expect(prevBtn.length).toEqual(0);

    component = shallow(<PostContextNav prev={entryDetails} />);
    prevBtn = component.find(".btn_arrow--left");

    expect(prevBtn.length).toEqual(1);
  });
  describe("RenderCTA", () => {
    it("should render an intalizied tagline iff a tagline is provided", () => {
      component = shallow(<PostContextNav next={entryDetails} />);
      let tagline = component.find('[data-selector="postContextNav_tagline"]');
      expect(tagline.length).toEqual(1);

      component = shallow(<PostContextNav next={entryDetails1} />);
      tagline = component.find('[data-selector="postContextNav_tagline"]');
      expect(tagline.length).toEqual(0);
    });
  });
});

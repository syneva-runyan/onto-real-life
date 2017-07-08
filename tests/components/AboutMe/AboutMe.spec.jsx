import React from "react";
import { AboutMe } from "../../../source/js/components/AboutMe";
import { shallow } from "enzyme";

describe("About Me", () => {
  let component;

  beforeEach(() => {
    component = shallow(<AboutMe />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

import React from "react";
import About from "../../../source/js/views/About/index.jsx";
import { shallow } from "enzyme";

describe("About", () => {
  let component;

  beforeEach(() => {
    component = shallow(<About />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

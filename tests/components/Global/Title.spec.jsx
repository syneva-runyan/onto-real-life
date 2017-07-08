import React from "react";
import Title from "../../../source/js/components/Global/Title";
import { shallow } from "enzyme";

describe("Title", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Title />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

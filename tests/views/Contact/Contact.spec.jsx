import React from "react";
import { Contact } from "../../../source/js/views/Contact";
import { shallow } from "enzyme";

describe("Contact", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Contact />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

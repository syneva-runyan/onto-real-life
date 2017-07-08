import React from "react";
import NotFound from "../../../source/js/views/NotFound/index.jsx";
import { shallow } from "enzyme";

describe("Contact", () => {
  let component;

  beforeEach(() => {
    component = shallow(<NotFound />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

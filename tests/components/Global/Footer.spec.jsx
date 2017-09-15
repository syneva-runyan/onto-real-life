import React from "react";
import Footer from "../../../source/js/components/Global/Footer";
import { shallow } from "enzyme";

describe("Header", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

import React from "react";
import { Spinner } from "../../../source/js/components/Spinner";
import { shallow } from "enzyme";

describe("Spinner", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Spinner />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

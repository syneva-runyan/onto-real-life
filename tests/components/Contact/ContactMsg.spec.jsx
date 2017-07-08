import React from "react";
import { ContactMsg } from "../../../source/js/components/Contact";
import { shallow } from "enzyme";

describe("Contact Msg", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContactMsg />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

import React from "react";
import SocialShares from "../../../source/js/components/Global/SocialShares";
import { shallow } from "enzyme";

describe("Responsive Img", () => {
  let component;

  beforeEach(() => {
    component = shallow(<SocialShares />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

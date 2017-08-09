import React from "react";
import Video from "../../../source/js/components/Global/Video";
import { shallow } from "enzyme";

describe("Video", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Video />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
});

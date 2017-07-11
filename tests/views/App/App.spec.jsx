import React from "react";
import { App } from "../../../source/js/views/App";
import { Header } from "../../../source/js/components/Global";
import { shallow } from "enzyme";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });
  it("should render Header Element", () => {
    const HeaderComp = component.find(Header);
    expect(HeaderComp.length).toEqual(1);
  });
});

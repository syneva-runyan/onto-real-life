import React from "react";
import Menu from "../../../source/js/components/Global/Menu";
import { shallow } from "enzyme";

describe("Menu", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Menu />);
  });

  describe("Toggle Menu", () => {
    it("should toggle open state on click of link", () => {
      expect(component.instance().state.opened).toEqual(false);

      const menuLink = component.find("Link").get(0);

      menuLink.props.onClick();
      expect(component.instance().state.opened).toEqual(true);
      menuLink.props.onClick();
      expect(component.instance().state.opened).toEqual(false);
    });
  });
});

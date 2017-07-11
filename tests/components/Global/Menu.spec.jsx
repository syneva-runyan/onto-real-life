import React from "react";
import Menu from "../../../source/js/components/Global/Menu";
import { shallow } from "enzyme";

describe("Menu", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Menu />);
  });
  describe("menuItemClass", () => {
    it("should return selected class name iff provided paths are equal", () => {
      const sameName = "same";

      expect(component.instance().menuItemClass(sameName, sameName)).toContain(
        "selected"
      );
      expect(
        component.instance().menuItemClass(sameName, "somethingDifferent")
      ).not.toContain("selected");
    });
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

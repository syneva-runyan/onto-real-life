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
  it("should throw error if provided image set !equal length of 4", () => {
    const errText = "You must provide exactly 4 images to the face spinner";

    expect(() => {
      shallow(<Spinner images={[]} />);
    }).toThrow(new Error(errText));
  });

  it("should determine next orientation & call setOrientation on click of trigger btn", () => {
    const trggr = component.find("button").get(1);
    const nextOrientationSpy = jest.spyOn(
      component.instance(),
      "determineNextSide"
    );
    const setOrientationSpy = jest.spyOn(
      component.instance(),
      "setOrientation"
    );
    const mockSqr = document.createElement("div");
    mockSqr.setAttribute("data-sideShow", 0);
    const mockEvent = {
      target: {
        nextSibling: mockSqr
      }
    };

    trggr.props.onClick(mockEvent);

    expect(nextOrientationSpy).toHaveBeenCalled();
    expect(setOrientationSpy).toHaveBeenCalledWith(mockSqr, 0, 1);
  });

  describe("determineNextSide", () => {
    it("should increment provided value and mod by 4", () => {
      const func = component.instance().determineNextSide;

      expect(func(3)).toEqual(0);
      expect(func(0)).toEqual(1);
    });
  });
});

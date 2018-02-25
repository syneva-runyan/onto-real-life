import React from "react";
import ReactDOM from "react-dom";
import { Globe } from "../../../source/js/components/InteractiveGlobe";
import { shallow } from "enzyme";

describe("Globe", () => {
  let component;
  let createGlobeSpy;
  let placeMarkersSpy;

  beforeEach(() => {
    component = shallow(<Globe />);

    createGlobeSpy = spyOn(component.instance(), "createGlobe");
    placeMarkersSpy = spyOn(component.instance(), "placeMarkers");
  });
  it("should create a globe and place markers after mounting", () => {
    component.instance().componentDidMount();

    expect(createGlobeSpy).toHaveBeenCalled();
    expect(placeMarkersSpy).toHaveBeenCalled();
  });

  it("should render marker content with ReactDOM iff provided el does not have children", () => {
    window.document.getElementById = jest.fn();
    window.document.getElementById.mockReturnValueOnce({
      children: [],
    });
    const renderSpy = spyOn(ReactDOM, "render");
    let markerRenderer = component.instance().renderMarker({
      id: "test",
    });
    markerRenderer();
    expect(renderSpy).toHaveBeenCalled();
    renderSpy.calls.reset();
    window.document.getElementById.mockReturnValueOnce({
      children: [{}],
    });

    markerRenderer = component.instance().renderMarker({
      id: "test",
    });
    markerRenderer();
    expect(renderSpy).not.toHaveBeenCalled();
  });
});

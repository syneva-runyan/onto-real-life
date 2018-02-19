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

    createGlobeSpy = spyOn(component.instance(), 'createGlobe');
    placeMarkersSpy = spyOn(component.instance(), 'placeMarkers');
  });
  it("should create a globe and place markers after mounting", () => {
    component.instance().componentDidMount();

    expect(createGlobeSpy).toHaveBeenCalled();
    expect(placeMarkersSpy).toHaveBeenCalled();
  });

  it("should render marker content with ReactDOM", () => {
    const renderSpy = spyOn(ReactDOM, "render");
    component.instance().renderMarker();
    expect(renderSpy).toHaveBeenCalled();
  });   
});

import React from "react";
import { Photos } from "../../../source/js/views/Photos";
import { PhotoGallery } from "../../../source/js/components/PhotoGallery";
import { shallow } from "enzyme";

describe("Photos View", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Photos />);
  });
  it("should not render a photo gallery by default", () => {
    const gallery = component.find(PhotoGallery);

    expect(gallery.length).toEqual(0);
  });
  it("should render a photo gallery when toggled", () => {
      component.instance().toggleGallery();
      component.update();
      const gallery = component.find(PhotoGallery);

    expect(gallery.length).toEqual(1);
  });
});

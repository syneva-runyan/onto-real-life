import React from "react";
import { PhotoGallery } from "../../../source/js/components/PhotoGallery";
import { shallow } from "enzyme";
import Carousel from "../../../source/js/components/Carousel/Carousel";

describe("PhotoGallery", () => {
  let component;
  const clickSpy = jest.fn()

  beforeEach(() => {
    component = shallow(<PhotoGallery closeGallery={clickSpy} />);
  });
  it("should render a Carousel", () => {
      const carousel = component.find(Carousel);
    expect(carousel.length).toEqual(1);
  });
  it("should call the provided function when clicking on the close button", () => {
    const closeBtn = component.find("[data-test='photo-gallery-close']");
    closeBtn.first().simulate("click");
    expect(clickSpy).toHaveBeenCalled();
});
});

import React from "react";
import { Carousel } from "../../../source/js/components/Carousel";
import { shallow, render } from "enzyme";

jest.mock("../../../source/js/utils/post-helper");

describe("Post Content", () => {
    let component;
  const exSlide = "Ex Slide content";
  const mockSlides = [exSlide, exSlide, exSlide] ;
  const exAniDuration = 2000

  beforeEach(() => {
    component = shallow(<Carousel aniDuration={exAniDuration} slides={mockSlides} />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });

  it("should generate a slide for every 'slide'", () => {
   const slides = component.find(".carousel__slide");

   expect(slides.length).toEqual(3);
  });
});

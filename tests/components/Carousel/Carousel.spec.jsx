import React from "react";
import { Carousel } from "../../../source/js/components/Carousel";
import { shallow, render } from "enzyme";

jest.mock("../../../source/js/utils/post-helper");

describe("Post Content", () => {
  let component;
  const exSlide = "Ex Slide content";
  const mockSlides = [exSlide, exSlide, exSlide];
  const exAniDuration = 2000;







  beforeEach(() => {
    component = shallow(
      <Carousel aniDuration={exAniDuration} slides={mockSlides} />,
    );
  });
  it("should exist", () => {
    //expect(component).toBeTruthy();
    expect(true).toEqual(false);
  });

  it("should call setInterval when component is mounted", () => {
    const spy = spyOn(window, "setInterval");
    component.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it("should call clearInterval when component is mounted", () => {
    const spy = spyOn(window, "clearInterval");
    component.instance().componentWillUnmount();
    expect(spy).toHaveBeenCalled();
  });

  it("should increment activeSlideIndex appropriated with moveSlide", () => {
    component.instance().componentWillUnmount();
    component.instance().state.active = 1;
    component.instance().moveSlide();
    expect(component.instance().state.active).toEqual(2);
    component.instance().moveSlide();
    expect(component.instance().state.active).toEqual(0);
  });

  it("should generate a slide for every 'slide'", () => {
    const slides = component.find(".carousel__slide");

    expect(slides.length).toEqual(3);
  });

  it("should make prev and next slides identifiable", () => {
    component.instance().setState({
      active: 1,
    });
    const prev = component.find(".carousel__slide--prev");
    const next = component.find(".carouesl__slide--next");

    expect(prev.node.key).toEqual("slide-0");
    expect(next.node.key).toEqual("slide-2");
  });
  it("should wrap next and prev slide identifiers as appropriate to active index", () => {
    component.instance().setState({
      active: 2,
    });

    const next = component.find(".carouesl__slide--next");
    expect(next.node.key).toEqual("slide-0");
  });
});

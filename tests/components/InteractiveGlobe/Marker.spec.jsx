import React from "react";
import { Marker } from "../../../source/js/components/InteractiveGlobe";
import { shallow } from "enzyme";

describe("Marker", () => {
  let component;
  const onClickSpy = jest.fn();

  beforeEach(() => {
    component = shallow(<Marker onClick={onClickSpy} />);
  });
  it("should call the provided onClick method when the cta is clicked", () => {
    component.find('[data-test="marker-photos-cta"]').first().simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it("should render a blogpost link iff provided a post", () => {
    let postCta = component.find('[data-test="marker-blog-cta"]');
    expect(postCta.length).toEqual(0);

    component = shallow(<Marker onClick={onClickSpy} isPost />);
    postCta = component.find('[data-test="marker-blog-cta"]');
    expect(postCta.length).toEqual(1);

  })
});

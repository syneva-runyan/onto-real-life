import React from "react";
import { ContactMsg } from "../../../source/js/components/Contact";
import { shallow } from "enzyme";

describe("Contact Msg", () => {
  let component;
  const postURL = "./scripts/sendEmail.php";

  beforeEach(() => {
    component = shallow(<ContactMsg />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });

  it("should set component state with onChange", () => {
    component.instance().onChange("providedField", {
      target: {
        value: "newValue"
      }
    });

    expect(component.instance().state.providedField).toEqual("newValue");
  });

  it("should validate that no provided fields are empty", () => {
    expect(component.instance().validateFields("", "", "")).toEqual(false);
    expect(
      component.instance().validateFields("1", "something", "hello")
    ).toEqual(true);
  });

  it("should make ajax call to post form data when submitted", () => {
    const postSpy = jest.spyOn($, "ajax");
    const dataStr = `&subject='subj'&contact-email='email'&message='msg`;
    component.instance().postFormData("subj", "email", "msg");

    expect(postSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        type: "POST",
        url: postURL,
        data: dataStr
      })
    );
  });

  it("should call validate fields on form submission", () => {
    const submit = component.find("button").get(0);
    const validationSpy = jest.spyOn(component.instance(), "validateFields");

    submit.props.onClick({
      preventDefault: () => {},
      stopPropagation: () => {}
    });

    expect(validationSpy).toHaveBeenCalled();
  });

  it("should post form data if submitted data is valid", () => {
    const submit = component.find("button").get(0);
    const postSpy = jest.spyOn(component.instance(), "postFormData");
    const clearSpy = jest.spyOn(component.instance(), "clearForm");

    component.instance().validateFields = jest
      .genMockFunction()
      .mockImplementation(() => {
        return true;
      });

    submit.props.onClick({
      preventDefault: () => {},
      stopPropagation: () => {}
    });

    expect(postSpy).toHaveBeenCalled();
    expect(clearSpy).toHaveBeenCalled();
  });
  it("should not post form data if submitted data is mot valid", () => {
    const submit = component.find("button").get(0);
    const postSpy = jest.spyOn(component.instance(), "postFormData");
    const clearSpy = jest.spyOn(component.instance(), "clearForm");

    component.instance().validateFields = jest
      .genMockFunction()
      .mockImplementation(() => {
        return false;
      });

    submit.props.onClick({
      preventDefault: () => {},
      stopPropagation: () => {}
    });

    expect(postSpy).not.toHaveBeenCalled();
    expect(clearSpy).not.toHaveBeenCalled();
  });
});

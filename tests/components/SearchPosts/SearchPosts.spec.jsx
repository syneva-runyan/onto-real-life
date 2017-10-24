import React from "react";
import {
  SearchPosts,
  PredictiveSuggestions,
} from "../../../source/js/components/SearchPosts";
import { catalogSearcher } from "../../../source/js/utils/search-posts";
import { shallow } from "enzyme";

jest.mock("../../../source/js/utils/search-posts");

describe("Search Posts", () => {
  let component;
  const exPost = {
    id: "id",
    title: "someTitle",
  };

  beforeEach(() => {
    component = shallow(<SearchPosts />);
  });
  it("should exist", () => {
    expect(component).toBeTruthy();
  });

  it("should set an advisory msg on state iff show results is called without a searchable term available", () => {
    component.instance().showResults();
    expect(component.instance().state.showMsg).toEqual(
      "Please enter 3 or more characters",
    );

    component.instance().state.showMsg = null;
    component.instance().state.searchTerm = "some search term";
    component.instance().showResults();
    expect(component.instance().state.showMsg).toEqual(null);
  });

  it("Should set emphasizeResults to true with emphasizeResults", () => {
    component.instance().emphasizeResults();
    expect(component.instance().state.emphasizeResults).toEqual(true);
  });

  it("should clear current search term and predictive suggestions with closeSearch", () => {
    component.instance().state.searchTerm = "someTerm";
    component.instance().state.predictiveSuggestions = [exPost];

    component.instance().closeSearch();

    expect(component.instance().state.searchTerm).toEqual("");
    expect(component.instance().state.predictiveSuggestions).toEqual(null);
  });

  it("should call catalog search if text field updates with more than specified preditiveSearchStart chars", () => {
    const catalogSearcher = spyOn(component.instance(), "searchPosts");
    component.instance().onChange({
      target: {
        value: "",
      },
    });
    expect(catalogSearcher).not.toHaveBeenCalled();

    component.instance().onChange({
      target: {
        value: "some value",
      },
    });
    expect(catalogSearcher).toHaveBeenCalled();
  });

  it("should clear msg and emphasizeResults on any change of input", () => {
    component.instance().setState({
      showMsg: "some Msg",
      emphasizeResults: true,
    });

    component.instance().onChange({
      target: {
        value: "",
      },
    });

    expect(component.instance().state.showMsg).toEqual(null);
    expect(component.instance().state.emphasizeResults).toEqual(false);
  });

  describe("searchPosts", () => {
    it("should use catalogSearcher for lookup", () => {
      const spy = spyOn(catalogSearcher, "find");
      component.instance().searchPosts("some search term");
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("search", () => {
    it("should call show results iff a searchTerm is available", () => {
      const mock = spyOn(component.instance(), "showResults");
      component.instance().search();
      expect(mock).not.toHaveBeenCalled();

      component.instance().state.searchTerm = "some term";
      component.instance().search();
      expect(mock).toHaveBeenCalled();
    });
  });
});

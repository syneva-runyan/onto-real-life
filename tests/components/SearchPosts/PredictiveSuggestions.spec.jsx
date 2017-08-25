import React from 'react';
import { PredictiveSuggestions } from '../../../source/js/components/SearchPosts';
import { shallow } from "enzyme";


describe('PredictiveSuggestions', () => {
    let component = shallow(<PredictiveSuggestions />);
    const exSuggestion = {
        id: "someId",
        title: "someTitle",
    }
    it("should exist", () => {
        expect(component).toBeTruthy();
    });

    it("should display an article link for each provided suggestion", () => {
        component = shallow(<PredictiveSuggestions suggestions={[exSuggestion, exSuggestion, exSuggestion]}/>);
        const articleLinks = component.find(".predictiveSuggestions__link");
        expect(articleLinks.length).toEqual(3);
    });
});
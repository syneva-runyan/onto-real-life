import React from 'react';
import { PredictiveSuggestions } from '../../../source/js/components/SearchPosts';
import { shallow } from "enzyme";


describe('PredictiveSuggestions', () => {
    let component = shallow(<PredictiveSuggestions />)
    it("should exist", () => {
        expect(component).toBeTruthy();
    })
});
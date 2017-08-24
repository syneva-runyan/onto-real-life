import React from 'react';
import { SearchPosts } from '../../../source/js/components/SearchPosts';
import { catalogSearcher } from "../../../source/js/utils/search-posts";
import { shallow } from 'enzyme';

jest.mock("../../../source/js/utils/search-posts");

describe('Not Found', () => {
	let component;

	beforeEach(() => {
		component = shallow(<SearchPosts />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});

	it('should call catalog search if text field updates with more than specified preditiveSearchStart chars', () => {
		const catalogSearcher = spyOn(component.instance(), "searchPosts");
		component.instance().onChange({
			target: {
				value: ""
			}
		})
		expect(catalogSearcher).not.toHaveBeenCalled();

		component.instance().onChange({
			target: {
				value: "some value"
			}
		})
		expect(catalogSearcher).toHaveBeenCalled();
	});
	describe("searchPosts", () => {
		it("should use catalogSearcher for lookup", () => {
			const spy = spyOn(catalogSearcher, "find");
			component.instance().searchPosts("some search term");
			expect(spy).toHaveBeenCalled();
		});
	});
});
import React from 'react';
import { SearchPosts } from '../../../source/js/components/SearchPosts';
import { shallow } from 'enzyme';

describe('Not Found', () => {
	let component;

	beforeEach(() => {
		component = shallow(<SearchPosts />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});
});
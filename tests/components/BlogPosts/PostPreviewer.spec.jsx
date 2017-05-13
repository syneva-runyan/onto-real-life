import React from 'react';
import PostPreviewer from '../../../source/js/components/BlogPosts/PostPreviewer';
import { shallow } from 'enzyme';

describe('Header', () => {
	let component;

	beforeEach(() => {
		component = shallow(<PostPreviewer />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});
});
import React from 'react';
import ResponsiveImg from '../../../source/js/components/Global/ResponsiveImg';
import { shallow } from 'enzyme';

describe('Responsive Img', () => {
	let component;

	beforeEach(() => {
		component = shallow(<ResponsiveImg />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});
});
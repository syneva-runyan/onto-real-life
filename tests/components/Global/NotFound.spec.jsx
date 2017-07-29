import React from 'react';
import NotFound from '../../../source/js/components/Global/NotFound';
import { shallow } from 'enzyme';

describe('Header', () => {
	let component;

	beforeEach(() => {
		component = shallow(<NotFound />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});
});
import React from 'react';
import Header from '../../source/js/components/Global/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Header />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});
});
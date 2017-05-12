import React from 'react';
import Header from '../../source/js/components/Global/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Header />);
	})
	describe('snap width', () => {
		it('should round down width of provided element to fit to provided snapWidth', () => {
			let fakeElement = document.createElement('p');
			fakeElement.style.width = '503px';

			component.instance().snapWidth(fakeElement, 5, 503);

			expect(fakeElement.style.width).toEqual('501px');
		});
	});
});
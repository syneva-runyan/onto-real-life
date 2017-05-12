import React from 'react';
import Menu from '../../source/js/components/Global/Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Menu />);
	})
	describe('menuItemClass', () => {
		it('should return selected class name iff provided paths are equal', () => {
			const sameName = 'same';

			expect(component.instance().menuItemClass(sameName, sameName)).toContain('selected');
			expect(component.instance().menuItemClass(sameName, 'somethingDifferent')).not.toContain('selected');
		});
	});
});
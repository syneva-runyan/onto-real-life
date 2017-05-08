import { Menu } from '../../source/js/components/Global';
import { shallow } from 'enzyme';

describe('Menu', () => {
	const component;

	beforeEach(() => {
		component = shallow(<Menu />);
	})
	describe('menuItemClass', () => {
		it('should return selected class name iff provided paths are equal', () => {
			const sameName = 'same';

			expect(component.menuItemClass(sameName, sameName).toEqual('selected');
			expect(component.menuItemClass(sameName, 'somethingDifferent').toEqual('');
		});
	});
});
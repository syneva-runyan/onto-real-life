import { Header } from '../../source/js/components/Global';
import { shallow } from 'enzyme';

describe('Header', () => {
	const component;

	beforeEach(() => {
		component = shallow(<Header />);
	})
	describe('snap width', () => {
		it('should round down width of provided element to fit to provided snapWidth', () => {
			let fakeElement = document.createElement('p');
			fakeElement.style.width = '503px';

			component.snapWidth(fakeElement, 5);

			expect(fakeElement.style.width).toEqual('500px');
		});
	});
});
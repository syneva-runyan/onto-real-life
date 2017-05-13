import React from 'react';
import BlogPosts from '../../source/js/views/BlogPosts/index.js';
import { shallow } from 'enzyme';

describe('Header', () => {
	let component;

	beforeEach(() => {
		component = shallow(<BlogPosts />);
	})
	it('should exist', () => {
		expect(component).toBeTruthy();
	});
    describe('previewGallery', () => {
        it('should generate a post previewer for each key in param', () => {
            var mockPost = {
                title: 'someTitle',
                tagling:'someTagLine',
            };

            let mockCatalog = {
                post1: mockPost,
                post2: mockPost,
                post3: mockPost,
            }

            const gallery = component.instance().previewGallery(mockCatalog); 
            expect(gallery.length).toEqual(3);
        });
    });
});
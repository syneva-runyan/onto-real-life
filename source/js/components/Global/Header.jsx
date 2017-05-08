import React, { Component } from 'react';
import Title from './Title';

const chevronWidth = 5;

export default class Header extends Component {
	componentDidMount() {
		this.adjBorder();

		this.resizeListener = window.addEventListener('resize', () => {
			//initialResize && initialResize();
			this.adjBorder();
		})
	}

	componentWillUnmount() {
		window.removeEventListener(this.resizeListener);
	}

	adjBorder() {
		const border = document.getElementById('headerBorder');
		border.style.width = '100%';
		const borderWidth  = border.getBoundingClientRect().width;
		this.snapWidth(borderWidth, chevronWidth, border);
	}

	// Snap width of provided el
	// to nearest round number.
	snapWidth(borderWidth, snapWidth, element) {
		const widthMod = borderWidth % snapWidth;
		if(widthMod !== 0) {
			element.style.width = borderWidth - widthMod + 'px';
		}
	}

  render() {
    return (
      <div className='header'>
        <span className='header__logo' />
        <Title />
        <span id='headerBorder' className='header__border' />
      </div>
    );
  }
}

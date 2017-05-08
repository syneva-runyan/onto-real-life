import React, { Component } from 'react';
import Title from './Title';
import Menu from './Menu';

const chevronWidth = 5;

export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.adjBorder();

		this.resizeListener = window.addEventListener('resize', () => {
			this.adjBorder();
		});
	}

	componentWillUnmount() {
		window.removeEventListener(this.resizeListener);
	}

	adjBorder() {
		const border = document.getElementById('headerBorder');
		border.style.width = '100%';
		this.snapWidth(border, chevronWidth);
	}

	// Snap width of provided el
	// to nearest round number.
	snapWidth(element, snapWidth) {
		const elWidth  = element.getBoundingClientRect().width;
		const widthMod = elWidth % snapWidth;
		if(widthMod !== 0) {
			element.style.width = elWidth - widthMod + 'px';
		}
	}

  render() {
    return (
      <div className='header'>
        <div className="header__lead">
        	<span className='header__logo' />
        	<Title />
        	<span id='headerBorder' className='header__border' />
        </div>
        <Menu pathname={this.props.location.pathname} />
      </div>
    );
  }
}

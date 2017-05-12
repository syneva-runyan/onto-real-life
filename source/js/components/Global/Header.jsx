import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Menu from './Menu';

const chevronWidth = 5;

const propTypes = {
  location: PropTypes.object,
};

const defaultProps = {
  location: {
    pathname: '',
  },
};

export default class Header extends Component {
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
    const elWidth = border.getBoundingClientRect().width;
    console.log('el width', elWidth);
    this.snapWidth(border, chevronWidth, elWidth);
  }

  // Snap width of provided el
  // to nearest round number.
  snapWidth(element, snapWidth, elWidth) {
    const widthMod = elWidth % snapWidth;
    console.log(widthMod);
    if (widthMod !== 0) {
      // eslint-disable-next-line
      element.style.width = elWidth - widthMod + 1 + 'px';
      console.log(elWidth - widthMod + 'px');
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='header__lead'>
          <span className='header__logo' />
          <Title />
          <span id='headerBorder' className='header__border' />
        </div>
        <Menu pathname={ this.props.location.pathname } />
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


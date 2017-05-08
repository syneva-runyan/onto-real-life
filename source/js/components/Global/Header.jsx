import React, { Component } from 'react';
import Title from './Title';

export default class Header extends Component {

  render() {
    return (
      <div className='header'>
        <span className='header__logo' />
        <Title />
      </div>
    );
  }
}

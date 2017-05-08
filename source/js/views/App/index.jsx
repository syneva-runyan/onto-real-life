import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Menu } from 'components/Global';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Header />
        <Menu />

        <div className='Page'>
          { children }
        </div>
      </div>
    );
  }
}

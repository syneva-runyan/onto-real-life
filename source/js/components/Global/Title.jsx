import React, { Component } from 'react';

export default class Title extends Component {

  render() {
    return (
      <p className='title'>
	      <span className='title__block'>
	        <span>
	        	On
	        </span>
	        <br />
	        <span>
	        	To
	        </span>
	      </span>
	      <bold className='title__text'>REAL</bold>
	      <span className='title__text'>LIFE</span>
      </p>
    );
  }
}

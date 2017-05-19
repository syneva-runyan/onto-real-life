import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  assetPath: PropTypes.string,
};

const defaultProps = {
  title: 'Post Title',
  tagLine: null,
  assetPath: 'assets/img/blogs',
};

export default class PostPreviewer extends Component {
  render() {
    return (
      <Link
        className='postPreviewer'
        style={ { 
          backgroundImage: `url("${ this.props.assetPath }/preview.jpg")`,
        } }
        tabIndex={0}
      >
        <h3 className='postPreviewer__title'>{ this.props.title }</h3>
        <span
          className='postPreviewer__icon'
          style={{
            backgroundImage: `url("${ this.props.assetPath }/entryStamp.png")`
          }}
        />
       { this.props.tagLine ? <h4 className='postPreviewer__tagline'>{ this.props.tagLine }</h4> : null }
      </Link>
    );
  }
}

PostPreviewer.propTypes = propTypes;
PostPreviewer.defaultProps = defaultProps;


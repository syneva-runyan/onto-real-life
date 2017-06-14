import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    datePublished: PropTypes.string,
    tagLine: PropTypes.string,
    imgPath: PropTypes.string,
};

const defaultProps = {
    title: 'Title',
    datePublished: '00 MONTH 0000',
    tagLine: null,
    imgPath: null,
};

export default function PostTitle(props) {
    return (
        <div className="postTitle"        >
            <span className="postTitle__img"
                style= {{
                  backgroundImage: `url(${ props.imgPath })`
                }}
            />
            <h5 className="postTitle__date">{props.datePublished}</h5>
            <h1 className="postTitle__title">{props.title}</h1>
            { props.tagLine ?  <h3 className="postTitle__tagLine">{props.tagLine}</h3> : null }
        </div>
    )
}

PostTitle.propTypes = propTypes;
PostTitle.defaultProps = defaultProps;

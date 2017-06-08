import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactMsg } from '../../components/Contact';

const propTypes = {};

const defaultProps = {};

export default function Contact(props) {
    return (
        <div className="contactMsg">
            <h1>Contact Me</h1>
            <p>Start a conversation with me below or send an email to <bold>syneva@gmail.com</bold></p>      
            <ContactMsg />    
        </div>
    );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class ContactMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            senderEmail: "",
            msg: "",
        }
    }

    render() {
        return (
          <form action="./scripts/sendEmail.php">
            <input className="contactMsg__subject" name="contact-subject" id="contact-subject" placeholder="Subject" value={this.state.subject} />
            <input className="contactMsg__yourEmail" name="message" id="contact-email" placeholder="Your email" value={this.state.senderEmail} />
            <br />
            <textarea placeholder="Hi! I love your site..." name="message" id="contact-message">{this.state.msg}</textarea>
            <p>*All fields required</p>
            <submit>Submit</submit>
          </form>
        );
    }
}

ContactMsg.propTypes = propTypes;
ContactMsg.defaultProps = defaultProps;

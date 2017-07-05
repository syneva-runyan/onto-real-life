import React, { Component } from "react";

const notEmpty = function(value) {
  return value && value !== "";
};

export default class ContactMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      senderEmail: "",
      msg: "",
    };

    this.boundSubjectChange = this.onChange.bind(this, "subject");
    this.boundEmailChange = this.onChange.bind(this, "senderEmail");
    this.boundMsgChange = this.onChange.bind(this, "msg");
    this.boundSubmit = this.submitForm.bind(this);
  }

  onChange(field, e) {
    const newValue = e.target.value;
    const keyValuePair = {};
    keyValuePair[field] = newValue;

    this.setState(keyValuePair);
  }

  getHelperContent(error, submitted) {
    if (error) {
      return {
        msg: "Please ensure all fields have values",
        class: "contactMsg__notice--error",
      };
    }

    if (submitted) {
      return {
        msg:
          "Thank you for your message! I will try to respond in a timely manor.",
        class: "contactMsg__notice--success",
      };
    }

    return {
      msg: "*All fields required",
      class: "",
    };
  }

  submitForm(e) {
    e.preventDefault();
    e.stopPropagation();

    if (
      this.validateFields(
        this.state.subject,
        this.state.senderEmail,
        this.state.msg,
      )
    ) {
      this.postFormData(
        this.state.subject,
        this.state.senderEmail,
        this.state.msg,
      );
      this.clearForm();
      return;
    }

    this.setState({
      error: true,
      submitted: false,
    });
  }

  postFormData(subject, email, msg) {
    const dataString = `&subject='${subject}'&contact-email='${email}'&message='${msg}`;

    // TODO add sucess and failure handlers
    $.ajax({
      type: "POST",
      url: "./scripts/sendEmail.php",
      data: dataString,
      success: () => {},
      error: () => {},
    });
  }

  validateFields(subject, email, msg) {
    return notEmpty(subject) && notEmpty(email) && notEmpty(msg);
  }

  clearForm() {
    this.setState({
      submitted: true,
      error: false,
      msg: "",
      senderEmail: "",
      subject: "",
    });
  }

  render() {
    const helperContent = this.getHelperContent(
      this.state.error,
      this.state.submitted,
    );
    return (
      <form action="./scripts/sendEmail.php" method="post">
        <p className={`contactMsg__notice ${helperContent.class}`}>
          {helperContent.msg}
        </p>
        <input
          className="contactMsg__subject"
          name="contact-subject"
          id="contact-subject"
          placeholder="Subject"
          value={this.state.subject}
          onChange={this.boundSubjectChange}
        />
        <input
          className="contactMsg__yourEmail"
          name="message"
          id="contact-email"
          placeholder="Your email"
          value={this.state.senderEmail}
          onChange={this.boundEmailChange}
        />
        <br />
        <textarea
          className="contactMsg__msg"
          placeholder="Hi! I love your site..."
          name="message"
          id="contact-message"
          onChange={this.boundMsgChange}
          value={this.state.msg}
        />
        <br />
        <button type="submit" onClick={this.boundSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
    onClose: PropTypes.func,
    className: PropTypes.string,

};
const defaultProps = {
    onClose: () => {},
    className: '',
};

export default class Modal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.className}`} onClick={this.props.close}>
        {this.props.children}
        <button
          className="modal__close"
          onClick={this.props.onClose}
          data-test="photo-gallery-close"
        >
          Close
        </button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

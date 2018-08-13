import React, { PureComponent } from "react";

class Modal extends PureComponent {
  render() {
    if (!this.props.open) return null;

    return (
      <div className="modal">
        <div onClick={this.props.toggleModal} className="overlay" />
        <div className="box">
          <div className="container">
            <a onClick={this.props.toggleModal} className="x-button">
              X
            </a>
            <button onClick={this.props.toggleModal} className="modal-button">
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

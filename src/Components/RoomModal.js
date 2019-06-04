import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    const { modalClose } = this.props;
    return (
      <div className="modal">
        <p onClick={modalClose}>close</p>
        <input placeholder="room name" />
        <Link to="/room">
          <button>Create</button>
        </Link>
      </div>
    );
  }
}

export default Modal;

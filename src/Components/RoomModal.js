import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Modal extends Component {
  state = {
    name: ''
  };
  createRoomHandler = () => {
    const { modalClose, create } = this.props;
    const obj = {
      name: this.state.name,
      user: this.props.user
    };
    modalClose();
    create(obj);
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { modalClose } = this.props;
    return (
      <div className="modal">
        <p className="modal__close" onClick={modalClose}>
          close
        </p>
        <input
          placeholder="room name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
          className="modal__input"
        />
        <button className="modal__create" onClick={this.createRoomHandler}>
          Create
        </button>
      </div>
    );
  }
}

export default Modal;

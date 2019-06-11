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
      creator: this.props.user,
      roomID: this.hashHandler(5),
      occupied: 1
    };
    create(obj);
    modalClose();
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  hashHandler = length => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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

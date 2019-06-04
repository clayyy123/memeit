import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './RoomModal';

class Rooms extends Component {
  state = {
    isOpen: false
  };

  modalOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  modalClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const classNames = this.state.isOpen ? 'rooms modalOn' : 'rooms';
    return (
      <div class={classNames}>
        <h1>Rooms</h1>
        {this.state.isOpen ? (
          <Modal modalClose={this.modalClose} />
        ) : (
          <button onClick={this.modalOpen}>Create a Room!</button>
        )}
      </div>
    );
  }
}

export default Rooms;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './RoomModal';
import io from 'socket.io-client';
const socket = io('http://localhost:3001');

class Rooms extends Component {
  state = {
    isOpen: false,
    rooms: []
  };

  componentDidMount() {
    console.log(this.props);
  }

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

  createHandler = room => {
    console.log(room);
    socket.emit('create-room', { data: room });
    this.props.props.history.push('/room');
  };

  render() {
    const { isOpen, rooms } = this.state;
    const classNames = isOpen ? 'rooms modalOn' : 'rooms';
    return (
      <div class={classNames}>
        <h1>Rooms</h1>
        {this.state.isOpen ? (
          <Modal
            modalClose={this.modalClose}
            create={this.createHandler}
            user={this.props.user}
          />
        ) : (
          <button onClick={this.modalOpen}>Create a Room!</button>
        )}
        <ul>
          {/* {rooms.map((r, i) => {
            return <li>{r.name}</li>;
          })} */}
        </ul>
      </div>
    );
  }
}

export default Rooms;

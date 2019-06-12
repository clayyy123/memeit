import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './RoomModal';
import socket from './Socket';

class Rooms extends Component {
  state = {
    isOpen: false,
    rooms: [],
    room: ''
  };

  componentDidMount() {
    socket.on('new-room', data => {
      console.log(data);
      if (this.props.user.id !== data.data.creator.id) {
        this.setState({
          rooms: [...this.state.rooms, data]
        });
      }
    });

    if (this.props.user) {
      socket.emit('roomMounted');
    }

    socket.on('populateRooms', data => {
      this.setState(
        {
          rooms: data
        },
        () => {
          console.log(this.state.rooms);
        }
      );
    });
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
    socket.emit('create-room', { data: room });
    this.props.props.history.push('/room');
  };

  showButtonHandler = room => {
    this.setState({
      room: room
    });
  };

  joinHandler = room => {
    socket.emit('joining', { room, user: this.props.user });
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
        <div>
          {rooms.map((r, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  this.showButtonHandler(r.name);
                }}
              >
                {r.data.name}
                {r.data.occupied + ' /10'}
                {this.state.room === r.data.name && (
                  <button
                    onClick={() => {
                      this.joinHandler(r);
                    }}
                  >
                    Join
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rooms;

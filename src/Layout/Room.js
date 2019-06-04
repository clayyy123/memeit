import React, { Component } from 'react';

class Room extends Component {
  state = {};

  componentDidMount() {
    console.log('room component mounted');
  }
  render() {
    return (
      <div className="room">
        <h1>Room</h1>
      </div>
    );
  }
}

export default Room;

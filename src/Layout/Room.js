import React, { Component } from 'react';
import socket from '../Components/Socket';

class Room extends Component {
  state = {
    primary: {},
    players: []
  };

  componentDidMount() {
    socket.on('players', data => {
      this.setState({
        primary: this.props.user,
        players: data.data
      });
    });
  }
  render() {
    const { players } = this.state;
    return (
      <div className="room">
        <h1>Room</h1>
        {players.map((p, i) => {
          return <div>{p.name}</div>;
        })}
      </div>
    );
  }
}

export default Room;

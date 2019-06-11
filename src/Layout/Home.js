import React, { Component } from 'react';
import Chat from '../Components/Chat';
import Banner from '../Components/Banner';
import Score from '../Components/Highscore';
import Room from '../Components/Rooms';
// import io from 'socket.io-client';
// const socket = io('http://localhost:3001');
import socket from '../Components/Socket';

class Home extends Component {
  state = {
    name: {}
  };

  componentDidMount() {
    // const name = localStorage.getItem('user');
    // const parsed = JSON.parse(name);
    // console.log(name, 'localstorage');
    // if (name) {
    //   socket.emit('new-user', { data: parsed });
    //   this.setState({
    //     user: parsed
    //   });
    // } else if (!name) {
    //   this.props.history.push('/');
    // }
  }

  render() {
    return (
      <div class="home">
        <div class="home__left">
          <Room props={this.props} user={this.props.user} />
        </div>
        <div class="home__middle">
          <Banner user={this.props.user} changeName={this.props.changeName} />
          <Score />
        </div>
        <div class="home__right">
          <Chat user={this.props.user} socket={this.props.socket} />
        </div>
      </div>
    );
  }
}

export default Home;

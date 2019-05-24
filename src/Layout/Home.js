import React, { Component } from 'react';
import Chat from '../Components/Chat';
import Banner from '../Components/Banner';
import Score from '../Components/Highscore';
import Room from '../Components/Rooms';

class Home extends Component {
  state = {
    name: ''
  };

  componentDidMount() {}

  render() {
    return (
      <div class="home">
        <div class="home__left">
          <Room />
        </div>
        <div class="home__middle">
          <Banner user={this.props.user} />
          <Score />
        </div>
        <div class="home__right">
          <Chat user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Chat from '../Components/Chat';

class Home extends Component {
  state = {
    name: ''
  };

  componentDidMount() {}

  render() {
    return (
      <div class="home">
        <h1 class="home__title">Welcome {this.props.user}</h1>
        <Chat user={this.props.user} />
      </div>
    );
  }
}

export default Home;

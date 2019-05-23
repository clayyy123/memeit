import React, { Component } from 'react';

class Home extends Component {
  state = {
    name: ''
  };

  componentDidMount() {}

  render() {
    return <h1>Welcome {this.props.user}</h1>;
  }
}

export default Home;

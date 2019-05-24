import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div class="banner">
        <h1>Can you MEME?</h1>
        <h3>Welcome {this.props.user}</h3>
      </div>
    );
  }
}

export default Banner;

import React, { Component } from 'react';

class Splash extends Component {
  state = {
    username: ''
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  memeHandler = str => {
    this.props.getUser(str);
    this.props.history.push('/home');
  };

  render() {
    console.log(this.props);
    const { username } = this.state;
    return (
      <div class="splash">
        <h1 class="splash__title">Can you Meme?</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <button
          onClick={() => {
            this.memeHandler(username);
          }}
        >
          Let's Meme
        </button>
      </div>
    );
  }
}

export default Splash;

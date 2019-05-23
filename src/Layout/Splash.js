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

  memeHandler = e => {
    e.preventDefault();
    this.props.getUser(this.state.username);
    this.props.history.push('/home');
  };

  render() {
    console.log(this.props);
    const { username } = this.state;
    return (
      <div class="splash">
        <h1 class="splash__title">Can you Meme?</h1>
        <form onSubmit={this.memeHandler}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <button>Let's Meme</button>
        </form>
      </div>
    );
  }
}

export default Splash;

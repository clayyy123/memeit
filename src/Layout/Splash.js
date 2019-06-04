import React, { Component } from 'react';

class Splash extends Component {
  state = {
    username: ''
  };

  componentDidMount() {
    console.log('splash mounted');
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  memeHandler = e => {
    e.preventDefault();
    this.props.getUser({ name: this.state.username, id: this.hashHandler(8) });
    this.props.history.push('/home');
  };

  hashHandler = length => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  render() {
    const { username } = this.state;
    return (
      <div class="splash">
        <h1 class="splash__title">Can you Meme?</h1>
        <form onSubmit={this.memeHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.changeHandler}
          />
          <button>Let's Meme</button>
        </form>
      </div>
    );
  }
}

export default Splash;

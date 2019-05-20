import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>login</h1>
        <input
          onChange={this.changeHandler}
          type="text"
          name="username"
          value={this.state.username}
        />
        <input
          onChange={this.changeHandler}
          type="password"
          name="password"
          value={this.state.password}
        />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';

class Banner extends Component {
  state = {
    name: {}
  };
  render() {
    const { name } = this.state;
    return (
      <div class="banner">
        <h1>Can you MEME?</h1>
        <h3>Welcome {this.props.user.name}</h3>
        <div>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={name.name}
          />
          <button onClick={this.nameHandler}>Update</button>
        </div>
      </div>
    );
  }

  nameHandler = () => {
    this.props.changeName(this.state.name);
    this.setState({
      name: {
        ...this.state.name,
        name: ''
      }
    });
  };

  changeHandler = e => {
    this.setState({
      name: {
        ...this.state.name,
        [e.target.name]: e.target.value
      }
    });
  };
}

export default Banner;

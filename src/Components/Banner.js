import React, { Component } from 'react';

class Banner extends Component {
  state = {
    user: {
      name: '',
      id: ''
    }
  };

  componentDidMount() {
    this.setState({
      user: {
        name: '',
        id: this.props.user.id
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div class="banner">
        <h1>Can you MEME?</h1>
        <h3>Welcome {this.props.user.name}</h3>
        <div>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={user.name}
          />
          <button onClick={this.nameHandler}>Update</button>
        </div>
      </div>
    );
  }

  nameHandler = () => {
    this.props.changeName(this.state.user);
    this.setState({
      user: {
        ...this.state.user,
        name: ''
      }
    });
  };

  changeHandler = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };
}

export default Banner;

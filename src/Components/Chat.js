import React, { Component } from 'react';

class Chat extends Component {
  state = {
    messageObj: {
      user: '',
      message: ''
    },
    history: []
  };

  render() {
    return (
      <div class="chat">
        <h1 class="chat__title">Chat</h1>
        <div class="chat__box">
          <div class="chat__window">
            {this.state.history.map((m, i) => {
              return (
                <li key={i} class="chat__message">
                  {m.user}:{m.message}
                </li>
              );
            })}
          </div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="message"
              value={this.state.messageObj.message}
              onChange={this.changeHandler}
            />
            <button class="chat__submit">Send</button>
          </form>
        </div>
      </div>
    );
  }

  changeHandler = e => {
    this.setState({
      messageObj: {
        ...this.state.messageObj,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    let messageObj = {
      user: this.props.user,
      message: this.state.messageObj.message
    };
    this.setState({
      messageObj: {
        user: this.props.user,
        message: ''
      },
      history: [...this.state.history, messageObj]
    });
  };
}

export default Chat;

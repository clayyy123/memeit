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
            {/* maps out the chat */}
            {this.state.history.map((m, i) => {
              return (
                <li key={i} class="chat__message">
                  {m.user}: {m.message}
                </li>
              );
            })}
          </div>
          <form class="chat__form" onKeyDown={this.sendHandler}>
            <textarea
              type="text"
              name="message"
              maxlength="100"
              value={this.state.messageObj.message}
              onChange={this.sendHandler}
            />
            <input
              onClick={this.sendHandler}
              type="button"
              value="send"
              class="chat__submit"
            />
          </form>
        </div>
      </div>
    );
  }

  // changeHandler = e => {
  //   this.setState({
  //     messageObj: {
  //       ...this.state.messageObj,
  //       [e.target.name]: e.target.value
  //     }
  //   });
  // };

  sendHandler = e => {
    const { message } = this.state.messageObj;
    e.persist();
    if (
      (e.keyCode === 13 && message.trim() !== '') ||
      e.nativeEvent.type === 'click'
    ) {
      let messageObj = {
        user: this.props.user,
        message: message
      };
      this.setState({
        messageObj: {
          user: this.props.user,
          message: ''
        },
        history: [...this.state.history, messageObj]
      });
    } else {
      this.setState({
        messageObj: {
          ...this.state.messageObj,
          [e.target.name]: e.target.value
        }
      });
    }
  };
}

export default Chat;

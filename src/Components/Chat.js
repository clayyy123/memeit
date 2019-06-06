import React, { Component } from 'react';
import socket from './Socket';

class Chat extends Component {
  state = {
    messageObj: {
      user: '',
      message: ''
    },
    history: [{ user: 'ChatBot', message: 'Welcome to the Chat Room!' }]
  };

  componentDidMount() {
    const { user } = this.props;
    socket.on('connect', () => {
      console.log('user connected from client');
    });

    socket.on('message', data => {
      this.setState(
        {
          history: [...this.state.history, data.data]
        },
        () => {
          this.refs.chatWindow.scrollTop = this.refs.chatWindow.scrollHeight;
        }
      );
    });

    socket.on('user', data => {
      console.log(data.data.name);
      let userName = {
        user: 'Chatbot',
        message: data.data.name + ' joined the room'
      };
      this.setState(
        {
          history: [...this.state.history, userName]
        },
        () => {
          this.refs.chatWindow.scrollTop = this.refs.chatWindow.scrollHeight;
        }
      );
    });

    socket.on('user-disconnect', data => {
      let userName = {
        user: 'Chatbot',
        message: data.data + ' left the room'
      };
      this.setState(
        {
          history: [...this.state.history, userName]
        },
        () => {
          this.refs.chatWindow.scrollTop = this.refs.chatWindow.scrollHeight;
        }
      );
    });
  }

  render() {
    return (
      <div class="chat">
        <h1 class="chat__title">Chat</h1>
        <div class="chat__box">
          <div class="chat__window" ref="chatWindow">
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
              maxLength="100"
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

  sendHandler = e => {
    // const { socket } = this.props;
    const { message } = this.state.messageObj;
    e.persist();
    if (
      (e.keyCode === 13 && message.trim() !== '') ||
      (e.nativeEvent.type === 'click' && message.trim() !== '')
    ) {
      let messageObj = {
        user: this.props.user.name,
        message: message
      };
      socket.emit('new-message', { data: messageObj });
      this.setState({
        messageObj: {
          user: '',
          message: ''
        }
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

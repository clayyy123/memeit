import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Login from './Components/Login';
import Splash from './Layout/Splash';
import Home from './Layout/Home';
import Room from './Layout/Room';
import Start from './Layout/Start';
import './css/style.css';

class App extends React.Component {
  state = {
    user: {},
    competitors: []
  };

  componentDidMount() {
    const name = localStorage.getItem('user');
    const parsed = JSON.parse(name);
    console.log(name, 'localstorage');
    if (name) {
      this.setState({
        user: parsed
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/home"
            render={props => {
              return (
                <Home
                  {...props}
                  user={this.state.user}
                  changeName={this.getUser}
                />
              );
            }}
          />
          <Route
            path="/room"
            render={props => {
              return <Room {...props} getUser={this.getUser} />;
            }}
          />
          <Route
            path="/start"
            render={props => {
              return <Start {...props} getUser={this.getUser} />;
            }}
          />
          <Route
            path="/"
            render={props => {
              return <Splash {...props} getUser={this.getUser} />;
            }}
          />
        </Switch>
      </div>
    );
  }

  getUser = name => {
    localStorage.setItem('user', JSON.stringify(name));
    this.setState({
      user: name
    });
  };
}

export default App;

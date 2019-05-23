import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Login from './Components/Login';
import Splash from './Layout/Splash';
import Home from './Layout/Home';
import './App.css';

class App extends React.Component {
  state = {
    user: ''
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/home"
            render={props => {
              return <Home {...props} />;
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
    this.setState({
      user: name
    });
  };
}

export default App;

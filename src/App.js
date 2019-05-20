import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Can you Meme?</h1>
      <Switch>
        <Route
          path="/"
          render={props => {
            return <Login />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;

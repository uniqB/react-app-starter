import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
    <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
  </div>
);

export default App;

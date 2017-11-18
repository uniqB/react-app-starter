import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './routes/Home';
import About from './routes/About';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="container">
    <div className="header clearfix">
      <nav>
        <ul className="nav nav-pills pull-right">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">About</a></li>
          <li role="presentation"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h3 className="text-muted">React App Starter</h3>
    </div>

    <div className="jumbotron">
      <h1>The Modern React</h1>
      <p className="lead">This simple boilerplate includes: react, redux, react-router, react-redux-router, immutable, reselect.</p>
      <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
    </div>

    <div className="row marketing">
      <div className="col-lg-6">
        <h4>Environment</h4>
        <p>You are viewing the site with <strong>{process.env.REACT_APP_ENV_NAME}</strong> environment.
        {process.env.REACT_APP_ENV_NAME.toLowerCase().indexOf('local') === -1 &&
          <span> For local overriding, you can make a copy to the file: <strong>{`.env.${process.env.NODE_ENV}.local`}</strong></span>
        }

        </p>
      </div>

      <div className="col-lg-6">
        <h4>Subheading</h4>
        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
      </div>
    </div>

    <footer className="footer">
      <p>&copy; 2016 Company, Inc.</p>
    </footer>

  </div>
);

export default App;

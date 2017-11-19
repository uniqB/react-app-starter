import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './routes/Home';
import Post from './routes/Post';
import Login from './routes/Login';
import Nav from '../components/Nav';

import './App.css';

const App = ({ auth }) => (

  <div className="container">
    <div className="header clearfix">
      <Nav {...auth} />

      <h3 className="text-muted">React App Starter</h3>
    </div>

    <div className="main-content">

      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Post} />
      <Route exact path="/login" component={Login} />

    </div>

    <footer className="footer">
      <p>&copy; 2017 <a href="https://github.com/onlyB">@onlyB</a></p>
    </footer>

  </div>
);

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

// This module is connected with redux, so we need withRouter() decorator for route working
export default withRouter(connect(mapStateToProps)(App));

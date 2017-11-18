import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './routes/Home';
import About from './routes/About';
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
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />

    </div>

    <footer className="footer">
      <p>&copy; 2016 Company, Inc.</p>
    </footer>

  </div>
);

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app, auth }) => ({ app, auth });

// This module is connected with redux, so we need withRouter() decorator for route working
export default withRouter(connect(mapStateToProps)(App));

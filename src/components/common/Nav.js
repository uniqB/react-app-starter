import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Nav = ({ isLoggedIn, user }) => (
  <nav>
    <ul className="nav nav-pills pull-right">
      <li role="presentation" className="active"><Link to="/">Home</Link></li>
      <li role="presentation"><Link to="/about">About</Link></li>
      {isLoggedIn && user && <li role="presentation"><Link to="/login">{user.name}</Link></li>}
      {!isLoggedIn && <li role="presentation"><Link to="/login">Login</Link></li>}
    </ul>
  </nav>
);

Nav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};


export default Nav;

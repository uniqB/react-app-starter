import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Nav = ({ isLoggedIn, user }) => (
  <nav>
    <ul className="nav nav-pills pull-right">
      <li role="presentation"><NavLink exact to="/">Home</NavLink></li>
      <li role="presentation"><NavLink exact to="/posts">Posts</NavLink></li>
      {isLoggedIn && user && <li role="presentation"><NavLink exact to="/login">{user.name}</NavLink></li>}
      {!isLoggedIn && <li role="presentation"><NavLink exact to="/login">Login</NavLink></li>}
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

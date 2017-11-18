import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// By setting NODE_PATH=src in .env we can import with asboluted path
import logo from 'assets/logo.svg'; // eslint-disable-line

const Home = () => (
  <div>
    <div className="jumbotron">
      <img src={logo} style={{ width: '200px' }} alt="logo" />
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
        <h4 />
        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
      </div>
    </div>
  </div>
);

// Home.propTypes = {
//   greatingMessage: PropTypes.node.isRequired,
// };

// export default Home;
export default connect(() => ({}))(Home);

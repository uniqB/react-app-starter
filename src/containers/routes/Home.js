import React from 'react';
import Modal from '../../components/Modal';
// By setting NODE_PATH=src in .env we can import with asboluted path
import logo from 'assets/logo.svg'; // eslint-disable-line

const Home = () => (
  <div>
    <div className="jumbotron">
      <img src={logo} style={{ width: '200px' }} alt="logo" />
      <h1>The Modern React</h1>
      <p className="lead">This simple boilerplate includes: react, redux, react-router, react-redux-router, aixos, <span className="text-warning">immutable, reselect (comming soon)</span>.</p>
      <p>
        <iframe title="Github" src="https://ghbtns.com/github-btn.html?user=onlyB&repo=react-app-starter&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px" />
      </p>
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
        <h4>Mock server</h4>
        <p>You need to run the mock server to see demo of login and posts fetching.</p>
        <Modal title="Hello" content="Hello world" />
      </div>
    </div>
  </div>
);

export default Home;

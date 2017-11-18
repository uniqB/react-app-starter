import React from 'react';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.user.value;
    const pass = this.pass.value;

    this.props.onLogin({ user, pass });
  }

  render() {
    const {
      isLoggedIn, loading, error, onLogout,
    } = this.props;
    if (isLoggedIn) {
      return (
        <div className="alert alert-warning" role="alert">
          You already logged in! <a role="button" onClick={onLogout}>Logout</a>
        </div>
      );
    }
    return (
      <form>
        {error &&
          <div className="alert alert-danger" role="alert">{error.errorMessage}</div>
        }
        <div className="form-group">
          <label>Username</label>
          <input type="user" className="form-control" ref={(input) => { this.user = input; }} placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" ref={(input) => { this.pass = input; }} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={loading} >Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.any,
};


export default LoginForm;

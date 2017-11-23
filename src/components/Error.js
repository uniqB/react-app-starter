import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <div className="alert alert-danger" role="alert">{error.errorMessage || error}</div>
);

Error.propTypes = {
  error: PropTypes.any.isRequired,
};

export default Error;

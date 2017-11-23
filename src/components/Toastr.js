

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr';
import 'toastr/build/toastr.css';


class Toastr extends React.Component {
  componentDidMount() {
    const { message, ...rest } = this.props;
    toastr.options = { ...rest };
  }
  componentWillReceiveProps(nextProps) {
    const { message } = nextProps;
    if (message && message.type && message.content) {
      switch (message.type) {
        case 'error':
          toastr.options.timeout = 10000;
          toastr.error(message.content, message.title);
          break;
        case 'warning':
          toastr.options.timeout = 7000;
          toastr.warning(message.content, message.title);
          break;
        case 'info':
          toastr.options.timeout = 5000;
          toastr.info(message.content, message.title);
          break;
        case 'success':
          toastr.options.timeout = 3000;
          toastr.success(message.content, message.title);
          break;
        default:
          break;
      }
    }
  }
  render() {
    return null;
  }
}

Toastr.propTypes = {
  message: PropTypes.object,
};
const mapStateToProps = state => ({
  message: state.message.toast,
});

export default connect(mapStateToProps)(Toastr);


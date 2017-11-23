import React from 'react';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
  componentDidMount() {
    const { onShow } = this.props;
    this.jElm = window.jQuery(this.elm);
    this.jElm.modal('show');
    this.jElm.on('show.bs.modal', () => {
      onShow && onShow();
    });
  }

  render() {
    const {
      title, content, children, okLabel, cancelLabel, disableButtons, onOK, onCancel,
    } = this.props;
    const okClick = () => {
      onOK && onOK();
    };

    const cancelClick = () => {
      onCancel && onCancel();
    };

    return (
      <div className="modal fade" ref={(elm) => { this.elm = elm; }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{title}</h4>
            </div>

            <div className="modal-body">
              {content}
              {children}
            </div>

            {!disableButtons &&
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={cancelClick} >{cancelLabel || 'Cancel'}</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={okClick} >{okLabel || 'Ok'}</button>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.any,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  disableButtons: PropTypes.bool,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  onShow: PropTypes.func,
};


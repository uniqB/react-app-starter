import {
  SET_TOAST_MSG, RESET_TOAST_MSG,
  SET_DIALOG_MSG, RESET_DIALOG_MSG,
}
  from '../actions/message';

const INITIAL_STATE = {
  toast: {
    type: null, // error, warning, info, success
    title: null,
    content: null,
  },
  dialog: {
    type: null, // alert, confirm
    title: null,
    content: null,
    cancelCallback: null,
    confirmCallback: null,
    showing: false,
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOAST_MSG:
      return {
        ...state,
        toast: action.payload,
      };

    case RESET_TOAST_MSG:
      return {
        ...state,
        toast: {
          type: null,
          title: null,
          content: null,
        },
      };
      // ////////////
    case SET_DIALOG_MSG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          ...action.payload,
          showing: true,
        },
      };

    case RESET_DIALOG_MSG:
      return {
        ...state,
        dialog: {
          type: null, // alert, confirm
          title: null,
          content: null,
          cancelCallback: null,
          confirmCallback: null,
          showing: false,
        },
      };
      // ////////////
    default:
      return state;
  }
}


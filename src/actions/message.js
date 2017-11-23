export const SET_TOAST_MSG = 'SET_TOAST_MSG';
export const RESET_TOAST_MSG = 'RESET_TOAST_MSG';

export const SET_DIALOG_MSG = 'SET_DIALOG_MSG';
export const RESET_DIALOG_MSG = 'RESET_DIALOG_MSG';

export function setMsg(msg) {
  return {
    type: SET_TOAST_MSG,
    payload: msg,
  };
}

export function resetMsg() {
  return {
    type: RESET_TOAST_MSG,
  };
}

export function openDialog(option) {
  return {
    type: SET_DIALOG_MSG,
    payload: option,
  };
}

export function closeDialog() {
  return {
    type: RESET_DIALOG_MSG,
  };
}

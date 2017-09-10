/* eslint-disable import/prefer-default-export */

import { SET_RUNTIME_VARIABLE, SET_FLASH_MESSAGE, SET_PROFILE_STATE } from '../constants';

export function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export function setFlashMessage({ level, message }) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: {
      level,
      message,
    },
  };
}
export function setProfileState(state) {
  return {
    type: SET_PROFILE_STATE,
    payload: state,
  };
}

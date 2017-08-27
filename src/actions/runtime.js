/* eslint-disable import/prefer-default-export */

import { SET_RUNTIME_VARIABLE, SET_FLASH_MESSAGE } from '../constants';

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

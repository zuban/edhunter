import { SET_RUNTIME_VARIABLE, SET_FLASH_MESSAGE } from '../constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case SET_RUNTIME_VARIABLE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_FLASH_MESSAGE:
      return {
        ...state,
        flash: action.payload,
      };
    default:
      return state;
  }
}

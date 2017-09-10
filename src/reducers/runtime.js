import {SET_RUNTIME_VARIABLE, SET_FLASH_MESSAGE, SET_PROFILE_STATE} from '../constants';

export default function runtime(state = {profileState: false}, action) {
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
    case SET_PROFILE_STATE:
      return {
        ...state,
        profileState: action.payload,
      };
    default:
      return state;
  }
}

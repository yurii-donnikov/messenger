import { LOGIN_SUCCESS } from './authTypes';
import { LOGOUT_SUCCESS } from './authTypes';

const defaultState = {
  isAuthenticated: false,
  userInfo: null
};

export const authReduser = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
import { FETCH_MESSAGE_SUCCESS } from "./thunkTypes";
import { FETCH_MESSAGE_ERROR } from "./thunkTypes";

const defaultState = {
  info: null,
  error: null,
};

export const thunkReduser = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        info: action.payload,
        error: null,
      };
    case FETCH_MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

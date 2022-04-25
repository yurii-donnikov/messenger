import { FETCH_MESSAGE_SUCCESS } from "./thunkTypes";
import { FETCH_MESSAGE_ERROR } from "./thunkTypes";

export const featchMessageSuccess = (payload) => ({
  type: FETCH_MESSAGE_SUCCESS,
  payload,
});

export const fetchMessageError = (payload) => ({
  type: FETCH_MESSAGE_ERROR,
  payload,
});

import { LOGIN_SUCCESS } from "./authTypes";
import { LOGOUT_SUCCESS } from "./authTypes";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

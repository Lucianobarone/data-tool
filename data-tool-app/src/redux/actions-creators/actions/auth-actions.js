import { auth } from '../../constants';

export const register = (res) => ({
  type: auth.REGISTER_USER,
  payload: res,
});

export const login = (res) => ({
  type: auth.LOGIN_USER,
  payload: res,
});

export const logout = (res) => ({
  type: auth.LOGOUT,
  payload: res,
});

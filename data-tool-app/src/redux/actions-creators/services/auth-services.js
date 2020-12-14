import { fetchAPI } from '../../../config/auth/axios';
import { login, register, logout } from '../actions/auth-actions';

export const registerUser = (body) => (dispatch) => {
  fetchAPI({ method: 'post', url: '/auth/register', body })
    .then(({ data }) => dispatch(register(data)))
    .catch((err) => console.error(err));
};

export const loginUser = (body) => (dispatch) =>
  fetchAPI({ method: 'post', url: '/auth/login', body })
    .then(({ data }) => {
      return dispatch(login(data));
    })
    .catch((err) => console.error(err));

export const logoutUser = () => async (dispatch) => {
  try {
    await fetchAPI({
      method: 'get',
      url: 'auth/logout',
    });
    return dispatch(logout({}));
  } catch (err) {
    console.error(err);
  }
};

export const check = () => (dispatch) =>
  fetchAPI({ method: 'get', url: 'auth/check' })
    .then(({ data }) => {
      return dispatch(login(data));
    })
    .catch((err) => console.error(err));

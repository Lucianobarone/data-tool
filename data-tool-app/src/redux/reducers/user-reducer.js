import { auth } from '../constants';

const initialState = {
  user: {},
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case auth.LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default User;

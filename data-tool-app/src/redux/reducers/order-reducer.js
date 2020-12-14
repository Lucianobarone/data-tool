import { order } from '../constants';

const initialState = {
  all: [],
  features: [],
  bugs: [],
  order: {},
  err: [],
  succes: [],
  toggle: false,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case order.FETCH_ALL:
      return { ...state, all: action.payload };
    case order.FETCH_FEATURES_ORDERS:
      return { ...state, features: action.payload };
    case order.FETCH_BUGS_ORDERS:
      return { ...state, bugs: action.payload };
    case order.FETCH_ORDER:
      return { ...state, order: action.payload };
    case order.ERR:
      return { ...state, err: action.payload };
    case order.SUCCES:
      return { ...state, succes: action.payload };
    case order.TOOGLE_VIEW:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default User;

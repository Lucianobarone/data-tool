import { tool } from '../constants';

const initialState = {
  tools: [],
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case tool.FETCH_TOOLS:
      return { ...state, tools: action.payload };

    default:
      return state;
  }
};

export default User;

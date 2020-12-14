import { combineReducers } from 'redux';

import user from './user-reducer';
import tools from './tool-reducer';
import orders from './order-reducer';

export default combineReducers({
  user,
  tools,
  orders,
});

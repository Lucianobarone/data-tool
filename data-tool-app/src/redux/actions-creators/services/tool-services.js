import { fetchAPI } from '../../../config/auth/axios';
import { fillTools } from '../actions/tool-actions';

export const fetchAllTools = () => (dispatch) =>
  fetchAPI({ method: 'get', url: '/tool' })
    .then(({ data }) => dispatch(fillTools(data)))
    .catch((err) => console.error(err));

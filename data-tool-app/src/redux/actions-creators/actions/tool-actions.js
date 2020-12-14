import { tool } from '../../constants';

export const fillTools = (data) => ({
  type: tool.FETCH_TOOLS,
  payload: data,
});

import { order } from '../../constants';

export const toggleView = () => ({
  type: order.TOOGLE_VIEW,
});

export const fillAll = (data) => ({
  type: order.FETCH_ALL,
  payload: data,
});

export const fillBugsOrders = (data) => ({
  type: order.FETCH_BUGS_ORDERS,
  payload: data,
});

export const fillFeaturesOrders = (data) => ({
  type: order.FETCH_FEATURES_ORDERS,
  payload: data,
});

export const fillOrder = (data) => ({
  type: order.FETCH_ORDER,
  payload: data,
});

export const error = (data) => ({
  type: order.ERR,
  payload: data,
});

export const succes = (data) => ({
  type: order.SUCCES,
  payload: data,
});

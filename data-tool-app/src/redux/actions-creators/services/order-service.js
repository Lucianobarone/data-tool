import { fetchAPI } from '../../../config/auth/axios';
import {
  fillOrder,
  fillFeaturesOrders,
  fillBugsOrders,
  succes,
  error,
  fillAll,
} from '../actions/order-action';

export const fetchAllFeaturesOrders = (id) => (dispatch) =>
  fetchAPI({ method: 'get', url: `/order/allFeatures/${id}` })
    .then(({ data }) => dispatch(fillFeaturesOrders(data)))
    .catch((err) => console.error(err));

export const fetchAllBugOrders = (id) => (dispatch) =>
  fetchAPI({ method: 'get', url: `/order/allBugs/${id}` })
    .then(({ data }) => dispatch(fillBugsOrders(data)))
    .catch((err) => console.error(err));

export const fetchOrder = (id) => (dispatch) =>
  fetchAPI({ method: 'get', url: `/order/${id}` })
    .then(({ data }) => dispatch(fillOrder(data)))
    .catch((err) => console.error(err));

export const updateOrder = (id, body) => (dispatch) =>
  fetchAPI({ method: 'put', url: `/order/${id}`, body })
    .then(({ data }) => dispatch(fillOrder(data)))
    .catch((err) => console.error(err));

export const createOrder = (body) => (dispatch) =>
  fetchAPI({ method: 'post', url: `/order`, body })
    .then(({ data }) => dispatch(succes(data.message)))
    .catch((err) => dispatch(error(err.response.data.message)));

export const deleteOrder = (id) => (dispatch) =>
  fetchAPI({ method: 'delete', url: `/order/${id}` })
    .then(({ data }) => dispatch(fillAll(data)))
    .catch((err) => console.error(err));

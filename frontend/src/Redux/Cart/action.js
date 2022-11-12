import axios from "axios";
import * as types from "./actionTypes";

export const getCarts = () => (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  return axios
    .get(`http://localhost:8080/cart`)
    .then((res) => {
      return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CART_FAILURE, payload: err });
    });
};

export const updateCart = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });
  return axios
    .patch(`http://localhost:8080/cart/update/${id}`, payload)
    .then((res) => {
      return dispatch({ type: types.UPDATE_CART_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_CART_FAILURE, payload: err });
    });
};

export const deleteCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_REQUEST });
  return axios
    .delete(`http://localhost:8080/cart/delete/${id}`)
    .then((res) => {
      return dispatch({ type: types.DELETE_CART_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_CART_FAILURE, payload: err });
    });
};

export const addAddress = (payload) => (dispatch) => {
  return dispatch({ type: types.ADD_ADDRESS_REQUEST, payload })
};

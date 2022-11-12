import axios from "axios";
import * as types from "./actionTypes";

export const getCarts = (params) => (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  return axios
    .get(`http://localhost:8080/carts`, params)
    .then((res) => {
      // console.log(res.data);
      return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CART_FAILURE, payload: err });
    });
};

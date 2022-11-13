import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (params) => (dispatch) => {
  // console.log("action", params);
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`https://tata1mgbd-production.up.railway.app/alldata`, params)
    .then((res) => {
      // console.log(res.data);
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};

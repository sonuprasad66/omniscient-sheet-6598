import axios from "axios";
import * as types from "./actionTypes";

export const getProductsdetails = (id) => (dispatch) => {
  // console.log("id", id);
  dispatch({ type: types.GET_PRODUCTS_DETAILS_REQUEST });
  return axios
    .get(`http://localhost:8080/details/${id}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_PRODUCTS_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_PRODUCTS_DETAILS_FAILURE,
        payload: err,
      });
    });
};

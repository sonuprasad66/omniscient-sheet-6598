import * as types from "./actionTypes";

const initialState = {
  carts: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CART_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_CART_SUCCESS:
      return { ...state, isLoading: false, isError: false, carts: payload };

    case types.GET_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

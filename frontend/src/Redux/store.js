// NOTE: use this store variable to create a store.

import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./Product/reducer";
import { reducer as CartReducer } from "./Cart/reducer";
import { reducer as DetailsReducer } from "./ProductDetails/reducer";

const rootReducer = combineReducers({
  ProductReducer,
  CartReducer,
  DetailsReducer,
});

// const rootReducer = combineReducers({ ProductReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

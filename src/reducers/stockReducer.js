import { ADD_STOCK, GET_STOCK_DETAILS } from "../actions/types";

const initialState = {
  stock: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_STOCK:
      return {
        ...state,
        stock: action.payload,
      };

    case GET_STOCK_DETAILS:
      return {
        ...state,
        stock: action.payload,
      };

    default:
      return state;
  }
}

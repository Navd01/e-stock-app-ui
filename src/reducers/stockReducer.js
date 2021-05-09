import { ADD_STOCK } from "../actions/types";

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

    default:
      return state;
  }
}

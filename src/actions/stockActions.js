import axios from "axios";
import { ADD_STOCK, GET_ERRORS } from "../actions/types";

export const addStock = (stock, companyCode) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8100/api/v1.0/market/stock/add/${companyCode}`,
      stock
    );
    alert("The Stock is added");
    dispatch({
      type: ADD_STOCK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

import axios from "axios";
import { ADD_STOCK, GET_ERRORS, GET_STOCK_DETAILS } from "../actions/types";

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

export const getStockDetails = (companyCode, fromDate, toDate) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `http://localhost:8100/api/v1.0/market/stock/get/${companyCode}/${fromDate}/${toDate}`
    );

    dispatch({
      type: GET_STOCK_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

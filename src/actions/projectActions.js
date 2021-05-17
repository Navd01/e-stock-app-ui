import axios from "axios";
import {
  GET_COMPANIES,
  GET_ERRORS,
  GET_COMPANY,
  DELETE_COMPANY,
  GET_STOCK_DETAILS,
} from "./types";

export const addCompany = (company, history) => async (dispatch) => {
  try {
    await axios.post(
      "http://localhost:8100/api/v1.0/market/company/register",
      company
    );
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
    dispatch({
      type: GET_STOCK_DETAILS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getAllCompanies = () => async (dispatch) => {
  const res = await axios.get(
    "http://localhost:8100/api/v1.0/market/company/getall"
  );
  dispatch({
    type: GET_COMPANIES,
    payload: res.data,
  });
  dispatch({
    type: GET_COMPANY,
    payload: {},
  });
};

export const getCompanyDetails = (companyCode, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8100/api/v1.0/market/company/info/${companyCode}`
    );
    history.push("/companyDetails");
    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteCompany = (companyCode) => async (dispatch) => {
  await axios.delete(
    `http://localhost:8100/api/v1.0/market/company/delete/${companyCode}`
  );
  dispatch({
    type: DELETE_COMPANY,
    payload: companyCode,
  });
};

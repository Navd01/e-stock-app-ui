import axios from "axios";
import { GET_COMPANIES, GET_ERRORS, GET_COMPANY } from "./types";

export const addCompany = (company, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8100/api/v1.0/market/company/register",
      company
    );
    history.push("/dashboard");
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
    history.push("/projectDetails");
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

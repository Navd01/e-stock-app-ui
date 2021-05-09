import { DELETE_COMPANY, GET_COMPANIES, GET_COMPANY } from "../actions/types";

const initialState = {
  companies: [],
  company: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case GET_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.companyCode !== action.payload
        ),
      };
    default:
      return state;
  }
}

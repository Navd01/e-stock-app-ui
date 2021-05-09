import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import errorReducer from "./errorReducer";
import stockReducer from "./stockReducer";

export default combineReducers({
  errors: errorReducer,
  company: companyReducer,
  stock: stockReducer,
});

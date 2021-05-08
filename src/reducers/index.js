import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  errors: errorReducer,
  company: companyReducer,
});

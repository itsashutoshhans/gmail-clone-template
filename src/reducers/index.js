import { combineReducers } from "redux";
import mailReducer from "./mail";

export default combineReducers({
  mail: mailReducer
});
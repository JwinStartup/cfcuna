import { combineReducers } from "redux";
import { userReducer } from "./user.js";
import { preinscritReducer } from "./preinscrit";

export default combineReducers({
  userReducer,
    preinscritReducer
});



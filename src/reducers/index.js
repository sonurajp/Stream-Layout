import { combineReducers } from "redux";
import authreducer from "./authReducers";
import { reducer as formReducer } from "redux-form";
import streamreducer from "./streamReducer";

export default combineReducers({
  auth: authreducer,
  form: formReducer,
  streams: streamreducer,
});

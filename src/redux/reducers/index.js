import { combineReducers } from "redux";
import comics from "./comics";

const appReducers = combineReducers({
  comics,
});

export default appReducers;

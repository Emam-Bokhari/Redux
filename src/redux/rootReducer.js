import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import counterTwoReducer from "./counterTwo/counterTwoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  counterTwo: counterTwoReducer,
});

export default rootReducer;

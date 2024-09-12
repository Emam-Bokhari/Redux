import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
// import logger from "./middleware/logger";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;

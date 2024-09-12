import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
// import logger from "./middleware/logger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

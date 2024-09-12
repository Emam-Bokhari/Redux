import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const logger=(store)=>(next)=>(action)=>{
    console.log(`Action:${JSON.stringify(action)}`);
    console.log(`Before:${JSON.stringify(store.getState())}`);
    
    return next(action)
}

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;

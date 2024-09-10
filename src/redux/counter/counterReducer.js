import { DECREMENT, INCREMENT } from "./actionType";

// initial state
const initalState = {
  value: 0,
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;

import { TINCREMENT, TDECREMENT } from "./actionType";

// initial state
const initalState = {
  value: 101,
};

const counterTwoReducer = (state = initalState, action) => {
  switch (action.type) {
    case TINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case TDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default counterTwoReducer;

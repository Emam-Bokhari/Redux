import { TINCREMENT, TDECREMENT } from "./actionType";

export const increment = (value) => {
  return {
    type: TINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: TDECREMENT,
    payload: value,
  };
};
